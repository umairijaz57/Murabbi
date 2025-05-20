export interface ProjectImage {
  id: number;
  src: string;
  alt: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  alt?: string;
  gallery: ProjectImage[];
}

export interface NewsItem {
  Title: string;
  Date: string;
  Description: string;
  Image: string;
  Link?: string;
  // Projects are optional as requested
  projects?: Project[];
}



export const newsData :NewsItem[] = [
    {
      Title:"75 Coding Fellows: Empowering the Next Generation of Tech Innovators",
      Image: "/news/0.JPG",
      Description:"The groundbreaking 75 Coding Fellows Project, a visionary collaboration between <strong>Murabbi, NUST</strong>, and the <strong>Federal Directorate of Education (FDE)</strong>, successfully concluded after three transformative months of hands-on learning, innovation, and creativity..<br><br>Designed to bridge the digital divide, the program engaged <strong>75 young students</strong> from <strong>10 government schools</strong>, introducing them to world of <strong>Coding, Artificial intelligence, and Robotics</strong> through immersive sessions, competitions, and lab visits.Students were trained in practical, project-based environments, including access to <strong>state-of-the-art Chromebook Labs</strong>, equipping them with 21st-century skills.<br><br>The grand finale, held at <strong>NUST SEECS,</strong> brought together all participating schools in a high-energy <strong>Tech Titan Competition</strong>, where students showcased their talents in <strong>robotics challenges</strong> and <strong>storytelling through code</strong>. The event was graced by <strong>Chief Guest Mr. Ali Asghar</strong>, who represented the <strong>Secretary of FDE</strong>, and praised the students' creativity, critical thinking, and passion for technology.<br><br><center>“This project is not just about learning code—it's about unlocking futures,” said Mr. Asghar</center>.<br>Each Coding Fellow received a <strong>certificate of participation</strong>, while top performers in the <strong>Robotics</strong> and <strong>Story Writing Competitions</strong> were awarded <strong>special gifts</strong>, recognizing their outstanding efforts and innovation.<br>The 75 Coding Fellows Project stands as a powerful step forward for <strong>digital education in Pakistan</strong>, setting a precedent for future public-private initiatives. With strong institutional support and a clear focus on empowering youth, this initiative is inspiring a new generation of confident, capable, and creative tech leaders..",
      Date: "17 October, 2024",

    },
    {
      Title: " Summer STEAM Camp 1 - Igniting Young Minds!",
      Image: "/news/summer-camp1.png",
      Description:"Murabbi successfully concluded its impactful Summer STEAM Camp, held exclusively at NUST Islamabad during June-July 2024. Designed for students aged 7 to 14, the camp ignited curiosity and passion across disciplines such as Robotics, Mathematics, Science, Calligraphy, Sports, Cyber Security. Over the course of several immersive days, students engaged in hands-on learning, team-based challenges, and exposure to real-world problem-solving in a university setting. The experience fostered creativity, critical thinking, and digital awareness — shaping future-ready minds and reinforcing Murabbi's commitment to empowering the next generation of leaders and changemakers.",
      Date: "July 17, 2024",
       projects: [
      {
        id: 100,
        name: "Opening Ceremony",
        description: "Learn beautiful handwriting techniques",
        thumbnail: "/news/session/opening/thumb.jpg",
        gallery: [
          {
            id: 1001,
            src: "/news/session/opening/0.jpg",
            alt:""
          },
          {
            id: 1002,
            src: "/news/session/opening/1.jpg",
            alt:""
          },
          {
            id: 1003,
            src: "/news/session/opening/2.jpg",
            alt:""
          },
          {
            id: 1004,
            src: "/news/session/opening/3.jpg",
            alt:""
          },
          {
            id: 1005,
            src: "/news/session/opening/4.jpg",
            alt:""
          },
          
        ]
      },
      {
        id: 101,
        name: "Robotics",
        description: "Learn beautiful handwriting techniques",
        thumbnail: "/news/session/robotics/thumb.jpg",
        gallery: [
          {
            id: 1011,
            src: "/news/session/robotics/0.jpg",
            alt:""
          },
          {
            id: 1012,
            src: "/news/session/robotics/1.jpg",
            alt:""
          },
          {
            id: 1013,
            src: "/news/session/robotics/2.jpg",
            alt:""
          },
          {
            id: 1014,
            src: "/news/session/robotics/3.jpg",
            alt:""
          },
          {
            id: 1015,
            src: "/news/session/robotics/4.jpg",
            alt:""
          },
          {
            id: 1016,
            src: "/news/session/robotics/5.jpg",
            alt:""
          }
        ]
      },
      {
        id: 102,
        name: "Science Tamasha",
        description: "Learn beautiful handwriting techniques",
        thumbnail: "/news/session/science/thumb.jpg",
        gallery: [
          {
            id: 1021,
            src: "/news/session/science/0.jpg",
            alt:""
          },
          {
            id: 1022,
            src: "/news/session/science/1.jpg",
            alt:""
          },
          {
            id: 1023,
            src: "/news/session/science/2.jpg",
            alt:""
          },
          {
            id: 1024,
            src: "/news/session/science/3.jpg",
            alt:""
          },
          {
            id: 1025,
            src: "/news/session/science/4.jpg",
            alt:""
          },
          {
            id: 1026,
            src: "/news/session/science/5.jpg",
            alt:""
          }
        ]
      },
      {
        id: 103,
        name: "Math",
        description: "Learn beautiful handwriting techniques",
        thumbnail: "/news/session/math/thumb.jpg",
        gallery: [
          {
            id: 1033,
            src: "/news/session/math/0.jpg",
            alt:""
          },
          {
            id: 1032,
            src: "/news/session/math/1.jpg",
            alt:""
          },
          {
            id: 1033,
            src: "/news/session/math/2.jpg",
            alt:""
          },
          {
            id: 1034,
            src: "/news/session/math/3.jpg",
            alt:""
          },
          {
            id: 1035,
            src: "/news/session/math/4.jpg",
            alt:""
          },
          {
            id: 1036,
            src: "/news/session/math/5.jpg",
            alt:""
          },
          {
            id: 1037,
            src: "/news/session/math/6.jpg",
            alt:""
          }
        ]
      },
       {
        id: 104,
        name: "Information Security",
        description: "Learn beautiful handwriting techniques",
        thumbnail: "/news/session/infosec/thumb.jpg",
        gallery: [
          {
            id: 1041,
            src: "/news/session/infosec/0.jpg",
            alt:""
          },
          {
            id: 1042,
            src: "/news/session/infosec/1.jpg",
            alt:""
          },
          {
            id: 1043,
            src: "/news/session/infosec/2.jpg",
            alt:""
          },
          {
            id: 1044,
            src: "/news/session/infosec/3.jpg",
            alt:""
          },
        ]
      },
      {
        id: 105,
        name: "Caligraphy",
        description: "Learn beautiful handwriting techniques",
        thumbnail: "/news/session/caligraphy/thumb.jpg",
        gallery: [
          {
            id: 1051,
            src: "/news/session/caligraphy/0.jpg",
            alt:""
          },
          {
            id: 1052,
            src: "/news/session/caligraphy/1.jpg",
            alt:""
          },
          {
            id: 1053,
            src: "/news/session/caligraphy/2.jpg",
            alt:""
          },
          {
            id: 1054,
            src: "/news/session/caligraphy/3.jpg",
            alt:""
          },
          {
            id: 1055,
            src: "/news/session/caligraphy/4.jpg",
            alt:""
          },
          {
            id: 1056,
            src: "/news/session/caligraphy/5.jpg",
            alt:""
          },
        ]
      },
      {
        id: 106,
        name: "Data Security",
        description: "Learn beautiful handwriting techniques",
        thumbnail: "/news/session/datasec/thumb.jpg",
        gallery: [
          {
            id: 1061,
            src: "/news/session/datasec/0.jpg",
            alt:""
          },
          {
            id: 1062,
            src: "/news/session/datasec/1.jpg",
            alt:""
          },
          {
            id: 1063,
            src: "/news/session/datasec/2.jpg",
            alt:""
          },
          {
            id: 1064,
            src: "/news/session/datasec/3.jpg",
            alt:""
          },
          {
            id: 1065,
            src: "/news/session/datasec/4.jpg",
            alt:""
          },
          {
            id: 1066,
            src: "/news/session/datasec/6.jpg",
            alt:""
          },
        ]
      },
      { id: 107,
        name: "Sports",
        description: "Learn beautiful handwriting techniques",
        thumbnail: "/news/session/sports/thumb.jpg",
        gallery: [
          {
            id: 1071,
            src: "/news/session/sports/0.jpg",
            alt:""
          },
          {
            id: 1072,
            src: "/news/session/sports/1.jpg",
            alt:""
          },
          {
            id: 1073,
            src: "/news/session/sports/2.jpg",
            alt:""
          },
          {
            id: 1074,
            src: "/news/session/sports/3.jpg",
            alt:""
          },
          {
            id: 1075,
            src: "/news/session/sports/4.jpg",
            alt:""
          },
          {
            id: 1076,
            src: "/news/session/sports/5.jpg",
            alt:""
          },
          {
            id: 1077,
            src: "/news/session/sports/6.jpg",
            alt:""
          },
          {
            id: 1078,
            src: "/news/session/sports/7.jpg",
            alt:""
          },
          {
            id: 1079,
            src: "/news/session/sports/8.jpg",
            alt:""
          }
        ]
      },
      {
        id: 109,
        name: "Closing Ceremony",
        description: "Learn beautiful handwriting techniques",
        thumbnail: "/news/session/closing/thumb.JPG",
        gallery: [
          {
            id: 1091,
            src: "/news/session/closing/0.JPG",
            alt:""
          },
          {
            id: 1092,
            src: "/news/session/closing/1.JPG",
            alt:""
          },
          {
            id: 1093,
            src: "/news/session/closing/2.JPG",
            alt:""
          },
          {
            id: 1094,
            src: "/news/session/closing/3.JPG",
            alt:""
          },
          {
            id: 1095,
            src: "/news/session/closing/4.JPG",
            alt:""
          },
          {
            id: 1096,
            src: "/news/session/closing/5.JPG",
            alt:""
          }
        ]
      },
      
    ]
      

    },
    {
      Title: "Murabbi and NUST Professional Development Centre Join Hands for Enhanced Learning and Innovation",
      Image: "/news/S2.jpg",
      Description: "With a shared commitment to learning, growth, and success, Murabbi and NUST Professional Development Centre have signed a Memorandum of Agreement, solidifying their collaboration to bring together their expertise and resources to provide a transformative environment. This dynamic partnership, fueled by a passion for helping in the professional development of Pakistani students, will lead to the launch of many new courses aimed at staying at the forefront of emerging technologies. Through this collaboration, participants will be provided with unique learning experiences that not only enhance their skills but also create brilliant opportunities for networking, collaboration, and fostering lasting connections. Together, Murabbi and PDC aim to empower individuals to thrive in the ever-evolving world of technology, opening doors to limitless possibilities for personal and professional growth.",
      Date: "June 12, 2023",
      Link: ""
    },
    {
      Title: "Murabbi Launches 'DevOps Fast Track' Course: Accelerate Your Career in DevOps",
      Description: "Did you know the average salary of a DevOps engineer in the US is approximately $130,000 per year? DevOps engineering is a rapidly growing field, with a Compound Annual Growth Rate (CAGR) of 24.2%, projected to become a $57.9 billion global market by 2030 (for reference, the global AI market has a CAGR of 17.30%). With an upcoming surge in DevOps engineering jobs and freelance opportunities, Murabbi is thrilled to introduce to you a comprehensive training program to kickstart your successful DevOps career. Join the 'DevOps Fast Track' and unlock a world of possibilities in this dynamic industry!",
      Image: "/courses/Devops.jpg",
      Link: "/course/65131de8ffc02ea87771d182",
      Date: "20 July 2023"
    },
    {
      Title: "Murabbi's Professional #Diploma in #Artificial #Intelligence comes to a close and the Graduates are ready to delve into the realms of AI!",
      Image: "/news/PDC_AI.jpg",
      Description: "NUST Professional Development Centre in collaboration with Murabbi successfully closed Professional Diploma in Artificial Intelligence. Various candidates from diverse backgrounds were part of the training. Businessmen, doctors, engineers, marketers, and IT professionals alike benefitted from the training.T he Professional Diploma in Artificial Intelligence proved to be an inclusive platform, attracting professionals from various sectors eager to explore the realm of AI. The comprehensive curriculum covered essential AI concepts, machine learning algorithms, and practical applications, resulting in a collaborative learning environment. Congratulations to the graduates, whose enhanced knowledge and skills in the world of AI, will undoubtedly impact their respective industries positively.",
      Date: "20 July 2023",
      Link: ""
    },
    {
      Title: "Empowering Public Servants: Dr. Wajahat Hussain Explores AI Applications at NIM",
      Image: "/news/NIM.png",
      Description: "Assistant Professor Dr. Wajahat Hussain from SEECS, NUST, has recently delivered an informative talk on Artificial Intelligence: Conceptual Understanding and Application. The talk took place at the National Institute of Management (NIM) in Islamabad on Tuesday, 10th October, between 1330 to 1530. <br/>This enlightening talk was part of the ongoing 38th Mid-Career Management Course, aimed at enhancing the capacity of potential BS-19 officers for effective public sector service delivery. The discussion covered a conceptual overview and understanding of AI, its applications in everyday life across both public and private sectors in Pakistan, and AI-based public interventions. The aim was to shed light on the potential and practical implications of AI, providing the participants with valuable insights into this rapidly advancing field. Participants found the session highly beneficial, broadening their understanding of AI and its role in shaping the present and future of public services and societal development. <br/>Dr. Wajahat Hussain's expertise and insights contributed significantly to enriching the knowledge base of the attending officers, further fueling their motivation to implement AI advancements in their respective domains for the betterment of society.",
      Date: "12 October 2023",
      Link: ""
    },
    {
      Title: "Murabbi's 'From Zero to #Object #Detection' Course Successfully #Concludes",
      Description: "Murabbi is delighted to announce the successful completion of its course, 'From Zero to Object Detection.' The course, which commenced on October 9, 2023, guided participants from different backgrounds through essential topics including Python, Colab, NumPy, Matplotlib, Pandas, Scipy, and the design of deep networks with Keras. </br> We had multiple engaging sessions where everyone got hands-on with the tech stuff. And guess what? The course was a big hit! Everyone who joined in not only gained some serious tech skills but also enjoyed a super friendly and supportive learning environment. </br> A massive congratulations to all the participants who gained valuable insights from this course.",
      Image: "/news/Object-Detection.jpg",
      Link: "",
      Date: "19 November 2023"
    },
    {
      Title: "Exciting Opportunity for Tech Enthusiasts: Murabbi Launches 'Web Wizardry: From HTML to React Mastery' Course",
      Image: "/news/web.jpeg",
      Description: "Are you eager to dive into the world of web development and master the art of React? Look no further! Murabbi is thrilled to announce its upcoming course, <span class=\"font-bold\" > 'Web Wizardry: From HTML to React Mastery' </span> starting from November 28th, 2023. </br> </br> <span class=\"font-bold\" > Course Details: </span> </br></br> <span class=\"font-bold\" > Duration: </span> 5 Weeks </br> <span class=\"font-bold\" > Schedule: </span> Every Tuesday to Thursday </br> <span class=\"font-bold\" > Timings: </span> 17:30 - 20:00 </br> <span class=\"font-bold\" > Course Fee: </span> Rs. 7500/-</br> <span class=\"font-bold\" > Pre-requisites: </span> Basic knowledge of computer usage and web browsing </br></br> The 'Web Wizardry: From HTML to React Mastery' course is designed for a diverse audience, including beginners with little to no React experience or some exposure. Open to all industries and professions, the course welcomes individuals with or without formal education in computer science, aged 12-40 years. The budget is tailored to be affordable for both students and professionals, catering to participants with varying levels of interest in technology. </br></br> The <span class=\"font-bold\" > 'Web Wizardry: From HTML to React Mastery' </span> course offers income diversification through freelancing, portfolio development for client attraction, monetization of personal React projects, networking opportunities, proficiency in building scalable applications, economic empowerment through additional projects, and resume enhancement for job readiness. </br></br> Muhammad Waqas Khan will be the instructor of this course. He is a Master's in Software Engineering with 12 years of experience as a Software Engineer. He has Worked with NRSP Software Team and National University of Science and Technology. </br></br> Don't miss this incredible opportunity to learn from a seasoned expert! </br> Join 'Web Wizardry:From HTML to React Mastery ' to unlock your potential in web development. Enroll now and take the first step toward an exciting future in tech!",
      Date: "19 November 2023",
      Link: ""
    },
    {
      Title: "Important Update on the much-awaited Web Wizardy and DevOps Courses",
      Image: "/news/web-1.jpeg",
      Description: "In our commitment to delivering excellence, we want to share a brief update about our upcoming courses. Due to unforeseen circumstances, the launch of 'Web Wizardry: From HTML to React Mastery' and 'DevOps Fast Track' is rescheduled to January 2024. While we understand the anticipation, this brief delay allows us to enhance your learning experience. Rest assured, we're gearing up for an even more spectacular start to the new year! Thank you for your understanding and continued support. Get ready for an amazing journey with Murabbi in 2024! </br> Stay tuned for updates.",
      Date: "27 November 2023",
      Link: ""
    },
    {
      Title: "Unleashing Opportunities: A Comprehensive Guide by Murabbi to Navigating the Amazon Ecosystem and Affiliate Marketing",
      Image: "/news/affiliate.png",
      Description: "</br><span class=\"font-extrabold text-[2rem] \" >I. Introduction to Amazon</span> </br></br>\n<span class=\"font-bold text-[1.5rem]\" >Definition and Overview of Amazon</span> </br>\nAmazon, the e-commerce giant founded by Jeff Bezos in 1994, has grown into a global marketplace that connects buyers and sellers across various product categories. The platform provides a vast array of opportunities for individuals and businesses to thrive in the digital economy. </br>\n<span class=\"font-bold text-[1.5rem]\" >Benefits and Opportunities of Working on Amazon</span> </br>\nEntering the world of Amazon opens doors to unparalleled benefits and opportunities. From a vast customer base to the convenience of e-commerce, sellers can tap into a thriving marketplace with the potential for substantial financial success. </br>\n<span class=\"font-bold text-[1.5rem]\" >Skills and Traits Required to Become an Amazon Seller</span> </br>\nTo succeed as an Amazon seller, one must possess a combination of skills and traits. Adaptability, strategic thinking, and a keen understanding of e-commerce dynamics are crucial. This explores the key attributes that contribute to becoming a successful Amazon entrepreneur. </br>\n</br><span class=\"font-extrabold text-[2rem] \" >II. Amazon Seller Central</span> </br></br>\n<span class=\"font-bold text-[1.5rem]\" >Setting up an Amazon Seller Central Account</span> </br>\nAn essential step for any aspiring seller is creating an Amazon Seller Central account. This provides a step-by-step guide to the account setup process, ensuring a seamless entry into the Amazon marketplace. </br>\n<span class=\"font-bold text-[1.5rem]\" >Navigating the Seller Central Dashboard</span> </br>\nUnderstanding the Seller Central dashboard is critical for effective management. Here, we delve into the various features and tools available, offering insights into how sellers can efficiently navigate and utilize them. </br>\n<span class=\"font-bold text-[1.5rem]\" >Managing Inventory, Orders, and Payments</span> </br>\nEfficient inventory management, order processing, and payment tracking are vital components of a successful Amazon venture. This guides sellers on how to streamline these processes within Seller Central.</br>\n<span class=\"font-bold text-[1.5rem]\" >Using Reports and Analytics to Track Performance</span> </br>\nData-driven decision-making is at the core of successful Amazon selling. Sellers will learn how to leverage the reporting and analytics tools provided by Amazon to track their performance, identify trends, and make informed business decisions. </br>\n</br><span class=\"font-extrabold text-[2rem] \" >III. Product Research and Sourcing</span> </br></br>\n<span class=\"font-bold text-[1.5rem]\" >Finding Profitable Products to Sell on Amazon</span> </br>\nSuccessful product selection is the cornerstone of a thriving Amazon business. It helps in exploring strategies for identifying profitable products and understanding market demand and competition. </br>\n<span class=\"font-bold text-[1.5rem]\" >Sourcing Products from Suppliers and Wholesalers</span> </br>\nOnce a product is chosen, sourcing becomes crucial. We guide sellers through the process of finding reliable suppliers, negotiating prices, and managing inventory effectively. </br>\n<span class=\"font-bold text-[1.5rem]\" >Negotiating Prices and Managing Inventory</span> </br>\nEffective negotiation skills are key to securing favorable terms with suppliers. Additionally, proper inventory management ensures consistent product availability, enhancing the customer experience. </br>\n</br><span class=\"font-extrabold text-[2rem] \" >IV. Amazon Listing Optimization</span> </br></br>\n<span class=\"font-bold text-[1.5rem]\" >Creating Effective Product Listings</span> </br>\nCrafting compelling product listings is essential for attracting customers. This delves into the art of creating listings that not only showcase products but also drive sales. </br>\n<span class=\"font-bold text-[1.5rem]\" >Conducting Keyword Research and Optimization</span> </br>\nOptimizing product listings for search engines is a crucial aspect of visibility on Amazon. We explore the nuances of keyword research and how to effectively incorporate keywords into product listings. </br>\n<span class=\"font-bold text-[1.5rem]\" >Writing Compelling Product Descriptions</span> </br>\nThe power of persuasive product descriptions cannot be overstated. It gives insights into writing captivating descriptions that entice customers to make a purchase. </br>\n<span class=\"font-bold text-[1.5rem]\" >Creating High-Quality Product Images</span> </br>\nVisual appeal is paramount in online sales. Sellers will learn how to create high-quality product images that grab attention and instill confidence in potential buyers. </br>\n</br><span class=\"font-extrabold text-[2rem] \" >V. Amazon Marketing and Advertising</span> </br></br>\n<span class=\"font-bold text-[1.5rem]\" >Setting up Amazon PPC Campaigns</span> </br>\nAmazon's Pay-Per-Click (PPC) advertising is a powerful tool for boosting product visibility. This section guides sellers through the process of setting up and optimizing PPC campaigns. </br>\n<span class=\"font-bold text-[1.5rem]\" >Conducting Keyword Research and Targeting</span> </br>\nIn-depth keyword research is crucial for successful advertising. We explore advanced techniques for identifying and targeting keywords that align with the target audience. </br>\n<span class=\"font-bold text-[1.5rem]\" >Creating Effective Ad Copy and Design</span> </br>\nCompelling ad copy and visually appealing designs are vital for capturing the audience's attention. Sellers will gain insights into creating ads that stand out and drive conversions. </br>\n<span class=\"font-bold text-[1.5rem]\" >Measuring and Optimizing Ad Performance</span> </br>\nThe journey doesn't end with ad creation; continuous optimization is key. It provides a comprehensive guide to measuring ad performance and making data-driven adjustments for optimal results. </br>\n</br><span class=\"font-extrabold text-[2rem] \" >VI. Customer Service and Support</span> </br></br>\n<span class=\"font-bold text-[1.5rem]\" >Providing Excellent Customer Service to Amazon Customers</span> </br>\nCustomer satisfaction is a priority on Amazon. Sellers will learn strategies for delivering top-notch customer service, fostering positive relationships with buyers. </br>\n<span class=\"font-bold text-[1.5rem]\" >Managing Customer Inquiries, Feedback, and Complaints</span> </br>\nEffectively managing customer inquiries, feedback, and complaints is crucial for maintaining a positive seller reputation. This course section equips sellers with tools to handle customer interactions with professionalism. </br>\n<span class=\"font-bold text-[1.5rem]\" >Responding to Product Reviews and Ratings</span> </br>\nPositive reviews enhance credibility, while negative ones can be turned into opportunities. Sellers will discover how to respond to reviews tactfully and use feedback to improve their offerings. </br>\n<span class=\"font-bold text-[1.5rem]\" >Building Positive Relationships with Customers</span> </br>\nBuilding trust and loyalty is an ongoing process. The students will explore strategies for building positive, long-lasting relationships with customers, contributing to the overall success of an Amazon business. </br>\n</br><span class=\"font-extrabold text-[2rem] \" >VII. Amazon FBA (Fulfillment by Amazon)</span> </br></br>\n<span class=\"font-bold text-[1.5rem]\" >Understanding the Benefits and Costs of Using FBA</span> </br>\nFulfillment by Amazon (FBA) offers convenience but comes with associated costs. Sellers will gain insights into the pros and cons of using FBA and how to make informed decisions based on their business model. </br>\n<span class=\"font-bold text-[1.5rem]\" >Setting up and Managing FBA Shipments</span> </br>\nA step-by-step guide to setting up and managing FBA shipments ensures a smooth process from product creation to delivery to the customer's doorstep. </br>\n<span class=\"font-bold text-[1.5rem]\" >Analyzing FBA Performance and Profitability</span> </br>\nSellers will learn how to analyze the performance and profitability of their FBA operations, allowing them to make informed decisions for the growth of their Amazon business. </br>\n<span class=\"font-bold text-[1.5rem]\" >Troubleshooting FBA Issues and Challenges</span> </br>\nNo business is without its challenges. This course will provide practical solutions to common FBA issues, helping sellers navigate obstacles and maintain operational efficiency. </br>\n</br><span class=\"font-extrabold text-[2rem] \" >VIII. Amazon Account Management</span> </br></br>\n<span class=\"font-bold text-[1.5rem]\" >Monitoring and Optimizing Amazon Seller Account Health</span> </br>\nA healthy Amazon Seller account is essential for sustained success. Sellers will discover how to monitor key metrics and optimize their account for peak performance. </br>\n<span class=\"font-bold text-[1.5rem]\" >Tracking Sales, Revenue, and Expenses</span> </br>\nFinancial management is a critical aspect of any business. This course will provide guidance on tracking sales, revenue, and expenses to ensure a profitable and sustainable operation. </br>\n<span class=\"font-bold text-[1.5rem]\" >Managing Inventory, Returns, and Refunds</span> </br>\nEfficient inventory management, handling returns, and processing refunds are integral to maintaining a positive customer experience. Sellers will gain insights into best practices for managing these aspects of their business. </br>\n<span class=\"font-bold text-[1.5rem]\" >Compliance with Amazon Policies and Regulations</span> </br>\nUnderstanding and adhering to Amazon's policies and regulations is crucial to prevent account suspensions. This course will provide a comprehensive overview of the rules sellers must follow to stay in good standing. </br>\n</br><span class=\"font-extrabold text-[2rem] \" >IX. Business Development and Growth</span> </br></br>\n<span class=\"font-bold text-[1.5rem]\" >Scaling and Growing an Amazon Business</span> </br>\nOnce the basics are mastered, it's time to scale. Sellers will learn strategies for expanding their product offerings, reaching new markets, and increasing overall business growth. </br>\n<span class=\"font-bold text-[1.5rem]\" >Identifying New Opportunities and Niches</span> </br>\nConstant innovation and adaptation are key to sustained success. The students will explore methods for identifying new opportunities and niches within the Amazon marketplace. </br>\n<span class=\"font-bold text-[1.5rem]\" >Outsourcing and Delegating Tasks to a Team</span> </br>\nAs the business grows, so do responsibilities. Sellers will gain insights into effective outsourcing and delegation strategies to maintain efficiency and focus on strategic aspects of their business. </br>\n<span class=\"font-bold text-[1.5rem]\" >Managing Finances, Taxes, and Accounting</span> </br>\nFinancial literacy is crucial for long-term success. This will provide guidance on managing finances, understanding tax obligations, and maintaining accurate accounting records. </br>\n",
      Date: "20 January 2024",
      Link: ""
    },
    {
      Title: "Exciting News for Aspiring E-Commerce Professionals: Murabbi Launches E-CommPro Affiliate Marketing Course!",
      Image: "/news/guide.jpg",
      Description: "Murabbi is thrilled to announce the launch of a groundbreaking E-CommPro Affiliate Marketing Course, set to commence on January 29th, 2024. This course is a golden opportunity for e-commerce professionals and enthusiasts to master the intricacies of affiliate marketing and propel their careers to new heights.</br> </br><span class=\"font-extrabold \" >Course Overview:</span> </br>Embark on an 8-week journey of discovery, every Monday and Tuesday, as we delve deep into the world of affiliate marketing. Led by industry experts, this course is crafted to equip participants with the skills and knowledge necessary to thrive in the dynamic e-commerce landscape. </br> </br>\n<span class=\"font-extrabold \" >Key Details:</span> </br>• Starting Date: 15th Feb, 2024 </br>• Duration: 8 weeks (Mondays and Tuesdays) </br>• Timings: 5:30 pm to 7:30 pm  </br>• Venue: SEECS-NUST, Sector H-12, Islamabad </br>• Mode: Hybrid (On-site + Online) </br> </br><span class=\"font-extrabold \" >Course Highlights:</span> </br>• Expert Instruction: Learn from seasoned professionals with hands-on experience in affiliate marketing. </br>• Practical Insights: Gain practical insights through real-world case studies and interactive exercises. </br>• Cutting-edge Strategies: Stay ahead of the curve with the latest trends and strategies in affiliate marketing.  </br>• Networking Opportunities: Connect with like-minded individuals and expand your professional network. </br> </br> <span class=\"font-extrabold \" >How Much?</span> </br> Invest in your professional growth for just 15,500 PKR per head. This affordable investment opens the doors to a wealth of knowledge and opportunities in the thriving field of affiliate marketing.</br> </br> <span class=\"font-extrabold \" > Join us, and let's shape the future of e-commerce together!</span>\n",
      Date: "20 January 2024",
      Link: ""
    },
    {
      Title: "Murabbi Responds to High Demand: Reintroducing #'Web #Wizardry: A Journey from HTML to #React Mastery' Course!",
      Image: "/news/webdev.jpeg",
      Description: "In response to an overwhelming surge in demand from enthusiastic learners, Murabbi is thrilled to reintroduce its highly sought-after course, 'Web Wizardry: A Journey from HTML to React Mastery.' Kicking off on 12th Feb, 2024 this comprehensive course promises an immersive and transformative experience, guiding participants through the dynamic landscape of web development. </br> </br> <span class=\"font-bold\" > Course Details: </span> </br></br> <span class=\"font-bold\" > Duration: </span> 5 Weeks </br> <span class=\"font-bold\" > Schedule: </span> Every Monday to Wednesday </br> <span class=\"font-bold\" > Timings: </span> 17:30 - 20:00 </br> <span class=\"font-bold\" > Course Fee: </span> Rs. 7500/-</br> <span class=\"font-bold\" > Starting date: </span> 12th Feb,2024 </br> <span class=\"font-bold\" > Pre-requisites: </span> Basic knowledge of computer usage and web browsing </br></br> The 'Web Wizardry: From HTML to React Mastery' course is designed for a diverse audience, including beginners with little to no React experience or some exposure. Open to all industries and professions, the course welcomes individuals with or without formal education in computer science, aged 12-40 years. The budget is tailored to be affordable for both students and professionals, catering to participants with varying levels of interest in technology. </br></br> The <span class=\"font-bold\" > 'Web Wizardry: From HTML to React Mastery' </span> course offers income diversification through freelancing, portfolio development for client attraction, monetization of personal React projects, networking opportunities, proficiency in building scalable applications, economic empowerment through additional projects, and resume enhancement for job readiness. </br></br> Muhammad Waqas Khan will be the instructor of this course. He is a Master's in Software Engineering with 12 years of experience as a Software Engineer. He has Worked with NRSP Software Team and National University of Science and Technology. </br></br> Don't miss this incredible opportunity to learn from a seasoned expert! </br> Join 'Web Wizardry:From HTML to React Mastery ' to unlock your potential in web development. Enroll now and take the first step toward an exciting future in tech!",
      Date: "20 January 2024",
      Link: ""
    },
    {
      Title: "Exciting Announcement: Murabbi Relaunches 'DevOps Fast Track' Course !",
      Image: "/news/dev.jpeg",
      Description: "In response to industry demand and the booming field of DevOps engineering, Murabbi is thrilled to reintroduce the highly anticipated 'DevOps Fast Track' course. This comprehensive program is designed to accelerate your career in DevOps, a field witnessing remarkable growth with a projected $57.9 billion global market by 2030. </br> </br> <span class=\"font-extrabold\" > Course Highlights: </span> </br> <span class=\"font-bold\" > Duration: </span> 9 Weeks </br> <span class=\"font-bold\" > Instructor: </span>  Muhammad Atif Ramzan  </br> <span class=\"font-bold\" > Regular Price: </span> 35000 PKR/-</br> <span class=\"font-bold\" > Discounted Price: </span> 25000 PKR </br> <span class=\"font-bold\" > Lectures: </span>18 (2/week) </br> <span class=\"font-bold\" > Starting Date: </span> 10th Feb, 2024 </br> </br> <span class=\"font-extrabold\" > About the Instructor: </span> </br> Muhammad Atif Ramzan is a seasoned Senior DevOps specialist with over 9 years of industry experience. His extensive background includes pivotal roles with top companies in the Pakistani industry, such as Telenor, Nexus Technologies, DinCloud, Eurous Technology, and AuditXPRT. Currently, he holds the position of Senior DevOps Engineer at Stella Technology. </br></br> <span class=\"font-extrabold\" > Don't miss this opportunity to fast-track your DevOps career!  </span> </br>  </br> Stay tuned for the course launch, and prepare to unlock a world of possibilities in the ever-evolving DevOps landscape.",
      Date: "29 January 2024",
      Link: ""
    },
    {
      Title:"Murabbi Successfully Concludes Winter STEM Camp in Collaboration with NCLS, NUST, and Elements Learning! 🚀",
      Image: "/news/0.JPG",
      Description: "string",
      Date: "30 January, 2024",
      Link: "/news/stem"
    }
    
  ].sort((a, b) => {
  return new Date(b.Date).getTime() - new Date(a.Date).getTime();
});


export function toSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}