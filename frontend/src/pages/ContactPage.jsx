import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ageProfession: '',
    programInterest: 'Manthan Junior',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const API_URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${API_URL}/api/public/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          ageProfession: '',
          programInterest: 'Manthan Junior',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0A1F44] to-[#0D2A5C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            width: "100%", height: "100%",
            display: 'none'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Get in <span className="text-[#6B8E23]">Touch</span>
            </h1>
            <p className="text-2xl text-gray-300">
              Ready to start your leadership transformation journey? Contact us today
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-[#0A1F44] mb-4">Apply for Manthan</h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                <Card className="border-0 shadow-2xl">
                  <CardContent className="p-8">
                    {submitStatus === 'success' && (
                      <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-800">
                        <strong>Thank you!</strong> Your message has been received. We'll contact you soon.
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-800">
                        <strong>Error:</strong> Failed to submit. Please try again or contact us directly.
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-[#0A1F44] font-semibold mb-2 block">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full border-2 border-gray-200 focus:border-[#6B8E23] rounded-lg p-3"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email" className="text-[#0A1F44] font-semibold mb-2 block">
                            Email *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-200 focus:border-[#6B8E23] rounded-lg p-3"
                            placeholder="your@email.com"
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone" className="text-[#0A1F44] font-semibold mb-2 block">
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-200 focus:border-[#6B8E23] rounded-lg p-3"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="ageProfession" className="text-[#0A1F44] font-semibold mb-2 block">
                          Age / Class / Profession *
                        </Label>
                        <Input
                          id="ageProfession"
                          name="ageProfession"
                          type="text"
                          required
                          value={formData.ageProfession}
                          onChange={handleChange}
                          className="w-full border-2 border-gray-200 focus:border-[#6B8E23] rounded-lg p-3"
                          placeholder="e.g., Class 10, Age 15"
                        />
                      </div>

                      <div>
                        <Label htmlFor="programInterest" className="text-[#0A1F44] font-semibold mb-2 block">
                          Program of Interest *
                        </Label>
                        <select
                          id="programInterest"
                          name="programInterest"
                          value={formData.programInterest}
                          onChange={handleChange}
                          className="w-full border-2 border-gray-200 focus:border-[#6B8E23] rounded-lg p-3 bg-white"
                          required
                        >
                          <option value="Manthan Junior">Manthan Junior (Class 5-12)</option>
                          <option value="School Partnership">School Partnership Inquiry</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-[#0A1F44] font-semibold mb-2 block">
                          Message (Optional)
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full border-2 border-gray-200 focus:border-[#6B8E23] rounded-lg p-3"
                          placeholder="Tell us more about your interest..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#6B8E23] hover:bg-[#556B2F] text-white font-bold py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'} <Send className="ml-2" size={20} />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#0A1F44] mb-4">Contact Information</h2>
                  <p className="text-gray-600 mb-8">
                    Have questions? Reach out to us through any of these channels
                  </p>

                  <div className="space-y-6">
                    {/* WhatsApp */}
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-[#6B8E23] to-[#556B2F] rounded-xl flex items-center justify-center flex-shrink-0">
                            <Phone size={28} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-[#0A1F44] mb-1">WhatsApp</h3>
                            <a 
                              href="https://wa.me/917009202340" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-[#6B8E23] hover:underline text-lg"
                            >
                              +91 70092 02340
                            </a>
                            <p className="text-sm text-gray-500 mt-1">Fastest response time</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Email */}
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Mail size={28} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-[#0A1F44] mb-1">Email</h3>
                            <a 
                              href="mailto:contactmanthanofficial@gmail.com"
                              className="text-blue-600 hover:underline break-all"
                            >
                              contactmanthanofficial@gmail.com
                            </a>
                            <p className="text-sm text-gray-500 mt-1">24-48 hour response</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Instagram */}
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Instagram size={28} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-[#0A1F44] mb-1">Instagram</h3>
                            <a 
                              href="https://instagram.com/elite.leadership.guide" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-purple-600 hover:underline"
                            >
                              @elite.leadership.guide
                            </a>
                            <p className="text-sm text-gray-500 mt-1">Follow for updates</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Location */}
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <MapPin size={28} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-[#0A1F44] mb-1">Location</h3>
                            <p className="text-gray-700">
                              Elite Leadership Guide Headquarters, Chandigarh, India
                            </p>
                            <p className="text-sm text-gray-500 mt-1">Serving schools across India</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Quick Response Card */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-[#0A1F44] to-[#0D2A5C] overflow-hidden">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="text-2xl font-bold text-white">Quick Response Guarantee</h3>
                    <p className="text-gray-300">
                      We understand your time is valuable. Our team responds to all inquiries within 
                      24 hours on working days.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                        <p className="text-3xl font-bold text-[#6B8E23] mb-1">&lt; 2h</p>
                        <p className="text-sm text-gray-300">WhatsApp Response</p>
                      </div>
                      <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                        <p className="text-3xl font-bold text-[#6B8E23] mb-1">&lt; 24h</p>
                        <p className="text-sm text-gray-300">Email Response</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0A1F44] mb-8">
              Before you Reach out to Manthan Junior
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { q: "What is the age group?", a: "Class 5-12 (Ages 10-18)" },
                { q: "Program duration?", a: "3 Days / 2 Nights residential" },
                { q: "Batch size?", a: "20-100 students per batch" }
              ].map((faq, idx) => (
                <Card key={idx} className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <p className="font-bold text-[#0A1F44] mb-2">{faq.q}</p>
                    <p className="text-[#6B8E23] font-semibold">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
