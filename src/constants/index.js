export const myProjects = [
  {
    id: 1,
    title: "God-Eye",
    description:
      "God Eye is a real-time GPS-based faculty tracking system designed to streamline communication and transparency within academic institutions.",
    subDescription: [
      "Real-Time GPS Tracking: Teachers’ phone location is periodically sent to the server and visualized on a campus map.",
      "Interactive Campus Map: Built with Leaflet.js showing all key departments and dynamic teacher markers.",
      "Secure Authentication: Separate login for admin and users (students and teachers).",
      "Smart Location Description: Locations are described relative to known departments (e.g., “Near Chemical Department”).",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "JS",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 2,
        name: "Python",
        path: "/assets/logos/Python.svg",
      },
      {
        id: 3,
        name: "Leaflet.js",
        path: "/assets/logos/Leaflet.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Depression Detection And Consultation",
    description:
      "Depression Detection Using Audio is a Machine Learning project that leverages speech signals to identify early signs of depression.",
    subDescription: [
      "Feature Extraction with openSMILE: Extracts prosodic, spectral, and voice quality features (pitch, intensity, jitter, shimmer, MFCCs, etc.).",
      "Machine Learning Models: Trains classifiers (e.g., SVM, Random Forest, Neural Networks) on labeled datasets such as PHQ-8/PHQ-9 scores.",
      "Depression Level Prediction: Predicts whether a person is Normal, Mild, Moderate, or Severe.",
      "Real-Time Compatibility: Can be extended into a real-time screening tool for mental health monitoring.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/Python.svg",
      },
      {
        id: 2,
        name: "Jupyter",
        path: "/assets/logos/Jupyter_logo.svg",
      },
      {
        id: 3,
        name: "Twilio",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "ML",
        path: "/assets/logos/Machine_learning.png",
      },
    ],
  },
  {
    id: 3,
    title: "Skin Disease Detection",
    description:
      "Skin Disease Detection is a Computer Vision and Deep Learning project that helps in classifying and identifying skin diseases from medical images.",
    subDescription: [
      "Image Input: Accepts skin lesion/affected skin images as input.",
      "Deep Learning Classification: Uses CNN (Convolutional Neural Networks) for automated feature extraction and classification.",
      "Multi-Class Prediction: Classifies common skin diseases (e.g., eczema, psoriasis, acne, melanoma, etc.).",
      "High Accuracy: Trained and tested on benchmark medical image datasets.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/Python.svg",
      },
      {
        id: 2,
        name: "Jupyter",
        path: "/assets/logos/Jupyter_logo.svg",
      },
      {
        id: 3,
        name: "Twilio",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "ML",
        path: "/assets/logos/Machine_learning.png",
      },
    ],
  },
  {
    id: 4,
    title: "RPG Game",
    description:
      "I developed a Role-Playing Game (RPG) prototype in Unreal Engine, focusing on core player movement mechanics and basic combat interactions. The project demonstrates implementation of essential character controls, environment interaction, and weapon handling systems.",
    subDescription: [
      "Character Controller: Smooth third-person movement system with walking, running, crouching, vaulting, and climbing mechanics.",
      "Basic Combat System: Equipped the player with a primary weapon for attacking enemies.",
      "Environment Interaction: Vault and climb mechanics allow the player to navigate obstacles dynamically.",
      "OAnimation Integration: Used Unreal Engine’s Animation Blueprint and State Machines to sync actions (vault, climb, crouch) with character animations.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      {
        id: 1,
        name: "C++",
        path: "/assets/logos/cplusplus.svg",
      },
      {
        id: 2,
        name: "Unreal-Engine",
        path: "/assets/logos/Unreal-engine.svg",
      },
      {
        id: 3,
        name: "GitHub",
        path: "/assets/logos/github.svg",
      },
      {
        id: 4,
        name: "Blender",
        path: "/assets/logos/Blender.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Matsya Game",
    description:
      "I developed Matsya, a 2D puzzle–escape game during a game jam, using Unity. The game features a fish protagonist navigating through underwater environments filled with traps, puzzles, and hurdles. The focus was on challenging level design, smooth controls, and a fun yet tricky gameplay experience.",
    subDescription: [
      "Puzzle Challenges: Implemented obstacle-based puzzles requiring timing, strategy, and navigation skills.",
      "Escape Mechanics: The player must find ways to escape dangerous underwater traps and enemies.",
      "Game Jam Creativity: Developed within strict time constraints, showcasing rapid prototyping, design, and implementation skills.",
      "Visual & Audio Atmosphere: Styled with a minimal yet engaging underwater theme.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      {
        id: 1,
        name: "Unity",
        path: "/assets/logos/Unity.svg",
      },
      {
        id: 2,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 3,
        name: "Blender",
        path: "/assets/logos/Blender.svg",
      },
      {
        id: 4,
        name: "Microsoft Clip Champ",
        path: "/assets/logos/microsoft.svg",
      },
    ],
  },
  // {
  //   id: 6,
  //   title: "Online Learning Platform",
  //   description:
  //     "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
  //   subDescription: [
  //     "Built using Blazor WebAssembly for a seamless SPA experience.",
  //     "Implemented video streaming with Azure Media Services.",
  //     "Added a quiz system with dynamic question generation and real-time grading.",
  //     "Integrated Stripe API for secure payment processing.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/elearning.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "Blazor",
  //       path: "/assets/logos/blazor.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "Azure",
  //       path: "/assets/logos/azure.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "Stripe",
  //       path: "/assets/logos/stripe.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "TailwindCSS",
  //       path: "/assets/logos/tailwindcss.svg",
  //     },
  //   ],
  // },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "3D Animator",
    job: "Virtual Art Gallery",
    date: "Internship",
    contents: [
      "Completed a 6-week internship at Nihal Software as a 3D Artist & Animator.",
      "Created 3D models and animations using Blender for game and software projects.",
      "Collaborated with the design team to produce optimized and realistic assets.",
      "Gained hands-on experience in the 3D production pipeline from modeling to rendering.",
      "Collaborated with the design team to produce optimized and realistic assets.",
    ],
  },
  // {
  //   title: "Back-End Developer",
  //   job: "Car Manufacture",
  //   date: "2023-2024",
  //   contents: [
  //     "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
  //     "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
  //     "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
  //     "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
  //     "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
  //   ],
  // },
  // {
  //   title: "Freelance Developer",
  //   job: "Self-Employed",
  //   date: "2025-Present",
  //   contents: [
  //     "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
  //     "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
  //   ],
  // },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
