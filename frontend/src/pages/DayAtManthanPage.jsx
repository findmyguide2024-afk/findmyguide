import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { dayAtManthan } from '../mockData';
import { Clock, Mountain, Flame, Award, Users, Zap, Heart, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

const DayAtManthanPage = () => {
  const getActivityIcon = (type) => {
    switch(type) {
      case 'physical': return Mountain;
      case 'mental': return Zap;
      case 'social': return Users;
      case 'routine': return Heart;
      default: return Clock;
    }
  };

  const getActivityColor = (type) => {
    switch(type) {
      case 'physical': return 'from-orange-500 to-red-500';
      case 'mental': return 'from-blue-500 to-purple-600';
      case 'social': return 'from-[#6B8E23] to-[#556B2F]';
      case 'routine': return 'from-gray-600 to-gray-700';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const dayStructure = [
    {
      day: "Day 1: IGNITE",
      theme: "Welcome, Team Building & First Challenges",
      color: "from-yellow-500 to-orange-500",
      activities: [
        "Welcome, Orientation & Team Formation",
        "Ice-Breaker Games & Trust Walk",
        "Zip Line & Burma Bridge Session",
        "Mental Health & Self-Awareness Session",
        "Bonfire: Storytelling & Courage Circle"
      ]
    },
    {
      day: "Day 2: FORGE",
      theme: "Physical Challenges & Survival Skills",
      color: "from-orange-500 to-red-600",
      activities: [
        "Mountain Hiking",
        "Military Planning Exercise",
        "Capture the Flag Challenge",
        "Survival Training: Shelter & Tent Pitching",
        "Night Mission: Emergency Food Cooking"
      ]
    },
    {
      day: "Day 3: RISE",
      theme: "Final Challenges & Recognition",
      color: "from-[#6B8E23] to-[#556B2F]",
      activities: [
        "Rope Cycling",
        "Best Out of Waste Activity",
        "Final Leadership Challenge (Team vs Team)",
        "Award Ceremony — Elite Leadership Badges & Certificates",
        "Commitment Pledge & camp photographs"
      ]
    }
  ];

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
              A Day at <span className="text-[#6B8E23]">Manthan</span>
            </h1>
            <p className="text-2xl text-gray-300">
              Experience the structure, discipline, and transformation of our 3-day journey
            </p>
          </div>
        </div>
      </section>

      {/* 3-Day Structure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
              The 3-Day Journey
            </h2>
            <p className="text-xl text-gray-600">
              Each day is carefully designed to build upon the previous
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {dayStructure.map((day, idx) => (
              <Card key={idx} className="border-0 shadow-2xl overflow-hidden">
                <div className={`h-3 bg-gradient-to-r ${day.color}`}></div>
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 space-y-4">
                      <div className={`inline-block bg-gradient-to-r ${day.color} text-white px-6 py-3 rounded-full font-bold text-lg`}>
                        {day.day}
                      </div>
                      <h3 className="text-2xl font-bold text-[#0A1F44]">{day.theme}</h3>
                      <p className="text-gray-600">
                        {idx === 0 && "Break the ice, build trust, and take on first challenges."}
                        {idx === 1 && "Push physical and mental limits through survival and team tasks."}
                        {idx === 2 && "Culminate skills, celebrate achievements, and commit to growth."}
                      </p>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="space-y-3">
                        {day.activities.map((activity, actIdx) => (
                          <div key={actIdx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <div className={`w-8 h-8 bg-gradient-to-br ${day.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <span className="text-white font-bold text-sm">{actIdx + 1}</span>
                            </div>
                            <p className="text-gray-700 font-medium">{activity}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Day Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
              Daily Schedule
            </h2>
            <p className="text-xl text-gray-600">
              A structured routine that balances challenge, learning, and recovery
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#6B8E23]/30"></div>

              <div className="space-y-8">
                {dayAtManthan.map((item, idx) => {
                  const IconComponent = getActivityIcon(item.type);
                  const colorClass = getActivityColor(item.type);

                  return (
                    <div key={idx} className="relative flex items-start space-x-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${colorClass} rounded-xl flex items-center justify-center flex-shrink-0 z-10 shadow-lg`}>
                        <IconComponent size={28} className="text-white" />
                      </div>
                      <Card className="flex-1 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-bold text-[#0A1F44]">{item.activity}</h3>
                            <span className="text-sm font-semibold text-[#6B8E23] bg-[#6B8E23]/10 px-4 py-1.5 rounded-full">
                              {item.time}
                            </span>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Support */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
                Safety First, Always
              </h2>
              <p className="text-xl text-gray-600">
                Double-layer safety protocol for all adventure activities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "⚡",
                  title: "Trained Instructors",
                  description: "All activities supervised by certified professionals with years of experience"
                },
                {
                  icon: "🛡️",
                  title: "Safety Equipment",
                  description: "Industry-standard harnesses, safety nets, and protective gear for all participants"
                },
                {
                  icon: "🏥",
                  title: "Medical Support",
                  description: "On-site first aid and immediate access to medical facilities if needed"
                }
              ].map((item, idx) => (
                <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="text-6xl">{item.icon}</div>
                    <h3 className="text-xl font-bold text-[#0A1F44]">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
              Ready to Experience <span className="text-[#6B8E23]">Manthan?</span>
            </h2>
            <p className="text-xl text-gray-300">
              Join us for 3 days that will transform the way you see yourself and your potential
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/contact">
                <Button className="bg-[#6B8E23] hover:bg-[#556B2F] text-white font-bold px-10 py-6 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  Apply Now <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/programs">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0A1F44] font-bold px-10 py-6 text-lg rounded-lg">
                  View Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DayAtManthanPage;
