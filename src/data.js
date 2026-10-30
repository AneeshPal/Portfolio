
export const profile = {
  name: 'Aneesh Pal',
  email: 'aneeshpal2308@gmail.com',
  phone: '+91-7880477112',
  github: 'https://github.com/AneeshPal',
  linkedin: 'https://linkedin.com/in/aneesh-pal-b84014312',
  leetcode: 'https://leetcode.com/u/Aneesh_Pal/',
  resume: '/resume.pdf',
}

export const projects = [
  {
    number: '01',
    name: 'Hyperlocal Commerce Platform',
    category: 'FULL-STACK COMMERCE',
    description: 'A marketplace connecting buyers with nearby sellers through location-based product discovery, real-time conversations and integrated payments.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Razorpay'],
    accent: 'mint',
    visual: 'commerce',
    github: '',
    demo: '',
    details: [
      'Built location-aware REST APIs using MongoDB geospatial queries to retrieve products and sellers within a defined radius.',
      'Implemented real-time buyer–seller messaging with Socket.io and live conversation updates.',
      'Integrated Razorpay payment workflows and backend APIs for discovery, seller interaction and transaction processing.',
    ],
  },
  {
    number: '02',
    name: 'StayEase',
    category: 'PROPERTY DISCOVERY',
    description: 'A property discovery platform with user authentication, listings, reviews, image uploads and location-based exploration.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Passport.js', 'Cloudinary'],
    accent: 'amber',
    visual: 'stay',
    github: '',
    demo: '',
    details: [
      'Developed RESTful CRUD APIs for managing users, properties and reviews.',
      'Implemented session-based authentication and authorization using Passport.js and Express middleware.',
      'Integrated MongoDB Atlas for persistent storage and Cloudinary for property image management.',
    ],
  },
  {
    number: '03',
    name: 'AI-Powered Conversational Assistant',
    category: 'GENERATIVE AI',
    description: 'A ChatGPT-inspired application supporting persistent chat threads and context-aware multi-turn conversations.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API'],
    accent: 'violet',
    visual: 'chat',
    github: '',
    demo: '',
    details: [
      'Integrated the OpenAI API through a Node.js/Express backend to handle LLM requests and conversation workflows.',
      'Implemented chat and thread management for creating, switching and continuing conversations.',
      'Developed reusable React components and state management for multi-message chat interactions.',
    ],
  },
  {
    number: '04',
    name: 'Simon Says',
    category: 'INTERACTIVE WEB GAME',
    description: 'A browser-based memory game that challenges players to remember and repeat an increasingly complex sequence.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    accent: 'blue',
    visual: 'simon',
    github: '',
    demo: '',
    details: [
      'Built an interactive sequence-memory game using vanilla JavaScript.',
      'Designed responsive game controls and visual feedback for user interactions.',
      'Structured gameplay around progressively challenging patterns.',
    ],
  },
]

export const skills = [
  { group: 'LANGUAGES', items: ['C++', 'Java', 'JavaScript'] },
  { group: 'FRONTEND', items: ['HTML5', 'CSS3', 'Tailwind CSS', 'React.js'] },
  { group: 'BACKEND', items: ['Node.js', 'Express.js', 'REST APIs', 'Socket.io'] },
  { group: 'DATABASES', items: ['MongoDB', 'MySQL'] },
  { group: 'AI / LLM', items: ['OpenAI API', 'LangChain', 'Streamlit'] },
  { group: 'TOOLS & CORE', items: ['Docker', 'CI/CD', 'Git', 'GitHub', 'DSA', 'OOP', 'DBMS', 'Computer Networks'] },
]
