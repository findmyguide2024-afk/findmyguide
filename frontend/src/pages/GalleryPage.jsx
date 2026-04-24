import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Helper to safely load local images from src/assets/gallery based on name
  let galleryCtx = null;
  try {
    galleryCtx = require.context('../assets/gallery', true, /\.(png|jpe?g|svg|webp|gif)$/i);
  } catch (e) {
    // Ignore if folder doesn't exist yet
  }

  const getLocalImg = (folder, name, fallback) => {
    if (galleryCtx) {
      const keys = galleryCtx.keys();
      // Look for a file in the specific folder with the given name (ignoring extension)
      const match = keys.find(k => k.toLowerCase().includes(`/${folder}/${name.toLowerCase()}.`));
      if (match) return galleryCtx(match);
    }
    return fallback;
  };

  // Placeholder gallery - You can replace with actual images
  const galleryCategories = [
    {
      category: "Manthan Junior - Adventure Activities",
      images: [
        {
          url: getLocalImg("adventure", "zipline", "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800"),
          title: "Zip Line Challenge",
          description: "Students conquering their fears on the zip line"
        },
        {
          url: getLocalImg("adventure", "hiking", "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800"),
          title: "Mountain Hiking",
          description: "Team building through mountain trekking"
        },
        {
          url: getLocalImg("adventure", "burma", "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800"),
          title: "Burma Bridge Crossing",
          description: "Developing balance and mental toughness"
        },
        {
          url: getLocalImg("adventure", "group", "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=800"),
          title: "Group Activities",
          description: "Team coordination exercises"
        }
      ]
    },
    {
      category: "Manthan Junior - Leadership Training",
      images: [
        {
          url: getLocalImg("leadership", "military", "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800"),
          title: "Military Planning Exercise",
          description: "Strategic thinking and decision making"
        },
        {
          url: getLocalImg("leadership", "strategy", "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800"),
          title: "Team Strategy Session",
          description: "Collaborative problem solving"
        },
        {
          url: getLocalImg("leadership", "flag", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800"),
          title: "Capture the Flag",
          description: "Strategic competition and teamwork"
        },
        {
          url: getLocalImg("leadership", "command", "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800"),
          title: "Command Practice",
          description: "Leadership skills in action"
        }
      ]
    },
    {
      category: "Manthan Junior - Camp Life",
      images: [
        {
          url: getLocalImg("camp-life", "bonfire", "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800"),
          title: "Bonfire Circle",
          description: "Evening reflection and bonding"
        },
        {
          url: getLocalImg("camp-life", "campsite", "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800"),
          title: "Campsite Setup",
          description: "Learning survival skills"
        },
        {
          url: getLocalImg("camp-life", "meals", "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800"),
          title: "Group Meals",
          description: "Building camaraderie"
        },
        {
          url: getLocalImg("camp-life", "spirit", "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800"),
          title: "Team Spirit",
          description: "Celebrating achievements together"
        }
      ]
    },
    {
      category: "Manthan Pro - Corporate Training",
      images: [
        {
          url: getLocalImg("corporate", "teambuilding", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"),
          title: "Corporate Team Building",
          description: "Professional leadership development"
        },
        {
          url: getLocalImg("corporate", "workshop", "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"),
          title: "Strategy Workshop",
          description: "Executive planning sessions"
        },
        {
          url: getLocalImg("corporate", "challenges", "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=800"),
          title: "Team Challenges",
          description: "Collaborative problem solving"
        },
        {
          url: getLocalImg("corporate", "training", "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800"),
          title: "Leadership Training",
          description: "Building management skills"
        }
      ]
    },
    {
      category: "Award Ceremonies & Celebrations",
      images: [
        {
          url: getLocalImg("awards", "certificate", "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800"),
          title: "Certificate Distribution",
          description: "Recognizing achievements"
        },
        {
          url: getLocalImg("awards", "badges", "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800"),
          title: "Elite Leadership Badges",
          description: "Awarding ELQ achievements"
        },
        {
          url: getLocalImg("awards", "celebration", "https://images.unsplash.com/photo-1530099486328-e021101a494a?w=800"),
          title: "Group Celebrations",
          description: "Celebrating transformation"
        },
        {
          url: getLocalImg("awards", "graduation", "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800"),
          title: "Graduation Ceremony",
          description: "Completing the journey"
        }
      ]
    }
  ];

  const allImages = galleryCategories.flatMap(cat => 
    cat.images.map(img => ({ ...img, category: cat.category }))
  );

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % allImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

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
              Previous Edition <span className="text-[#6B8E23]">Moments</span>
            </h1>
            <p className="text-2xl text-gray-300">
              Capturing transformation, growth, and leadership in action
            </p>
          </div>
        </div>
      </section>

      {/* Upload Notice */}
      <section className="py-12 bg-[#6B8E23]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <ImageIcon className="text-[#6B8E23]" size={32} />
              <h3 className="text-2xl font-bold text-[#0A1F44]">Gallery Coming Soon</h3>
            </div>
            <p className="text-gray-700 text-lg">
              We're currently uploading high-quality photographs from our previous editions. 
              Below are representative images showing the types of activities and moments we capture at Manthan.
            </p>
            <p className="text-gray-600 mt-4">
              <strong>Note:</strong> These placeholder images will be replaced with actual photographs from Manthan programs. 
              Please contact us to upload your edition photos.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {galleryCategories.map((category, categoryIdx) => (
            <div key={categoryIdx} className="mb-16">
              <h2 className="text-3xl font-bold text-[#0A1F44] mb-8">{category.category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.images.map((image, imageIdx) => {
                  const globalIndex = galleryCategories
                    .slice(0, categoryIdx)
                    .reduce((acc, cat) => acc + cat.images.length, 0) + imageIdx;
                  
                  return (
                    <Card 
                      key={imageIdx}
                      className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden group"
                      onClick={() => openLightbox(image, globalIndex)}
                    >
                      <div className="relative overflow-hidden aspect-square">
                        <img 
                          src={image.url} 
                          alt={image.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                            <p className="text-sm text-gray-200">{image.description}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X size={32} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-white/10 rounded-full p-3"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-white/10 rounded-full p-3"
          >
            <ChevronRight size={32} />
          </button>

          <div className="max-w-6xl w-full">
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-6 text-center">
              <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300 text-lg mb-1">{selectedImage.description}</p>
              <p className="text-gray-400 text-sm">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* Upload Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-[#0A1F44]">
              Want to Add Your Edition Photos?
            </h2>
            <p className="text-xl text-gray-600">
              If you have photographs from previous Manthan editions that you'd like to share, 
              please contact us. We'd love to showcase the transformation moments from all our programs.
            </p>
            <a 
              href="https://wa.me/917009202340?text=Hi, I have photos from a previous Manthan edition that I'd like to share for the gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#6B8E23] hover:bg-[#556B2F] text-white font-bold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Share Photos via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
