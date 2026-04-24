import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
//  GALLERY CONFIGURATION
//  Each slot has a `prefix`. Name your images like: prefix_anything.jpg
//  Examples:
//    zipline_photo1.jpg     → Zip Line Challenge card
//    hiking_day2.jpeg       → Mountain Hiking card
//    bonfire_night.png      → Bonfire Circle card
//
//  Upload guide (folder → prefix list):
//
//  adventure/    : zipline_ | hiking_ | burma_ | group_
//  leadership/   : military_ | strategy_ | flag_ | command_
//  camp-life/    : bonfire_ | campsite_ | meals_ | spirit_
//  corporate/    : teambuilding_ | workshop_ | challenges_ | training_
//  awards/       : certificate_ | badges_ | celebration_ | graduation_
// ─────────────────────────────────────────────────────────────────────────────

const galleryConfig = [
  {
    category: "Manthan Junior - Adventure Activities",
    folder: "adventure",
    slots: [
      { prefix: "zipline",  title: "Zip Line Challenge",    description: "Students conquering their fears on the zip line" },
      { prefix: "hiking",   title: "Mountain Hiking",       description: "Team building through mountain trekking" },
      { prefix: "burma",    title: "Burma Bridge Crossing", description: "Developing balance and mental toughness" },
      { prefix: "group",    title: "Group Activities",      description: "Team coordination exercises" },
    ],
  },
  {
    category: "Manthan Junior - Leadership Training",
    folder: "leadership",
    slots: [
      { prefix: "military", title: "Military Planning Exercise", description: "Strategic thinking and decision making" },
      { prefix: "strategy", title: "Team Strategy Session",      description: "Collaborative problem solving" },
      { prefix: "flag",     title: "Capture the Flag",           description: "Strategic competition and teamwork" },
      { prefix: "command",  title: "Command Practice",           description: "Leadership skills in action" },
    ],
  },
  {
    category: "Manthan Junior - Camp Life",
    folder: "camp-life",
    slots: [
      { prefix: "bonfire",  title: "Bonfire Circle", description: "Evening reflection and bonding" },
      { prefix: "campsite", title: "Campsite Setup",  description: "Learning survival skills" },
      { prefix: "meals",    title: "Group Meals",     description: "Building camaraderie" },
      { prefix: "spirit",   title: "Team Spirit",     description: "Celebrating achievements together" },
    ],
  },
  {
    category: "Manthan Pro - Corporate Training",
    folder: "corporate",
    slots: [
      { prefix: "teambuilding", title: "Corporate Team Building", description: "Professional leadership development" },
      { prefix: "workshop",     title: "Strategy Workshop",       description: "Executive planning sessions" },
      { prefix: "challenges",   title: "Team Challenges",         description: "Collaborative problem solving" },
      { prefix: "training",     title: "Leadership Training",     description: "Building management skills" },
    ],
  },
  {
    category: "Award Ceremonies & Celebrations",
    folder: "awards",
    slots: [
      { prefix: "certificate", title: "Certificate Distribution", description: "Recognizing achievements" },
      { prefix: "badges",      title: "Elite Leadership Badges",  description: "Awarding ELQ achievements" },
      { prefix: "celebration", title: "Group Celebrations",       description: "Celebrating transformation" },
      { prefix: "graduation",  title: "Graduation Ceremony",      description: "Completing the journey" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  AUTO-SCAN via webpack require.context
//  Paths MUST be string literals — webpack resolves them at build time.
//  Adding an image to the folder + restarting dev server is enough.
// ─────────────────────────────────────────────────────────────────────────────

function loadCtx(ctx) {
  return ctx.keys().map((key) => ({
    src: ctx(key),
    filename: key.replace('./', '').toLowerCase(),
  }));
}

const categoryImages = {
  adventure:    loadCtx(require.context('../assets/gallery/adventure',  false, /\.(jpe?g|png|gif|webp)$/i)),
  leadership:   loadCtx(require.context('../assets/gallery/leadership', false, /\.(jpe?g|png|gif|webp)$/i)),
  'camp-life':  loadCtx(require.context('../assets/gallery/camp-life',  false, /\.(jpe?g|png|gif|webp)$/i)),
  corporate:    loadCtx(require.context('../assets/gallery/corporate',  false, /\.(jpe?g|png|gif|webp)$/i)),
  awards:       loadCtx(require.context('../assets/gallery/awards',     false, /\.(jpe?g|png|gif|webp)$/i)),
};

/** Returns all image src strings for a given folder + prefix */
function getSlotImages(folder, prefix) {
  return (categoryImages[folder] || [])
    .filter((img) => img.filename.startsWith(prefix.toLowerCase() + '_'))
    .map((img) => img.src);
}

// ─────────────────────────────────────────────────────────────────────────────
//  COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const GalleryPage = () => {
  const [lightbox, setLightbox] = useState(null); // { images: [], index: 0, title, description, category }

  // Build flat list of all real images across all categories for global lightbox nav
  const allLightboxImages = galleryConfig.flatMap((cat) =>
    cat.slots.flatMap((slot) =>
      getSlotImages(cat.folder, slot.prefix).map((src) => ({
        src,
        title: slot.title,
        description: slot.description,
        category: cat.category,
      }))
    )
  );

  const openLightbox = (src, title, description, category) => {
    const idx = allLightboxImages.findIndex((img) => img.src === src);
    setLightbox({ index: idx >= 0 ? idx : 0 });
  };

  const closeLightbox = () => setLightbox(null);

  const shiftLightbox = (dir) => {
    setLightbox((prev) => ({
      index: (prev.index + dir + allLightboxImages.length) % allLightboxImages.length,
    }));
  };

  const current = lightbox !== null ? allLightboxImages[lightbox.index] : null;

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0A1F44] to-[#0D2A5C] relative overflow-hidden">
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

      {/* ── Upload Guide Banner ──────────────────────────────────────────── */}
      <section className="py-10 bg-[#6B8E23]/10 border-b border-[#6B8E23]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <ImageIcon className="text-[#6B8E23]" size={28} />
              <h3 className="text-xl font-bold text-[#0A1F44]">How to Add Your Photos</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-sm text-center">
              {[
                { folder: "adventure/",   prefixes: "zipline_ · hiking_ · burma_ · group_" },
                { folder: "leadership/",  prefixes: "military_ · strategy_ · flag_ · command_" },
                { folder: "camp-life/",   prefixes: "bonfire_ · campsite_ · meals_ · spirit_" },
                { folder: "corporate/",   prefixes: "teambuilding_ · workshop_ · challenges_ · training_" },
                { folder: "awards/",      prefixes: "certificate_ · badges_ · celebration_ · graduation_" },
              ].map(({ folder, prefixes }) => (
                <div key={folder} className="bg-white rounded-lg p-3 shadow-sm border border-[#6B8E23]/20">
                  <p className="font-mono font-bold text-[#0A1F44] text-xs mb-1">📁 gallery/{folder}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{prefixes}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">
              Drop your photo named <code className="bg-white px-1 rounded border text-[#6B8E23] font-mono">prefix_anything.jpg</code> into the matching folder → it auto-renders in the placeholder ✅
            </p>
          </div>
        </div>
      </section>

      {/* ── Gallery Grid ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {galleryConfig.map((cat) => (
            <div key={cat.folder} className="mb-16">
              <h2 className="text-3xl font-bold text-[#0A1F44] mb-8">{cat.category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.slots.map((slot) => {
                  const images = getSlotImages(cat.folder, slot.prefix);
                  const hasImages = images.length > 0;
                  const primarySrc = hasImages ? images[0] : null;

                  return (
                    <Card
                      key={slot.prefix}
                      className={`border-0 shadow-lg overflow-hidden group ${hasImages ? 'hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer' : 'opacity-80'}`}
                      onClick={() => hasImages && openLightbox(primarySrc, slot.title, slot.description, cat.category)}
                    >
                      <div className="relative overflow-hidden aspect-square bg-gray-100">
                        {hasImages ? (
                          <>
                            <img
                              src={primarySrc}
                              alt={slot.title}
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Multiple images badge */}
                            {images.length > 1 && (
                              <div className="absolute top-2 right-2 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded-full">
                                +{images.length - 1} more
                              </div>
                            )}
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                <h3 className="font-bold text-lg mb-1">{slot.title}</h3>
                                <p className="text-sm text-gray-200">{slot.description}</p>
                              </div>
                            </div>
                          </>
                        ) : (
                          /* ── Empty slot placeholder ── */
                          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-gray-50 to-gray-100">
                            <div className="w-14 h-14 rounded-full bg-[#6B8E23]/10 flex items-center justify-center mb-3">
                              <ImageIcon className="text-[#6B8E23]/50" size={28} />
                            </div>
                            <p className="text-sm font-semibold text-gray-500">{slot.title}</p>
                            <p className="text-xs text-gray-400 mt-1">
                              Add <span className="font-mono text-[#6B8E23]">{slot.prefix}_*.jpg</span>
                            </p>
                            <p className="text-xs text-gray-400">to <span className="font-mono">gallery/{cat.folder}/</span></p>
                          </div>
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      {current && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X size={32} />
          </button>

          {allLightboxImages.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); shiftLightbox(-1); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-white/10 rounded-full p-3 transition-colors"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); shiftLightbox(1); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-white/10 rounded-full p-3 transition-colors"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.src}
              alt={current.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-6 text-center">
              <h3 className="text-white text-2xl font-bold mb-2">{current.title}</h3>
              <p className="text-gray-300 text-lg mb-1">{current.description}</p>
              <p className="text-gray-400 text-sm">{current.category}</p>
              {allLightboxImages.length > 1 && (
                <p className="text-gray-500 text-xs mt-2">
                  {lightbox.index + 1} / {allLightboxImages.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Share Photos CTA ─────────────────────────────────────────────── */}
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
