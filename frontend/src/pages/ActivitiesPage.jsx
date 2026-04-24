import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Mountain, Waves, Wind, Palette, Drama, 
  Mic, Users, Heart, Sparkles, Target, Zap, Shield, Award
} from 'lucide-react';

const ActivitiesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const activities = [
    // Adventure Activities
    {
      id: 1,
      name: "Paragliding",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1724031266997-97582a87dc63?w=800",
      description: "Soar through the skies and conquer your fear of heights",
      elqs: ["Courage & Fearlessness", "Mental Toughness", "Confidence"],
      intensity: "High",
      icon: Wind
    },
    {
      id: 2,
      name: "River Rafting",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1760904591523-b70b6bceeb1e?w=800",
      description: "Navigate rapids as a team, building coordination and trust",
      elqs: ["Team Leadership", "Decision Making", "Adaptability"],
      intensity: "High",
      icon: Waves
    },
    {
      id: 3,
      name: "Mountain Trekking",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1582019233868-bd7cc29a04ab?w=800",
      description: "Endurance trek through challenging terrain, building stamina",
      elqs: ["Physical Toughness", "Discipline", "Resilience"],
      intensity: "Medium",
      icon: Mountain
    },
    {
      id: 4,
      name: "Parasailing",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1768722688075-b19a5927b13c?w=800",
      description: "Experience the thrill of flying over water, pushing boundaries",
      elqs: ["Courage", "Mental Toughness", "Self Control"],
      intensity: "High",
      icon: Wind
    },
    {
      id: 5,
      name: "Surfing",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1687719101489-487a710b60d3?w=800",
      description: "Ride the waves, develop balance and timing",
      elqs: ["Adaptability", "Resilience", "Determination"],
      intensity: "Medium",
      icon: Waves
    },
    {
      id: 6,
      name: "Zip Line",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800",
      description: "High-speed aerial descent, conquering fears",
      elqs: ["Courage", "Confidence", "Mental Toughness"],
      intensity: "Medium",
      icon: Zap
    },
    {
      id: 7,
      name: "Rock Climbing",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800",
      description: "Vertical challenges building problem-solving and determination",
      elqs: ["Problem Solving", "Determination", "Physical Toughness"],
      intensity: "High",
      icon: Mountain
    },
    {
      id: 8,
      name: "Burma Bridge",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800",
      description: "Balance challenge on rope bridge, testing focus",
      elqs: ["Mental Toughness", "Self Control", "Confidence"],
      intensity: "Medium",
      icon: Shield
    },

    // Creative & Expressive Activities
    {
      id: 9,
      name: "Best Out of Waste",
      category: "creative",
      image: "https://images.unsplash.com/photo-1767330855651-238523c49601?w=800",
      description: "Create useful items from discarded materials",
      elqs: ["Problem Solving", "Adaptability", "Initiative"],
      intensity: "Low",
      icon: Palette
    },
    {
      id: 10,
      name: "Drama & Skits",
      category: "creative",
      image: "https://images.unsplash.com/photo-1709752640386-6fd6553d4f31?w=800",
      description: "Perform dramatic pieces, building expression and confidence",
      elqs: ["Communication Skills", "Confidence", "Emotional Intelligence"],
      intensity: "Medium",
      icon: Drama
    },
    {
      id: 11,
      name: "Talent Showcase",
      category: "creative",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
      description: "Platform to display individual talents and abilities",
      elqs: ["Confidence", "Initiative", "Communication Skills"],
      intensity: "Low",
      icon: Sparkles
    },
    {
      id: 12,
      name: "Opening Up Sessions",
      category: "mental",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800",
      description: "Honest conversations building emotional awareness",
      elqs: ["Emotional Intelligence", "Communication", "Courage"],
      intensity: "Medium",
      icon: Heart
    },
    {
      id: 13,
      name: "Group Discussions",
      category: "mental",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      description: "Structured debates developing critical thinking",
      elqs: ["Communication Skills", "Team Leadership", "Decision Making"],
      intensity: "Low",
      icon: Users
    },
    {
      id: 14,
      name: "Cultural Performances",
      category: "creative",
      image: "https://images.unsplash.com/photo-1609422431634-fa33dbeb0c36?w=800",
      description: "Dance, music, and cultural expression",
      elqs: ["Confidence", "Communication", "Team Coordination"],
      intensity: "Medium",
      icon: Mic
    },
    {
      id: 15,
      name: "Leadership Simulations",
      category: "strategic",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800",
      description: "Real-world leadership scenarios and decision-making",
      elqs: ["Decision Making", "Team Leadership", "Responsibility"],
      intensity: "High",
      icon: Target
    },
    {
      id: 16,
      name: "Team Building Games",
      category: "strategic",
      image: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=800",
      description: "Collaborative challenges strengthening bonds",
      elqs: ["Team Leadership", "Communication", "Adaptability"],
      intensity: "Medium",
      icon: Users
    }
  ];

  const categories = [
    { id: 'all', name: 'All Activities', icon: Sparkles },
    { id: 'adventure', name: 'Adventure', icon: Mountain },
    { id: 'creative', name: 'Creative & Expressive', icon: Palette },
    { id: 'strategic', name: 'Strategic', icon: Target },
    { id: 'mental', name: 'Mental Conditioning', icon: Heart }
  ];

  const filteredActivities = selectedCategory === 'all' 
    ? activities 
    : activities.filter(a => a.category === selectedCategory);

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
              Our <span className="text-[#6B8E23]">Activities</span>
            </h1>
            <p className="text-2xl text-gray-300">
              16+ Activities Designed to Transform Lives Through Experience
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From thrilling adventure sports to creative expression and mental conditioning - 
              every activity is precisely engineered to develop specific Elite Leadership Qualities
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50 sticky top-20 z-40 border-b-2 border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === cat.id
                      ? 'bg-[#6B8E23] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                  }`}
                >
                  <IconComponent size={20} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredActivities.map((activity) => {
              const IconComponent = activity.icon;
              return (
                <Card 
                  key={activity.id}
                  className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={activity.image}
                      alt={activity.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">
                      {activity.intensity} Intensity
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#6B8E23] to-[#556B2F] rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent size={20} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0A1F44] group-hover:text-[#6B8E23] transition-colors">
                        {activity.name}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {activity.description}
                    </p>
                    
                    <div className="space-y-2 pt-2 border-t border-gray-200">
                      <p className="text-xs font-bold text-[#0A1F44] uppercase">Develops:</p>
                      <div className="flex flex-wrap gap-2">
                        {activity.elqs.map((elq, idx) => (
                          <span 
                            key={idx}
                            className="bg-[#6B8E23]/10 text-[#6B8E23] px-2 py-1 rounded text-xs font-medium"
                          >
                            {elq}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#0A1F44] to-[#0D2A5C]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "16+", label: "Diverse Activities" },
              { number: "15", label: "ELQs Developed" },
              { number: "100%", label: "Experiential Learning" },
              { number: "3-7", label: "Days of Transformation" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#6B8E23] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Activities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-[#0A1F44]">
              Why This Diverse Activity Portfolio?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Different people respond to different challenges. Some discover courage through paragliding, 
              others through opening up in group sessions. Some build confidence on stage, others on mountain peaks. 
              We offer diverse pathways to the same destination: <strong>Elite Leadership</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#6B8E23] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mountain size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-[#0A1F44] mb-2">Physical Challenges</h3>
                  <p className="text-sm text-gray-600">Build courage, stamina, and mental toughness</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#6B8E23] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-[#0A1F44] mb-2">Creative Expression</h3>
                  <p className="text-sm text-gray-600">Develop communication and emotional intelligence</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#6B8E23] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-[#0A1F44] mb-2">Strategic Thinking</h3>
                  <p className="text-sm text-gray-600">Enhance decision-making and leadership</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0A1F44] to-[#0D2A5C]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Experience These Activities <span className="text-[#6B8E23]">At Manthan</span>
            </h2>
            <p className="text-xl text-gray-300">
              Each program combines multiple activities based on goals, duration, and participant readiness
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/programs">
                <Button className="bg-[#6B8E23] hover:bg-[#556B2F] text-white font-bold px-10 py-6 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  View Programs <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <a 
                href="https://wa.me/917009202340?text=Hi, I'd like to know more about Manthan activities and programs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0A1F44] font-bold px-10 py-6 text-lg rounded-lg">
                  Get Details on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivitiesPage;
