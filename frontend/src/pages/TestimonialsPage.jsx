import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { testimonials } from '../mockData';
import { Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const TestimonialCard = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 250;
  const shouldTruncate = testimonial.quote.length > maxLength;
  
  const displayText = shouldTruncate && !isExpanded 
    ? testimonial.quote.slice(0, maxLength) + '...' 
    : testimonial.quote;

  return (
    <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
      <CardContent className="p-8 space-y-6 flex flex-col flex-grow">
        {/* Profile */}
        <div className="flex items-center space-x-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-[#6B8E23]/20"
          />
          <div>
            <h3 className="font-bold text-[#0A1F44] text-lg">{testimonial.name}</h3>
            {testimonial.age && <p className="text-sm text-gray-500">Age {testimonial.age}</p>}
            <p className="text-xs text-[#6B8E23] font-semibold mt-1">{testimonial.role}</p>
          </div>
        </div>

        {/* Program Badge */}
        <div>
          <div className="inline-block bg-[#6B8E23]/10 text-[#6B8E23] px-4 py-2 rounded-full text-xs font-semibold">
            {testimonial.program}
          </div>
        </div>

        {/* Before/After (if applicable) */}
        {testimonial.before && testimonial.after && (
          <div className="space-y-3 pt-4 border-t border-gray-200">
            <div className="space-y-2">
              <p className="text-xs font-bold text-red-600 uppercase">Before</p>
              <p className="text-sm text-gray-600">{testimonial.before}</p>
            </div>
            <div className="flex justify-center">
              <ArrowRight size={20} className="text-[#6B8E23]" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold text-green-600 uppercase">After</p>
              <p className="text-sm text-gray-700 font-medium">{testimonial.after}</p>
            </div>
          </div>
        )}

        {/* Quote */}
        <div className="relative pt-4 border-t border-gray-200 flex-grow flex flex-col">
          <Quote size={32} className="text-[#6B8E23]/20 absolute -top-2 -left-2" />
          <p className="text-gray-700 italic leading-relaxed relative z-10 pl-6 flex-grow whitespace-pre-wrap">
            "{displayText}"
          </p>
          {shouldTruncate && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#6B8E23] font-bold text-sm hover:underline mt-4 self-start pl-6 z-10 relative"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsPage = () => {
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
              Real <span className="text-[#6B8E23]">Transformations</span>
            </h1>
            <p className="text-2xl text-gray-300">
              Hear from students, parents, and schools who experienced Manthan
            </p>
            <div className="pt-4">
              <Link to="/submit-review">
                <Button className="bg-[#6B8E23] hover:bg-[#556B2F] text-white font-bold px-8 py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  Share Your Story <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
                Consistent Transformation Patterns
              </h2>
              <p className="text-xl text-gray-600">
                The changes we see across all participants
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  from: "Hesitant & Low Confidence",
                  to: "Bold, Confident & Action-Oriented",
                  percentage: "95%"
                },
                {
                  from: "Avoids Responsibility",
                  to: "Takes Ownership & Leads by Example",
                  percentage: "92%"
                },
                {
                  from: "Struggles in Group Settings",
                  to: "Thrives in Teams & Motivates Peers",
                  percentage: "89%"
                },
                {
                  from: "Reactive & Impulsive Under Pressure",
                  to: "Calm, Decisive & Composed",
                  percentage: "87%"
                }
              ].map((stat, idx) => (
                <Card key={idx} className="border-0 shadow-lg">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold text-[#6B8E23]">{stat.percentage}</span>
                      <span className="text-xs font-semibold text-gray-500 uppercase">of participants</span>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
                        <p className="text-xs font-bold text-red-600 mb-1">BEFORE</p>
                        <p className="text-sm text-gray-700">{stat.from}</p>
                      </div>
                      <div className="flex justify-center">
                        <ArrowRight size={24} className="text-[#6B8E23]" />
                      </div>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                        <p className="text-xs font-bold text-green-600 mb-1">AFTER</p>
                        <p className="text-sm text-gray-700 font-medium">{stat.to}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0A1F44] to-[#0D2A5C]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready for Your <span className="text-[#6B8E23]">Transformation?</span>
            </h2>
            <p className="text-xl text-gray-300">
              Join hundreds of students who discovered their leadership potential at Manthan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/contact">
                <Button className="bg-[#6B8E23] hover:bg-[#556B2F] text-white font-bold px-10 py-6 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  Apply Now <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <a href="https://wa.me/917009202340" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0A1F44] font-bold px-10 py-6 text-lg rounded-lg">
                  WhatsApp: +91 70092 02340
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
