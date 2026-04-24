import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Building2, GraduationCap, Target, Zap, Award, TrendingUp, CheckCircle2, Brain, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { programs, whyManthan, testimonials } from '../mockData';

const TestimonialPreviewCard = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;
  const shouldTruncate = testimonial.quote.length > maxLength;
  
  const displayText = shouldTruncate && !isExpanded 
    ? testimonial.quote.slice(0, maxLength) + '...' 
    : testimonial.quote;

  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <CardContent className="p-6 space-y-4 flex flex-col flex-grow">
        <div className="flex items-center space-x-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover border-4 border-[#6B8E23]/20"
          />
          <div>
            <h4 className="font-bold text-[#0A1F44]">{testimonial.name}</h4>
            {testimonial.age && <p className="text-sm text-gray-500">Age {testimonial.age}</p>}
            <p className="text-xs text-[#6B8E23] font-semibold">{testimonial.program}</p>
          </div>
        </div>
        <div className="flex-grow flex flex-col pt-2 relative">
          <p className="text-gray-600 italic leading-relaxed flex-grow whitespace-pre-wrap transition-all">
            "{displayText}"
          </p>
          {shouldTruncate && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#6B8E23] font-bold text-sm hover:underline mt-2 self-start"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const Homepage = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A1F44] via-[#0D2A5C] to-[#0A1F44]">
        {/* Leadership Doodles Background */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="leadership-doodles" x="0" y="0" width="800" height="800" patternUnits="userSpaceOnUse">
                
                {/* Mountain peaks - symbolizing challenges */}
                <path d="M 100 200 L 130 150 L 160 200 M 140 170 L 145 165 L 150 170" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 500 600 L 540 530 L 580 600 M 550 555 L 555 550 L 560 555" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* Upward arrows - growth & progress */}
                <path d="M 250 500 L 250 450 M 240 460 L 250 450 L 260 460" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 650 250 L 650 200 M 640 210 L 650 200 L 660 210" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* Stars - achievement */}
                <path d="M 400 150 L 405 165 L 420 165 L 408 175 L 413 190 L 400 180 L 387 190 L 392 175 L 380 165 L 395 165 Z" stroke="white" strokeWidth="1.5" fill="none" />
                <path d="M 700 500 L 703 510 L 713 510 L 705 516 L 708 526 L 700 520 L 692 526 L 695 516 L 687 510 L 697 510 Z" stroke="white" strokeWidth="1.5" fill="none" />
                
                {/* Compass - direction & guidance */}
                <circle cx="150" cy="600" r="25" stroke="white" strokeWidth="2" fill="none" />
                <path d="M 150 580 L 150 620 M 130 600 L 170 600" stroke="white" strokeWidth="1.5" />
                <path d="M 150 600 L 145 590 L 150 580 L 155 590 Z" stroke="white" strokeWidth="1.5" fill="none" />
                
                {/* Target - goals */}
                <circle cx="600" cy="100" r="30" stroke="white" strokeWidth="2" fill="none" />
                <circle cx="600" cy="100" r="20" stroke="white" strokeWidth="1.5" fill="none" />
                <circle cx="600" cy="100" r="10" stroke="white" strokeWidth="1.5" fill="none" />
                
                {/* Lightning bolt - energy & transformation */}
                <path d="M 350 350 L 340 370 L 355 375 L 345 395 M 348 375 L 358 372" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* Simple stick figure climbing - overcoming challenges */}
                <circle cx="200" cy="350" r="8" stroke="white" strokeWidth="1.5" fill="none" />
                <path d="M 200 358 L 200 378 M 200 365 L 190 375 M 200 365 L 210 375 M 200 378 L 193 395 M 200 378 L 207 395" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                
                {/* Flag on peak - achievement */}
                <path d="M 450 450 L 450 420 M 450 420 L 470 425 L 450 430" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* Handshake - teamwork */}
                <path d="M 100 450 Q 110 445 120 450 M 140 450 Q 130 445 120 450" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                
                {/* Light bulb - ideas & innovation */}
                <circle cx="750" cy="350" r="15" stroke="white" strokeWidth="2" fill="none" />
                <path d="M 745 365 L 755 365 M 745 370 L 755 370 M 750 370 L 750 375" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                
                {/* Trophy - success */}
                <path d="M 300 700 L 305 685 L 315 685 L 320 700 M 305 685 L 305 675 L 315 675 L 315 685 M 300 700 L 285 700 M 320 700 L 335 700" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* Winding path - journey */}
                <path d="M 50 100 Q 80 90 100 110 T 150 100 Q 180 85 200 100" stroke="white" strokeWidth="2" fill="none" strokeDasharray="5,5" strokeLinecap="round" />
                
                {/* Rocket - ambition */}
                <path d="M 550 400 L 545 420 L 555 420 L 550 400 M 550 400 L 550 385 M 543 410 L 540 415 M 557 410 L 560 415" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* Brain - intelligence */}
                <path d="M 420 600 Q 415 590 420 580 Q 425 575 435 580 Q 445 590 440 600 Q 435 605 425 600 Q 420 598 420 600" stroke="white" strokeWidth="1.5" fill="none" />
                
                {/* Connected dots - teamwork network */}
                <circle cx="680" cy="650" r="3" fill="white" />
                <circle cx="700" cy="640" r="3" fill="white" />
                <circle cx="720" cy="655" r="3" fill="white" />
                <path d="M 680 650 L 700 640 L 720 655" stroke="white" strokeWidth="1" />
                
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#leadership-doodles)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <span className="bg-[#6B8E23]/20 text-[#6B8E23] px-6 py-2 rounded-full text-sm font-semibold border border-[#6B8E23]/30">
                Transform Mindset in Days, Not Years
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Leaders Are Not Born.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B8E23] to-[#8FBC8F]">
                They Are Conditioned.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Manthan is a brain conditioning system for everyone - from students to professionals to corporate teams. 
              Transform your leadership capabilities through intensive, immersive experiences designed for all levels.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/contact">
                <Button className="bg-[#6B8E23] hover:bg-[#556B2F] text-white font-bold px-8 py-6 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#6B8E23]/50">
                  Apply Now <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/programs">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0A1F44] font-bold px-8 py-6 text-lg rounded-lg transform hover:scale-105 transition-all duration-300">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Audience Segmentation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
              Leadership Development for Everyone
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're a student, working professional, corporate team, or educational institution - 
              we have a program designed for your transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: GraduationCap,
                title: 'Students',
                age: '12-18 years',
                program: 'Manthan Junior',
                description: 'Build confidence, discipline, and leadership qualities early in life',
                link: '/programs#junior',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Users,
                title: 'Young Professionals',
                age: '18-35 years',
                program: 'Manthan Elite',
                description: 'Intensive 7-day transformation for individuals seeking deep personal growth',
                link: '/programs#elite',
                color: 'from-[#6B8E23] to-[#556B2F]'
              },
              {
                icon: Building2,
                title: 'Corporate Teams',
                program: 'Manthan Pro',
                description: 'Transform team dynamics and build leadership capabilities at all organizational levels',
                link: '/programs#pro',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Building2,
                title: 'Institutions',
                program: 'Partnership Programs',
                description: 'Customized programs for schools, colleges, and organizations seeking systematic leadership development',
                link: '/institutions',
                color: 'from-orange-500 to-orange-600'
              }
            ].map((audience, index) => (
              <Link to={audience.link} key={index}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden group cursor-pointer">
                  <div className={`h-2 bg-gradient-to-r ${audience.color}`}></div>
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-start space-x-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${audience.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <audience.icon size={40} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-[#0A1F44] mb-1">{audience.title}</h3>
                        {audience.age && <p className="text-sm text-gray-500 mb-3">{audience.age}</p>}
                        <p className="text-[#6B8E23] font-semibold text-lg mb-3">{audience.program}</p>
                        <p className="text-gray-600 leading-relaxed">{audience.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-[#6B8E23] font-semibold group-hover:translate-x-2 transition-transform duration-300 pt-2">
                      Learn More <ArrowRight size={20} className="ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#0A1F44] to-[#0D2A5C]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-5xl md:text-6xl font-bold text-[#6B8E23] mb-3">5000+</div>
            <div className="text-gray-300 text-lg md:text-xl font-medium">Lives Transformed</div>
          </div>
        </div>
      </section>

      {/* Why Manthan */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
              Why Manthan Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional education is not enough. Leadership must be conditioned, not just taught.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyManthan.map((reason, index) => {
              const IconComponent = {
                Brain,
                Target,
                Zap,
                Users,
                Award,
                Shield
              }[reason.icon];

              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#6B8E23] to-[#556B2F] rounded-xl flex items-center justify-center">
                      <IconComponent size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A1F44]">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600">
              Choose the transformation journey that fits your goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {programs.map((program) => (
              <Card key={program.id} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="h-3 bg-gradient-to-r from-[#6B8E23] to-[#8FBC8F]"></div>
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-[#0A1F44] mb-2">{program.name}</h3>
                    <p className="text-[#6B8E23] font-semibold text-lg mb-1">{program.tagline}</p>
                    <p className="text-gray-500 text-sm">{program.age}</p>
                  </div>

                  <p className="text-gray-600 leading-relaxed">{program.description}</p>

                  <div className="space-y-2">
                    <p className="font-semibold text-[#0A1F44] text-sm">KEY OUTCOMES:</p>
                    <div className="grid grid-cols-1 gap-2">
                      {program.outcomes.slice(0, 3).map((outcome, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 size={18} className="text-[#6B8E23] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-500">Investment</p>
                      <p className="text-lg font-bold text-[#6B8E23]">Contact for Quote</p>
                    </div>
                    <a 
                      href={`https://wa.me/917009202340?text=${encodeURIComponent(program.whatsappMessage || "Hi, I'm interested in learning more about Manthan programs. Can you share the pricing details?")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-[#6B8E23] hover:bg-[#556B2F] text-white font-semibold px-6 py-3 rounded-lg transform group-hover:scale-105 transition-all duration-300">
                        Get Quote on WhatsApp <ArrowRight size={18} className="ml-2" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/programs">
              <Button variant="outline" className="border-2 border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44] hover:text-white font-bold px-8 py-4 text-lg rounded-lg">
                View Detailed Program Information
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
              Real Transformations
            </h2>
            <p className="text-xl text-gray-600">
              Hear from those who experienced Manthan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialPreviewCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button variant="outline" className="border-2 border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44] hover:text-white font-semibold px-6 py-3 rounded-lg">
                Read More Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0A1F44] via-[#0D2A5C] to-[#0A1F44] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Don't Just Educate. <span className="text-[#6B8E23]">Condition the Mind.</span>
            </h2>
            <p className="text-xl text-gray-300">
              Train the mind before the world tests it. Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/contact">
                <Button className="bg-[#6B8E23] hover:bg-[#556B2F] text-white font-bold px-10 py-6 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  Apply Now <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <a href="tel:+917009202340">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0A1F44] font-bold px-10 py-6 text-lg rounded-lg transform hover:scale-105 transition-all duration-300">
                  Call: +91 70092-02340
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
