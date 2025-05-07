// myArray.ts
const courses: any = [
  {
    id: 21,
    Title: "AI Diploma",
    Ratings: "4.6",
    Image: "/icons/high/ai.png",
    Reviews: "28",
    Link: "/course/64c413984b70f126b31f8fe4",
    subCategory: "",
    Category: "high",
    Names: ["AI Diploma", "Artificial Intelligence"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Explore ML basics, design projects, improve AI systems, delve into AI applications, and study infrastructure for a rewarding career.",
  },
  {
    id: 22,
    Title: "DevOps",
    Ratings: "4.6",
    Image: "/icons/high/devops.png",
    Reviews: "30",
    Link: "/course/65131de8ffc02ea87771d182",
    subCategory: "",
    Category: "high",
    Names: ["DevOps"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description: "devops lorem ipsum is dummy text is dummy text lorem ipsum",
  },
  {
    id: 15,
    Title: "Blockchain Developer",
    Ratings: "4.6",
    Image: "/icons/high/blockchain.png",
    Reviews: "43",
    Link: "/course/6513222cffc02ea87771d185",
    subCategory: "",
    Category: "high",
    Names: ["Blockchain Developer"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Learn the intricacies of blockchain technology and become a proficient blockchain developer.",
  },
  {
    id: 3,
    Title: "Social Media Marketing",
    Ratings: "4.6",
    Image: "/icons/low/social.png",
    Reviews: "43",
    Link: "/trainings/low",
    subCategory: "",
    Category: "low",
    Names: ["Social Media Marketing"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Gain expertise in online marketing strategies, SEO, social media, and analytics for effective digital campaigns.",
  },
  {
    id: 9,
    Title: "Science Tamasha",
    Ratings: "4.6",
    Image: "/icons/summer/science.png",
    Reviews: "38",
    Link: "/trainings/summer-courses",
    subCategory: "",
    Category: "summer",
    Names: ["Science Tamasha"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "A fun-filled event to explore and ignite curiosity in science through interactive experiments and engaging activities.",
  },
  {
    id: 5,
    Title: "PCB Repair",
    Ratings: "4.6",
    Image: "/icons/low/pcb-repair.png",
    Reviews: "49",
    Link: "/trainings/low",
    subCategory: "",
    Category: "low",
    Names: ["PCB Repair", "Printed Circuit Board Repair"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Learn troubleshooting and repair techniques for printed circuit boards to ensure proper functionality.",
  },
  {
    id: 19,
    Title: "LabVIEW",
    Ratings: "4.6",
    Image: "/icons/high/lab-view.png",
    Reviews: "21",
    Link: "/trainings/high",
    subCategory: "",
    Category: "high",
    Names: ["LabVIEW"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Learn LabVIEW programming for data acquisition, instrument control, and system integration.",
  },
  {
    id: 14,
    Title: "Game Development",
    Ratings: "4.6",
    Image: "/icons/summer/game.png",
    Reviews: "52",
    Link: "/trainings/summer-courses",
    subCategory: "",
    Category: "summer",
    Names: ["Game Development"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Dive into the world of game development, learning game design, coding, and creating interactive experiences.",
  },
  {
    id: 1,
    Title: "UI UX Design",
    Ratings: "4.6",
    Image: "/icons/low/uiux.png",
    Reviews: "45",
    Link: "/trainings/low",
    subCategory: "",
    Category: "low",
    Names: ["UI UX Design", "User Interface User Experience Design"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Develop user-centric interfaces and engaging experiences through effective design principles and prototyping.",
  },
  {
    id: 17,
    Title: "Embedded Softwares",
    Ratings: "4.6",
    Image: "/icons/high/embedded.png",
    Reviews: "13",
    Link: "/trainings/high",
    subCategory: "",
    Category: "high",
    Names: ["Embedded Softwares"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Master the skills to design and develop software for embedded systems and IoT devices.",
  },
  {
    id: 10,
    Title: "Maths Fun",
    Ratings: "4.6",
    Image: "/icons/summer/math-fun.png",
    Reviews: "45",
    Link: "/trainings/summer-courses",
    subCategory: "",
    Category: "summer",
    Names: ["Maths Fun", "Mathematics"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Engage in interactive activities and puzzles to make mathematics enjoyable, stimulating critical thinking and problem-solving skills.",
  },
  {
    id: 0,
    Title: "Graphics Design",
    Ratings: "4.6",
    Image: "/icons/low/graphics.png",
    Reviews: "45",
    Link: "/trainings/low",
    subCategory: "",
    Category: "low",
    Names: ["Graphics Design"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Unleash your creativity and learn the art of visual communication through graphic design.",
  },
  {
    id: 2,
    Title: "Videograhpy",
    Ratings: "4.6",
    Image: "/icons/low/video.png",
    Reviews: "23",
    Link: "/trainings/low",
    subCategory: "",
    Category: "low",
    Names: ["Videograhpy"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Master the art of capturing captivating moments and telling compelling stories through videography.",
  },
  {
    id: 4,
    Title: "Affiliate Marketing",
    Ratings: "4.6",
    Image: "/icons/low/affiliate.png",
    Reviews: "36",
    Link: "/trainings/low",
    subCategory: "",
    Category: "low",
    Names: ["Affiliate Marketing"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Discover the power of affiliate marketing and unlock new avenues for passive income.",
  },
  {
    id: 6,
    Title: "Solidworks",
    Ratings: "4.6",
    Image: "/icons/low/solid.png",
    Reviews: "54",
    Link: "/trainings/low",
    subCategory: "",
    Category: "low",
    Names: ["Solidworks"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Dive into the world of 3D modeling and design with Solidworks software.",
  },
  {
    id: 7,
    Title: "STEAM Bootcamp",
    Ratings: "4.6",
    Image: "/icons/summer/steam-small.png",
    Reviews: "23",
    Link: "/trainings/summer-courses",
    subCategory: "",
    Category: "summer",
    Names: ["STEAM Bootcamp"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Immerse yourself in a comprehensive STEAM program and nurture your skills in science, technology, engineering, arts, and mathematics.",
  },
  {
    id: 23,
    Title: "STEAM Bootcamp",
    Ratings: "4.6",
    Image: "/icons/summer/steam-big.png",
    Reviews: "23",
    Link: "/trainings/summer-courses",
    subCategory: "",
    Category: "summer",
    Names: ["STEAM Bootcamp"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Immerse yourself in a comprehensive STEAM program and nurture your skills in science, technology, engineering, arts, and mathematics.",
  },
  {
    id: 8,
    Title: "AI Bootcamp For Kids",
    Ratings: "4.6",
    Image: "/icons/summer/ai-kids.png",
    Reviews: "41",
    Link: "/trainings/summer-courses",
    subCategory: "",
    Category: "summer",
    Names: ["AI Bootcamp For Kids", "Artificial Intelligence"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Ignite your child's interest in AI through a fun and interactive bootcamp designed specifically for young minds.",
  },
  {
    id: 11,
    Title: "Understanding Quran",
    Ratings: "4.6",
    Image: "/icons/summer/quran.png",
    Reviews: "9",
    Link: "/trainings/summer-courses",
    subCategory: "",
    Category: "summer",
    Names: ["Understanding Quran"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Deepen your understanding of the Quran and explore its timeless wisdom.",
  },
  {
    id: 12,
    Title: "Maths For Pre-engineers ",
    Ratings: "4.6",
    Image: "/icons/summer/maths.png",
    Reviews: "15",
    Link: "/trainings/summer-courses",
    subCategory: "",
    Category: "summer",
    Names: ["Maths For Pre-engineers", "Mathematics"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Strengthen your mathematical foundation to excel in engineering disciplines.",
  },
  {
    id: 13,
    Title: "Digital Literacy",
    Ratings: "4.6",
    Image: "/icons/summer/digital.png",
    Reviews: "34",
    Link: "/trainings/summer-courses",
    subCategory: "",
    Category: "summer",
    Names: ["Digital Literacy"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Master essential digital skills and navigate the digital world with confidence.",
  },

  {
    id: 16,
    Title: "Machine Learning",
    Ratings: "4.6",
    Image: "/icons/high/machine.png",
    Reviews: "41",
    Link: "/trainings/high",
    subCategory: "",
    Category: "high",
    Names: ["Machine Learning", "ML"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Unlock the power of machine learning algorithms and harness their potential in various applications.",
  },
  {
    id: 18,
    Title: "Device Drivers Development",
    Ratings: "4.6",
    Image: "/icons/high/device.png",
    Reviews: "50",
    Link: "/trainings/high",
    subCategory: "",
    Category: "high",
    Names: ["Device Drivers Development"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Learn to develop device drivers and enhance hardware functionality for seamless integration.",
  },
  {
    id: 20,
    Title: "Deep Learning (NLP)",
    Ratings: "4.6",
    Image: "/icons/high/nlp.png",
    Reviews: "37",
    Link: "/trainings/high",
    subCategory: "",
    Category: "high",
    Names: ["Deep Learning (NLP)", "DL"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Dive into the realm of deep learning and natural language processing for advanced AI applications.",
  },

  {
    id: 22,
    Title: "RF PCB Design",
    Ratings: "4.6",
    Image: "/icons/high/rf-pcb.png",
    Reviews: "30",
    Link: "/trainings/high",
    subCategory: "",
    Category: "high",
    Names: ["RF PCD Design", "Radio frequency Printed Circuit Board Design "],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Master the art of RF printed circuit board (PCB) design for wireless communication systems.",
  },
  {
    id: 24,
    Title: "Testing/Quality Assurance",
    Ratings: "4.6",
    Image: "/icons/workshops/testing.png",
    Reviews: "30",
    Link: "/trainings/workshops",
    subCategory: "",
    Category: "workshops",
    Names: ["Testing/Quality Assurance"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Master the art of RF printed circuit board (PCB) design for wireless communication systems.",
  },{
    id: 25,
    Title: "Knowledge Management",
    Ratings: "4.6",
    Image: "/icons/workshops/knowledge.png",
    Reviews: "30",
    Link: "/trainings/workshops",
    subCategory: "",
    Category: "workshops",
    Names: ["Knowledge Management"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Master the art of RF printed circuit board (PCB) design for wireless communication systems.",
  },{
    id: 26,
    Title: "Prompt GPT",
    Ratings: "4.6",
    Image: "/icons/workshops/prompt.png",
    Reviews: "30",
    Link: "/trainings/workshops",
    subCategory: "",
    Category: "workshops",
    Names: ["Prompt GPT"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Master the art of RF printed circuit board (PCB) design for wireless communication systems.",
  },{
    id: 27,
    Title: "School Leadership",
    Ratings: "4.6",
    Image: "/icons/workshops/School.png",
    Reviews: "30",
    Link: "/trainings/workshops",
    subCategory: "",
    Category: "workshops",
    Names: ["School Leadership"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Master the art of RF printed circuit board (PCB) design for wireless communication systems.",
  },{
    id: 28,
    Title: "Design Thinking",
    Ratings: "4.6",
    Image: "/icons/workshops/design.png",
    Reviews: "30",
    Link: "/trainings/workshops",
    subCategory: "",
    Category: "workshops",
    Names: ["Design Thinking"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Master the art of RF printed circuit board (PCB) design for wireless communication systems.",
  },{
    id: 29,
    Title: "Advanced Technologies",
    Ratings: "4.6",
    Image: "/icons/workshops/advanced.png",
    Reviews: "30",
    Link: "/trainings/workshops",
    subCategory: "",
    Category: "workshops",
    Names: ["TAdvanced Technologies in Math teaching"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Master the art of RF printed circuit board (PCB) design for wireless communication systems.",
  },{
    id: 29,
    Title: "Web Wizardry: From HTML to React Mastery",
    Ratings: "4.6",
    Image: "/icons/summer/web-kids.png",
    Reviews: "30",
    Link: "/course/655a333c5c6296962ab3a12b",
    subCategory: "",
    Category: "high",
    Names: ["Web Wizardry: From HTML to React Mastery"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Master the art of RF printed circuit board (PCB) design for wireless communication systems.",
  },{
    id: 30,
    Title: "Generative Ai trainings",
    Ratings: "4.6",
    Image: "/icons/workshops/generative.png",
    Reviews: "30",
    Link: "/trainings/workshops",
    subCategory: "",
    Category: "workshops",
    Names: ["Generative Ai trainings for teaching"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Master the art of RF printed circuit board (PCB) design for wireless communication systems.",
  },{
    id: 31,
    Title: "Assessment for Learning",
    Ratings: "4.6",
    Image: "/icons/workshops/assessment.png",
    Reviews: "30",
    Link: "/trainings/workshops",
    subCategory: "",
    Category: "workshops",
    Names: ["Assessment for Learning"],
    shortDescription:
      "devops lorem ipsum is dummy text is dummy text lorem ipsum",
    Description:
      "Master the art of RF printed circuit board (PCB) design for wireless communication systems.",
  },

];


export default courses;
