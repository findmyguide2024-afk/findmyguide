import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn, Images } from 'lucide-react';
import { categoryImages, getImageUrl } from '../mockData';

const GalleryCategoryPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const category = categoryImages[slug];

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [loaded, setLoaded] = useState({});
  const [failed, setFailed] = useState({});

  // Redirect to gallery if unknown slug
  useEffect(() => {
    if (!category) navigate('/gallery', { replace: true });
  }, [category, navigate]);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight')
        setLightboxIndex((i) => (i + 1) % category.images.length);
      if (e.key === 'ArrowLeft')
        setLightboxIndex((i) => (i - 1 + category.images.length) % category.images.length);
    },
    [lightboxIndex, category]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  if (!category) return null;

  const images = category.images.map((file) => ({
    file,
    url: getImageUrl(category.folder, file),
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0A1F44] to-[#0D2A5C] relative overflow-hidden">
        {/* decorative topographic lines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="topo" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M0 100 Q50 80,100 100 T200 100" stroke="white" strokeWidth="1" fill="none" />
                <path d="M0 120 Q50 100,100 120 T200 120" stroke="white" strokeWidth="1" fill="none" />
                <path d="M0 140 Q50 120,100 140 T200 140" stroke="white" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back button */}
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-[#6B8E23] hover:text-[#8FBC8F] font-semibold mb-8 transition-colors duration-200 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Gallery
          </Link>

          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="text-6xl mb-2">{category.emoji}</div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {category.label}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {category.description}
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mt-2">
              <Images size={16} />
              {images.length} {images.length === 1 ? 'Photo' : 'Photos'}
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {images.map(({ file, url }, idx) => (
              <div
                key={file}
                onClick={() => setLightboxIndex(idx)}
                className="break-inside-avoid relative overflow-hidden rounded-2xl shadow-md cursor-pointer group bg-gray-200"
                style={{ marginBottom: '1rem' }}
              >
                {/* skeleton while loading */}
                {!loaded[idx] && !failed[idx] && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse rounded-2xl" />
                )}

                {failed[idx] ? (
                  <div className="flex flex-col items-center justify-center h-48 bg-gray-100 rounded-2xl text-gray-400 gap-2">
                    <Images size={32} />
                    <span className="text-xs">Image not available</span>
                  </div>
                ) : (
                  <img
                    src={url}
                    alt={`${category.label} - photo ${idx + 1}`}
                    className={`w-full object-cover rounded-2xl transform group-hover:scale-105 transition-all duration-500 ${
                      loaded[idx] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setLoaded((p) => ({ ...p, [idx]: true }))}
                    onError={() => {
                      setFailed((p) => ({ ...p, [idx]: true }));
                      setLoaded((p) => ({ ...p, [idx]: true }));
                    }}
                    loading="lazy"
                  />
                )}

                {/* hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-4">
                  <div className="flex items-center gap-2 text-white">
                    <ZoomIn size={18} />
                    <span className="text-sm font-medium">View</span>
                  </div>
                </div>

                {/* photo number badge */}
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-white/10 hover:bg-white/20 rounded-full p-2"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i - 1 + images.length) % images.length);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i + 1) % images.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl w-full px-16 flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex].url}
              alt={`${category.label} - photo ${lightboxIndex + 1}`}
              className="max-h-[80vh] w-auto max-w-full rounded-xl shadow-2xl object-contain"
            />
            {/* Counter */}
            <p className="text-white/70 text-sm font-medium">
              {lightboxIndex + 1} / {images.length} &nbsp;·&nbsp; {category.emoji} {category.label}
            </p>

            {/* Thumbnail strip */}
            <div className="flex gap-2 overflow-x-auto max-w-full pb-1 scrollbar-none">
              {images.map(({ file, url: thumbUrl }, i) => (
                <button
                  key={file}
                  onClick={() => setLightboxIndex(i)}
                  className={`flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    i === lightboxIndex
                      ? 'border-[#6B8E23] scale-110'
                      : 'border-transparent opacity-50 hover:opacity-80'
                  }`}
                  aria-label={`Go to photo ${i + 1}`}
                >
                  <img
                    src={thumbUrl}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── CTA ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h2 className="text-3xl font-bold text-[#0A1F44]">Explore More Moments</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Browse all categories from our previous editions and relive the transformation.
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-[#6B8E23] hover:bg-[#556B2F] text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft size={18} />
            All Categories
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GalleryCategoryPage;
