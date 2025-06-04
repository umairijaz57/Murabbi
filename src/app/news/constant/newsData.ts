import { Description } from "@/app/homeComponents";

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
    // {
    //   Title: "Empowering Women in Tech: 20 Female Coding Fellows Take the Lead in Islamabad Classrooms",
    //   Image: "/news/0.JPG",
    //   Description:"<p>In a country where women in tech often struggle for visibility and access, this project made sure they didn't just participate — they <strong>led from the front</strong>.</p><p>Out of 73 deployed Coding Fellows, <strong>20 were women</strong> — handpicked, trained, and strategically deployed to schools where they could <strong>thrive and inspire</strong>.</p><p>But it wasn't just about numbers.</p><p>The deployment strategy was built with care:</p><ul><li>Female Fellows were placed in <strong>mainstream, accessible sectors</strong></li><li>Assignments considered <strong>safe commute routes</strong></li><li><strong>Supportive school environments</strong> were prioritized</li><li>Some were given <strong>lighter loads</strong> to balance travel and family constraints</li></ul><blockquote><em>“This was my first teaching role,”</em> said one Fellow. <br>  <em>“And I felt heard, supported, and respected from day one.”</em></blockquote><p>In return, these women are now leading classrooms, teaching kids how to build games, program robots, and explore AI — sometimes in schools that have <strong>never had a tech teacher before</strong>.</p><p>They're not just teaching code.<br>They're breaking stereotypes.<br>They're showing young girls — <em>“you belong here too.”</em></p>",
    //   Date:"31 October, 2024"
    // },
    // {
    //   Title: "Murabbi’s Global Footprint – South Asia Adopts the Tech Education Model",
    //   Image: "https://placehold.co/600x400",
    //   Description: "<p>Any good system listens. And this one? It listens deeply — to students, school principals, and education monitors alike.</p><br><p>As part of the ongoing Coding, Robotics & AI Fellowship Project, a <strong>360-degree feedback mechanism</strong> was launched using the project’s Learning Management System (LMS).</p><p>Every stakeholder was given a voice — and that voice matters.</p><br><h3>🎒 <strong>Students said things like:</strong></h3><ul>  <li>“Our trainer makes learning fun.”</li>  <li>“We built our own game today!”</li>  <li>“We wish these classes happened every day.”</li></ul><p>They were asked to rate their trainer on punctuality, friendliness, teaching style, and subject knowledge. The results? Quantified instantly on the LMS dashboard.</p><h3>🏫<br> <strong>Principals and school heads added:</strong></h3><ul>  <li>“Our trainer is professional and disciplined.”</li>  <li>“Staff loves working with them.”</li>  <li>“Students are fully engaged — that’s rare!”</li></ul><p>They gave ratings on conduct, attendance, and interaction with faculty.</p><h3>👥<br> <strong>Project Monitors (Murabbi Management) observed:</strong></h3><ul>  <li>How well the fellows were performing inside the classrooms</li>  <li>How school management responded to their presence</li>  <li>Whether kids were truly learning — or just being occupied</li></ul><p>All of this feedback was <strong>converted into live data dashboards</strong> — highlighting top performers, identifying gaps, and helping the NUST team offer targeted support.</p><br><blockquote>  “<em>This system isn’t about policing,</em>” one admin shared.<br>  <em>“It’s about <strong>making good teachers great</strong> — by helping them see what’s working, and what’s not.”</em></blockquote><p>In an education system often run on assumptions — this feedback system brings <strong>clarity, honesty, and constant growth</strong>.</p>",
    //   Date:"17 October, 2024"
    // },
    // {
    //   Title: "Murabbi Expands Nationwide – Punjab and Khyber Pakhtunkhwa Embrace Tech Revolution",
    //   Image: "/news/coding8.jpg",
    //   Description:`<div style="max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; font-family: Arial, sans-serif;"><p style="margin-bottom: 20px; text-align: justify;">Murabbi's <em>"Coding, Robotics, and AI Learning"</em> initiative continues to deliver tech education across <strong>155 primary schools</strong> in Islamabad, with a renewed focus on sustaining quality and inclusivity in urban and peri-urban areas.</p><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Program Implementation</strong></h3><ol style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 15px;"><strong>Urban & Peri-Urban Focus</strong>:<ul style="margin: 8px 0; padding-left: 20px;"><li style="margin-bottom: 6px;">Schools in sectors like <strong>G-7</strong>, <strong>F-6</strong>, and <strong>I-8</strong> utilize Murabbi's <strong>Learning Management System (LMS)</strong> for real-time progress tracking and auto-graded quizzes.</li><li style="margin-bottom: 6px;"><strong>Hands-on Activities</strong>: Students code interactive Scratch games, AI chatbots, and low-cost robotics projects using open-source tools.</li></ul></li><li style="margin-bottom: 15px;"><strong>Rural Expansion</strong>:<ul style="margin: 8px 0; padding-left: 20px;"><li style="margin-bottom: 6px;"><strong>30 rural schools</strong> in areas like <strong>Bara Kau</strong> and <strong>Sohan</strong> now access offline LMS modules and solar-powered devices.</li><li style="margin-bottom: 6px;"><strong>Unplugged Coding</strong>: Storytelling and board games teach algorithms in schools with limited electricity.</li></ul></li></ol><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Key Focus Areas</strong></h3><ol style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 15px;"><strong>Gender Inclusivity</strong>:<ul style="margin: 8px 0; padding-left: 20px;"><li style="margin-bottom: 6px;"><strong>26% female Coding Fellows</strong> maintained through urban placements and flexible schedules.</li><li style="margin-bottom: 6px;">Girls represent <strong>40% of participants</strong> in robotics clubs at schools like <strong>IMCG Golra</strong>.</li></ul></li><li style="margin-bottom: 15px;"><strong>Curriculum Consistency</strong>:<ul style="margin: 8px 0; padding-left: 20px;"><li style="margin-bottom: 6px;">LMS modules updated monthly with feedback from Fellows and teachers.</li><li style="margin-bottom: 6px;">IBM's AI ethics content and Google's cyber-safety games integrated into lessons.</li></ul></li></ol><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Impact Metrics</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Student Proficiency</strong>: 82% mastery in basic coding concepts (LMS data).</li><li style="margin-bottom: 10px;"><strong>Community Engagement</strong>: 600+ parents attended Murabbi's <em>"Tech Open Houses"</em> in Q1 2025.</li><li style="margin-bottom: 10px;"><strong>Teacher Feedback</strong>: 90% of Fellows report improved student problem-solving skills.</li></ul><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Challenges & Solutions</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Device Shortages</strong>: Shared coding stations (1 device per 5 students) in rural schools.</li><li style="margin-bottom: 10px;"><strong>Power Outages</strong>: Solar panels installed in 15 schools, with plans to cover all 30 rural sites by June 2025.</li></ul><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Next Steps</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Deepen Impact</strong>: Partner with hospitals for student-led health-tech projects (e.g., hygiene chatbots).</li><li style="margin-bottom: 10px;"><strong>LMS Upgrades</strong>: Add Urdu voice-command features for non-literate parents.</li><li style="margin-bottom: 10px;"><strong>Sustainability</strong>: Train school staff to maintain solar-powered tech hubs independently.</li></ul><p style="margin: 30px 0 20px 0; padding: 20px; border: 2px solid #ddd; text-align: center; font-size: 1.1em; font-weight: bold;"><strong>Quote</strong>: <em>"Islamabad's classrooms are now labs for innovation. We're not just teaching code—we're nurturing problem-solvers."</em><br><span style="margin-top: 10px; display: inline-block; font-size: 0.9em; font-weight: normal;">– <strong>Dr. Nazir Perwaiz</strong>, CEO, Murabbi</span></p></div>`,
    //   Date: "April 10, 2025"
    // },
    {
      Title: "Coding Fellows Prepare Islamabad Students for Landmark Tech Titan Competition",
      Image: "/news/school/11.jpg",
      Description:`<div style="max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; font-family: Arial, sans-serif;"><h1 style="margin-bottom: 10px; font-size: 1.5em; text-align: center;"><strong>Coding Fellows Prepare Islamabad Students for Landmark Tech Titan Competition</strong></h1><p style="text-align: center; margin-bottom: 25px; font-weight: bold; font-size: 0.9em; color: #666;"><strong>Islamabad, Pakistan</strong></p><p style="margin-bottom: 20px; text-align: justify;">Under the federal <em>"Coding, Robotics, and AI Learning"</em> initiative, <strong>73 Coding Fellows</strong> are training students across 155 Islamabad schools for the inaugural <strong>Tech Titan Competition</strong>, launching this March. The event applies the project's curriculum developed by <strong>Murabbi, NUST, and the Ministry of Federal Education</strong>.</p><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Inside the Training</strong></h3><ol style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 15px;"><strong>Scratch Programming Drills</strong><br>Students at schools like <strong>IMSG G-7/3-2</strong> fix errors in animated historical games during "Code Races".</li><li style="margin-bottom: 15px;"><strong>Robotics Challenges</strong><br>At <strong>IMSB Tarnol</strong>, learners build flood-detection bots using sensors and recycled materials.</li><li style="margin-bottom: 15px;"><strong>AI Ethics Clinics</strong><br><strong>IMCG Golra</strong> students train Urdu chatbots to advise farmers on crop diseases.</li></ol><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Competition Structure</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Code Sprint</strong>: Debugging Pakistan-themed games</li><li style="margin-bottom: 10px;"><strong>AI Challenge</strong>: Training practical chatbots</li><li style="margin-bottom: 10px;"><strong>Robotics Gauntlet</strong>: Navigating obstacle courses</li></ul><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Student Progress</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>89% mastery</strong> in core coding/robotics skills per Murabbi's LMS.</li><li style="margin-bottom: 10px;"><strong>46% of registrants</strong> are female students.</li></ul><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Quotes</strong></h3><p style="margin: 15px 0; padding: 15px; border-left: 4px solid #333; font-style: italic; background-color: #f9f9f9;"><em>"Students debug robots that solve real problems – like our flood sensor alerting Rawal Dam communities."</em><br><strong>– Hafeez Ahmad</strong>, Coding Fellow</p><p style="margin: 15px 0; padding: 15px; border-left: 4px solid #333; font-style: italic; background-color: #f9f9f9;"><em>"When government-school students out-innovate expectations, Pakistan wins."</em><br><strong>– Dr. Javed Iqbal</strong>, Federal Directorate of Education</p></div>`,
      Date: "December 23, 2024",
       projects:[
        {
          id: 200,
          name: "",
          description: "Students built a chatbot to report broken streetlights, reducing neighborhood repair time by 48 hours.",
          thumbnail: "/news/school/0.jpg",
          gallery: [
            {
              id: 21,
              src: "/news/school/0.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 22,
              src: "/news/school/01.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 23,
              src: "/news/school/02.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 24,
              src: "/news/school/03.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            }
            
          ]
        },
        {
          id: 201,
          name: "",
          description: "Students built a chatbot to report broken streetlights, reducing neighborhood repair time by 48 hours.",
          thumbnail: "/news/school/1.jpg",
          gallery: [
            {
              id: 2011,
              src: "/news/school/1.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2012,
              src: "/news/school/11.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2013,
              src: "/news/school/12.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2014,
              src: "/news/school/13.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            }
            
          ]
        },
        {
          id: 202,
          name: "",
          description: "Students built a chatbot to report broken streetlights, reducing neighborhood repair time by 48 hours.",
          thumbnail: "/news/school/3.jpg",
          gallery: [
            {
              id: 2021,
              src: "/news/school/3.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2022,
              src: "/news/school/31.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2023,
              src: "/news/school/32.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2024,
              src: "/news/school/33.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            }
            
          ]
        },
        {
          id: 203,
          name: "",
          description: "Students built a chatbot to report broken streetlights, reducing neighborhood repair time by 48 hours.",
          thumbnail: "/news/school/2.jpg",
          gallery: [
            {
              id: 2031,
              src: "/news/school/2.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2032,
              src: "/news/school/21.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2033,
              src: "/news/school/22.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2034,
              src: "/news/school/23.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            }
            
          ]
        }
      ]
    },
    {
      Title: "Murabbi Bridges the Digital Divide – Tech Education Reaches Rural Islamabad",
      Image: "/SchoolProgress/title.jpg",
      Description:`<div style="max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; font-family: Arial, sans-serif;"></p><p style="margin-bottom: 20px; text-align: justify;">Just weeks after deployment, Murabbi's <strong>75 Coding Fellows</strong> have ignited a tech education revolution across Islamabad's schools, with students as young as Grade 4 building <strong>AI models</strong>, coding <strong>interactive games</strong>, and solving <strong>community problems</strong>. These breakthroughs – captured in real-time classroom moments – validate the initiative's transformative impact.</p><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Classroom Breakthroughs: From Theory to Tangible Impact</strong></h3><h4 style="margin: 25px 0 10px 0; font-size: 1.1em;"><strong>1. Scratch Programming in Action</strong></h4><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;">At <strong>IMSG G-7/3-2</strong>, Grade 4 students designed Pakistan-themed animations and math quiz games using Scratch, with one team creating a <em>"Digital Independence Day Parade"</em> featuring animated floats and national songs.</li><li style="margin-bottom: 10px;"><em>"They grasped loops and conditionals by coding dancing characters – learning was pure joy!"</em> – Fellow <strong>Manahil Fatima</strong>.</li></ul><h4 style="margin: 25px 0 10px 0; font-size: 1.1em;"><strong>2. Real-World AI Projects</strong></h4><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Bara Kau Rural School</strong>: Students built an AI crop-disease predictor using 200+ local farm images, achieving <strong>89% accuracy</strong> in early tests.</li><li style="margin-bottom: 10px;"><strong>IMCG Golra</strong>: Girls developed a chatbot to report broken streetlights, reducing neighborhood repair time by 48 hours.</li></ul><h4 style="margin: 25px 0 10px 0; font-size: 1.1em;"><strong>3. Robotics Ingenuity</strong></h4><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;">Using cardboard, motors, and Murabbi's open-source guides, <strong>IMSB Tarnol</strong> students engineered flood-detection robots that alerted communities during recent rains.</li></ul><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Behind the Scenes: Fellow Strategies</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Adaptive Teaching</strong>: In Urdu-medium schools like <strong>IMCB G-13/2</strong>, Fellows used storytelling (<em>"The Clever Fox Algorithm"</em>) to explain loops.</li><li style="margin-bottom: 10px;"><strong>Low-Tech Solutions</strong>: At <strong>IMSB Sohan</strong> (limited power), students debugged code on paper grids before transferring to tablets.</li><li style="margin-bottom: 10px;"><strong>Parental Engagement</strong>: Demo days saw <strong>72% attendance increase</strong> after students showcased Scratch games predicting monsoon patterns.</li></ul><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Progress Metrics</strong></h3><h4 style="margin: 25px 0 10px 0; font-size: 1.1em;"><strong>Student Mastery</strong></h4><p style="margin-bottom: 15px; text-align: justify;">LMS data shows <strong>85%</strong> of Grade 5 students can now:</p><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;">Create variables in Python</li><li style="margin-bottom: 10px;">Design obstacle-avoidance robotics logic</li></ul><h4 style="margin: 25px 0 10px 0; font-size: 1.1em;"><strong>Gender Gap Closed</strong></h4><p style="margin-bottom: 20px; text-align: justify;"><strong>48%</strong> of competition winners are girls, surpassing the 45% participation target.</p><p style="margin: 30px 0 20px 0; padding: 20px; border: 2px solid #ddd; text-align: center; font-size: 1.1em; font-weight: bold;"><strong>Quote</strong>: <em>"When children code solutions for their communities, education transcends classrooms. That's Murabbi's real victory."</em><br><span style="margin-top: 10px; display: inline-block; font-size: 0.9em; font-weight: normal;">– <strong>Hafeez Ahmad</strong>, Coding Fellow, IMSB Sohan</span></p></div>`,
      Date: "November 28, 2024",
      projects:[
        {
          id: 200,
          name: "",
          description: "Students built a chatbot to report broken streetlights, reducing neighborhood repair time by 48 hours.",
          thumbnail: "/news/school/0.jpg",
          gallery: [
            {
              id: 21,
              src: "/news/school/0.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 22,
              src: "/news/school/01.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 23,
              src: "/news/school/02.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 24,
              src: "/news/school/03.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            }
            
          ]
        },
        {
          id: 201,
          name: "",
          description: "Students built a chatbot to report broken streetlights, reducing neighborhood repair time by 48 hours.",
          thumbnail: "/news/school/1.jpg",
          gallery: [
            {
              id: 2011,
              src: "/news/school/1.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2012,
              src: "/news/school/11.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2013,
              src: "/news/school/12.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2014,
              src: "/news/school/13.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            }
            
          ]
        },
        {
          id: 202,
          name: "",
          description: "Students built a chatbot to report broken streetlights, reducing neighborhood repair time by 48 hours.",
          thumbnail: "/news/school/3.jpg",
          gallery: [
            {
              id: 2021,
              src: "/news/school/3.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2022,
              src: "/news/school/31.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2023,
              src: "/news/school/32.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2024,
              src: "/news/school/33.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            }
            
          ]
        },
        {
          id: 203,
          name: "",
          description: "Students built a chatbot to report broken streetlights, reducing neighborhood repair time by 48 hours.",
          thumbnail: "/news/school/2.jpg",
          gallery: [
            {
              id: 2031,
              src: "/news/school/2.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2032,
              src: "/news/school/21.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2033,
              src: "/news/school/22.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2034,
              src: "/news/school/23.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            }
            
          ]
        }
      ]
    },
    // {
    //   Title: "Murabbi’s National Tech Olympiad – A Celebration of Student Innovation",
    //   Image: "/news/codin7.jpg",
    //   Description:`<div style="max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; font-family: Arial, sans-serif;"><p style="margin-bottom: 20px; text-align: justify;">Murabbi, in partnership with the <strong>Ministry of Federal Education</strong> and <strong>NUST</strong>, hosted Pakistan's first <strong>National Tech Olympiad</strong> on December 15, 2024, at the Federal Directorate of Education (FDE) Auditorium. The event showcased projects from <strong>5,000+ students</strong> across 155 Islamabad schools participating in the <em>"Coding, Robotics, and AI Learning"</em> initiative.</p><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Student Achievements: Curriculum in Action</strong></h3><p style="margin-bottom: 15px; text-align: justify;">Projects aligned with Murabbi's open-source curriculum, designed using Oxford International's framework and IBM's AI tools:</p><ol style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 15px;"><strong>Coding & AI</strong>:<ul style="margin: 8px 0; padding-left: 20px;"><li style="margin-bottom: 6px;"><strong>Urdu Chatbots</strong>: Students from <em>Islamabad Model College for Girls F-6/2</em> built chatbots to teach Urdu grammar.</li><li style="margin-bottom: 6px;"><strong>Math Quiz Games</strong>: Scratch-based games by Grade 3 students in G-7/3 schools.</li></ul></li><li style="margin-bottom: 15px;"><strong>Robotics</strong>:<ul style="margin: 8px 0; padding-left: 20px;"><li style="margin-bottom: 6px;"><strong>Low-Cost Innovations</strong>: Solar-powered crop monitoring robots by students in rural <strong>Bara Kau</strong>, using Murabbi's open-source guides.</li><li style="margin-bottom: 6px;"><strong>Disaster Tech</strong>: Landslide detection models from <em>IMCB Mingora</em> (Swat), later adopted by local authorities.</li></ul></li><li style="margin-bottom: 15px;"><strong>Cyber Safety</strong>:<ul style="margin: 8px 0; padding-left: 20px;"><li style="margin-bottom: 6px;">Interactive games detecting fake news, inspired by Google's <em>"Be Internet Awesome"</em> modules.</li></ul></li></ol><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Program Partnerships</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>IBM</strong>: Provided API access for AI projects and judging support.</li><li style="margin-bottom: 10px;"><strong>NUST</strong>: Technical mentorship for robotics entries.</li><li style="margin-bottom: 10px;"><strong>Federal Ministry</strong>: Funded awards and logistics.</li></ul><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Judging & Recognition</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Panel</strong>: NUST faculty, Ministry officials, and IBM's EdTech advisors.</li><li style="margin-bottom: 10px;"><strong>Awards</strong>:<ul style="margin: 8px 0; padding-left: 20px;"><li style="margin-bottom: 6px;"><strong>Grand Prize</strong>: <em>IMSB Tarnol</em> for a water purification robot using Arduino sensors.</li><li style="margin-bottom: 6px;"><strong>Community Impact</strong>: <em>IMCG Golra</em> girls' team for menstrual health awareness animations.</li></ul></li></ul><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Key Metrics</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Participation</strong>: 200+ projects submitted via Murabbi's LMS.</li><li style="margin-bottom: 10px;"><strong>Gender Equity</strong>: 40% of winning teams led by female students.</li><li style="margin-bottom: 10px;"><strong>Rural Reach</strong>: 15% of entries from schools like <strong>Sohan</strong> and <strong>Bara Kau</strong>.</li></ul><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Next Steps</strong></h3><ol style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Curriculum Refinement</strong>: Update LMS modules based on Olympiad feedback.</li><li style="margin-bottom: 10px;"><strong>Rural Expansion</strong>: Deploy solar-powered LMS hubs to 30 additional Islamabad schools by June 2025.</li><li style="margin-bottom: 10px;"><strong>Teacher Training</strong>: Host advanced workshops for Fellows on AI/robotics pedagogy.</li></ol><p style="margin: 30px 0 20px 0; padding: 20px; border: 2px solid #ddd; text-align: center; font-size: 1.1em; font-weight: bold;"><strong>Quote</strong>: <em>"These projects prove tech education isn't about gadgets—it's about solving real-world problems."</em><br><span style="margin-top: 10px; display: inline-block; font-size: 0.9em; font-weight: normal;">– <strong>Dr. Nazir Perwaiz</strong>, CEO, Murabbi</span></p></div>`,
    //   Date: "January 15, 2025",
    // },
    {
      Title: "Murabbi in Action – Tech Education Ignites Islamabad’s Classrooms",
      Image: "/news/coding6.jpg",
      Description:`<div style="max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; font-family: Arial, sans-serif;"><p style="margin-bottom: 20px; text-align: justify;">As of November 2024, <strong>Murabbi's Coding Fellows</strong> have successfully implemented the <em>"Coding, Robotics, and AI Learning"</em> initiative across <strong>155 primary schools</strong> under the Federal Directorate of Education (FDE). The program, a collaboration between Murabbi, the <strong>Ministry of Federal Education</strong>, and <strong>NUST</strong>, focuses on equitable access to tech education for Islamabad's urban and rural students.</p><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Implementation Strategy</strong></h3><ol style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 15px;"><strong>Urban Schools</strong>:<ul style="margin: 8px 0; padding-left: 20px;"><li style="margin-bottom: 6px;">Full integration of Murabbi's <strong>Learning Management System (LMS)</strong> for real-time student progress tracking.</li><li style="margin-bottom: 6px;">Students in sectors like <strong>G-7</strong> and <strong>F-6</strong> designed interactive Scratch games and AI chatbots.</li></ul></li><li style="margin-bottom: 15px;"><strong>Rural Pilot Areas</strong>:<ul style="margin: 8px 0; padding-left: 20px;"><li style="margin-bottom: 6px;"><strong>Adapted Approaches</strong>: Offline coding activities and low-cost robotics kits in schools like <strong>Bara Kau</strong> and <strong>Sohan</strong>.</li><li style="margin-bottom: 6px;">Solar-powered LMS access during power outages.</li></ul></li></ol><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>System Monitoring</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Student Progress</strong>: LMS auto-graded quizzes show <strong>85% proficiency</strong> in basic coding concepts (Scratch/Python) after 8 weeks.</li><li style="margin-bottom: 10px;"><strong>Teacher Feedback</strong>: Fellows upload weekly reports via LMS, highlighting challenges like Urdu-medium instruction adjustments.</li></ul><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Program Outcomes</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>School Coverage</strong>: 155 schools reached (100% of FDE's target).</li><li style="margin-bottom: 10px;"><strong>Gender Equity</strong>: <strong>26% female Coding Fellows</strong> deployed, with girls constituting 40% of participating students in pilot schools.</li><li style="margin-bottom: 10px;"><strong>Community Impact</strong>: Parents in <strong>I-8</strong> and <strong>G-9</strong> sectors reported increased student engagement with STEM subjects.</li></ul><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Operational Challenges</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Resource Gaps</strong>: Limited devices in rural schools addressed through shared coding stations.</li><li style="margin-bottom: 10px;"><strong>Training Updates</strong>: Monthly LMS webinars for Fellows to discuss classroom hurdles.</li></ul><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Next Phase</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Rural Expansion</strong>: 30 additional schools in Islamabad's outskirts by March 2025.</li><li style="margin-bottom: 10px;"><strong>Curriculum Refinement</strong>: Update LMS modules based on teacher/student feedback.</li></ul><p style="margin: 30px 0 20px 0; padding: 20px; border: 2px solid #ddd; text-align: center; font-size: 1.1em; font-weight: bold;"><strong>Quote</strong>: <em>"Students who once feared math now debug robots. This is the power of Murabbi's hands-on approach."</em><br><span style="margin-top: 10px; display: inline-block; font-size: 0.9em; font-weight: normal;">– <strong>Areeba Riaz</strong>, Coding Fellow, Islamabad College for Girls F-6/2</span></p></div>`,
      Date: "October 5, 2024",
    },
    {
      Title:"Federal Secretary Mohyuddin Ahmad Wani Addresses New Coding Fellows at Islamabad Ceremony",
      Image: "/heroslider/hero_3.jpg",
      Description: `<div style="max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; font-family: Arial, sans-serif;"><h1 style="margin-bottom: 10px; font-size: 1.5em; text-align: center;"><strong>Federal Secretary Launches Murabbi's Coding Fellows Program</strong></h1><p style="text-align: center; margin-bottom: 25px; font-weight: bold; font-size: 0.9em; color: #666;"><strong>Islamabad, Pakistan</strong></p><p style="margin-bottom: 20px; text-align: justify;">Federal Secretary of the <strong>Ministry of Federal Education and Professional Training (MoFEPT)</strong>, <strong>Mr. Mohyuddin Ahmad Wani</strong>, presided over a landmark ceremony at <strong>Islamabad College for Boys, G-6/3</strong>, to address the inaugural cohort of <strong>75 Coding Fellows</strong> trained under the <em>"Coding, Robotics, and AI Learning for Primary Grade Students"</em> initiative. The event, organized by <strong>Murabbi</strong> in collaboration with <strong>NUST</strong>, celebrated the completion of the Fellows' intensive training program and marked their deployment to 155 primary schools across Islamabad.</p><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Key Details</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Project</strong>: A 2-year initiative to teach coding, robotics, and AI to primary students under the Federal Directorate of Education (FDE).</li><li style="margin-bottom: 10px;"><strong>Training</strong>: 5-day bootcamp at NUST's SEECS campus, covering Scratch, Python, AI ethics, and low-cost robotics.</li><li style="margin-bottom: 10px;"><strong>Partners</strong>: Ministry of Federal Education, NUST, Murabbi, IBM, and Google.</li></ul><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Secretary Wani's Address</strong></h3><p style="margin-bottom: 15px; text-align: justify;">In his keynote speech, Secretary Wani emphasized the program's role in Pakistan's digital transformation:</p><p style="margin: 20px 0; padding: 15px; border-left: 4px solid #333; font-style: italic; background-color: #f9f9f9;"><em>"These Coding Fellows are the architects of our children's future. By equipping them with cutting-edge skills, we are bridging the gap between education and innovation, ensuring Pakistan's youth thrive in a technology-driven world."</em></p><p style="margin-bottom: 20px; text-align: justify;">He praised Murabbi and NUST for their collaborative efforts, particularly the use of <strong>open-source tools</strong> and the <strong>Learning Management System (LMS)</strong> to ensure equitable access in both urban and rural schools.</p><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Training Highlights</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Curriculum</strong>: Blended Oxford International's framework with IBM's AI modules and Google's cyber-safety games.</li><li style="margin-bottom: 10px;"><strong>Pedagogy</strong>: Focused on interactive, age-appropriate teaching methods for Grades 1–5.</li><li style="margin-bottom: 10px;"><strong>Gender Inclusivity</strong>: 26% of the Fellows are women, with urban placements for accessibility.</li></ul><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Fellow Testimonials</strong></h3><p style="margin-bottom: 15px; text-align: justify;"><strong>Areeba Riaz</strong>, a Coding Fellow assigned to Islamabad Model College for Girls F-6/2, shared:</p><p style="margin: 15px 0; padding: 15px; border-left: 4px solid #333; font-style: italic; background-color: #f9f9f9;"><em>"The bootcamp transformed how I view education. We're not just teaching code—we're nurturing problem-solvers who'll shape Pakistan's future."</em></p><p style="margin-bottom: 15px; text-align: justify;"><strong>Muhammad Usman Tahir</strong>, deployed to G-7/3 schools, added:</p><p style="margin: 15px 0; padding: 15px; border-left: 4px solid #333; font-style: italic; background-color: #f9f9f9;"><em>"The LMS and low-cost robotics kits ensure even underserved students can innovate."</em></p><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Event Highlights</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Demonstrations</strong>: Fellows showcased student projects, including Urdu chatbots and solar-powered robots.</li><li style="margin-bottom: 10px;"><strong>LMS Demo</strong>: Real-time tracking of student progress in 155 schools.</li><li style="margin-bottom: 10px;"><strong>Networking</strong>: Fellows interacted with NUST faculty and Ministry officials to discuss implementation challenges.</li></ul><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>What's Next?</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Deployment</strong>: Fellows begin teaching in assigned schools this week.</li><li style="margin-bottom: 10px;"><strong>Rural Expansion</strong>: 30 additional schools in Islamabad's outskirts to join the program by mid-2025.</li><li style="margin-bottom: 10px;"><strong>Monitoring</strong>: LMS data will guide monthly curriculum updates.</li></ul><p style="margin: 30px 0 20px 0; padding: 20px; border: 2px solid #ddd; text-align: center; font-size: 1.1em; font-weight: bold;"><strong>Quote</strong>: <em>"Today isn't an endpoint—it's the launchpad for a nationwide educational revolution."</em><br><span style="margin-top: 10px; display: inline-block; font-size: 0.9em; font-weight: normal;">– <strong>Dr. Nazir Perwaiz</strong>, CEO, Murabbi</span></p></div>`,
      Date: "October 2, 2024",
    },
    {
      Title:"Murabbi’s Training Bootcamp – Forging Tech Educators of Tomorrow",
      Image: "/75coding/3.jpg",
      Description:`<div style="max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; font-family: Arial, sans-serif;"><p style="margin-bottom: 20px; text-align: justify;">From <strong>September 23–28, 2024</strong>, Murabbi conducted a comprehensive training program at NUST's SEECS campus, preparing <strong>73 Coding Fellows</strong> to deliver coding, robotics, and AI education to primary students across Islamabad. The bootcamp blended technical expertise with classroom-ready teaching strategies, ensuring alignment with Pakistan's National Digital and Innovation in Education Strategy (NDIES).</p><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Curriculum Highlights</strong></h3><ol style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 15px;"><strong>Scratch & Python Programming</strong>:<ul style="margin: 8px 0; padding-left: 20px;"><li style="margin-bottom: 6px;">Fellows designed interactive games (e.g., multiplication quizzes) and calculators using block-based and text-based coding.</li><li style="margin-bottom: 6px;">Lesson plans aligned with Oxford International's primary curriculum.</li></ul></li><li style="margin-bottom: 15px;"><strong>AI Education</strong>:<ul style="margin: 8px 0; padding-left: 20px;"><li style="margin-bottom: 6px;">Modules on machine learning ethics and bias detection, inspired by IBM's AI resources.</li><li style="margin-bottom: 6px;">Hands-on training to build Urdu-language chatbots using child-friendly tools.</li></ul></li><li style="margin-bottom: 15px;"><strong>Robotics</strong>:<ul style="margin: 8px 0; padding-left: 20px;"><li style="margin-bottom: 6px;"><strong>Open-Source Tools</strong>: Replicated Lego-like robotics activities using free simulations and low-cost materials.</li><li style="margin-bottom: 6px;">Competitions like the <em>"Sumo Bot Challenge"</em> to foster creative problem-solving.</li></ul></li></ol><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Pedagogical Training</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Classroom Management</strong>: Techniques to engage Grades 1–5 students, including gamification and peer learning.</li><li style="margin-bottom: 10px;"><strong>LMS Integration</strong>: Training on Murabbi's platform to track student progress, auto-grade quizzes, and share feedback.</li><li style="margin-bottom: 10px;"><strong>Resource Optimization</strong>: Strategies for teaching in schools with limited devices or internet access.</li></ul><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Next Steps</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>School Assignments</strong>: Fellows deployed to <strong>155 Islamabad schools</strong> in October 2024, with priority given to underserved sectors (G-7, I-8).</li><li style="margin-bottom: 10px;"><strong>Rural Support</strong>: Offline coding kits and solar-powered LMS access for schools like <strong>Bara Kau</strong> and <strong>Sohan</strong>.</li></ul><p style="margin: 30px 0 20px 0; padding: 20px; border: 2px solid #ddd; text-align: center; font-size: 1.1em; font-weight: bold;"><strong>Quote</strong>: <em>"This bootcamp wasn't just about coding—it was about reshaping how Pakistan teaches technology. Our fellows are now ambassadors of innovation."</em><br><span style="margin-top: 10px; display: inline-block; font-size: 0.9em; font-weight: normal;">– <strong>Dr. Latif</strong>, NUST Robotics Instructor</span></p></div>`,
      Date: "28 September, 2024",

    },
    {
      Title: "Murabbi’s Recruitment Revolution – Selecting Pakistan’s Tech Educators",
      Image: "/75coding/test.jpg",
      Description:`<div style="max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; font-family: Arial, sans-serif;"><p style="margin-bottom: 20px; text-align: justify;">Murabbi, in collaboration with the <strong>Ministry of Federal Education</strong> and <strong>NUST</strong>, has completed a rigorous, two-phase recruitment drive to select <strong>73 Coding Fellows</strong> for its flagship <em>"Coding, Robotics, and AI Learning"</em> initiative. The process, praised for its transparency and innovation, attracted <strong>121 applicants</strong> nationwide.</p><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Phase 1: Targeting NUST's Best</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Focus</strong>: Postgraduate students from NUST's School of Electrical Engineering and Computer Science (SEECS).</li><li style="margin-bottom: 15px;"><strong>Assessment</strong>: A <strong>30-minute computer-based test</strong> conducted on <strong>September 4, 2024</strong>, at SEECS labs.<ul style="margin: 8px 0; padding-left: 20px;"><li style="margin-bottom: 6px;">Topics: Scratch, Python, Machine Learning, and Robotics.</li><li style="margin-bottom: 6px;"><strong>Safe Exam Browser</strong> ensured test integrity by restricting external websites.</li></ul></li><li style="margin-bottom: 10px;"><strong>Results</strong>: 55 candidates tested → 45 shortlisted → 40 selected after interviews.</li></ul><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Phase 2: Nationwide Talent Search</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Expansion</strong>: Opened to non-NUST applicants, yielding <strong>67 candidates</strong>.</li><li style="margin-bottom: 10px;"><strong>Testing</strong>: Identical automated exam and interview process.</li><li style="margin-bottom: 10px;"><strong>Final Shortlist</strong>: 80 candidates (40 from Phase 1 + 40 from Phase 2).</li><li style="margin-bottom: 10px;"><strong>Deployment</strong>: 73 Fellows confirmed by September 2024, with 17 waitlisted.</li></ul><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Gender Equity Milestone</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>26% Female Representation</strong>: 20 female Fellows prioritized for urban schools (e.g., G-7, F-6) to ensure accessibility.</li><li style="margin-bottom: 10px;"><strong>Flexible Hours</strong>: Fellows can attend postgraduate classes at NUST after 2 PM.</li></ul><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Tech-Driven Innovations</strong></h3><ol style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Automated Grading</strong>: Instant MCQ results via Murabbi's LMS.</li><li style="margin-bottom: 10px;"><strong>Secure Testing</strong>: Safe Exam Browser prevented cheating during assessments.</li><li style="margin-bottom: 10px;"><strong>LMS Integration</strong>: Fellows pre-registered for progress tracking.</li></ol><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Next Steps</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Rural Focus</strong>: Offline coding kits and solar-powered LMS access for schools like <strong>Bara Kau</strong> and <strong>Sohan</strong>.</li><li style="margin-bottom: 10px;"><strong>Monitoring</strong>: LMS dashboards track student progress and Fellow performance.</li></ul><p style="margin: 30px 0 20px 0; padding: 20px; border: 2px solid #ddd; text-align: center; font-size: 1.1em; font-weight: bold;"><strong>Quote</strong>: <em>"This recruitment model sets a benchmark for fairness. Every candidate faced identical conditions—no exceptions."</em><br><span style="margin-top: 10px; display: inline-block; font-size: 0.9em; font-weight: normal;">– <strong>Dr. Javed Iqbal</strong>, Technical Lead, Federal Directorate of Education</span></p></div>`,
      Date: "September 20, 2024",
    },
    {
      Title:"Murabbi Launches Pakistan’s First Primary Tech Education Initiative",
      Image: "/75coding/partner.jpg",
      Description: `<div style="max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; font-family: Arial, sans-serif;"><p style="margin-bottom: 20px; text-align: justify;">In a landmark collaboration, <strong>Murabbi</strong>, Pakistan's leading EdTech organization, has partnered with the <strong>Ministry of Federal Education and Professional Training</strong> and the <strong>National University of Sciences and Technology (NUST)</strong> to launch the <em>"Coding, Robotics, and AI Learning for Primary Students"</em> initiative. The program, signed into effect on <strong>August 29, 2024</strong>, aims to equip 155 primary schools across Islamabad with cutting-edge tech education over a two-year period.</p><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Vision: Sustainable, Scalable Tech Literacy</strong></h3><p style="margin-bottom: 15px; text-align: justify;">The initiative addresses Pakistan's digital divide by prioritizing accessibility and affordability. Key components include:</p><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Open-Source Curriculum</strong>: Replaces expensive robotics kits with free online tools and low-cost materials, ensuring scalability in underfunded schools.</li><li style="margin-bottom: 10px;"><strong>Industry-Aligned Content</strong>: Integrates AI modules inspired by IBM's educational resources and Google's <em>"Be Internet Awesome"</em> cyber-safety program.</li><li style="margin-bottom: 10px;"><strong>Academic Rigor</strong>: Leverages NUST's expertise in coding and robotics to design age-appropriate lessons for Grades 1–5.</li></ul><p style="margin: 20px 0; padding: 15px; border-left: 4px solid #ccc; font-style: italic; background-color: #f9f9f9;"><em>"Our curriculum is built for government schools—minimal cost, maximum impact,"</em> stated <strong>Dr. Nazir Perwaiz</strong>, CEO of Murabbi.</p><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Recruitment: Merit-Based and Inclusive</strong></h3><p style="margin-bottom: 15px; text-align: justify;">To staff the program, Murabbi conducted a transparent, two-phase recruitment drive:</p><ol style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 12px;"><strong>Phase 1</strong>: Targeted postgraduate students from NUST's School of Electrical Engineering and Computer Science (SEECS). Applicants underwent a <strong>30-minute automated test</strong> proctored via <em>Safe Exam Browser</em>, a plagiarism-proof platform.</li><li style="margin-bottom: 12px;"><strong>Phase 2</strong>: Expanded nationally, attracting candidates from Lahore, Karachi, and Peshawar.</li></ol><p style="margin: 20px 0 10px 0; font-weight: bold;">Results:</p><ul style="margin: 10px 0 20px 0; padding-left: 25px;"><li style="margin-bottom: 8px;"><strong>121 applicants</strong> screened, with <strong>73 Coding Fellows</strong> ultimately selected.</li><li style="margin-bottom: 8px;"><strong>26% female representation</strong>, prioritizing urban placements for accessibility.</li></ul><p style="margin: 20px 0; padding: 15px; border-left: 4px solid #ccc; font-style: italic; background-color: #f9f9f9;"><em>"We combined merit with inclusivity to build a team that reflects Pakistan's diversity,"</em> said <strong>Javed Iqbal</strong>, FDE Project Lead.</p><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Program Components</strong></h3><ol style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 15px;"><strong>Learning Management System (LMS)</strong>:<ul style="margin: 8px 0; padding-left: 20px;"><li style="margin-bottom: 6px;">Tracks student progress through auto-graded quizzes.</li><li style="margin-bottom: 6px;">Monitors Coding Fellow performance via feedback from students, teachers, and administrators.</li></ul></li><li style="margin-bottom: 15px;"><strong>Training Bootcamp</strong>:<ul style="margin: 8px 0; padding-left: 20px;"><li style="margin-bottom: 6px;">A 5-day intensive workshop at NUST (September 23–28, 2024) trained Fellows in:<ul style="margin: 6px 0; padding-left: 20px;"><li style="margin-bottom: 4px;"><strong>Scratch/Python Programming</strong></li><li style="margin-bottom: 4px;"><strong>AI Ethics and Applications</strong></li><li style="margin-bottom: 4px;"><strong>Low-Cost Robotics</strong> using open-source simulations.</li></ul></li></ul></li></ol><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Progress to Date</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 12px;"><strong>Pilot Success</strong>: A week-long demonstration at <em>Islamabad College for Girls F-6/2</em> in August 2024 saw overwhelming student engagement. <em>"Children begged for the sessions to continue,"</em> reported the school's Head of Department.</li><li style="margin-bottom: 12px;"><strong>Deployment</strong>: As of October 2024, 73 Coding Fellows have been assigned to schools across Islamabad, with priority given to underserved sectors like <strong>G-7</strong>, <strong>F-6</strong>, and <strong>I-8</strong>.</li></ul><h3 style="margin: 30px 0 15px 0; font-size: 1.3em; border-bottom: 2px solid #333; padding-bottom: 5px;"><strong>Next Steps</strong></h3><ul style="margin: 15px 0; padding-left: 25px;"><li style="margin-bottom: 10px;"><strong>Timetable Integration</strong>: Collaborate with school administrations to formalize tech modules into daily schedules.</li><li style="margin-bottom: 10px;"><strong>Rural Expansion</strong>: Extend the program to 30 rural schools within Islamabad's territory by mid-2025.</li><li style="margin-bottom: 10px;"><strong>Monitoring</strong>: Use LMS data to refine teaching strategies and resource allocation.</li></ul><p style="margin: 30px 0 20px 0; padding: 20px; border: 2px solid #ddd; text-align: center; font-size: 1.1em; font-weight: bold;"><strong>Quote</strong>: <em>"This isn't just about coding—it's about empowering a generation to lead Pakistan's digital future."</em><br><span style="margin-top: 10px; display: inline-block; font-size: 0.9em; font-weight: normal;">– <strong>Mohyuddin Ahmad Wani</strong>, Secretary, Ministry of Federal Education</span></p></div>`,
      Date: "September 4, 2024",

    },
    {
      Title: " Summer STEAM Camp 1 - Igniting Young Minds!",
      Image: "/news/summer-camp1.png",
      Description:"Murabbi successfully concluded its impactful Summer STEAM Camp, held exclusively at NUST Islamabad during June-July 2024. Designed for students aged 7 to 14, the camp ignited curiosity and passion across disciplines such as Robotics, Mathematics, Science, Calligraphy, Sports, Cyber Security. Over the course of several immersive days, students engaged in hands-on learning, team-based challenges, and exposure to real-world problem-solving in a university setting. The experience fostered creativity, critical thinking, and digital awareness — shaping future-ready minds and reinforcing Murabbi's commitment to empowering the next generation of leaders and changemakers.",
      Date: "17 July, 2024",
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