/* =====================================================================
   CONTENT.JS  —  yahan se apni website ka content edit karein.
   index.html ko chhoone ki zaroorat nahi.

   HOW TO ADD A POST / VIDEO
   1. File ko GitHub ke "media" folder mein upload karein  (e.g. psw-ad-1.jpg)
   2. Neeche sahi section ki list mein uska naam likh dein:
        "psw-ads": ["psw-ad-1.jpg", "psw-ad-2.jpg"],
   3. Commit karein. 1-2 minute mein site update ho jati hai.

   FILE TYPES
   - Image : .jpg .png .webp
   - Video : .mp4  (chhoti file, 25MB se kam)  --> "reel-1.mp4"
   - YouTube video (recommended for big videos) --> "youtube:VIDEO_ID"
        e.g. https://youtu.be/dQw4w9WgXcQ  -->  "youtube:dQw4w9WgXcQ"
   - YouTube Short (vertical)                   --> "short:VIDEO_ID"
   Pura link paste karna bhi chalta hai:  "youtube:https://youtu.be/dQw4w9WgXcQ"

   Koi bhi comma (,) ya quote (") miss na karein. Har item "quotes" mein ho
   aur items ke beech comma ho.
   ===================================================================== */

/* Jab tak content add nahi hua, empty sections "Add here" box dikhate hain.
   true karne se empty sections live site par chhup jaate hain. */
const HIDE_EMPTY = false;

const SITE = {
  email: "saqibmahmoodprof02@gmail.com",
  linkedin: "https://www.linkedin.com/in/saqibmahood-creator",
  youtube: "https://www.youtube.com/@saqibrajtech"
};

/* Sirf REAL testimonials. Khali rahe to section automatically hide rehta hai.
   Example:
   { name: "Client Name", role: "Brand / Company", text: "Their feedback..." }  */
const TESTIMONIALS = [];

const MEDIA = {

  /* Homepage hero montage (max 3 best images/videos) */
  hero: [
    // "hero-1.jpg", "hero-2.jpg", "hero-3.jpg"
  ],

  /* Ek strong cover image har project ke liye (cards + project page top) */
  covers: {
    "pink-salt-wall": "",   // e.g. "cover-psw.jpg"
    "skylite": "",
    "gatewayurdu": "",
    "sphere-digital": "",
    "youtube": "",
    "crown-rides": "",
    "talha-nas-vlogs": ""
  },

  /* Project galleries */
  galleries: {
    /* Pink Salt Wall */
    "psw-ads": [],        // Ad Creatives
    "psw-video": [],      // Video / Reels
    "psw-product": [],    // Product Photography
    "psw-aplus": [],      // A+ Content
    "psw-estore": [],     // eStore / Website
    "psw-social": ["psw-social-1.jpg", "psw-social-2.jpg", "psw-social-3.jpg"],   // Social Media
    "psw-brand": [],      // Banners / PDFs / Brand Assets

    /* Skylite Networks */
    "sky-ads": [],
    "sky-video": [],
    "sky-social": [],
    "sky-ecom": [],

    /* GatewayUrdu (video first, then graphics) */
    "gw-video": [],
    "gw-graphics": [],

    /* Sphere Digital */
    "sp-video": [],
    "sp-social": [],
    "sp-corporate": [],

    /* My YouTube / Creator Work */
    "yt-thumbs": [],
    "yt-edits": [],
    "yt-shorts": [],
    "yt-ideas": [],
    "yt-ai": [],

    /* Crown Rides / Talha Nas Vlogs */
    "cr-work": [],
    "tn-thumbs": []
  },

  /* Freelance work — service type ke hisaab se group */
  freelance: {
    "talking-head": [],
    "ugc": [],
    "reels": [],
    "shorts": [],
    "longform": [],
    "posts": [],
    "thumbnails": [],
    "product-videos": [],
    "corporate": [],
    "ai": []
  }
};

/* =====================================================================
   PROJECT TEXT  (overview, labels). Real details ke saath edit karein.
   Koi fake numbers / claims na likhein.
   ===================================================================== */
const PROJECTS = [
  {
    slug: "pink-salt-wall",
    name: "Pink Salt Wall",
    label: "Full Creative Production",
    tags: ["advertising","video","social","ecommerce","design","ai"],
    featured: true,
    cardLine: "Ads, video, e-commerce, social and brand assets for one brand.",
    heroLine: "Full Creative Production / E-commerce / Paid Advertising / Social Content",
    overview: "Pink Salt Wall is a Himalayan salt brand. I handle its creative production end to end: paid ad creatives, product and social video, e-commerce visuals and brand assets, so the brand looks consistent on every channel. (Edit this paragraph with your exact role.)",
    groups: [
      { title: "Paid Advertising", text: "Meta Ads, Google Ads, YouTube video creatives." },
      { title: "Video Content", text: "Product videos, social reels, UGC-style videos, AI-generated videos." },
      { title: "E-commerce", text: "Product photography, product graphics, A+ content, eStore assets, website banners." },
      { title: "Social", text: "Posts, reels, thumbnails and campaign creatives." },
      { title: "Brand / Marketing", text: "PDFs, logos, banners and other graphics." }
    ],
    galleries: [
      { key: "psw-ads", label: "Ad Creatives" },
      { key: "psw-video", label: "Video / Reels" },
      { key: "psw-product", label: "Product Photography" },
      { key: "psw-aplus", label: "A+ Content" },
      { key: "psw-estore", label: "eStore / Website" },
      { key: "psw-social", label: "Social Media" },
      { key: "psw-brand", label: "Banners / PDFs / Brand Assets" }
    ]
  },
  {
    slug: "skylite",
    name: "Skylite Networks",
    label: "Video, Ads, Social & E-commerce",
    tags: ["advertising","video","social","ecommerce","design","ai"],
    cardLine: "Video and creative production for a multi-brand e-commerce company.",
    heroLine: "Video & Creative Production",
    overview: "Core creative team member at a multi-brand Himalayan salt e-commerce company, responsible for content across video, design and strategy.",
    galleries: [
      { key: "sky-ads", label: "Meta & Google Ad Creatives (AI-generated and raw footage)" },
      { key: "sky-video", label: "Product Showcase, UGC-style & Cinematic Videos" },
      { key: "sky-social", label: "Social Content & Creative Direction" },
      { key: "sky-ecom", label: "Banners, A+ Content, eStore Assets & Product Photography" }
    ],
    handled: [
      "AI-generated and raw-footage video ads for Meta and Google Ads",
      "Product showcase videos, UGC-style reels and cinematic brand content",
      "Full social content pipeline: strategy, creation, scheduling and posting",
      "Content calendars and creative direction for three international brands",
      "Website banners, product graphics, A+ content, eStore assets and email templates",
      "Product photography for listings and social"
    ]
  },
  {
    slug: "gatewayurdu",
    name: "GatewayUrdu",
    label: "Reels, UGC & Social Content",
    tags: ["video","social","design","ai"],
    cardLine: "Short-form social video and graphics, with AI-enhanced animation.",
    heroLine: "Social Media Video & Graphic Content",
    overview: "Short-form social video and graphics for GatewayUrdu: reels, shorts and UGC edits with AI-enhanced animation, plus regular and seasonal post graphics.",
    galleries: [
      { key: "gw-video", label: "Reels, Shorts & UGC" },
      { key: "gw-graphics", label: "Posts & Seasonal Graphics" }
    ],
    handled: [
      "Reels, Shorts and UGC editing",
      "AI-enhanced animations",
      "Regular social posts and seasonal / trending graphics",
      "Competitor and trend research for content ideas"
    ]
  },
  {
    slug: "sphere-digital",
    name: "Sphere Digital",
    label: "Social & Brand Content",
    tags: ["video","social","design"],
    cardLine: "Reels, social posts and corporate content.",
    heroLine: "Social Media & Brand Content",
    overview: "Social media and brand content for Sphere Digital: reels, social posts, company profile and corporate material. (Edit this paragraph with real project details.)",
    galleries: [
      { key: "sp-video", label: "Video" },
      { key: "sp-social", label: "Social" },
      { key: "sp-corporate", label: "Corporate" }
    ],
    handled: ["Reels", "Social posts", "Company profile / corporate content", "Brand-aligned graphics"]
  },
  {
    slug: "youtube",
    name: "My YouTube / Creator Work",
    label: "Content, Thumbnails & Creative Experiments",
    tags: ["youtube","video","design","ai"],
    personal: true,
    cardLine: "My own channel: thumbnails, edits, shorts and experiments.",
    heroLine: "Personal channel, not a client project",
    overview: "SaqibRaj Tech is my own YouTube channel where I teach mobile thumbnail design and video editing in Urdu and Hindi. It is where I test ideas and learn what holds an audience's attention.",
    galleries: [
      { key: "yt-thumbs", label: "Thumbnails" },
      { key: "yt-edits", label: "Video Editing" },
      { key: "yt-shorts", label: "Shorts / Clips" },
      { key: "yt-ideas", label: "Content Ideas & Creative Experiments" },
      { key: "yt-ai", label: "AI-assisted Experiments" }
    ],
    link: { text: "Visit my channel", url: "https://www.youtube.com/@saqibrajtech" }
  },
  {
    slug: "crown-rides",
    name: "Crown Rides",
    label: "Social, Video & Ad Creatives",
    tags: ["advertising","video","social","design"],
    cardLine: "Promo videos, reels, website visuals and ad creatives.",
    heroLine: "Digital Content Creator & Video Editor",
    overview: "Social content, promotional videos and reels, website visuals and advertising creatives for Crown Rides, kept consistent with the brand identity.",
    galleries: [{ key: "cr-work", label: "Selected Work" }]
  },
  {
    slug: "talha-nas-vlogs",
    name: "Talha Nas Vlogs",
    label: "Thumbnails & Content Strategy",
    tags: ["youtube","design"],
    cardLine: "Mobile-first thumbnails and content ideas for a vlog channel.",
    heroLine: "Thumbnail Designer & Content Strategist",
    overview: "Thumbnail design and content support for a Pakistani vlog channel: mobile-first thumbnails built on emotion and contrast, plus video topic ideas and YouTube SEO advice.",
    galleries: [{ key: "tn-thumbs", label: "Thumbnails" }]
  }
];

/* Selected Freelance Work (Work page). Service type ke hisaab se. */
const FREELANCE = [
  { key: "talking-head",   label: "Talking Head",   line: "Clean, paced edits for presenters and personal brands.", tags: ["video"] },
  { key: "ugc",            label: "UGC",            line: "UGC-style video edits made for ads and social.",       tags: ["video","social","advertising"] },
  { key: "reels",          label: "Reels",          line: "Short-form reels built to hold attention.",             tags: ["video","social"] },
  { key: "shorts",         label: "YouTube Shorts", line: "Vertical clips cut for YouTube Shorts.",                tags: ["video","youtube"] },
  { key: "longform",       label: "Long-form",      line: "Long-form YouTube editing.",                            tags: ["video","youtube"] },
  { key: "posts",          label: "Social Posts",   line: "Social media post designs and campaign creatives.",     tags: ["social","design"] },
  { key: "thumbnails",     label: "Thumbnails",     line: "High-CTR, mobile-first thumbnail designs.",             tags: ["youtube","design"] },
  { key: "product-videos", label: "Product Video",  line: "Product showcase videos for e-commerce.",               tags: ["video","ecommerce"] },
  { key: "corporate",      label: "Corporate",      line: "Corporate and promotional videos.",                     tags: ["video"] },
  { key: "ai",             label: "AI Video",       line: "AI-generated and AI-enhanced video projects.",          tags: ["ai","video"] }
];
