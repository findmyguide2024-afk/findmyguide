from fastapi import APIRouter, HTTPException, Depends, Header
from typing import List
from models import (
    Program, ProgramCreate, ProgramUpdate,
    Testimonial, TestimonialCreate, TestimonialUpdate,
    ContactForm, ContactFormCreate
)
from motor.motor_asyncio import AsyncIOMotorClient
import os
from datetime import datetime

router = APIRouter(prefix="/api/admin", tags=["admin"])

# Simple API key authentication
ADMIN_API_KEY = os.environ.get("ADMIN_API_KEY", "manthan_admin_2025")

def verify_admin(x_api_key: str = Header(...)):
    if x_api_key != ADMIN_API_KEY:
        raise HTTPException(status_code=401, detail="Invalid API key")
    return True

# Get database
def get_db():
    mongo_url = os.environ['MONGO_URL']
    client = AsyncIOMotorClient(mongo_url)
    return client[os.environ['DB_NAME']]

# ============ PROGRAMS MANAGEMENT ============

@router.get("/programs", response_model=List[Program])
async def get_all_programs(authorized: bool = Depends(verify_admin)):
    """Get all programs for admin"""
    db = get_db()
    programs = await db.programs.find({}, {"_id": 0}).to_list(100)
    return [Program(**program) for program in programs]

@router.post("/programs", response_model=Program)
async def create_program(program: ProgramCreate, authorized: bool = Depends(verify_admin)):
    """Create a new program"""
    db = get_db()
    program_dict = program.dict()
    program_obj = Program(**program_dict)
    await db.programs.insert_one(program_obj.dict())
    return program_obj

@router.put("/programs/{program_id}", response_model=Program)
async def update_program(program_id: str, program: ProgramUpdate, authorized: bool = Depends(verify_admin)):
    """Update an existing program"""
    db = get_db()
    
    # Get existing program
    existing = await db.programs.find_one({"id": program_id})
    if not existing:
        raise HTTPException(status_code=404, detail="Program not found")
    
    # Update only provided fields
    update_data = {k: v for k, v in program.dict().items() if v is not None}
    update_data["updated_at"] = datetime.utcnow()
    
    await db.programs.update_one({"id": program_id}, {"$set": update_data})
    
    # Get updated program
    updated = await db.programs.find_one({"id": program_id})
    return Program(**updated)

@router.delete("/programs/{program_id}")
async def delete_program(program_id: str, authorized: bool = Depends(verify_admin)):
    """Delete a program"""
    db = get_db()
    result = await db.programs.delete_one({"id": program_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Program not found")
    return {"message": "Program deleted successfully"}

# ============ TESTIMONIALS MANAGEMENT ============

@router.get("/testimonials", response_model=List[Testimonial])
async def get_all_testimonials(authorized: bool = Depends(verify_admin)):
    """Get all testimonials (including unapproved)"""
    db = get_db()
    testimonials = await db.testimonials.find({}, {"_id": 0}).to_list(100)
    return [Testimonial(**testimonial) for testimonial in testimonials]

@router.post("/testimonials", response_model=Testimonial)
async def create_testimonial(testimonial: TestimonialCreate, authorized: bool = Depends(verify_admin)):
    """Create a new testimonial"""
    db = get_db()
    testimonial_dict = testimonial.dict()
    testimonial_obj = Testimonial(**testimonial_dict)
    await db.testimonials.insert_one(testimonial_obj.dict())
    return testimonial_obj

@router.put("/testimonials/{testimonial_id}", response_model=Testimonial)
async def update_testimonial(testimonial_id: str, testimonial: TestimonialUpdate, authorized: bool = Depends(verify_admin)):
    """Update an existing testimonial"""
    db = get_db()
    
    # Get existing testimonial
    existing = await db.testimonials.find_one({"id": testimonial_id})
    if not existing:
        raise HTTPException(status_code=404, detail="Testimonial not found")
    
    # Update only provided fields
    update_data = {k: v for k, v in testimonial.dict().items() if v is not None}
    update_data["updated_at"] = datetime.utcnow()
    
    await db.testimonials.update_one({"id": testimonial_id}, {"$set": update_data})
    
    # Get updated testimonial
    updated = await db.testimonials.find_one({"id": testimonial_id})
    return Testimonial(**updated)

@router.delete("/testimonials/{testimonial_id}")
async def delete_testimonial(testimonial_id: str, authorized: bool = Depends(verify_admin)):
    """Delete a testimonial"""
    db = get_db()
    result = await db.testimonials.delete_one({"id": testimonial_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Testimonial not found")
    return {"message": "Testimonial deleted successfully"}

@router.patch("/testimonials/{testimonial_id}/approve")
async def approve_testimonial(testimonial_id: str, authorized: bool = Depends(verify_admin)):
    """Approve a testimonial"""
    db = get_db()
    result = await db.testimonials.update_one(
        {"id": testimonial_id},
        {"$set": {"approved": True, "updated_at": datetime.utcnow()}}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Testimonial not found")
    return {"message": "Testimonial approved successfully"}

# ============ CONTACT FORMS ============

@router.get("/contacts", response_model=List[ContactForm])
async def get_all_contacts(authorized: bool = Depends(verify_admin)):
    """Get all contact form submissions"""
    db = get_db()
    contacts = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(200)
    return [ContactForm(**contact) for contact in contacts]

@router.patch("/contacts/{contact_id}/status")
async def update_contact_status(contact_id: str, status: str, authorized: bool = Depends(verify_admin)):
    """Update contact status (new, contacted, converted)"""
    db = get_db()
    if status not in ["new", "contacted", "converted"]:
        raise HTTPException(status_code=400, detail="Invalid status")
    
    result = await db.contacts.update_one(
        {"id": contact_id},
        {"$set": {"status": status}}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Contact not found")
    return {"message": "Status updated successfully"}
