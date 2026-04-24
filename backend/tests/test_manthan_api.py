"""
Manthan Leadership Development Program - Backend API Tests
Tests all admin and public routes with CRUD operations and authentication
"""
import pytest
import requests
import os
import uuid

# Get BASE_URL from environment
BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')
ADMIN_API_KEY = "manthan_admin_secure_2025"

# Test data prefixes for cleanup
TEST_PREFIX = "TEST_"


class TestHealthCheck:
    """Basic health check tests"""
    
    def test_api_root(self):
        """Test API root endpoint"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        assert "Manthan" in data["message"]
        print(f"✓ API root working: {data['message']}")


class TestAdminAuthentication:
    """Test admin API key authentication"""
    
    def test_admin_programs_without_api_key(self):
        """Admin routes should reject requests without API key"""
        response = requests.get(f"{BASE_URL}/api/admin/programs")
        assert response.status_code == 422  # Missing header
        print("✓ Admin route rejects requests without API key")
    
    def test_admin_programs_with_invalid_api_key(self):
        """Admin routes should reject invalid API keys"""
        headers = {"X-API-Key": "invalid_key"}
        response = requests.get(f"{BASE_URL}/api/admin/programs", headers=headers)
        assert response.status_code == 401
        print("✓ Admin route rejects invalid API key")
    
    def test_admin_programs_with_valid_api_key(self):
        """Admin routes should accept valid API key"""
        headers = {"X-API-Key": ADMIN_API_KEY}
        response = requests.get(f"{BASE_URL}/api/admin/programs", headers=headers)
        assert response.status_code == 200
        print("✓ Admin route accepts valid API key")


class TestProgramsCRUD:
    """Test Programs CRUD operations"""
    
    @pytest.fixture
    def admin_headers(self):
        return {"X-API-Key": ADMIN_API_KEY, "Content-Type": "application/json"}
    
    @pytest.fixture
    def test_program_data(self):
        return {
            "name": f"{TEST_PREFIX}Leadership Bootcamp",
            "tagline": "Transform your leadership skills",
            "age": "18-25",
            "format": ["In-person", "Online"],
            "audience": "Young professionals",
            "groupSize": "10-20",
            "description": "A comprehensive leadership development program",
            "activities": ["Team building", "Case studies", "Role playing"],
            "outcomes": ["Improved communication", "Better decision making"],
            "whatsappMessage": "Hi, I'm interested in the Leadership Bootcamp",
            "featured": True
        }
    
    def test_create_program(self, admin_headers, test_program_data):
        """Create a new program"""
        response = requests.post(
            f"{BASE_URL}/api/admin/programs",
            headers=admin_headers,
            json=test_program_data
        )
        assert response.status_code == 200
        data = response.json()
        
        # Validate response structure
        assert "id" in data
        assert data["name"] == test_program_data["name"]
        assert data["tagline"] == test_program_data["tagline"]
        assert data["format"] == test_program_data["format"]
        assert data["featured"] == True
        
        print(f"✓ Created program with ID: {data['id']}")
        return data["id"]
    
    def test_get_all_programs_admin(self, admin_headers):
        """Get all programs via admin route"""
        response = requests.get(
            f"{BASE_URL}/api/admin/programs",
            headers=admin_headers
        )
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        print(f"✓ Retrieved {len(data)} programs via admin route")
    
    def test_create_and_verify_program_persistence(self, admin_headers, test_program_data):
        """Create program and verify it persists in database"""
        # Create
        test_program_data["name"] = f"{TEST_PREFIX}Persistence Test Program"
        create_response = requests.post(
            f"{BASE_URL}/api/admin/programs",
            headers=admin_headers,
            json=test_program_data
        )
        assert create_response.status_code == 200
        created = create_response.json()
        program_id = created["id"]
        
        # Verify via GET all
        get_response = requests.get(
            f"{BASE_URL}/api/admin/programs",
            headers=admin_headers
        )
        assert get_response.status_code == 200
        programs = get_response.json()
        
        # Find our created program
        found = next((p for p in programs if p["id"] == program_id), None)
        assert found is not None, "Created program not found in list"
        assert found["name"] == test_program_data["name"]
        
        print(f"✓ Program persistence verified for ID: {program_id}")
        return program_id
    
    def test_update_program(self, admin_headers, test_program_data):
        """Update an existing program"""
        # First create a program
        test_program_data["name"] = f"{TEST_PREFIX}Update Test Program"
        create_response = requests.post(
            f"{BASE_URL}/api/admin/programs",
            headers=admin_headers,
            json=test_program_data
        )
        assert create_response.status_code == 200
        program_id = create_response.json()["id"]
        
        # Update the program
        update_data = {
            "name": f"{TEST_PREFIX}Updated Program Name",
            "tagline": "Updated tagline"
        }
        update_response = requests.put(
            f"{BASE_URL}/api/admin/programs/{program_id}",
            headers=admin_headers,
            json=update_data
        )
        assert update_response.status_code == 200
        updated = update_response.json()
        
        assert updated["name"] == update_data["name"]
        assert updated["tagline"] == update_data["tagline"]
        
        # Verify persistence
        get_response = requests.get(
            f"{BASE_URL}/api/admin/programs",
            headers=admin_headers
        )
        programs = get_response.json()
        found = next((p for p in programs if p["id"] == program_id), None)
        assert found["name"] == update_data["name"]
        
        print(f"✓ Program updated and verified: {program_id}")
    
    def test_update_nonexistent_program(self, admin_headers):
        """Update should return 404 for non-existent program"""
        fake_id = str(uuid.uuid4())
        response = requests.put(
            f"{BASE_URL}/api/admin/programs/{fake_id}",
            headers=admin_headers,
            json={"name": "Test"}
        )
        assert response.status_code == 404
        print("✓ Update returns 404 for non-existent program")
    
    def test_delete_program(self, admin_headers, test_program_data):
        """Delete a program"""
        # Create a program to delete
        test_program_data["name"] = f"{TEST_PREFIX}Delete Test Program"
        create_response = requests.post(
            f"{BASE_URL}/api/admin/programs",
            headers=admin_headers,
            json=test_program_data
        )
        program_id = create_response.json()["id"]
        
        # Delete the program
        delete_response = requests.delete(
            f"{BASE_URL}/api/admin/programs/{program_id}",
            headers=admin_headers
        )
        assert delete_response.status_code == 200
        
        # Verify deletion
        get_response = requests.get(
            f"{BASE_URL}/api/admin/programs",
            headers=admin_headers
        )
        programs = get_response.json()
        found = next((p for p in programs if p["id"] == program_id), None)
        assert found is None, "Deleted program still exists"
        
        print(f"✓ Program deleted and verified: {program_id}")
    
    def test_delete_nonexistent_program(self, admin_headers):
        """Delete should return 404 for non-existent program"""
        fake_id = str(uuid.uuid4())
        response = requests.delete(
            f"{BASE_URL}/api/admin/programs/{fake_id}",
            headers=admin_headers
        )
        assert response.status_code == 404
        print("✓ Delete returns 404 for non-existent program")


class TestTestimonialsCRUD:
    """Test Testimonials CRUD operations"""
    
    @pytest.fixture
    def admin_headers(self):
        return {"X-API-Key": ADMIN_API_KEY, "Content-Type": "application/json"}
    
    @pytest.fixture
    def test_testimonial_data(self):
        return {
            "name": f"{TEST_PREFIX}John Doe",
            "age": 25,
            "program": "Leadership Bootcamp",
            "role": "Software Engineer",
            "image": "https://example.com/image.jpg",
            "before": "Struggled with team communication",
            "after": "Now leads a team of 10",
            "quote": "This program changed my life!",
            "approved": False
        }
    
    def test_create_testimonial(self, admin_headers, test_testimonial_data):
        """Create a new testimonial"""
        response = requests.post(
            f"{BASE_URL}/api/admin/testimonials",
            headers=admin_headers,
            json=test_testimonial_data
        )
        assert response.status_code == 200
        data = response.json()
        
        assert "id" in data
        assert data["name"] == test_testimonial_data["name"]
        assert data["quote"] == test_testimonial_data["quote"]
        assert data["approved"] == False
        
        print(f"✓ Created testimonial with ID: {data['id']}")
        return data["id"]
    
    def test_get_all_testimonials_admin(self, admin_headers):
        """Get all testimonials via admin route (including unapproved)"""
        response = requests.get(
            f"{BASE_URL}/api/admin/testimonials",
            headers=admin_headers
        )
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        print(f"✓ Retrieved {len(data)} testimonials via admin route")
    
    def test_create_and_verify_testimonial_persistence(self, admin_headers, test_testimonial_data):
        """Create testimonial and verify persistence"""
        test_testimonial_data["name"] = f"{TEST_PREFIX}Persistence Test User"
        create_response = requests.post(
            f"{BASE_URL}/api/admin/testimonials",
            headers=admin_headers,
            json=test_testimonial_data
        )
        assert create_response.status_code == 200
        testimonial_id = create_response.json()["id"]
        
        # Verify via GET
        get_response = requests.get(
            f"{BASE_URL}/api/admin/testimonials",
            headers=admin_headers
        )
        testimonials = get_response.json()
        found = next((t for t in testimonials if t["id"] == testimonial_id), None)
        assert found is not None
        assert found["name"] == test_testimonial_data["name"]
        
        print(f"✓ Testimonial persistence verified: {testimonial_id}")
    
    def test_update_testimonial(self, admin_headers, test_testimonial_data):
        """Update an existing testimonial"""
        test_testimonial_data["name"] = f"{TEST_PREFIX}Update Test User"
        create_response = requests.post(
            f"{BASE_URL}/api/admin/testimonials",
            headers=admin_headers,
            json=test_testimonial_data
        )
        testimonial_id = create_response.json()["id"]
        
        # Update
        update_data = {
            "quote": "Updated quote - even better experience!",
            "age": 30
        }
        update_response = requests.put(
            f"{BASE_URL}/api/admin/testimonials/{testimonial_id}",
            headers=admin_headers,
            json=update_data
        )
        assert update_response.status_code == 200
        updated = update_response.json()
        assert updated["quote"] == update_data["quote"]
        assert updated["age"] == 30
        
        print(f"✓ Testimonial updated: {testimonial_id}")
    
    def test_approve_testimonial(self, admin_headers, test_testimonial_data):
        """Approve a testimonial"""
        test_testimonial_data["name"] = f"{TEST_PREFIX}Approve Test User"
        test_testimonial_data["approved"] = False
        
        create_response = requests.post(
            f"{BASE_URL}/api/admin/testimonials",
            headers=admin_headers,
            json=test_testimonial_data
        )
        testimonial_id = create_response.json()["id"]
        
        # Approve
        approve_response = requests.patch(
            f"{BASE_URL}/api/admin/testimonials/{testimonial_id}/approve",
            headers=admin_headers
        )
        assert approve_response.status_code == 200
        
        # Verify approval
        get_response = requests.get(
            f"{BASE_URL}/api/admin/testimonials",
            headers=admin_headers
        )
        testimonials = get_response.json()
        found = next((t for t in testimonials if t["id"] == testimonial_id), None)
        assert found["approved"] == True
        
        print(f"✓ Testimonial approved: {testimonial_id}")
    
    def test_delete_testimonial(self, admin_headers, test_testimonial_data):
        """Delete a testimonial"""
        test_testimonial_data["name"] = f"{TEST_PREFIX}Delete Test User"
        create_response = requests.post(
            f"{BASE_URL}/api/admin/testimonials",
            headers=admin_headers,
            json=test_testimonial_data
        )
        testimonial_id = create_response.json()["id"]
        
        # Delete
        delete_response = requests.delete(
            f"{BASE_URL}/api/admin/testimonials/{testimonial_id}",
            headers=admin_headers
        )
        assert delete_response.status_code == 200
        
        # Verify deletion
        get_response = requests.get(
            f"{BASE_URL}/api/admin/testimonials",
            headers=admin_headers
        )
        testimonials = get_response.json()
        found = next((t for t in testimonials if t["id"] == testimonial_id), None)
        assert found is None
        
        print(f"✓ Testimonial deleted: {testimonial_id}")


class TestContactFormsCRUD:
    """Test Contact Forms operations"""
    
    @pytest.fixture
    def admin_headers(self):
        return {"X-API-Key": ADMIN_API_KEY, "Content-Type": "application/json"}
    
    @pytest.fixture
    def test_contact_data(self):
        return {
            "name": f"{TEST_PREFIX}Jane Smith",
            "email": "test@example.com",
            "phone": "+1234567890",
            "ageProfession": "25, Software Developer",
            "programInterest": "Leadership Bootcamp",
            "message": "I would like to know more about the program"
        }
    
    def test_submit_contact_form_public(self, test_contact_data):
        """Submit contact form via public route"""
        response = requests.post(
            f"{BASE_URL}/api/public/contact",
            json=test_contact_data
        )
        assert response.status_code == 200
        data = response.json()
        
        assert "id" in data
        assert data["name"] == test_contact_data["name"]
        assert data["email"] == test_contact_data["email"]
        assert data["status"] == "new"
        
        print(f"✓ Contact form submitted: {data['id']}")
        return data["id"]
    
    def test_get_all_contacts_admin(self, admin_headers):
        """Get all contact submissions via admin route"""
        response = requests.get(
            f"{BASE_URL}/api/admin/contacts",
            headers=admin_headers
        )
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        print(f"✓ Retrieved {len(data)} contacts via admin route")
    
    def test_submit_and_verify_contact_persistence(self, admin_headers, test_contact_data):
        """Submit contact and verify persistence"""
        test_contact_data["name"] = f"{TEST_PREFIX}Persistence Contact"
        
        submit_response = requests.post(
            f"{BASE_URL}/api/public/contact",
            json=test_contact_data
        )
        assert submit_response.status_code == 200
        contact_id = submit_response.json()["id"]
        
        # Verify via admin GET
        get_response = requests.get(
            f"{BASE_URL}/api/admin/contacts",
            headers=admin_headers
        )
        contacts = get_response.json()
        found = next((c for c in contacts if c["id"] == contact_id), None)
        assert found is not None
        assert found["name"] == test_contact_data["name"]
        
        print(f"✓ Contact persistence verified: {contact_id}")
    
    def test_update_contact_status(self, admin_headers, test_contact_data):
        """Update contact status"""
        test_contact_data["name"] = f"{TEST_PREFIX}Status Update Contact"
        
        submit_response = requests.post(
            f"{BASE_URL}/api/public/contact",
            json=test_contact_data
        )
        contact_id = submit_response.json()["id"]
        
        # Update status to "contacted"
        update_response = requests.patch(
            f"{BASE_URL}/api/admin/contacts/{contact_id}/status",
            headers=admin_headers,
            params={"status": "contacted"}
        )
        assert update_response.status_code == 200
        
        # Verify status update
        get_response = requests.get(
            f"{BASE_URL}/api/admin/contacts",
            headers=admin_headers
        )
        contacts = get_response.json()
        found = next((c for c in contacts if c["id"] == contact_id), None)
        assert found["status"] == "contacted"
        
        print(f"✓ Contact status updated: {contact_id}")
    
    def test_update_contact_invalid_status(self, admin_headers, test_contact_data):
        """Update contact with invalid status should fail"""
        test_contact_data["name"] = f"{TEST_PREFIX}Invalid Status Contact"
        
        submit_response = requests.post(
            f"{BASE_URL}/api/public/contact",
            json=test_contact_data
        )
        contact_id = submit_response.json()["id"]
        
        # Try invalid status
        update_response = requests.patch(
            f"{BASE_URL}/api/admin/contacts/{contact_id}/status",
            headers=admin_headers,
            params={"status": "invalid_status"}
        )
        assert update_response.status_code == 400
        print("✓ Invalid status rejected correctly")


class TestPublicRoutes:
    """Test public routes (no auth required)"""
    
    @pytest.fixture
    def admin_headers(self):
        return {"X-API-Key": ADMIN_API_KEY, "Content-Type": "application/json"}
    
    def test_get_public_programs(self):
        """Get programs via public route"""
        response = requests.get(f"{BASE_URL}/api/public/programs")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        print(f"✓ Public programs endpoint working: {len(data)} programs")
    
    def test_get_public_testimonials_only_approved(self, admin_headers):
        """Public testimonials should only return approved ones"""
        # Create an unapproved testimonial
        unapproved_data = {
            "name": f"{TEST_PREFIX}Unapproved User",
            "age": 25,
            "program": "Test Program",
            "role": "Tester",
            "image": "https://example.com/img.jpg",
            "quote": "This should not appear in public",
            "approved": False
        }
        create_response = requests.post(
            f"{BASE_URL}/api/admin/testimonials",
            headers=admin_headers,
            json=unapproved_data
        )
        unapproved_id = create_response.json()["id"]
        
        # Create an approved testimonial
        approved_data = {
            "name": f"{TEST_PREFIX}Approved User",
            "age": 30,
            "program": "Test Program",
            "role": "Tester",
            "image": "https://example.com/img.jpg",
            "quote": "This should appear in public",
            "approved": True
        }
        create_response = requests.post(
            f"{BASE_URL}/api/admin/testimonials",
            headers=admin_headers,
            json=approved_data
        )
        approved_id = create_response.json()["id"]
        
        # Get public testimonials
        public_response = requests.get(f"{BASE_URL}/api/public/testimonials")
        assert public_response.status_code == 200
        public_testimonials = public_response.json()
        
        # Verify unapproved is not in public list
        unapproved_found = next((t for t in public_testimonials if t["id"] == unapproved_id), None)
        assert unapproved_found is None, "Unapproved testimonial should not appear in public"
        
        # Verify approved is in public list
        approved_found = next((t for t in public_testimonials if t["id"] == approved_id), None)
        assert approved_found is not None, "Approved testimonial should appear in public"
        
        print("✓ Public testimonials correctly filters by approval status")


class TestCleanup:
    """Cleanup test data after all tests"""
    
    @pytest.fixture
    def admin_headers(self):
        return {"X-API-Key": ADMIN_API_KEY, "Content-Type": "application/json"}
    
    def test_cleanup_test_programs(self, admin_headers):
        """Clean up TEST_ prefixed programs"""
        response = requests.get(
            f"{BASE_URL}/api/admin/programs",
            headers=admin_headers
        )
        programs = response.json()
        
        deleted_count = 0
        for program in programs:
            if program["name"].startswith(TEST_PREFIX):
                delete_response = requests.delete(
                    f"{BASE_URL}/api/admin/programs/{program['id']}",
                    headers=admin_headers
                )
                if delete_response.status_code == 200:
                    deleted_count += 1
        
        print(f"✓ Cleaned up {deleted_count} test programs")
    
    def test_cleanup_test_testimonials(self, admin_headers):
        """Clean up TEST_ prefixed testimonials"""
        response = requests.get(
            f"{BASE_URL}/api/admin/testimonials",
            headers=admin_headers
        )
        testimonials = response.json()
        
        deleted_count = 0
        for testimonial in testimonials:
            if testimonial["name"].startswith(TEST_PREFIX):
                delete_response = requests.delete(
                    f"{BASE_URL}/api/admin/testimonials/{testimonial['id']}",
                    headers=admin_headers
                )
                if delete_response.status_code == 200:
                    deleted_count += 1
        
        print(f"✓ Cleaned up {deleted_count} test testimonials")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
