from fastapi import APIRouter, HTTPException
from typing import List
from models import Program, Testimonial, TestimonialCreate, ContactFormCreate, ContactForm
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter(prefix="/api/public", tags=["public"])

def get_db():
    mongo_url = os.environ['MONGO_URL']
    client = AsyncIOMotorClient(mongo_url)
    return client[os.environ['DB_NAME']]

# ============ PUBLIC ENDPOINTS ============

@router.get("/programs", response_model=List[Program])
async def get_programs():
    """Get all active programs"""
    db = get_db()
    programs = await db.programs.find({}, {"_id": 0}).to_list(100)
    return [Program(**program) for program in programs]

@router.get("/testimonials", response_model=List[Testimonial])
async def get_approved_testimonials():
    """Get only approved testimonials"""
    db = get_db()
    testimonials = await db.testimonials.find({"approved": True}, {"_id": 0}).to_list(100)
    return [Testimonial(**testimonial) for testimonial in testimonials]

@router.post("/contact", response_model=ContactForm)
async def submit_contact_form(contact: ContactFormCreate):
    """Submit contact form"""
    db = get_db()
    contact_obj = ContactForm(**contact.dict())
    await db.contacts.insert_one(contact_obj.dict())
    return contact_obj

@router.post("/submit-testimonial", response_model=Testimonial)
async def submit_testimonial(testimonial: TestimonialCreate):
    """Submit testimonial for review (public endpoint - no auth required)"""
    db = get_db()
    # Force approved=False for public submissions (admin must approve)
    testimonial_dict = testimonial.dict()
    testimonial_dict['approved'] = False
    testimonial_obj = Testimonial(**testimonial_dict)
    await db.testimonials.insert_one(testimonial_obj.dict())
    return testimonial_obj
