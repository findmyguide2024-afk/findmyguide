import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock, Users, Target, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { programs } from '../mockData';

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0A1F44] to-[#0D2A5C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contour-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M 0 100 Q 50 80, 100 100 T 200 100" stroke="white" strokeWidth="1" fill="none" />
                <path d="M 0 120 Q 50 100, 100 120 T 200 120" stroke="white" strokeWidth="1" fill="none" />
                <path d="M 0 140 Q 50 120, 100 140 T 200 140" stroke="white" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contour-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Our <span className="text-[#6B8E23]">Programs</span>
            </h1>
            <p className="text-xl text-gray-300">
              Short programs. Lifelong impact. Choose your transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {programs.map((program, index) => (
              <div 
                key={program.id} 
                id={program.name.toLowerCase().replace(' ', '-')}
                className="scroll-mt-24"
              >
                <Card className={`border-0 shadow-2xl overflow-hidden ${
                  index % 2 === 0 ? '' : 'bg-gray-50'
                }`}>
                  <div className="h-2 bg-gradient-to-r from-[#6B8E23] to-[#8FBC8F]"></div>
                  
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Content */}
                      <div className={`p-12 space-y-8 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div>
                          <div className="inline-block bg-[#6B8E23]/10 text-[#6B8E23] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            {program.audience}
                          </div>
                          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-3">
                            {program.name}
                          </h2>
                          <p className="text-xl text-[#6B8E23] font-semibold mb-4">
                            {program.tagline}
                          </p>
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {program.description}
                          </p>
                        </div>

                        {/* Format */}
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <Clock className="text-[#6B8E23]" size={20} />
                            <span className="font-semibold text-[#0A1F44]">Program Format:</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {program.format.map((format, idx) => (
                              <span 
                                key={idx}
                                className="bg-white border-2 border-[#6B8E23]/30 text-[#0A1F44] px-4 py-2 rounded-lg font-medium text-sm"
                              >
                                {format}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Activities */}
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-[#0A1F44] flex items-center">
                            <Target className="mr-2 text-[#6B8E23]" size={22} />
                            Program Activities
                          </h3>
                          <div className="space-y-2">
                            {program.activities.map((activity, idx) => (
                              <div key={idx} className="flex items-start space-x-3">
                                <CheckCircle2 size={20} className="text-[#6B8E23] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Price & CTA */}
                        <div className="flex items-center justify-between pt-6 border-t-2 border-gray-200">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Investment</p>
                            <p className="text-xl font-bold text-[#6B8E23]">Contact for Custom Quote</p>
                          </div>
                          <a 
                            href={`https://wa.me/917009202340?text=${encodeURIComponent(program.whatsappMessage || "Hi, I'm interested in " + program.name + ". Can you share the pricing details?")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="bg-[#6B8E23] hover:bg-[#556B2F] text-white font-bold px-8 py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg">
                              Get Quote on WhatsApp <ArrowRight className="ml-2" size={20} />
                            </Button>
                          </a>
                        </div>
                      </div>

                      {/* Outcomes */}
                      <div className={`bg-gradient-to-br from-[#0A1F44] to-[#0D2A5C] p-12 space-y-8 ${
                        index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                      }`}>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                            <Zap className="mr-2 text-[#6B8E23]" size={24} />
                            Key Outcomes
                          </h3>
                          <p className="text-gray-400 text-sm">
                            What participants will gain from this program
                          </p>
                        </div>

                        <div className="space-y-4">
                          {program.outcomes.map((outcome, idx) => (
                            <div 
                              key={idx}
                              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                            >
                              <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-[#6B8E23] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <CheckCircle2 size={18} className="text-white" />
                                </div>
                                <p className="text-white font-medium text-lg">{outcome}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="bg-[#6B8E23]/20 border border-[#6B8E23]/30 rounded-xl p-6 space-y-3">
                          <div className="flex items-center space-x-2">
                            <Users className="text-[#6B8E23]" size={20} />
                            <span className="text-white font-semibold">Limited Batch Size</span>
                          </div>
                          <p className="text-gray-300 text-sm">
                            Small batches (20-30 participants) ensure personalized attention and maximum impact for every individual.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
              Choose Your Journey
            </h2>
            <p className="text-xl text-gray-600">
              Quick comparison to help you decide
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-[#0A1F44] to-[#0D2A5C]">
                  <th className="px-6 py-4 text-left text-white font-bold">Feature</th>
                  {programs.map((program) => (
                    <th key={program.id} className="px-6 py-4 text-white font-bold">
                      {program.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#0A1F44]">Target Audience</td>
                  {programs.map((program) => (
                    <td key={program.id} className="px-6 py-4 text-gray-600">{program.age}</td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#0A1F44]">Duration</td>
                  {programs.map((program) => (
                    <td key={program.id} className="px-6 py-4 text-gray-600">{program.format[0]}</td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#0A1F44]">Get Quote</td>
                  {programs.map((program) => (
                    <td key={program.id} className="px-6 py-4">
                      <a 
                        href={`https://wa.me/917009202340?text=${encodeURIComponent(program.whatsappMessage || "Hi, I'm interested in " + program.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6B8E23] hover:text-[#556B2F] font-semibold underline"
                      >
                        WhatsApp for Pricing
                      </a>
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#0A1F44]">Intensity</td>
                  <td className="px-6 py-4 text-gray-600">Moderate</td>
                  <td className="px-6 py-4 text-gray-600">High</td>
                  <td className="px-6 py-4 text-gray-600">Very High</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0A1F44] to-[#0D2A5C]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-xl text-gray-300">
              Leadership is built through experience. Start your conditioning journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Link to="/contact">
                <Button className="bg-[#6B8E23] hover:bg-[#556B2F] text-white font-bold px-10 py-6 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  Apply Now <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <a href="tel:+917009202340">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0A1F44] font-bold px-10 py-6 text-lg rounded-lg">
                  Call: +91 70092 02340
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
