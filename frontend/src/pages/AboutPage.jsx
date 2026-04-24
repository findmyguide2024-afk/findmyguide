import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Target, Award, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { stats } from '../mockData';

const AboutPage = () => {
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
              About <span className="text-[#6B8E23]">Manthan</span>
            </h1>
            <p className="text-2xl text-gray-300">
              Brain conditioning for leadership excellence
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">
                Our Philosophy
              </h2>
              <div className="w-24 h-1 bg-[#6B8E23] mx-auto mb-8"></div>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-12 space-y-8">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-[#0A1F44]">
                    Brain Conditioning vs. Traditional Learning
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Traditional education fills the mind with knowledge. Manthan conditions it to perform.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We believe leadership is not an innate trait you're born with—it's a skill set that 
                    can be systematically developed through the right experiences, challenges, and conditioning.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t-2 border-gray-200">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">❌</span>
                      </div>
                      <h4 className="text-xl font-bold text-[#0A1F44]">Traditional Education</h4>
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Theoretical knowledge</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Passive learning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Classroom-based</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Memory & recall focused</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Slow, gradual progress</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">✅</span>
                      </div>
                      <h4 className="text-xl font-bold text-[#6B8E23]">Manthan Approach</h4>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 size={18} className="mr-2 mt-0.5 text-[#6B8E23] flex-shrink-0" />
                        <span>Practical skills development</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 size={18} className="mr-2 mt-0.5 text-[#6B8E23] flex-shrink-0" />
                        <span>Experiential conditioning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 size={18} className="mr-2 mt-0.5 text-[#6B8E23] flex-shrink-0" />
                        <span>Real-world scenarios</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 size={18} className="mr-2 mt-0.5 text-[#6B8E23] flex-shrink-0" />
                        <span>Performance & action oriented</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 size={18} className="mr-2 mt-0.5 text-[#6B8E23] flex-shrink-0" />
                        <span>Rapid, intensive transformation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-[#0A1F44] to-[#0D2A5C]">
                <CardContent className="p-10 space-y-6">
                  <div className="w-16 h-16 bg-[#6B8E23] rounded-2xl flex items-center justify-center">
                    <Target size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Our Vision</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To create leaders at every level - from classrooms to boardrooms. Leaders who don't just dream about 
                    change—they make it happen. Leaders who are mentally tough, emotionally intelligent, 
                    and equipped to handle the complexities of their unique challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-[#6B8E23] to-[#556B2F]">
                <CardContent className="p-10 space-y-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                    <Award size={32} className="text-[#6B8E23]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Our Mission</h3>
                  <p className="text-gray-100 text-lg leading-relaxed">
                    To systematically develop the 15 Elite Leadership Qualities in every participant 
                    through structured, intensive programs that combine challenge, feedback, and growth 
                    in a compressed timeframe.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
                What Makes Manthan Different
              </h2>
              <p className="text-xl text-gray-600">
                Not just another leadership program
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Structured Framework",
                  description: "Built on 15 measurable Elite Leadership Qualities, not vague concepts like 'be confident' or 'be a leader.'"
                },
                {
                  icon: Users,
                  title: "Experiential, Not Theoretical",
                  description: "You don't sit and listen—you do, you fail, you learn, you improve. Real growth happens through real challenges."
                },
                {
                  icon: TrendingUp,
                  title: "Measurable Results",
                  description: "Before and after assessments track actual development. You'll see exactly how you've grown across all 15 ELQs."
                },
                {
                  icon: Target,
                  title: "Intensive & Immersive",
                  description: "Days of focused conditioning create breakthroughs that months of weekly classes cannot achieve."
                },
                {
                  icon: Award,
                  title: "Small Batch Sizes",
                  description: "We cap batches at 20-30 participants to ensure personalized attention and maximum impact for everyone."
                },
                {
                  icon: CheckCircle2,
                  title: "Proven Track Record",
                  description: "Rajeev sir with his team at SSBWings mentored 5000+ aspirants and produced 9 (AIR 1) by transforming their personality for the world's one of the toughest 5 days SSB interview. Also transformed 100+ individuals through Manthan platform with 5 editions at BIR."
                }
              ].map((difference, idx) => {
                const IconComponent = difference.icon;
                return (
                  <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-8 space-y-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#6B8E23] to-[#556B2F] rounded-xl flex items-center justify-center">
                        <IconComponent size={28} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0A1F44]">{difference.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{difference.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Elite Leadership Guide */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#6B8E23] to-[#8FBC8F]"></div>
              <CardContent className="p-12 space-y-8">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-[#0A1F44] mb-4">
                    About Elite Leadership Guide
                  </h2>
                  <div className="w-24 h-1 bg-[#6B8E23] mx-auto"></div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Manthan is the flagship vertical of <strong>Elite Leadership Guide</strong>, an organization 
                  dedicated to developing leadership capabilities across all age groups and sectors.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  With years of research, development, and real-world implementation, we've refined a systematic 
                  approach to leadership development that works. Our programs are trusted by schools, corporations, 
                  and thousands of individuals who've experienced transformative results.
                </p>

                <div className="bg-[#6B8E23]/10 border-l-4 border-[#6B8E23] p-6 rounded-r-xl">
                  <p className="text-[#0A1F44] font-semibold text-lg italic">
                    "We don't create followers. We condition leaders who can think, decide, and act independently 
                    while inspiring those around them."
                  </p>
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
              Experience the <span className="text-[#6B8E23]">Manthan Difference</span>
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands who have transformed their leadership capabilities through our proven conditioning programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/programs">
                <Button className="bg-[#6B8E23] hover:bg-[#556B2F] text-white font-bold px-10 py-6 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  View Programs <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0A1F44] font-bold px-10 py-6 text-lg rounded-lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
