import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { elqs } from '../mockData';
import { CheckCircle2, Award, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

const ELQsPage = () => {
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
            <div className="inline-block bg-[#6B8E23]/20 text-[#6B8E23] px-6 py-2 rounded-full text-sm font-semibold border border-[#6B8E23]/30 mb-4">
              Our Proprietary Framework
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              15 Elite Leadership <span className="text-[#6B8E23]">Qualities</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A structured, measurable framework of 15 qualities that define exceptional leadership. 
              Every activity at Manthan is engineered to condition one or more of these core qualities.
            </p>
          </div>
        </div>
      </section>

      {/* ELQ Framework Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-12 space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6B8E23] to-[#556B2F] rounded-2xl flex items-center justify-center">
                    <Award size={32} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#0A1F44]">
                    What Are Elite Leadership Qualities (ELQs)?
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  ELQs are a scientifically structured framework of 15 core competencies that distinguish 
                  exceptional leaders from average performers. Developed through years of research and 
                  real-world application, each quality is:
                </p>
                <ul className="space-y-3">
                  {[
                    "Measurable through before-and-after assessments",
                    "Developable through specific conditioning exercises",
                    "Observable in real-world performance",
                    "Applicable across all domains—academic, professional, and personal"
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 size={20} className="text-[#6B8E23] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The 15 ELQs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
              The 15 Elite Leadership Qualities
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive development across all essential leadership competencies
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {elqs.map((quality, idx) => (
                <Card 
                  key={idx}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
                >
                  <div className="h-1.5 bg-gradient-to-r from-[#6B8E23] to-[#8FBC8F]"></div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="inline-block bg-gradient-to-r from-[#6B8E23] to-[#556B2F] text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                          ELQ {idx + 1}
                        </div>
                        <h3 className="text-xl font-bold text-[#0A1F44] mb-3 group-hover:text-[#6B8E23] transition-colors">
                          {quality.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {quality.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Develop ELQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
                How We Develop These Qualities
              </h2>
              <p className="text-xl text-gray-600">
                Experience-based conditioning through structured activities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Target,
                  title: "Adventure Activities",
                  description: "Zip-lining, mountain hiking, rope cycling, and Burma bridge challenges develop courage, mental toughness, and resilience through controlled risk-taking."
                },
                {
                  icon: Zap,
                  title: "Leadership Exercises",
                  description: "Military planning, capture the flag, and command drills build decision-making, team leadership, and situational awareness under pressure."
                },
                {
                  icon: Award,
                  title: "Survival Training",
                  description: "Shelter building, tent pitching, and emergency cooking foster problem-solving, adaptability, and self-reliance in challenging conditions."
                },
                {
                  icon: CheckCircle2,
                  title: "Mental Conditioning",
                  description: "Self-awareness sessions, reflection circles, and peer bonding activities develop emotional intelligence, integrity, and communication skills."
                }
              ].map((method, idx) => {
                const IconComponent = method.icon;
                return (
                  <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8 space-y-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#6B8E23] to-[#556B2F] rounded-xl flex items-center justify-center">
                        <IconComponent size={28} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0A1F44]">{method.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{method.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Every Activity Engineered for ELQs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#6B8E23] to-[#8FBC8F]"></div>
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-[#0A1F44] mb-4">
                    Every Activity is Engineered
                  </h2>
                  <p className="text-xl text-gray-600">
                    Each challenge at Manthan targets specific ELQs
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { activity: "Zip Line", elqs: "Courage, Fearlessness, Mental Toughness" },
                    { activity: "Mountain Hiking", elqs: "Endurance, Teamwork, Discipline" },
                    { activity: "Military Planning", elqs: "Decision Making, Team Leadership, Initiative" },
                    { activity: "Survival Training", elqs: "Problem Solving, Adaptability, Responsibility" },
                    { activity: "Capture the Flag", elqs: "Situational Awareness, Communication, Confidence" },
                    { activity: "Mental Health Session", elqs: "Emotional Intelligence, Self-Control, Integrity" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-[#6B8E23] rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0A1F44] mb-1">{item.activity}</h4>
                        <p className="text-sm text-gray-600">Develops: <span className="text-[#6B8E23] font-medium">{item.elqs}</span></p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Measurement Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A1F44] to-[#0D2A5C]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Certified <span className="text-[#6B8E23]">Achievement</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Every participant receives ELQ Achievement Badges & Certificates recognizing their 
              development across all 15 leadership qualities. Track your growth with concrete recognition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Link to="/programs">
                <Button className="bg-[#6B8E23] hover:bg-[#556B2F] text-white font-bold px-10 py-6 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  View Programs <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0A1F44] font-bold px-10 py-6 text-lg rounded-lg">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ELQsPage;
