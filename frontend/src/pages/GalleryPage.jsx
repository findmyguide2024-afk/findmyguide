import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Images } from 'lucide-react';
import { categoryImages, getImageUrl } from '../mockData';

const GalleryPage = () => {
  const categories = Object.entries(categoryImages); // [slug, data]

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0A1F44] to-[#0D2A5C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="topo-gallery" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M0 100 Q50 80,100 100 T200 100" stroke="white" strokeWidth="1" fill="none" />
                <path d="M0 120 Q50 100,100 120 T200 120" stroke="white" strokeWidth="1" fill="none" />
                <path d="M0 140 Q50 120,100 140 T200 140" stroke="white" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo-gallery)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Previous Edition <span className="text-[#6B8E23]">Moments</span>
            </h1>
            <p className="text-2xl text-gray-300">
              Capturing transformation, growth, and leadership in action
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              <Images size={16} />
              {categories.length} categories · {categories.reduce((acc, [, c]) => acc + c.images.length, 0)} photos
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Grid ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0A1F44] mb-3">Browse by Category</h2>
            <div className="w-24 h-1 bg-[#6B8E23] mx-auto" />
            <p className="text-gray-500 mt-4 text-lg">
              Click any category to explore all the photos from that activity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map(([slug, cat]) => {
              // pick the first image as the cover
              const coverFile = cat.images[0];
              const coverUrl = getImageUrl(cat.folder, coverFile);

              return (
                <Link
                  key={slug}
                  to={`/gallery/${slug}`}
                  className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
                >
                  {/* Cover image */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-gray-200">
                    <img
                      src={coverUrl}
                      alt={cat.label}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Emoji badge */}
                    <div className="absolute top-3 left-3 text-3xl drop-shadow-lg">
                      {cat.emoji}
                    </div>

                    {/* Photo count badge */}
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-full">
                      <Images size={12} />
                      {cat.images.length}
                    </div>

                    {/* Category title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-bold text-xl leading-tight mb-1">
                        {cat.label}
                      </h3>
                      <p className="text-gray-300 text-xs line-clamp-2 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="px-4 py-3 flex items-center justify-between bg-white">
                    <span className="text-[#6B8E23] text-sm font-semibold">
                      {cat.images.length} photos
                    </span>
                    <span className="flex items-center gap-1 text-[#0A1F44] text-sm font-bold group-hover:text-[#6B8E23] transition-colors duration-200">
                      View All
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform duration-200"
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Share CTA ── */}
      <section className="py-20 bg-white">
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
