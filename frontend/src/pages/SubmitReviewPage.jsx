import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, CheckCircle2, AlertCircle, Camera } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const SubmitReviewPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    program: '',
    role: '',
    before: '',
    after: '',
    quote: '',
    image: null
  });
  
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }

      setFormData(prev => ({
        ...prev,
        image: file
      }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Convert image to base64 for submission
      let imageBase64 = imagePreview;
      
      // If no image uploaded, use a placeholder
      if (!imageBase64) {
        imageBase64 = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400';
      }

      const testimonialData = {
        name: formData.name,
        age: formData.age ? parseInt(formData.age) : null,
        program: formData.program,
        role: formData.role,
        before: formData.before,
        after: formData.after,
        quote: formData.quote,
        image: imageBase64,
        approved: false // Will be set to false by backend
      };

      const API_URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${API_URL}/api/public/submit-testimonial`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(testimonialData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          age: '',
          program: '',
          role: '',
          before: '',
          after: '',
          quote: '',
          image: null
        });
        setImagePreview(null);
        
        // Redirect after 3 seconds
        setTimeout(() => {
          navigate('/testimonials');
        }, 3000);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-[#0A1F44] to-[#0D2A5C]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Share Your Manthan Experience
            </h1>
            <p className="text-xl text-gray-300">
              Help inspire others by sharing your transformation story
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-2xl border-0">
              <CardContent className="p-8 md:p-12">
                {submitStatus === 'success' && (
                  <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-lg flex items-start space-x-4">
                    <CheckCircle2 className="text-green-600 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold text-green-900 mb-2">Thank You!</h3>
                      <p className="text-green-800">
                        Your review has been submitted successfully. Our team will review it before publishing.
                        Redirecting to testimonials page...
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-lg flex items-start space-x-4">
                    <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold text-red-900 mb-2">Submission Failed</h3>
                      <p className="text-red-800">
                        There was an error submitting your review. Please try again or contact us directly.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Photo Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0A1F44] mb-3">
                      Your Photo *
                    </label>
                    <div className="flex items-center space-x-6">
                      <div className="flex-shrink-0">
                        {imagePreview ? (
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-32 h-32 rounded-full object-cover border-4 border-[#6B8E23]"
                          />
                        ) : (
                          <div className="w-32 h-32 rounded-full bg-gray-200 border-4 border-dashed border-gray-400 flex items-center justify-center">
                            <Camera size={40} className="text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <label className="cursor-pointer">
                          <div className="flex items-center justify-center px-6 py-3 border-2 border-[#6B8E23] text-[#6B8E23] rounded-lg hover:bg-[#6B8E23] hover:text-white transition-all duration-300">
                            <Upload size={20} className="mr-2" />
                            Upload Photo
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                          />
                        </label>
                        <p className="text-sm text-gray-500 mt-2">
                          JPG, PNG or WEBP (Max 5MB)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#6B8E23] focus:outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Age & Program (Row) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
                        Age (Optional)
                      </label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#6B8E23] focus:outline-none transition-all"
                        placeholder="Your age"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
                        Program Attended *
                      </label>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#6B8E23] focus:outline-none transition-all"
                      >
                        <option value="">Select Program</option>
                        <option value="Manthan Junior">Manthan Junior</option>
                        <option value="Manthan Pro">Manthan Pro</option>
                        <option value="Manthan Elite">Manthan Elite</option>
                      </select>
                    </div>
                  </div>

                  {/* Role */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
                      Your Role *
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#6B8E23] focus:outline-none transition-all"
                    >
                      <option value="">Select Role</option>
                      <option value="Student">Student</option>
                      <option value="Parent">Parent</option>
                      <option value="Professional">Professional</option>
                      <option value="Corporate Leader">Corporate Leader</option>
                      <option value="School Administrator">School Administrator</option>
                    </select>
                  </div>

                  {/* Before (Optional) */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
                      Before Manthan (Optional)
                    </label>
                    <textarea
                      name="before"
                      value={formData.before}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#6B8E23] focus:outline-none transition-all resize-none"
                      placeholder="How were you before attending Manthan? (e.g., 'I was shy and lacked confidence')"
                    />
                  </div>

                  {/* After (Optional) */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
                      After Manthan (Optional)
                    </label>
                    <textarea
                      name="after"
                      value={formData.after}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#6B8E23] focus:outline-none transition-all resize-none"
                      placeholder="How has Manthan changed you? (e.g., 'Now I lead my class and participate actively')"
                    />
                  </div>

                  {/* Quote/Review */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
                      Your Review *
                    </label>
                    <textarea
                      name="quote"
                      value={formData.quote}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#6B8E23] focus:outline-none transition-all resize-none"
                      placeholder="Share your experience and how Manthan impacted your life..."
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      This will be displayed as your main testimonial
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#6B8E23] hover:bg-[#556B2F] text-white font-bold py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Your Review'}
                    </Button>
                  </div>

                  {/* Privacy Note */}
                  <div className="text-center text-sm text-gray-500 pt-4">
                    <p>
                      By submitting this form, you agree to have your testimonial published on our website 
                      after admin approval. We respect your privacy and will only display the information you provide.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmitReviewPage;
