import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';

const ActivityToELQPage = () => {
  const activityMapping = [
    {
      category: "Adventure Activities",
      color: "from-orange-500 to-red-600",
      activities: [
        {
          name: "Zip Line",
          description: "High-speed aerial descent challenge",
          elqs: [
            { name: "Courage & Fearlessness", impact: "Face heights and take calculated risks" },
            { name: "Mental Toughness", impact: "Push through fear and complete the challenge" },
            { name: "Confidence", impact: "Build self-belief through achievement" }
          ]
        },
        {
          name: "Mountain Hiking",
          description: "Endurance trek through challenging terrain",
          elqs: [
            { name: "Physical & Mental Toughness", impact: "Sustain effort over extended periods" },
            { name: "Team Leadership", impact: "Support and motivate peers during difficult climbs" },
            { name: "Discipline", impact: "Maintain pace and follow safety protocols" }
          ]
        },
        {
          name: "Burma Bridge",
          description: "Balance and coordination challenge on rope bridge",
          elqs: [
            { name: "Mental Toughness", impact: "Stay focused despite instability" },
            { name: "Courage", impact: "Cross challenging obstacles" },
            { name: "Resilience & Grit", impact: "Persist even when balance wavers" }
          ]
        },
        {
          name: "Rope Cycling",
          description: "Cycling on suspended ropes requiring balance and control",
          elqs: [
            { name: "Confidence", impact: "Trust your abilities in unfamiliar situations" },
            { name: "Resilience", impact: "Recover quickly from mistakes" },
            { name: "Adaptability", impact: "Adjust technique based on conditions" }
          ]
        }
      ]
    },
    {
      category: "Leadership & Strategy",
      color: "from-[#6B8E23] to-[#556B2F]",
      activities: [
        {
          name: "Military Planning Exercise",
          description: "Strategic mission planning under time pressure",
          elqs: [
            { name: "Decision Making", impact: "Make quality decisions quickly with limited information" },
            { name: "Team Leadership", impact: "Coordinate team members toward a common goal" },
            { name: "Initiative & Drive", impact: "Take charge and drive execution" }
          ]
        },
        {
          name: "Capture the Flag",
          description: "Team-based strategic competition",
          elqs: [
            { name: "Situational Awareness", impact: "Read the field and anticipate opponent moves" },
            { name: "Communication Skills", impact: "Coordinate strategy with team in real-time" },
            { name: "Problem Solving", impact: "Develop tactics to achieve objectives" }
          ]
        },
        {
          name: "Command & Control Drills",
          description: "Leadership exercises under pressure",
          elqs: [
            { name: "Team Leadership", impact: "Direct and coordinate team actions" },
            { name: "Decision Making", impact: "Make rapid decisions under stress" },
            { name: "Responsibility", impact: "Own outcomes of your leadership decisions" }
          ]
        }
      ]
    },
    {
      category: "Survival & Practical Skills",
      color: "from-blue-500 to-blue-600",
      activities: [
        {
          name: "Shelter Building & Tent Pitching",
          description: "Build shelter with limited resources",
          elqs: [
            { name: "Problem Solving", impact: "Work with available materials creatively" },
            { name: "Adaptability", impact: "Adjust plans based on terrain and conditions" },
            { name: "Team Leadership", impact: "Organize and delegate tasks efficiently" }
          ]
        },
        {
          name: "Emergency Food Cooking",
          description: "Night mission to prepare food under constraints",
          elqs: [
            { name: "Resourcefulness", impact: "Make do with limited supplies" },
            { name: "Courage", impact: "Execute tasks in challenging night conditions" },
            { name: "Responsibility", impact: "Complete essential tasks for team welfare" }
          ]
        },
        {
          name: "Best Out of Waste Activity",
          description: "Create useful items from discarded materials",
          elqs: [
            { name: "Problem Solving", impact: "Think creatively with constraints" },
            { name: "Adaptability", impact: "Find new uses for existing resources" },
            { name: "Initiative", impact: "Proactively identify solutions" }
          ]
        }
      ]
    },
    {
      category: "Mental Conditioning & Self-Awareness",
      color: "from-purple-500 to-purple-600",
      activities: [
        {
          name: "Mental Health & Self-Awareness Session",
          description: "Understanding emotions and mental wellness",
          elqs: [
            { name: "Emotional Intelligence", impact: "Recognize and manage your emotions" },
            { name: "Self-Control", impact: "Regulate responses to stress and pressure" },
            { name: "Integrity & Ethics", impact: "Understand your values and principles" }
          ]
        },
        {
          name: "Reflection & Journaling",
          description: "Personal time to process experiences and learnings",
          elqs: [
            { name: "Self-Awareness", impact: "Understand your reactions and growth areas" },
            { name: "Emotional Intelligence", impact: "Process emotions constructively" },
            { name: "Responsibility", impact: "Own your development journey" }
          ]
        },
        {
          name: "Courage Circle (Bonfire)",
          description: "Sharing fears and aspirations in a supportive environment",
          elqs: [
            { name: "Courage", impact: "Be vulnerable and authentic" },
            { name: "Communication Skills", impact: "Express thoughts and feelings clearly" },
            { name: "Emotional Intelligence", impact: "Connect with peers on a deeper level" }
          ]
        }
      ]
    },
    {
      category: "Group Dynamics & Communication",
      color: "from-pink-500 to-red-500",
      activities: [
        {
          name: "Ice-Breaker Games & Trust Walk",
          description: "Build trust and connection among team members",
          elqs: [
            { name: "Communication Skills", impact: "Engage openly with new people" },
            { name: "Emotional Intelligence", impact: "Read social cues and respond appropriately" },
            { name: "Team Leadership", impact: "Support others through unfamiliar situations" }
          ]
        },
        {
          name: "Group Challenges",
          description: "Collaborative problem-solving tasks",
          elqs: [
            { name: "Team Leadership", impact: "Coordinate diverse perspectives" },
            { name: "Communication Skills", impact: "Listen actively and share ideas" },
            { name: "Adaptability", impact: "Adjust to different team styles" }
          ]
        },
        {
          name: "Peer Bonding Games",
          description: "Fun activities designed to strengthen relationships",
          elqs: [
            { name: "Emotional Intelligence", impact: "Build empathy and understanding" },
            { name: "Communication Skills", impact: "Connect authentically with peers" },
            { name: "Team Dynamics", impact: "Contribute to positive group energy" }
          ]
        }
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
              How Activities <span className="text-[#6B8E23]">Transform Lives</span>
            </h1>
            <p className="text-2xl text-gray-300">
              Every activity is engineered to develop specific Elite Leadership Qualities
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-12 space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6B8E23] to-[#556B2F] rounded-2xl flex items-center justify-center">
                    <Zap size={32} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#0A1F44]">
                    The Science of Transformation
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Manthan, we don't believe in random activities or generic team-building exercises. 
                  <strong className="text-[#6B8E23]"> Every single activity is precisely engineered</strong> to develop 
                  one or more of the 15 Elite Leadership Qualities.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  When a student conquers the zip line, they're not just having fun—they're conditioning their brain to 
                  overcome fear, build courage, and develop mental toughness. When teams work on survival training, 
                  they're developing problem-solving, adaptability, and responsibility.
                </p>
                <div className="bg-[#6B8E23]/10 border-l-4 border-[#6B8E23] p-6 rounded-r-xl">
                  <p className="text-[#0A1F44] font-semibold text-lg italic">
                    "We condition the mind through experience, not lectures. Every challenge, every activity, 
                    every moment is a deliberate step in the transformation journey."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activity Mapping */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
              Activity-to-Quality Mapping
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exactly which ELQs each activity develops and how transformation happens
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-16">
            {activityMapping.map((category, categoryIdx) => (
              <div key={categoryIdx}>
                {/* Category Header */}
                <div className="mb-8">
                  <div className={`inline-block bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-full font-bold text-lg mb-4`}>
                    {category.category}
                  </div>
                </div>

                {/* Activities Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.activities.map((activity, activityIdx) => (
                    <Card key={activityIdx} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                      <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                      <CardContent className="p-8 space-y-6">
                        {/* Activity Header */}
                        <div>
                          <h3 className="text-2xl font-bold text-[#0A1F44] mb-2">{activity.name}</h3>
                          <p className="text-gray-600 italic">{activity.description}</p>
                        </div>

                        {/* ELQs Developed */}
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2 mb-3">
                            <Zap size={20} className="text-[#6B8E23]" />
                            <span className="font-bold text-[#0A1F44] text-sm uppercase">ELQs Developed:</span>
                          </div>
                          {activity.elqs.map((elq, elqIdx) => (
                            <div key={elqIdx} className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#6B8E23]">
                              <div className="flex items-start space-x-3">
                                <CheckCircle2 size={18} className="text-[#6B8E23] mt-0.5 flex-shrink-0" />
                                <div>
                                  <h4 className="font-bold text-[#0A1F44] mb-1">{elq.name}</h4>
                                  <p className="text-sm text-gray-600">{elq.impact}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Transformation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0A1F44] mb-4">
                Real Transformation Example
              </h2>
              <p className="text-xl text-gray-600">
                How one student's 3-day journey developed multiple ELQs
              </p>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0A1F44] mb-4">Meet Rahul - Class 10 Student</h3>
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-4">
                      <p className="font-semibold text-red-600 mb-2">BEFORE MANTHAN:</p>
                      <p className="text-gray-700">Hesitant to speak in class, avoided group activities, low self-confidence, reactive under pressure</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-[#0A1F44] text-lg">His 3-Day Transformation Journey:</h4>
                    
                    <div className="pl-6 border-l-4 border-[#6B8E23] space-y-4">
                      <div>
                        <p className="font-semibold text-[#6B8E23]">Day 1 - Zip Line Challenge</p>
                        <p className="text-gray-700 text-sm">Developed: <strong>Courage</strong> (faced fear of heights), <strong>Mental Toughness</strong> (pushed through initial fear), <strong>Confidence</strong> (achieved something he thought impossible)</p>
                      </div>

                      <div>
                        <p className="font-semibold text-[#6B8E23]">Day 2 - Military Planning Exercise</p>
                        <p className="text-gray-700 text-sm">Developed: <strong>Decision Making</strong> (had to think quickly), <strong>Team Leadership</strong> (took charge of a squad), <strong>Communication Skills</strong> (coordinated with peers)</p>
                      </div>

                      <div>
                        <p className="font-semibold text-[#6B8E23]">Day 2 - Survival Training</p>
                        <p className="text-gray-700 text-sm">Developed: <strong>Problem Solving</strong> (built shelter creatively), <strong>Adaptability</strong> (worked with limited resources), <strong>Responsibility</strong> (team depended on his contribution)</p>
                      </div>

                      <div>
                        <p className="font-semibold text-[#6B8E23]">Day 3 - Final Leadership Challenge</p>
                        <p className="text-gray-700 text-sm">Developed: <strong>Situational Awareness</strong> (read the competition dynamics), <strong>Initiative</strong> (volunteered to lead), <strong>Resilience</strong> (stayed calm despite setbacks)</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                    <p className="font-semibold text-green-600 mb-2">AFTER MANTHAN:</p>
                    <p className="text-gray-700">Now volunteers to lead class presentations, actively participates in group projects, confident in his abilities, stays calm and composed under exam pressure</p>
                  </div>

                  <div className="bg-[#6B8E23]/10 p-6 rounded-xl text-center">
                    <p className="text-lg font-bold text-[#0A1F44] mb-2">ELQs Significantly Developed:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {["Courage", "Confidence", "Decision Making", "Team Leadership", "Communication", "Problem Solving", "Responsibility", "Resilience", "Initiative"].map((elq, idx) => (
                        <span key={idx} className="bg-[#6B8E23] text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {elq}
                        </span>
                      ))}
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
              Experience <span className="text-[#6B8E23]">Engineered Transformation</span>
            </h2>
            <p className="text-xl text-gray-300">
              Every activity is designed with purpose. Every challenge builds specific qualities. 
              Join Manthan and experience systematic leadership development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/contact">
                <Button className="bg-[#6B8E23] hover:bg-[#556B2F] text-white font-bold px-10 py-6 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  Apply Now <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/day-at-manthan">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0A1F44] font-bold px-10 py-6 text-lg rounded-lg">
                  View Daily Schedule
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivityToELQPage;
