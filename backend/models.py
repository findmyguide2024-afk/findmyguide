from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

# Program Models
class Program(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    tagline: str
    age: str
    format: List[str]
    audience: str
    groupSize: Optional[str] = None
    description: str
    activities: List[str]
    outcomes: List[str]
    whatsappMessage: str
    featured: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ProgramCreate(BaseModel):
    name: str
    tagline: str
    age: str
    format: List[str]
    audience: str
    groupSize: Optional[str] = None
    description: str
    activities: List[str]
    outcomes: List[str]
    whatsappMessage: str
    featured: bool = False

class ProgramUpdate(BaseModel):
    name: Optional[str] = None
    tagline: Optional[str] = None
    age: Optional[str] = None
    format: Optional[List[str]] = None
    audience: Optional[str] = None
    groupSize: Optional[str] = None
    description: Optional[str] = None
    activities: Optional[List[str]] = None
    outcomes: Optional[List[str]] = None
    whatsappMessage: Optional[str] = None
    featured: Optional[bool] = None

# Testimonial Models
class Testimonial(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    age: Optional[int] = None
    program: str
    role: str
    image: str
    before: Optional[str] = None
    after: Optional[str] = None
    quote: str
    approved: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class TestimonialCreate(BaseModel):
    name: str
    age: Optional[int] = None
    program: str
    role: str
    image: str
    before: Optional[str] = None
    after: Optional[str] = None
    quote: str
    approved: bool = False

class TestimonialUpdate(BaseModel):
    name: Optional[str] = None
    age: Optional[int] = None
    program: Optional[str] = None
    role: Optional[str] = None
    image: Optional[str] = None
    before: Optional[str] = None
    after: Optional[str] = None
    quote: Optional[str] = None
    approved: Optional[bool] = None

# Contact Form Model
class ContactForm(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str
    ageProfession: str
    programInterest: str
    message: Optional[str] = None
    status: str = "new"  # new, contacted, converted
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ContactFormCreate(BaseModel):
    name: str
    email: str
    phone: str
    ageProfession: str
    programInterest: str
    message: Optional[str] = None
