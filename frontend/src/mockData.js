// Mock data for Manthan Leadership Development Website

export const programs = [
  {
    id: 1,
    name: "Manthan Junior",
    tagline: "Brain Conditioning Boot Camp for Future Leaders",
    age: "Class 5-12 (Ages 10-18)",
    format: ["3 Days / 2 Nights"],
    audience: "School children aged 10-18",
    groupSize: "20-100 Students",
    description: "A powerful 3-day, 2-night residential boot camp designed exclusively for school children that transforms a fun school trip into a structured leadership development programme. We prepare children not just for exams — but for life.",
    activities: [
      "Paragliding - Soar through skies, conquer fear of heights",
      "River Rafting - Navigate rapids, build team coordination",
      "Mountain Trekking - Multi-day endurance challenges",
      "Zip Line & Burma Bridge - Aerial confidence builders",
      "Rock Climbing & Rappelling - Vertical problem solving",
      "Surfing & Water Sports - Balance and adaptability training",
      "Military Planning Exercise & Capture the Flag",
      "Survival Training - Shelter building, tent pitching, emergency cooking",
      "Best Out of Waste - Creative problem solving",
      "Drama & Skits - Expression and communication development",
      "Talent Showcase - Confidence through performance",
      "Opening Up Sessions - Emotional intelligence and vulnerability",
      "Group Discussions & Debates - Critical thinking",
      "Bonfire Courage Circle - Sharing fears and aspirations",
      "Cultural Performances - Dance, music, expression",
      "Mental Health & Self-Awareness Sessions"
    ],
    outcomes: [
      "Bold, confident & action-oriented (from hesitant & low confidence)",
      "Takes ownership & leads by example (from avoids responsibility)",
      "Thrives in teams & motivates peers (from struggles in group settings)",
      "Calm, decisive & composed under pressure (from reactive & impulsive)",
      "Clear leadership identity & purpose (from no sense of leadership)",
      "Self-driven & internally motivated (from dependent on validation)"
    ],
    price: null, // Contact for quote
    whatsappMessage: "Hi, I'm interested in Manthan Junior program. Can you share the pricing and availability details?",
    featured: true,
    dayStructure: [
      {
        day: "Day 1: IGNITE",
        activities: "Welcome, Orientation & Team Formation · Ice-Breaker Games & Trust Walk · Zip Line & Burma Bridge Session · Mental Health & Self-Awareness Session · Bonfire: Storytelling & Courage Circle"
      },
      {
        day: "Day 2: FORGE",
        activities: "Mountain Hiking · Military Planning Exercise · Capture the Flag Challenge · Survival Training: Shelter & Tent Pitching · Night Mission: Emergency Food Cooking"
      },
      {
        day: "Day 3: RISE",
        activities: "Rope Cycling · Best Out of Waste Activity · Final Leadership Challenge (Team vs Team) · Award Ceremony — Elite Leadership Badges & Certificates · Commitment Pledge & camp photographs"
      }
    ]
  },
  {
    id: 2,
    name: "Manthan Pro",
    tagline: "Corporate Leadership Transformation",
    age: "Professionals & Teams",
    format: ["2-3 Days Corporate Training"],
    audience: "Working professionals, teams, and managers",
    description: "High-impact corporate training that transforms team dynamics and builds leadership capabilities through real-world simulations and pressure scenarios.",
    activities: [
      "Leadership under pressure simulations",
      "Team coordination challenges",
      "Decision-making under constraints",
      "Cross-functional collaboration tasks",
      "Performance-based assessments"
    ],
    outcomes: [
      "Enhanced decision-making under pressure",
      "Improved team dynamics",
      "Stronger leadership presence",
      "Accountability mindset",
      "Real-world problem-solving skills"
    ],
    price: null, // Contact for quote
    whatsappMessage: "Hi, I'm interested in Manthan Pro corporate training. Can you share the pricing and customization details?",
    featured: false
  },
  {
    id: 3,
    name: "Manthan Elite",
    tagline: "The Ultimate Transformation Experience",
    age: "16+ years",
    format: ["7-Day Intensive Bootcamp"],
    audience: "Serious individuals seeking deep transformation",
    description: "Our flagship 7-day residential program that delivers complete personality transformation through intensive conditioning, pushing participants beyond their perceived limits.",
    activities: [
      "High-intensity daily progression",
      "Real-life leadership simulations",
      "Mental toughness conditioning",
      "Performance-based feedback",
      "Individual breakthrough sessions",
      "Advanced ELQ mastery modules"
    ],
    outcomes: [
      "Deep personality transformation",
      "Complete ELQ mastery",
      "Unbreakable mental toughness",
      "Elite leadership capabilities",
      "High self-confidence and presence"
    ],
    price: null, // Contact for quote
    whatsappMessage: "Hi, I'm interested in Manthan Elite 7-day bootcamp. Can you share the pricing and next batch details?",
    featured: true
  }
];

export const elqs = [
  { name: "Courage & Fearlessness", description: "Face challenges head-on with bravery and determination" },
  { name: "Discipline & Punctuality", description: "Maintain structure, order, and respect for time" },
  { name: "Decision Making", description: "Make quality decisions quickly and effectively" },
  { name: "Team Leadership", description: "Lead groups toward common goals with confidence" },
  { name: "Communication Skills", description: "Express ideas clearly and listen actively" },
  { name: "Emotional Intelligence", description: "Understand and manage emotions in self and others" },
  { name: "Problem Solving", description: "Find creative solutions to complex challenges" },
  { name: "Resilience & Grit", description: "Bounce back from setbacks and persist through difficulties" },
  { name: "Adaptability", description: "Adjust effectively to changing circumstances" },
  { name: "Responsibility", description: "Own outcomes and follow through on commitments" },
  { name: "Situational Awareness", description: "Read environments and respond appropriately" },
  { name: "Confidence", description: "Believe in your abilities and act with certainty" },
  { name: "Initiative & Drive", description: "Take action proactively without being told" },
  { name: "Integrity & Ethics", description: "Act with honesty and strong moral principles" },
  { name: "Physical & Mental Toughness", description: "Endure challenges with strength and resilience" }
];

export const testimonials = [
  {
    id: 1,
    name: "Karan",
    age: 22,
    role: "Chess Master",
    program: "Manthan Leadership",
    image: "/images/IMG_0738.jpeg",
    quote: "Thankyou so much Rajeev sir, Priya Negi for giving us such a great opportunity... The eternal bond we have created here is captured in the photos & videos... The lifelong learnings, our friendship and the new experiences really helped to emerge a leader out of us... ❤️"
  },
  {
    id: 2,
    name: "Kanhaiya",
    age: 16,
    role: "Student",
    program: "Manthan Leadership",
    image: "/images/IMG_0732.jpeg",
    quote: "My trek and stay were truly unforgettable, thanks to the excellent organization and warm hospitality. I cherish the time spent with the tribe and the new friendships formed. Thank you to everyone involved for a wonderful experience!"
  },
  {
    id: 3,
    name: "Sanjeev",
    age: 24,
    role: "Software Developer",
    program: "Manthan Leadership",
    image: "/images/WhatsApp Image 2026-04-09 at 22.22.44.jpeg",
    quote: "\"In group trips you find friendships but in solo trips you find yourself\" This is what I used to say and believe until I came to MANTHAN. When Rajiv Sir said that \"It's not solo trips but the group trips that make you explore yourself.\", It actually made me introspect what I've been believing and yes I was proven wrong. MANTHAN actually helped me to MANTHAN within myself and helped me connect with a true version of myself. And the real reason why it happened because the real intention behind it has always been pure. It was not just a trip program made for milking the tourists, It was truly made with a purpose so every person who became part of it can explore themselves and I will always be thankful to Sir and Priya Negi Ma'am for that. It's your intention and plan that brings up 15 amazing individuals together and each and everyone has taught me so many things which will help me throughout my life. In today's world it is not easy to have such a perfect company where each and everyone is full of positivity and uniqueness and it only happened because the leaders who brought this program had a kind and meaningful purpose and that's why the universe did this magic to bring this amazing group together. And not just the people but even nature was helping all of us to explore. During the trek many obstacles came but each and every obstacle helped us to explore ourselves. And on 12th June beside all the obstacles we pitch the camp and cooked the most wonderful dinner we've ever tested and in the end we were all having fun sitting and standing bare footed in the meadow, beside the very next day we found 3 black scorpions along the trek and near our campsite. It was not just a coincidence and here it was the universe who was playing along side with all of us. It not only taught us so many things by those obstacles but also protected us when we were all having fun and enjoying. And the only reason it happened because the purpose and intention Rajiv Sir and Priya Ma'am came up with it brought these all things together and the universe became a player in it and that's why we all learned and explored ourselves."
  },
  {
    id: 4,
    name: "Lokendra",
    age: 27,
    role: "Toastmaster Convenor",
    program: "Manthan Leadership",
    image: "/images/IMG_0730.jpeg",
    quote: "Thank you all for making my first trip so special and full of fun!🥹🌸🌸 From swimming in the waterfall to the camp trip that maggie to that late night couple dance—every moment was amazing. I’ve made beautiful memories and met some really great people. Hope we meet again on another trip soon!💗🥂"
  },
  {
    id: 5,
    name: "Shivani",
    age: 22,
    role: "Engineering Student",
    program: "Manthan Leadership",
    image: "/images/WhatsApp Image 2026-04-09 at 22.21.16.jpeg",
    quote: "So guys, this journey was honestly something special. We learned so much, met some amazing people, and made memories that’ll stick around for a long time. Really appreciated the vibe and leadership of @Rajeev sir—a genuinely inspiring guy. And somewhere along the way, I met @~Priyanshu⚔️🇮🇳 on this trek… didn’t expect to, but ended up finding a brother in him. Grateful for that bond. Good friends, good energy, and even better people. Big shoutout to everyone who was a part of this ride—you all made it unforgettable. 🙌"
  },
  {
    id: 6,
    name: "Anshum",
    age: 28,
    role: "Data Science Teacher",
    program: "Manthan Leadership",
    image: "/images/IMG_0631.jpeg",
    quote: "Thank you sir , Priya Negi mam, Elite leadership guide mam, Mansi bhai for the awesome camp 😎🤍 and others for the lovely days 🤍 Will miss you all.. until next time✨ Happy Journey Everyone 😊✨ Wishing you all great years ahead 😎 🤜🏻🤛🏻"
  },
  {
    id: 7,
    name: "Nitin K",
    age: 32,
    role: "IT Professional & Paper Craft Artist",
    program: "Manthan Leadership",
    image: "/images/WhatsApp Image 2026-04-09 at 22.19.48 (1).jpeg",
    quote: "So very nice to be part of this great experience, this camp pushed me to explore the hidden strength inside me. Going back with a lot of new memories and friends. Would love to meet all of you again soon. Thanks again to Rajeev sir, Priya Negi ma'am for this great event. Waiting for the next meeting."
  },
  {
    id: 8,
    name: "Srinivasan",
    age: 24,
    role: "Software Engineer",
    program: "Manthan Leadership",
    image: "/images/WhatsApp Image 2026-04-09 at 22.19.47 (2).jpeg",
    quote: "Hey Guys, most of us are still travelling and trying to get to their destinations and homes currently (and in life too) May we all find our beautiful destinations and new journeys this year. This entire camp has been extremely fun, memorable and life-changing for all of us. All Thanks to Rajeev Sir, @Priya Negi Ma'am, @Mansi Bhai you guys made sure that we all have a wonderful experience through and through. We learnt, we enjoyed, we developed, we experienced, created, and did so much more all at once. There could be no better start to this year than this experience through Manthan and it's all Thanks to the efforts of You All! May all of us keep having such wonderful journeys all year ahead. May this New Year bring more such fun, thrill, joy, development and togetherness in all of our lives. Hope to see you all soon in more amazing adventures. Happy New Year Everyone to you, your families and loved ones ✨❤️"
  },
  {
    id: 9,
    name: "Diksha",
    age: 25,
    role: "Graphic Designer",
    program: "Manthan Leadership",
    image: "https://ui-avatars.com/api/?name=Diksha&background=random",
    quote: "It was truly wonderful to be a part of this trip. It gave me new experiences, introduced me to new people, and helped me create beautiful memories that I will always carry in my heart. I am very thankful to Rajeev Sir, Priya Ma’am, and Mansi Ma’am for organizing such a meaningful event. My sincere thanks to all the members for being so kind, friendly, and understanding, especially for accepting and adjusting with the introverted side of me. Thank you everyone for making this journey so special. Thank you, Manthan, for these unforgettable moments. 🌸"
  },
  {
    id: 10,
    name: "Srishti",
    age: 25,
    role: "Nurse",
    program: "Manthan Leadership",
    image: "/images/WhatsApp Image 2026-04-09 at 22.19.47.jpeg",
    quote: "It was unique experience, I really enjoyed especially night trekking, camping, the one cold bath, night riding, temple running, after a very long time experienced hostel life, paragliding special thanks to Rajeev sir, Priya maam & Mansi, @eveyone take care have fun Wishing you guys the best year ahead🤗♥️"
  },
  {
    id: 11,
    name: "Bhuvaneshwari",
    age: 29,
    role: "HR Manager",
    program: "Manthan Leadership",
    image: "/images/WhatsApp Image 2026-04-09 at 22.19.47 (1).jpeg",
    quote: "Hello Everyone 🤗 Very Good Evening!! Hoping you all reached safely. After countless memories and lifetime experience I want to express my gratitude here, The Manthan Trip to Bir Billing was a truly meaningful and refreshing experience for me. The serenity of the mountains and the shared moments made it very special. I found moments of reflection, connection, and growth that I will truly cherish."
  },
  {
    id: 12,
    name: "Sonam",
    age: 37,
    role: "Corporate Employee",
    program: "Manthan Leadership",
    image: "/images/WhatsApp Image 2026-04-09 at 22.32.14.jpeg",
    quote: "Heartfelt thanks to our hosts Rajeev sir, Priya maam, Mansi bhai for creating such a warm, safe, and thoughtfully guided space. Your warmth, guidance, and effort made this journey meaningful and comfortable for all of us And to all the wonderful participants, thank you for the beautiful shared conversations, laughter, silence, energy, and memories we shared. Grateful for this journey and everyone who was part of it. 🌿✨"
  },
  {
    id: 13,
    name: "Priyanshu",
    age: 23,
    role: "Indian Navy Officer",
    program: "Manthan Leadership",
    image: "/images/WhatsApp Image 2026-04-09 at 22.18.32.jpeg",
    quote: "All you amazing & motivated peeps, thank you for all the learning and mauj masti and Rajeev sir ❤️ cycling ✅, Paragliding ✅, trekking ✅ apne sab kra ke finally capable bna hi diya to join the Armed forces. Manthan seriously transformed me as a person and helped me in joining the forces, thankyou again."
  },
  {
    id: 14,
    name: "Prashant",
    age: 22,
    role: "Defence Aspirant",
    program: "Manthan Leadership",
    image: "https://ui-avatars.com/api/?name=Prashant&background=random",
    quote: "The leadership course was an incredible journey that pushed me beyond my limits and transformed my perspective. The blend of adventure activities, like paragliding and cycle expeditions, ignited a sense of thrill and courage within me. The rigorous military-style training honed my discipline and physical endurance, while the ice bath workshop tested my mental fortitude. The quick decision-making drills sharpened my problem-solving skills and taught me the importance of thinking on my feet. The camaraderie forged during these challenges was truly inspiring. The course wasn't just about physical and mental toughness; it was also about nourishing the mind and body. The delicious meals fueled us for the day, while the award ceremony recognized and celebrated our achievements. I am grateful for this transformative experience. This course has equipped me with the tools and mindset to become a more effective leader."
  },
  {
    id: 15,
    name: "Anjali",
    age: 28,
    role: "Sales Manager",
    program: "Manthan Leadership",
    image: "https://ui-avatars.com/api/?name=Anjali&background=random",
    quote: "Hii I joined the November batch of Manthan after seeing a reel on Instagram. I needed a break from work, and as someone who loves adventure, paragliding being on my bucket list made it an easy choice. But Manthan gave me more than just adventure it gave me amazing people and lifelong connections. I met incredible individuals, some of whom I can even collaborate with on future projects. This tribe feels like home, and I'm definitely sticking with it. Who knows, you might see me in the next batch too;)"
  },
  {
    id: 16,
    name: "Aadya",
    age: 25,
    role: "Marketing Head",
    program: "Manthan Leadership",
    image: "https://ui-avatars.com/api/?name=Aadya&background=random",
    quote: "Initially, I was unsure about joining Manthan, but looking back it was one of the best decisions I ever made. This was my very first trip, and I was nervous about stepping out of my comfort zone. However, the 7 days didn't feel like I was meeting everyone for the first time the warmth and connection made it feel like home. One of the most unforgettable moments for me was trying paragliding for the first time. Words can't express the feeling it was beyond anything I've ever experienced. At first, I was quite scared, but the encouragement and support from the amazing people around me made it so much easier. I'll forever be grateful for the bond we created. The night jamming sessions were something. Listening to the inspiring stories of my group members under the open sky and gazing the stars made me realize how lucky I was to meet such incredible individuals. I've made bonds for a lifetime, and I'll cherish these memories forever. Thank you, Manthan, for such an extraordinary experience."
  },
  {
    id: 17,
    name: "Athrva",
    age: 24,
    role: "Defence Aspirant",
    program: "Manthan Leadership",
    image: "https://ui-avatars.com/api/?name=Athrva&background=random",
    quote: "Thankyou so much for giving us such a great opportunity... The eternal bond we have created here is captured in the photos & videos... The lifelong learnings, our friendship and the new experiences really helped to emerge a leader out of us... ❤️"
  }
];

export const dayAtManthan = [
  {
    time: "06:00 AM",
    activity: "Morning Conditioning",
    description: "Physical fitness and mental preparation to set the tone for the day",
    type: "physical"
  },
  {
    time: "07:30 AM",
    activity: "Breakfast & Briefing",
    description: "Nutrition and day's mission overview",
    type: "routine"
  },
  {
    time: "09:00 AM",
    activity: "Leadership Simulation",
    description: "Real-world scenarios requiring quick decision-making and team coordination",
    type: "mental"
  },
  {
    time: "12:00 PM",
    activity: "Group Challenges",
    description: "Outdoor tasks testing planning, organizing, and execution abilities",
    type: "physical"
  },
  {
    time: "01:30 PM",
    activity: "Lunch & Reflection",
    description: "Recovery and personal journaling",
    type: "routine"
  },
  {
    time: "03:00 PM",
    activity: "ELQ Development Modules",
    description: "Focused training on specific Elite Leadership Qualities",
    type: "mental"
  },
  {
    time: "05:00 PM",
    activity: "Team Dynamics Workshop",
    description: "Communication, influence, and collaboration exercises",
    type: "social"
  },
  {
    time: "07:00 PM",
    activity: "Evening Debrief",
    description: "Performance feedback and key learnings discussion",
    type: "mental"
  },
  {
    time: "08:30 PM",
    activity: "Dinner & Free Time",
    description: "Bonding, recovery, and informal interactions",
    type: "routine"
  },
  {
    time: "10:00 PM",
    activity: "Lights Out",
    description: "Rest and recovery for the next day",
    type: "routine"
  }
];

export const whyManthan = [
  {
    icon: "Brain",
    title: "Brain Conditioning, Not Just Learning",
    description: "Traditional education fills the mind with information. Manthan conditions it to perform under pressure, make decisions, and lead through real-world experiences."
  },
  {
    icon: "Target",
    title: "Structured 15 ELQ Framework",
    description: "Built on 15 measurable Elite Leadership Qualities, not vague concepts. Every activity is engineered to condition one or more of these core qualities."
  },
  {
    icon: "Zap",
    title: "Transformation in 3 Days",
    description: "Intensive, immersive 3-day residential experience creates breakthroughs that months of weekly classes cannot achieve. Short programs, lifelong impact."
  },
  {
    icon: "Users",
    title: "Experiential, Not Theoretical",
    description: "Real challenges through adventure, survival training, and leadership exercises. Learn by doing, not by listening to lectures."
  },
  {
    icon: "Award",
    title: "Safety-First Adventure",
    description: "Double-layer safety protocol with trained instructors, proper harnesses, and safety nets. Challenge students safely within controlled environments."
  },
  {
    icon: "Shield",
    title: "Proven Track Record",
    description: "Rajeev sir with his team at SSBWings mentored 5000+ aspirants and produced 9 (AIR 1) by transforming their personality for the world's one of the toughest 5 days SSB interview. Also transformed 100+ individuals through Manthan platform with 5 editions at BIR."
  }
];

export const stats = [
  { number: "5000+", label: "Lives Transformed" },
  { number: "150+", label: "School Partnerships" },
  { number: "50+", label: "Corporate Clients" },
  { number: "15", label: "Elite Leadership Qualities" }
];

export const faqs = [
  {
    question: "Is Manthan a military training program?",
    answer: "No. While we value discipline and mental toughness, Manthan is a leadership development program, not military training. We use structured challenges and conditioning techniques to build leadership qualities applicable to all areas of life."
  },
  {
    question: "What makes Manthan different from other leadership camps?",
    answer: "Manthan is not a camp or workshop—it's a brain conditioning system. We focus on measurable transformation through our proprietary 15 ELQ framework, intensive immersive experiences, and proven methodology developed over years of research and implementation."
  },
  {
    question: "How do you ensure safety during outdoor challenges?",
    answer: "All activities are conducted under the supervision of trained facilitators with safety protocols in place. We challenge participants mentally and physically within safe boundaries. Medical support is always available."
  },
  {
    question: "Can parents visit during the residential programs?",
    answer: "To maximize the immersive experience and allow participants to develop independence, we don't allow visits during the program. However, we provide regular updates and are always available for emergency communication."
  },
  {
    question: "What is the batch size?",
    answer: "We maintain small batch sizes (typically 20-30 participants) to ensure personalized attention and effective facilitation."
  },
  {
    question: "Do you provide certificates?",
    answer: "Yes, all participants receive a certificate of completion along with a detailed assessment report showing their development across all 15 ELQs."
  }
];

export const schoolBenefits = [
  {
    icon: "TrendingUp",
    title: "Enhanced Student Performance",
    description: "Students return with improved confidence, discipline, and academic focus"
  },
  {
    icon: "Users",
    title: "Better Peer Dynamics",
    description: "Reduced conflicts, improved collaboration, and positive leadership among students"
  },
  {
    icon: "Award",
    title: "Leadership Pipeline",
    description: "Develop student leaders who can take on responsibilities in school councils and activities"
  },
  {
    icon: "Lightbulb",
    title: "Holistic Development",
    description: "Go beyond academics to build character, resilience, and real-world skills"
  },
  {
    icon: "BarChart",
    title: "Measurable Impact",
    description: "Before and after assessments demonstrate tangible development in students"
  },
  {
    icon: "Handshake",
    title: "Long-term Partnership",
    description: "Customized programs, ongoing support, and collaborative growth year after year"
  }
];

export const corporateBenefits = [
  {
    icon: "Briefcase",
    title: "Leadership at All Levels",
    description: "Develop leadership capabilities across your organization, not just at the top"
  },
  {
    icon: "Target",
    title: "Better Decision Making",
    description: "Teams learn to make quality decisions quickly under pressure and uncertainty"
  },
  {
    icon: "Users",
    title: "Improved Team Dynamics",
    description: "Enhanced communication, trust, and collaboration across departments"
  },
  {
    icon: "Zap",
    title: "Increased Accountability",
    description: "Foster a culture where people own outcomes and drive results"
  },
  {
    icon: "TrendingUp",
    title: "Performance Boost",
    description: "Measurable improvement in team performance and individual effectiveness"
  },
  {
    icon: "RefreshCw",
    title: "Customized Solutions",
    description: "Programs tailored to your industry, challenges, and organizational goals"
  }
];

// ─── Gallery Category Images ───────────────────────────────────────────────
const GALLERY_BASE = "/Manthan%20photos";

export const categoryImages = {
  adventures: {
    label: "Adventures",
    folder: "Adventures",
    emoji: "🧗",
    description: "Thrilling adventure activities that push boundaries and build courage.",
    images: [
      "IMG-20250609-WA0017.jpg",
      "IMG-20250611-WA0004.jpg",
      "IMG-20250611-WA0090.jpg",
      "IMG-20250611-WA0118.jpg",
      "IMG-20250928-WA0018.jpg",
      "IMG-20250929-WA0072.jpg",
      "IMG-20250930-WA0019.jpg",
      "IMG-20251001-WA0003.jpg",
      "IMG-20260425-WA0070.jpg",
      "IMG-20260425-WA0072.jpg",
    ],
  },
  "awards-and-recognition": {
    label: "Awards & Recognition",
    folder: "Awards and recognition",
    emoji: "🏆",
    description: "Celebrating achievements, milestones, and the leaders who earned them.",
    images: [
      "IMG-20260425-WA0021.jpg",
      "IMG-20260425-WA0031.jpg",
      "IMG-20260425-WA0037.jpg",
      "IMG-20260425-WA0041.jpg",
      "IMG-20260425-WA0045.jpg",
      "IMG-20260425-WA0048.jpg",
      "IMG-20260425-WA0050.jpg",
      "IMG-20260425-WA0056.jpg",
      "IMG-20260425-WA0058.jpg",
      "IMG-20260425-WA0060.jpg",
    ],
  },
  "best-out-of-waste": {
    label: "Best Out of Waste",
    folder: "Best out of waste",
    emoji: "♻️",
    description: "Creativity and innovation turning everyday waste into masterpieces.",
    images: [
      "IMG-20250614-WA0135.jpg",
      "IMG-20260425-WA0015.jpg",
      "IMG-20260425-WA0017.jpg",
      "IMG-20260425-WA0033.jpg",
      "IMG-20260425-WA0035.jpg",
      "IMG-20260425-WA0062.jpg",
      "IMG-20260425-WA0064.jpg",
      "IMG-20260425-WA0066.jpg",
      "IMG-20260425-WA0068.jpg",
    ],
  },
  bushcraft: {
    label: "Bushcraft",
    folder: "Bushcraft",
    emoji: "🔥",
    description: "Survival skills and wilderness mastery in the heart of nature.",
    images: [
      "4846b7ab-7c33-4daf-be2f-6a6ccca8c1d0.jpg",
      "4e168c53-a7ce-4e0d-b94e-fbaabfbb096c.jpg",
      "IMG-20250613-WA0124.jpg",
      "IMG-20250613-WA0127.jpg",
      "IMG-20250613-WA0129.jpg",
      "IMG-20250613-WA0141.jpg",
      "IMG-20250613-WA0153.jpg",
      "IMG-20250613-WA0160.jpg",
      "IMG-20250613-WA0193.jpg",
      "IMG_20211016_143057.jpg",
      "IMG_7361.JPG",
    ],
  },
  "extra-curricular": {
    label: "Extra Curricular",
    folder: "Extra curricular",
    emoji: "🎭",
    description: "Diverse extracurricular activities fostering holistic development.",
    images: [
      "898aa5b3-2963-488f-8a11-1626453b3a2d.jpg",
      "9ef194f6-c5ab-4118-9f81-4177fe0a956f.jpeg",
      "IMG-20250609-WA0071.jpg",
      "IMG-20250609-WA0073.jpg",
      "IMG-20250612-WA0048.jpg",
      "IMG-20250614-WA0062.jpg",
      "IMG-20250929-WA0060.jpg",
      "IMG-20251001-WA0006.jpg",
      "IMG-20260103-WA0000.jpg",
      "IMG_7423-1.JPG",
      "PXL_20241227_024426531.MP-1.jpg",
      "PXL_20241230_045837257.MP.jpg",
      "a97f9b4b-8403-4206-a965-3dd8d1553fb2.jpg",
    ],
  },
  "startup-creation": {
    label: "Startup Creation",
    folder: "Startup creation",
    emoji: "🚀",
    description: "Entrepreneurial mindset workshops and startup ideation challenges.",
    images: [
      "IMG-20250611-WA0032.jpg",
      "IMG-20250611-WA0033.jpg",
      "IMG-20250611-WA0034.jpg",
      "IMG-20250611-WA0035.jpg",
      "IMG-20250611-WA0037.jpg",
      "IMG-20260425-WA0001.jpg",
      "IMG-20260425-WA0019.jpg",
      "IMG-20260425-WA0052.jpg",
      "IMG_7263.JPG",
      "IMG_E7256.JPG",
    ],
  },
  "tent-pitching-and-camping": {
    label: "Tent Pitching & Camping",
    folder: "Tent pitching & Camping",
    emoji: "⛺",
    description: "Learning to set up camp and thrive in the great outdoors.",
    images: [
      "IMG-20250613-WA0120.jpg",
      "IMG-20250613-WA0128.jpg",
      "IMG-20250613-WA0145.jpg",
      "IMG-20250930-WA0011.jpg",
      "IMG-20251001-WA0017.jpg",
      "IMG-20251003-WA0041.jpg",
      "IMG-20251003-WA0047.jpg",
      "IMG-20260425-WA0027.jpg",
      "IMG-20260425-WA0029.jpg",
    ],
  },
  trekking: {
    label: "Trekking",
    folder: "Trekking",
    emoji: "🥾",
    description: "Epic treks through challenging terrain building grit and resilience.",
    images: [
      "898aa5b3-2963-488f-8a11-1626453b3a2d.jpg",
      "IMG-20250613-WA0000.jpg",
      "IMG-20250613-WA0169.jpg",
      "IMG-20250613-WA0179.jpg",
      "IMG-20250614-WA0003.jpg",
      "IMG-20250930-WA0031.jpg",
      "IMG-20251003-WA0065.jpg",
      "IMG-20251003-WA0133.jpg",
      "IMG-20251003-WA0149.jpg",
      "IMG_6664.JPG",
      "PXL_20241227_080158020.MP.jpg",
    ],
  },
};

// Helper: build the public URL for a gallery image
export const getImageUrl = (folderName, fileName) =>
  `${GALLERY_BASE}/${encodeURIComponent(folderName)}/${encodeURIComponent(fileName)}`;
