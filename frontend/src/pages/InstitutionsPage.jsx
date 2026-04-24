import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { schoolBenefits, corporateBenefits, stats } from '../mockData';
import * as LucideIcons from 'lucide-react';

const InstitutionsPage = () => {
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
              Partner with <span className="text-[#6B8E23]">Manthan</span>
            </h1>
            <p className="text-2xl text-gray-300">
              Transform your students or teams with proven leadership development programs
            </p>
          </div>
        </div>
      </section>

      {/* For Schools Section */}
      <section id="schools" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                For Educational Institutions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
                Partner With Us - Schools & Colleges
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Go beyond academics. Give your students the leadership edge that builds character, 
                confidence, and real-world capabilities.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {schoolBenefits.map((benefit, idx) => {
                const IconComponent = LucideIcons[benefit.icon];
                return (
                  <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-8 space-y-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <IconComponent size={28} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0A1F44]">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Partnership Models */}
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold text-[#0A1F44] mb-8 text-center">
                  Partnership Models for Schools
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-[#0A1F44] mb-3">One-Time Programs</h4>
                      <p className="text-gray-600 mb-4">
                        Run Manthan Junior for selected student groups (leadership councils, senior classes, etc.)
                      </p>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Flexible scheduling</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Customized to school calendar</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Special pricing for bulk enrollments</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-[#6B8E23]/10 border-2 border-[#6B8E23]/30 rounded-xl p-6">
                      <div className="inline-block bg-[#6B8E23] text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                        RECOMMENDED
                      </div>
                      <h4 className="text-xl font-bold text-[#0A1F44] mb-3">Annual Partnerships</h4>
                      <p className="text-gray-600 mb-4">
                        Long-term collaboration with multiple programs throughout the year
                      </p>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Consistent leadership development pipeline</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Preferred pricing and priority scheduling</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Joint branding and recognition</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Corporates Section */}
      <section id="corporates" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#6B8E23]/20 text-[#6B8E23] px-6 py-2 rounded-full text-sm font-semibold mb-4">
                For Corporates & Organizations
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
                Manthan Pro - Corporate Training
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Build leadership capabilities at all levels. Transform teams from groups of individuals 
                into high-performing units with shared purpose and accountability.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {corporateBenefits.map((benefit, idx) => {
                const IconComponent = LucideIcons[benefit.icon];
                return (
                  <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-8 space-y-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#6B8E23] to-[#556B2F] rounded-xl flex items-center justify-center">
                        <IconComponent size={28} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0A1F44]">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Corporate Programs */}
            <Card className="border-0 shadow-2xl overflow-hidden mb-12">
              <div className="h-2 bg-gradient-to-r from-[#6B8E23] to-[#8FBC8F]"></div>
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold text-[#0A1F44] mb-8 text-center">
                  Customized Corporate Solutions
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      title: "New Manager Development",
                      description: "Equip first-time managers with essential leadership skills—delegation, decision-making, team management.",
                      duration: "2 Days"
                    },
                    {
                      title: "Team Building & Dynamics",
                      description: "Break down silos, improve communication, and build trust within and across teams.",
                      duration: "2-3 Days"
                    },
                    {
                      title: "Leadership Under Pressure",
                      description: "Develop the ability to make quality decisions quickly in high-stress, uncertain situations.",
                      duration: "3 Days"
                    },
                    {
                      title: "Executive Leadership Intensive",
                      description: "Advanced program for senior leaders focused on strategic thinking, influence, and organizational impact.",
                      duration: "3-5 Days"
                    }
                  ].map((program, idx) => (
                    <div key={idx} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className="w-12 h-12 bg-[#6B8E23] rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">{idx + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-bold text-[#0A1F44]">{program.title}</h4>
                          <span className="text-sm font-semibold text-[#6B8E23] bg-[#6B8E23]/10 px-3 py-1 rounded-full">
                            {program.duration}
                          </span>
                        </div>
                        <p className="text-gray-600">{program.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Industries We Serve */}
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <h3 className="text-2xl font-bold text-[#0A1F44] mb-8 text-center">
                Industries We Serve
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {['Tech & IT', 'Manufacturing', 'Healthcare', 'Finance', 'Education', 'Retail', 'Startups', 'Government'].map((industry, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-lg hover:bg-[#6B8E23]/10 hover:border-[#6B8E23] border-2 border-transparent transition-all">
                    <p className="font-semibold text-[#0A1F44]">{industry}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
                Why Partner with Manthan?
              </h2>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-[#6B8E23] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0A1F44] mb-1">Proven Results</h4>
                        <p className="text-gray-600 text-sm"> 5000+ lives transformed.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-[#6B8E23] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0A1F44] mb-1">Structured Framework</h4>
                        <p className="text-gray-600 text-sm">15 Elite Leadership Qualities—measurable, systematic, proven</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-[#6B8E23] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0A1F44] mb-1">Experienced Facilitators</h4>
                        <p className="text-gray-600 text-sm">Trained professionals who know how to challenge and support participants</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-[#6B8E23] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0A1F44] mb-1">Customization</h4>
                        <p className="text-gray-600 text-sm">Programs tailored to your specific needs, culture, and goals</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-[#6B8E23] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0A1F44] mb-1">Measurable Impact</h4>
                        <p className="text-gray-600 text-sm">Before and after assessments show concrete development</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-[#6B8E23] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0A1F44] mb-1">Long-term Support</h4>
                        <p className="text-gray-600 text-sm">Ongoing partnership, not just a one-time event</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0A1F44] to-[#0D2A5C]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Let's Build Leaders <span className="text-[#6B8E23]">Together</span>
            </h2>
            <p className="text-xl text-gray-300">
              Whether you're a school looking to develop student leaders or a corporation building 
              high-performance teams, we're here to partner with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/contact">
                <Button className="bg-[#6B8E23] hover:bg-[#556B2F] text-white font-bold px-10 py-6 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  Discuss Partnership <ArrowRight className="ml-2" size={20} />
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

export default InstitutionsPage;
