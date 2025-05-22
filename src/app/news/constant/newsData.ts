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
    //   Title: "Students, Principals, and Monitors Share Honest Feedback to Shape the Future of Coding Education",
    //   Image: "/news/0.JPG",
    //   Description: "<p>Any good system listens. And this one? It listens deeply — to students, school principals, and education monitors alike.</p><br><p>As part of the ongoing Coding, Robotics & AI Fellowship Project, a <strong>360-degree feedback mechanism</strong> was launched using the project’s Learning Management System (LMS).</p><p>Every stakeholder was given a voice — and that voice matters.</p><br><h3>🎒 <strong>Students said things like:</strong></h3><ul>  <li>“Our trainer makes learning fun.”</li>  <li>“We built our own game today!”</li>  <li>“We wish these classes happened every day.”</li></ul><p>They were asked to rate their trainer on punctuality, friendliness, teaching style, and subject knowledge. The results? Quantified instantly on the LMS dashboard.</p><h3>🏫<br> <strong>Principals and school heads added:</strong></h3><ul>  <li>“Our trainer is professional and disciplined.”</li>  <li>“Staff loves working with them.”</li>  <li>“Students are fully engaged — that’s rare!”</li></ul><p>They gave ratings on conduct, attendance, and interaction with faculty.</p><h3>👥<br> <strong>Project Monitors (Murabbi Management) observed:</strong></h3><ul>  <li>How well the fellows were performing inside the classrooms</li>  <li>How school management responded to their presence</li>  <li>Whether kids were truly learning — or just being occupied</li></ul><p>All of this feedback was <strong>converted into live data dashboards</strong> — highlighting top performers, identifying gaps, and helping the NUST team offer targeted support.</p><br><blockquote>  “<em>This system isn’t about policing,</em>” one admin shared.<br>  <em>“It’s about <strong>making good teachers great</strong> — by helping them see what’s working, and what’s not.”</em></blockquote><p>In an education system often run on assumptions — this feedback system brings <strong>clarity, honesty, and constant growth</strong>.</p>",
    //   Date:"17 October, 2024"
    // },
    // {
    //   Title: "Beyond Borders – Scaling Tech Education to Punjab and Khyber Pakhtunkhwa",
    //   Image: "https://placehold.co/600x400",
    //   Description:`<div style="max-width: 800px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;"><div style="text-align: center; padding: 20px 0;"><h1 style="font-size: 24px; font-weight: bold; margin: 0;">Scaling Success: Coding Initiative Expands Nationwide</h1></div><div style="padding: 20px 0;"><div style="padding: 20px 0; margin-bottom: 20px;"><p style="margin: 0; font-size: 16px;">Building on the triumphs of Islamabad's "Coding, Robotics, and AI Learning" initiative, the Federal Ministry of Education has launched phase two of the project, expanding to <strong>50 schools in Punjab</strong> and <strong>30 schools in Khyber Pakhtunkhwa (KP)</strong>. This nationwide scaling, which began in <strong>March 2025</strong>, aims to democratize tech education for <strong>15,000 additional students</strong>, prioritizing underserved regions while adapting to local cultural and infrastructural realities.</p></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Punjab Pilot: Urban Innovation Meets Rural Resilience</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">In Punjab, the initiative focuses on bridging the gap between Lahore's tech-savvy urban centers and remote villages like <strong>Chakwal</strong> and <strong>Mianwali</strong>. Key strategies include:</p><div style="padding: 10px 0; margin-bottom: 10px;">• <strong>Tech Caravans:</strong> Mobile units equipped with solar-powered laptops and robotics kits tour villages, delivering week-long coding bootcamps</div><div style="padding: 10px 0; margin-bottom: 10px;">• <strong>Localized Curriculum:</strong> Students in agrarian communities design AI models to predict crop diseases, while urban cohorts in Lahore build e-commerce chatbots</div><div style="padding: 10px 0; margin-bottom: 15px;">• <strong>Teacher Exchanges:</strong> Islamabad's Coding Fellows mentor Punjab's new recruits via virtual workshops, sharing best practices for low-resource classrooms</div><p style="margin-bottom: 15px; font-size: 16px;">At <strong>Government Girls High School, Kasur</strong>, students used Scratch to create animations about menstrual health awareness, sparking community dialogues.</p><div style="padding: 20px 0; margin-top: 15px;"><p style="margin: 0; font-style: italic; font-size: 16px;">"Tech isn't just about robots—it's a tool for social change."</p><div style="text-align: right; margin-top: 10px; font-weight: bold;">— Sana Iqbal<br><small>Kasur's First Female Coding Fellow</small></div></div></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">KP's Mountain Challenge: Tech in the Highlands</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">In KP's rugged terrain, the initiative confronts unique hurdles: sporadic internet, harsh weather, and cultural hesitancy. Solutions include:</p><div style="padding: 10px 0; margin-bottom: 10px;">• <strong>Offline Learning Kits:</strong> Preloaded tablets with coding tutorials and AI simulators for schools in districts like Swat and Dir</div><div style="padding: 10px 0; margin-bottom: 10px;">• <strong>Community Anchors:</strong> Local religious leaders and elders co-host parent workshops to address concerns about tech education</div><div style="padding: 10px 0; margin-bottom: 15px;">• <strong>Winter Tech Camps:</strong> Seasonal coding intensives during school breaks, held in partnership with NGOs like EdTech Frontier</div><p style="margin-bottom: 15px; font-size: 16px;">In <strong>Swat</strong>, students at <strong>IMCB Mingora</strong> built a landslide warning system using Arduino sensors and WhatsApp APIs, earning recognition from the KP Disaster Management Authority.</p></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Cross-Province Collaborations</h2><div style="padding: 20px 0;"><div style="padding: 10px 0; margin-bottom: 10px;">• <strong>Student Hackathons:</strong> Teams from Islamabad, Lahore, and Peshawar compete in hybrid contests, solving regional challenges like air quality monitoring</div><div style="padding: 10px 0; margin-bottom: 10px;">• <strong>Shared LMS Portal:</strong> Punjab and KP schools contribute to a national database of open-source lesson plans, including Urdu-language coding modules</div><div style="padding: 10px 0; margin-bottom: 15px;">• <strong>Policy Synergy:</strong> KP's Education Ministry adopted Islamabad's gender inclusivity framework, reserving 30% of Coding Fellow roles for women</div></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Challenges and Adaptive Strategies</h2><div style="padding: 20px 0;"><div style="padding: 10px 0; margin-bottom: 10px;">• <strong>Infrastructure Gaps:</strong> In KP's Kohistan district, donkeys transport tech kits to schools inaccessible by road</div><div style="padding: 10px 0; margin-bottom: 10px;">• <strong>Cultural Resistance:</strong> In conservative Punjab villages, female fellows lead classes via telepresence robots until community trust is built</div><div style="padding: 10px 0; margin-bottom: 15px;">• <strong>Resource Limits:</strong> Corporate partners like Jazz Telecom sponsor 4G hotspots in exchange for student-led digital literacy drives for elders</div></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Impact Metrics (March–June 2025)</h2><div style="padding: 20px 0;"><div style="padding: 10px 0; margin-bottom: 10px;">• <strong>78% Increase:</strong> Enrollment in tech classes across Punjab's rural schools</div><div style="padding: 10px 0; margin-bottom: 10px;">• <strong>45 Female Fellows:</strong> Recruited in KP, doubling initial targets</div><div style="padding: 10px 0; margin-bottom: 15px;">• <strong>200+ Projects:</strong> Uploaded to the national LMS, including a KP student's Pashto-language chatbot for maternal health</div></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Voices from the Frontlines</h2><div style="padding: 20px 0;"><div style="padding: 20px 0; margin-top: 15px;"><p style="margin: 0; font-style: italic; font-size: 16px;">"A student here built a solar-powered water sensor to alert her village about contaminated streams. Now elders ask her to present at council meetings—tech has given her a voice."</p><div style="text-align: right; margin-top: 10px; font-weight: bold;">— Ahmed Khan<br><small>Coding Fellow, Shangla District, KP</small></div></div></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">The Road Ahead</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">The Ministry aims to onboard <strong>Sindh and Balochistan</strong> by late 2025, leveraging lessons from Punjab and KP. A <strong>National Tech Olympiad</strong> is slated for <strong>December 2025</strong>, featuring teams from all provinces.</p><p style="margin: 0; font-size: 16px;">Meanwhile, international delegations from <strong>Bangladesh and Nepal</strong> have visited Islamabad to study the model for replication, positioning Pakistan as a regional leader in inclusive tech education.</p></div></div></div></div>`,
    //   Date: "7 October, 2024"
    // },
    // {
    //   Title: "Bridging the Digital Divide – Tech Education Reaches Rural Islamabad",
    //   Image: "https://placehold.co/600x400",
    //   Description:`<div style="max-width: 800px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;"><div style="text-align: center; padding: 20px 0;"><h1 style="font-size: 24px; font-weight: bold; margin: 0;">Breaking Barriers: Coding Initiative Reaches Rural Islamabad</h1></div><div style="padding: 20px 0;"><div style="padding: 20px 0; margin-bottom: 20px;"><p style="margin: 0; font-size: 16px;">As the "Coding, Robotics, and AI Learning" initiative enters its sixth month, its focus has shifted to rural Islamabad, where <strong>30 new schools</strong> have joined the program. These schools, many lacking consistent electricity or computer labs, are now witnessing a quiet revolution as students engage with technology through innovative, low-resource strategies. This phase underscores the project's commitment to equity, proving that geography need not dictate access to 21st-century education.</p></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Adapting the Curriculum for Rural Realities</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">In villages like <strong>Bara Kau and Sohan</strong>, Coding Fellows face unique challenges: sporadic power outages, limited devices, and minimal prior exposure to technology. To bridge this gap, the project team redesigned lessons around three principles:</p><div style="padding: 10px 0; margin-bottom: 10px;">• <strong>Unplugged Activities:</strong> Teaching algorithms through physical games, such as "Human Robots" where students guide blindfolded peers using directional commands</div><div style="padding: 10px 0; margin-bottom: 10px;">• <strong>Local Relevance:</strong> Projects addressing community issues, like designing chatbots to share farming tips or creating Scratch animations about water conservation</div><div style="padding: 10px 0; margin-bottom: 15px;">• <strong>Hybrid Learning:</strong> Using offline apps like ScratchJr and AI4KIDS that function without internet</div><p style="margin-bottom: 15px; font-size: 16px;">At <strong>IMSB Tarnol</strong>, students built a weather-predicting model using recycled thermometers and a Raspberry Pi, syncing data to the LMS during brief power windows.</p><div style="padding: 20px 0; margin-top: 15px;"><p style="margin: 0; font-style: italic; font-size: 16px;">"We work like farmers—harvesting knowledge when the resources are available."</p><div style="text-align: right; margin-top: 10px; font-weight: bold;">— Hafeez Ahmad<br><small>Coding Fellow, IMSB Tarnol</small></div></div></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Digital Infrastructure Grants: Turning Promises into Progress</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">In <strong>January 2025</strong>, the Ministry's Digital Infrastructure Grant began rolling out, prioritizing rural schools. Recipients like <strong>IMSB Malpur</strong> received solar panels, refurbished laptops, and portable Wi-Fi hotspots.</p><p style="margin-bottom: 15px; font-size: 16px;">The grant also funded <strong>"Tech Hubs"</strong>—shared community spaces where students from neighboring villages access devices after school hours. These hubs, managed by local volunteers, have become centers of collaboration, hosting coding clubs and parent workshops.</p><div style="padding: 20px 0; margin-top: 15px;"><p style="margin: 0; font-style: italic; font-size: 16px;">"We used to draw robots on paper. Now we code real ones!"</p><div style="text-align: right; margin-top: 10px; font-weight: bold;">— Ali<br><small>Grade 4 Student, IMSB Malpur</small></div></div></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Female Participation Defies Odds</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">Despite cultural barriers, rural schools report rising female enrollment in tech classes. At <strong>IMCG Golra</strong>, <strong>60%</strong> of coding club members are girls, many inspired by <strong>Areeba Riaz</strong>, one of the first female Coding Fellows.</p><div style="padding: 20px 0; margin-top: 15px;"><p style="margin: 0; font-style: italic; font-size: 16px;">"Parents initially worried tech was 'unladylike,' but seeing their daughters build robots changed minds."</p><div style="text-align: right; margin-top: 10px; font-weight: bold;">— Principal Samina Khalid<br><small>IMCG Golra</small></div></div></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Challenges and Community Solutions</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">The rural expansion faced several obstacles, each met with innovative community-driven solutions:</p><div style="padding: 10px 0; margin-bottom: 10px;">• <strong>Power Gaps:</strong> Solar-powered charging stations now support device usage in 15 schools</div><div style="padding: 10px 0; margin-bottom: 10px;">• <strong>Teacher Training:</strong> Rural educators undergo monthly upskilling sessions via the LMS</div><div style="padding: 10px 0; margin-bottom: 15px;">• <strong>Parental Hesitation:</strong> Demo days and student-led workshops have eased skepticism, with 70% of parents now supporting tech education</div></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Partnerships for Sustainability</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">The project has partnered with <strong>PakTech Foundation</strong>, an NGO donating refurbished devices, and <strong>Farmers United</strong>, which sponsors agriculture-themed coding challenges. Corporate sponsors like <strong>PTCL</strong> provide subsidized internet packages to Tech Hubs, ensuring continuous access.</p></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Impact in Numbers</h2><div style="padding: 20px 0;"><div style="padding: 10px 0; margin-bottom: 10px;">• <strong>45% Increase:</strong> Rural student participation in tech classes since December 2024</div><div style="padding: 10px 0; margin-bottom: 10px;">• <strong>12 Rural Schools:</strong> Shortlisted for the 2025 Tech Olympiad</div><div style="padding: 10px 0; margin-bottom: 15px;">• <strong>200+ Parents:</strong> Trained in digital literacy through community workshops</div></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Voices from the Ground</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;"><strong>Sadia Noor</strong>, a Grade 5 student from <strong>IMSB Bhara Kau</strong>, showcased her team's AI model predicting crop yields at a village fair.</p><div style="padding: 20px 0; margin-top: 15px;"><p style="margin: 0; font-style: italic; font-size: 16px;">"My father used to call computers a waste of time. Now he asks me for weather forecasts!"</p><div style="text-align: right; margin-top: 10px; font-weight: bold;">— Sadia Noor<br><small>Grade 5 Student, IMSB Bhara Kau</small></div></div></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Looking Ahead</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">The Ministry aims to bring <strong>50 more rural schools</strong> into the fold by <strong>July 2025</strong>, with plans to replicate the model in <strong>Punjab and Khyber Pakhtunkhwa</strong>. A <strong>Mobile Tech Van</strong> initiative, equipped with devices and Coding Fellows, will tour remote villages, ensuring no child is left offline.</p><p style="margin: 0; font-size: 16px;">This rural expansion demonstrates that with creativity, community support, and strategic partnerships, quality tech education can reach every corner of Pakistan, transforming lives one village at a time.</p></div></div></div></div>`,
    //   Date: "2 October, 2024",
    // },
    // {
    //   Title: "Tech Olympiad 2024 – Islamabad’s Primary Students Shine as Innovators",
    //   Image: "https://placehold.co/600x400",
    //   Description:`<div style="max-width: 800px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;"><div style="text-align: center; padding: 20px 0;"><div style="font-size: 14px; margin-bottom: 10px;">Islamabad, Pakistan</div><h1 style="font-size: 24px; font-weight: bold; margin: 0;">Pakistan's First Tech Olympiad Empowers Young Innovators</h1></div><div style="padding: 20px 0;"><p style="margin: 0; font-size: 16px;">On December 15, 2024, the Federal Directorate of Education (FDE) auditorium buzzed with excitement as 500 primary students from 50 schools showcased their tech projects at Pakistan’s inaugural Tech Olympiad. Organized under the “Coding, Robotics, and AI Learning” initiative, the event marked a milestone in the project’s journey, highlighting how far students and educators had progressed in just three months.</p></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">A Platform for Innovation</h2><div style="padding: 10px 0;"><ul><li><strong>Robotics Rally:</strong> Students programmed robots to navigate obstacle courses using open-source tools.</li><li><strong>AI Model Expo:</strong> Teams presented chatbots, image classifiers, and story generators built with IBM’s kid-friendly AI platforms.</li><li><strong>Cyber Safety Challenge:</strong> Gamified quizzes tested skills in detecting fake news and securing online data.</li><li><strong>Scratch Storytellers:</strong> Animated tales coded by students, blending logic with creativity.</li></ul></div><p style="margin: 0; font-size: 16px;">The event drew over 2,000 attendees, including parents, teachers, and representatives from the Ministry of Federal Education.</p></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Standout Projects</h2><ul><li><strong>FarmBot Prototype:</strong> Students from rural IMSB Sohan built a low-cost robot using recycled materials to simulate crop planting, addressing agricultural challenges in their community.</li><li><strong>Urdu Literacy Chatbot:</strong> A team from Islamabad Model College for Girls F-6/2 designed an AI tool to help peers learn Urdu grammar, earning praise for its practical application.</li><li><strong>E-Waste Awareness Game:</strong> A Scratch-based game by Grade 4 students from ICB G-11/1 taught players to recycle electronics responsibly, winning the “Sustainability Innovator” award.</li></ul><p style="margin: 0; font-style: italic; font-size: 16px;">“These projects prove age is no barrier to solving real-world problems,” remarked Dr. Nazir Perwaiz, CEO of Murabbi, during his keynote address.</p></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Breaking Barriers: Rural vs. Urban Participation</h2><p style="margin: 0; font-size: 16px;">To ensure equity, the Ministry provided transportation and resources for 15 rural schools to participate. IMSB Tarnol, a school with limited electricity, won accolades for their solar-powered robot crafted from discarded toy parts. “We used what we had—old batteries, wires, and teamwork,” said Amina, a Grade 5 student. Her team’s victory underscored the initiative’s goal of democratizing tech education.</p></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Behind the Scenes: Coding Fellows as Mentors</h2><p style="margin: 0; font-size: 16px;">The Olympiad also recognized the educators driving the initiative. Muhammad Usman Tahir, a Coding Fellow from G-7/3, coached three winning teams. “Students started with ‘What is coding?’ in October. Today, they’re debugging robots independently. That’s the power of consistent mentorship,” he shared.</p></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Challenges and Lessons</h2><p style="margin: 0; font-size: 16px;">While the event celebrated success, it also revealed gaps. Some schools struggled with inconsistent internet access, prompting the Ministry to announce a Digital Infrastructure Grant for 2025. Additionally, feedback from judges emphasized the need for advanced training modules to sustain student interest as they progress to higher grades.</p></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">The Road Ahead</h2><ul><li>Expand the initiative to 200 schools by mid-2025.</li><li>Launch a Student Tech Ambassador program, empowering top performers to mentor peers.</li><li>Partner with local tech firms for internships and workshops.</li></ul></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">A Moment of Pride</h2><p style="margin: 0; font-size: 16px;">Mr. Mohyuddin Ahmad Wani, Secretary of the Federal Education Ministry, closed the ceremony with a pledge: “This Olympiad is not an endpoint but a beginning. We will ensure every Pakistani child, from Quetta to Karachi, has the tools to thrive in the digital age.”</p></div><div style="padding: 25px 0; text-align: center;"><h2 style="font-size: 20px; margin-bottom: 10px;">Join the Movement</h2><p style="margin: 0; font-size: 16px;">Watch highlights of the Tech Olympiad on our YouTube channel and follow <strong>#TechOlympiadPK</strong> for updates on winning projects and student journeys.</p></div></div>`,
    //   Date: "29 September, 2024",
    // },
    {
      Title: " From Training to Transformation – Coding Fellows Enter the Classroom",
      Image: "https://placehold.co/600x400",
      Description:`<div style="max-width: 800px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;"><div style="text-align: center; padding: 20px 0;"><div style="font-size: 14px; margin-bottom: 10px;">Islamabad, Pakistan</div><h1 style="font-size: 24px; font-weight: bold; margin: 0;">From Classrooms to Code Labs: The First Month of Tech Education</h1></div><div style="padding: 20px 0;"><div style="padding: 20px 0; margin-bottom: 20px;"><p style="margin: 0; font-size: 16px;"><strong>October 2024</strong> marked a pivotal moment for the "Coding, Robotics, and AI Learning" initiative as <strong>73 Coding Fellows</strong> stepped into <strong>150 primary schools</strong> across Islamabad. Their mission: to transform traditional classrooms into hubs of innovation, where young students engage with technology not as passive users but as creators and problem-solvers. This phase of the project, rooted in meticulous planning and community collaboration, has begun reshaping how primary education intersects with digital literacy.</p></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Strategic Deployment: Balancing Equity and Efficiency</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">The deployment of Coding Fellows followed a carefully crafted strategy to maximize impact while addressing practical challenges. Proximity played a central role, with <strong>45 fellows</strong> assigned to schools near their residences to minimize commute times.</p><p style="margin-bottom: 15px; font-size: 16px;">For instance, <strong>Muhammad Usman Tahir</strong>, a postgraduate student from NUST, teaches at Islamabad Model School in sectors <strong>G-7/3 and F-7/2</strong>, ensuring he can dedicate energy to both his students and ongoing studies.</p><p style="margin-bottom: 15px; font-size: 16px;">Female fellows, constituting <strong>26%</strong> of the cohort, were prioritized for urban schools in well-connected sectors like <strong>F-6 and G-7</strong>, fostering a safe and supportive environment. High-performing fellows, such as <strong>Areeba Riaz</strong> (assigned to Islamabad College for Girls F-6/2), were placed in schools with larger student populations to amplify their impact.</p></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Early Challenges and Adaptive Solutions</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">Initial weeks revealed logistical hurdles, such as varying school timetables and limited access to computer labs in rural areas. To address this, fellows adopted a hybrid approach.</p><p style="margin-bottom: 15px; font-size: 16px;">In schools with limited infrastructure, they introduced <strong>unplugged coding activities</strong>—like algorithm games using physical grids and story-based logic puzzles—to teach computational thinking without screens. For example, at <strong>IMSB Sohan</strong>, a school with intermittent electricity, fellows used board games to simulate robotics pathfinding, turning constraints into creative opportunities.</p><div style="padding: 20px 0; margin-top: 15px;"><p style="margin: 0; font-style: italic; font-size: 16px;">"Children now rush to their coding classes. Even those hesitant about math are solving problems through Scratch games."</p><div style="text-align: right; margin-top: 10px; font-weight: bold;">— Mrs. Samina Khan<br><small>Principal of Islamabad Model School G-8/1</small></div></div></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">The Role of the Learning Management System (LMS)</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">The custom-built LMS emerged as a cornerstone of the project, enabling real-time monitoring and support. Fellows use the platform to:</p><div style="padding: 10px 0; margin-bottom: 10px;">• Upload lesson plans</div><div style="padding: 10px 0; margin-bottom: 10px;">• Track student progress through auto-graded quizzes</div><div style="padding: 10px 0; margin-bottom: 15px;">• Share success stories</div><p style="margin-bottom: 15px; font-size: 16px;">For instance, a <strong>Grade 3 class in IMCB G-13/2</strong> recently completed a Scratch project where students animated Pakistan's national flag—a task that reinforced both coding skills and civic pride.</p><p style="margin: 0; font-size: 16px;">The LMS also aggregates feedback from students and teachers, revealing that <strong>82% of students</strong> rated their coding sessions as "highly engaging" in the first month.</p></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Student Projects: From Concepts to Creations</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">Early classroom achievements underscore the program's potential:</p><div style="padding: 15px 0; margin-bottom: 15px;"><strong>At Islamabad Model College for Girls F-6/2:</strong> Students designed a chatbot named <strong>"Virtual Asima"</strong> using IBM's AI tools, capable of answering basic questions about Pakistani history.</div><div style="padding: 15px 0; margin-bottom: 15px;"><strong>In Tarnol's rural schools:</strong> Children collaborated on a robotics challenge, building makeshift solar-powered cars from recycled materials.</div><p style="margin-bottom: 15px; font-size: 16px;">These projects not only teach technical skills but also foster teamwork and critical thinking.</p><div style="padding: 20px 0; margin-top: 15px;"><p style="margin: 0; font-style: italic; font-size: 16px;">"One student told me she now wants to build robots that help farmers. These moments remind me why this work matters."</p><div style="text-align: right; margin-top: 10px; font-weight: bold;">— Zain Ul Abideen<br><small>Coding Fellow deployed in Rawat</small></div></div></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Community Engagement and Future Goals</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">The initiative has sparked interest beyond classrooms. Parents in sectors like <strong>G-10 and I-8</strong> have organized community demo days, where students showcase their coding projects.</p><p style="margin-bottom: 15px; font-size: 16px;">The Ministry plans to host an inter-school <strong>"Tech Olympiad"</strong> in <strong>December 2024</strong>, featuring:</p><div style="padding: 10px 0; margin-bottom: 10px;">• Robotics races</div><div style="padding: 10px 0; margin-bottom: 10px;">• AI model exhibitions</div><div style="padding: 10px 0; margin-bottom: 15px;">• Cybersecurity quizzes</div><p style="margin-bottom: 15px; font-size: 16px;">Looking ahead, the project team aims to secure funding for expanding to <strong>50 additional schools</strong> in 2025, with a focus on rural Islamabad. Partnerships with local NGOs are also underway to donate refurbished computers to underserved schools, ensuring no student is left behind in the digital revolution.</p></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">A Call to Innovate</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">As the Coding Fellows settle into their roles, their work exemplifies how technology can democratize education. The next post will delve into the "Tech Olympiad" preparations, spotlighting student innovations and the role of community mentors.</p><p style="margin: 0; font-size: 16px;">Follow <strong>#TechOlympiadPK</strong> to witness young innovators in action.</p></div></div></div></div>`,
      Date: "24 September, 2024",
    },
    {
      Title:" Bridging Theory and Practice: How 73 Tech Graduates Became Classroom Innovators",
      Image: "https://placehold.co/600x400",
      Description:`<div style="max-width: 800px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;"><div style="text-align: center; padding: 20px 0;"><div style="font-size: 14px; margin-bottom: 10px;">Islamabad, Pakistan</div><h1 style="font-size: 24px; font-weight: bold; margin: 0;">From Theory to Practice: The Coding Fellows Training Bootcamp</h1></div><div style="padding: 20px 0;"><div style="padding: 20px 0; margin-bottom: 20px;"><p style="margin: 0; font-size: 16px;">From <strong>September 23 to 28, 2024</strong>, the National University of Sciences and Technology (NUST) hosted a rigorous training program for the newly recruited Coding Fellows. This five-day bootcamp aimed to equip educators with the skills to teach coding, robotics, and AI to primary students. Held at NUST's <strong>School of Electrical Engineering and Computer Science (SEECS)</strong>, the training blended hands-on workshops, pedagogical strategies, and curriculum mastery.</p></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Day 1–2: Mastering Scratch Programming</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">The bootcamp began with foundational training in <strong>Scratch</strong>, a block-based programming language designed for young learners. Under the guidance of <strong>Mr. Azhaan</strong>, an expert in educational technology, fellows learned to create interactive games, animations, and storytelling projects. Key activities included:</p><div style="padding: 10px 0; margin-bottom: 10px;">• Designing a calculator using variables and conditional logic</div><div style="padding: 10px 0; margin-bottom: 10px;">• Developing a multiplication table quiz to engage students</div><div style="padding: 10px 0; margin-bottom: 15px;">• Hosting a friendly competition where fellows improved each other's Scratch games</div><div style="padding: 20px 0; margin-top: 15px;"><p style="margin: 0; font-style: italic; font-size: 16px;">"Scratch isn't just about dragging blocks—it's about nurturing logical thinking. We trained fellows to break down complex ideas into child-friendly lessons."</p><div style="text-align: right; margin-top: 10px; font-weight: bold;">— Mr. Azhaan<br><small>Expert in Educational Technology</small></div></div></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Day 3: Demystifying AI and Machine Learning</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">The third day focused on <strong>AI concepts</strong>, led by <strong>Mr. Asadullah</strong>, a researcher specializing in machine learning. Fellows explored tools from IBM's AI education suite, enabling them to train simple models without coding. Highlights included:</p><div style="padding: 10px 0; margin-bottom: 10px;">• Building Urdu-speaking chatbots to demonstrate natural language processing</div><div style="padding: 10px 0; margin-bottom: 10px;">• Simulating ant colony behavior to teach problem-solving through biomimicry</div><div style="padding: 10px 0; margin-bottom: 15px;">• Discussing ethical AI use, including data privacy and bias detection</div><p style="margin: 0; font-size: 16px;">A hands-on session challenged fellows to design an AI model that could distinguish between images of animals and everyday objects, emphasizing real-world applications.</p></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Day 4–5: Robotics Without Expensive Kits</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">The final two days, led by <strong>Dr. Latif</strong>, centered on <strong>robotics education using open-source tools</strong>. Instead of costly kits, fellows learned to replicate activities with affordable materials:</p><div style="padding: 10px 0; margin-bottom: 10px;">• Constructing basic robots with household items like cardboard and motors</div><div style="padding: 10px 0; margin-bottom: 10px;">• Programming pathfinding algorithms for maze-solving competitions</div><div style="padding: 10px 0; margin-bottom: 15px;">• Simulating gear mechanics using free online platforms</div><p style="margin: 0; font-size: 16px;">A highlight was the <strong>Sumo Robot Challenge</strong>, where fellows programmed virtual robots to push opponents out of a ring. The exercise emphasized creativity and iterative design—skills they would later instill in students.</p></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Pedagogy and Classroom Management</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">Beyond technical skills, the training addressed teaching methodologies:</p><div style="padding: 10px 0; margin-bottom: 10px;"><strong>Age-Appropriate Engagement:</strong> Strategies to simplify coding concepts for Grades 1–5</div><div style="padding: 10px 0; margin-bottom: 10px;"><strong>Gamification:</strong> Using competitions and badges to motivate students</div><div style="padding: 10px 0; margin-bottom: 15px;"><strong>Inclusive Practices:</strong> Adapting lessons for diverse learning styles and abilities</div><p style="margin: 0; font-size: 16px;">Fellows also practiced delivering mock lessons, receiving feedback from NUST faculty and peers.</p></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Certification and Government Endorsement</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">The bootcamp concluded with a ceremony attended by <strong>Mr. Mohyuddin Ahmad Wani</strong>, Secretary of the Federal Education Ministry. He distributed <strong>STEM Educator Certificates</strong> to all 73 fellows.</p><div style="padding: 20px 0; margin-top: 15px;"><p style="margin: 0; font-style: italic; font-size: 16px;">"These educators are pioneers. They'll not only teach technology but also inspire a generation to innovate for Pakistan's future."</p><div style="text-align: right; margin-top: 10px; font-weight: bold;">— Mr. Mohyuddin Ahmad Wani<br><small>Secretary of the Federal Education Ministry</small></div></div></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Preparing for Deployment</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">Post-training, fellows received school assignments based on proximity, merit, and gender inclusivity. Each was equipped with:</p><div style="padding: 10px 0; margin-bottom: 10px;">• Access to the project's <strong>Learning Management System (LMS)</strong> for lesson plans</div><div style="padding: 10px 0; margin-bottom: 10px;">• Open-source software links for robotics simulations</div><div style="padding: 10px 0; margin-bottom: 15px;">• A mentorship hotline for real-time support</div></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">What's Next?</h2><div style="padding: 20px 0;"><p style="margin: 0; font-size: 16px;">In <strong>October 2024</strong>, Coding Fellows began integrating tech lessons into school timetables. The next post will explore their first month in classrooms, featuring student projects, challenges faced, and early success stories.</p></div></div></div></div>`,
      Date: "10 September, 2024",

    },
    {
      Title: "A Transparent and Merit-Based Approach to Building a Team of Coding Fellows",
      Image: "https://placehold.co/600x400",
      Description:`<div style="max-width: 800px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;"><div style="text-align: center; padding: 20px 0;"><h1 style="font-size: 24px; font-weight: bold; margin: 0;">Building the Future: Recruiting Pakistan's First Coding Fellows</h1></div><div style="padding: 20px 0;"><div style="padding: 20px 0; margin-bottom: 20px;"><p style="margin: 0; font-size: 16px;">The success of the "Coding, Robotics, and AI Learning" initiative relied heavily on recruiting skilled educators capable of inspiring young minds. To achieve this, the Federal Ministry and NUST designed a rigorous, two-phase recruitment process that emphasized fairness, transparency, and inclusivity. The goal was to select <strong>75 Coding Fellows</strong> from a competitive pool of applicants, ensuring they possessed both technical expertise and a passion for teaching.</p></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Targeting NUST's Postgraduate Talent</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">The first phase focused on postgraduate students from NUST's <strong>School of Electrical Engineering and Computer Science (SEECS)</strong>, a institution renowned for its excellence in technology education. Advertisements were circulated through NUST's official social media channels and targeted Facebook campaigns, highlighting the role's benefits:</p><div style="padding: 10px 0; margin-bottom: 10px;">• Monthly salary of <strong>PKR 55,000</strong></div><div style="padding: 10px 0; margin-bottom: 10px;">• Flexible working hours from <strong>8:00 AM to 2:00 PM</strong></div><div style="padding: 10px 0; margin-bottom: 15px;">• Opportunities for professional growth</div><p style="margin-bottom: 15px; font-size: 16px;">Interested candidates submitted applications via a Google Form, which collected resumes and academic details. By early September 2024, <strong>55 candidates</strong> had been shortlisted for further evaluation.</p><p style="margin-bottom: 15px; font-size: 16px;">These candidates underwent a <strong>30-minute computer-based test</strong> at SEECS on <strong>September 4, 2024</strong>. The assessment, designed to mirror NUST's entry exams, covered:</p><div style="padding: 10px 0; margin-bottom: 10px;">• Scratch programming</div><div style="padding: 10px 0; margin-bottom: 10px;">• Python fundamentals</div><div style="padding: 10px 0; margin-bottom: 10px;">• Machine learning concepts</div><div style="padding: 10px 0; margin-bottom: 15px;">• Robotics basics</div><p style="margin-bottom: 15px; font-size: 16px;">To ensure integrity, the test was administered using <strong>Safe Exam Browser</strong>, a tool that restricted access to external websites or applications during the exam. Results were automatically graded and announced immediately, with <strong>45 candidates</strong> qualifying for interviews. After face-to-face interviews assessing communication skills and teaching aptitude, <strong>40 candidates</strong> received provisional offers.</p></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Expanding the Search Nationwide</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">To fill remaining positions, Phase 2 opened applications to graduates outside NUST, attracting <strong>67 additional candidates</strong>. The same rigorous testing and interview protocols were applied. This phase saw a diverse applicant pool, including professionals from <strong>Lahore, Karachi, and Peshawar</strong>.</p><p style="margin-bottom: 15px; font-size: 16px;">Following evaluations, <strong>40 candidates</strong> were selected, bringing the total number of offers to <strong>80</strong>. By <strong>September 16, 2024</strong>, <strong>65 candidates</strong> had accepted their offers. To meet the target of 75 Coding Fellows, <strong>15 candidates</strong> from a waitlist were extended offers, finalizing the cohort by <strong>September 18</strong>.</p></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Prioritizing Gender Inclusivity</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">Recognizing the gender gap in Pakistan's tech sector, the project team actively encouraged female applicants. Of the <strong>73 Coding Fellows</strong> ultimately deployed, <strong>20 (26%)</strong> were women—a significant achievement in a field traditionally dominated by men.</p><p style="margin-bottom: 15px; font-size: 16px;">Female fellows were strategically assigned to schools in urban sectors like <strong>G-7 and F-6</strong> to ensure safe and accessible workplaces. Flexible hours also allowed many to balance teaching with postgraduate studies, addressing retention challenges common in STEM careers.</p></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Technology Ensuring Fairness</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">The recruitment process set new standards for transparency. Automated grading eliminated human bias in test scoring, while instant result announcements via email ensured candidates received timely feedback. Digital onboarding—including electronically signed offer letters and agreements—streamlined administrative processes.</p><div style="padding: 20px 0; margin-top: 15px;"><p style="margin: 0; font-style: italic; font-size: 16px;">"Our system guaranteed equal opportunity. Whether a candidate was from Islamabad or Quetta, they faced identical test conditions and evaluation criteria."</p><div style="text-align: right; margin-top: 10px; font-weight: bold;">— Dr. Javed Iqbal<br><small>Technical Lead</small></div></div></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Preparing for Deployment</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">Selected Coding Fellows reported to NUST's SEECS campus on <strong>September 23, 2024</strong>, for a <strong>five-day training bootcamp</strong>. The training, led by industry experts and NUST faculty, covered:</p><div style="padding: 10px 0; margin-bottom: 10px;">• Scratch programming</div><div style="padding: 10px 0; margin-bottom: 10px;">• AI fundamentals</div><div style="padding: 10px 0; margin-bottom: 10px;">• Hands-on robotics activities</div><div style="padding: 10px 0; margin-bottom: 15px;">• Age-appropriate teaching methodologies</div><p style="margin-bottom: 15px; font-size: 16px;">Certificates were awarded by the Federal Education Secretary, <strong>Mr. Mohyuddin Ahmad Wani</strong>, marking the start of their journey as tech educators.</p></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Looking Ahead</h2><div style="padding: 20px 0;"><p style="margin-bottom: 15px; font-size: 16px;">With training complete, the Coding Fellows began their deployments in early <strong>October 2024</strong>, assigned to <strong>150 schools</strong> across Islamabad. Their mission: to ignite curiosity and equip students with skills for a digital future.</p><p style="margin: 0; font-size: 16px;">The next post will delve into their training experience and the innovative tools they're using to transform classrooms.</p></div></div></div></div>`,
      Date: "7 September, 2024",
    },
    {
      Title:"Coding the Future: 75 Fellows Bring AI & Robotics to Pakistan’s Primary Schools",
      Image: "https://placehold.co/600x400",
      Description: `<div style="max-width: 800px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;"><div style="text-align: center; padding: 20px 0;"><div style="font-size: 14px; margin-bottom: 10px;">Islamabad, Pakistan</div><h1 style="font-size: 24px; font-weight: bold; margin: 0;">Pakistan's Historic Digital Education Initiative</h1></div><div style="padding: 20px 0;"><div style="padding: 20px 0; margin-bottom: 20px;"><p style="margin: 0; font-size: 16px;">In a historic move to bridge the digital divide and empower future generations, the <strong>Ministry of Federal Education and Professional Training</strong> has partnered with the <strong>National University of Sciences and Technology (NUST)</strong> to launch the <em>"Coding, Robotics, and AI Learning for Primary Grade Students"</em> initiative. Signed on <strong>August 29, 2024</strong>, this ambitious project marks Pakistan's first nationwide effort to integrate cutting-edge technology into primary education, targeting <strong>155 schools</strong> across Islamabad under the Federal Directorate of Education (FDE).</p></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Vision & Objectives</h2><div style="padding: 20px 0;"><div style="text-align: center; padding: 10px 0; margin-bottom: 15px;"><span style="font-size: 18px; font-weight: bold;">PKR 163.92 Million</span><div style="font-size: 14px; margin-top: 5px;">Project Value</div></div><div><div style="padding: 10px 0; margin-bottom: 10px;"><strong>Equip 75 Coding Fellows</strong> with tools to teach coding, robotics, and AI to students from <strong>Grades 1 to 5</strong>.</div><div style="padding: 10px 0; margin-bottom: 10px;"><strong>Cultivate critical thinking, creativity, and problem-solving skills</strong> in young learners.</div><div style="padding: 10px 0;"><strong>Align with Pakistan's National Digital and Innovation in Education Strategy (NDIES)</strong>, fostering a tech-savvy workforce ready for the Fourth Industrial Revolution.</div></div></div><div style="padding: 20px 0; margin-top: 15px;"><p style="margin: 0; font-style: italic; font-size: 16px;">"This initiative is not just about coding—it's about unlocking potential. By exposing children to AI and robotics early, we're preparing them to lead, not follow, in a digital world."</p><div style="text-align: right; margin-top: 10px; font-weight: bold;">— Mr. Mohyuddin Ahmad Wani<br><small>Secretary of the Federal Education Ministry</small></div></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Why This Matters</h2><div><div style="padding: 15px 0; margin-bottom: 15px;"><h3 style="font-size: 16px; margin-bottom: 8px;">Global Relevance</h3><p style="margin: 0;">The curriculum draws from <strong>Oxford International's</strong> primary framework, <strong>IBM's</strong> AI modules, and <strong>Google's</strong> cyber-safety programs, ensuring alignment with global standards.</p></div><div style="padding: 15px 0; margin-bottom: 15px;"><h3 style="font-size: 16px; margin-bottom: 8px;">Sustainability</h3><p style="margin: 0;">Designed for low-resource settings, the program uses <strong>open-source tools</strong> to replace expensive robotics kits, making it scalable to rural areas.</p></div><div style="padding: 15px 0;"><h3 style="font-size: 16px; margin-bottom: 8px;">Future Expansion</h3><p style="margin: 0;">Plans include extending the initiative to <strong>out-of-school children</strong> and integrating it into provincial education systems.</p></div></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Key Features of the Initiative</h2><div><div style="padding: 20px 0; margin-bottom: 15px;"><h3 style="font-size: 18px; margin-bottom: 10px;">1. Tech-Driven Pedagogy</h3><div style="padding-left: 15px;"><div style="margin-bottom: 8px; padding: 8px 0;">Combines <strong>hands-on robotics activities</strong> with <strong>interactive online learning</strong> via a custom <strong>Learning Management System (LMS)</strong>.</div><div style="padding: 8px 0;">Focus on <strong>age-appropriate teaching methods</strong>, such as gamified coding challenges and AI model-building exercises.</div></div></div><div style="padding: 20px 0; margin-bottom: 15px;"><h3 style="font-size: 18px; margin-bottom: 10px;">2. Strategic Partnerships</h3><div style="padding-left: 15px;"><div style="margin-bottom: 8px; padding: 8px 0;"><strong>NUST's Expertise:</strong> Leverages the university's research in AI and robotics to design the curriculum.</div><div style="padding: 8px 0;"><strong>Corporate Collaboration:</strong> Includes contributions from Google (cyber-safety games) and IBM (AI training tools for kids).</div></div></div><div style="padding: 20px 0;"><h3 style="font-size: 18px; margin-bottom: 10px;">3. Gender Equity</h3><div style="padding-left: 15px;"><div style="margin-bottom: 8px; padding: 8px 0;"><strong>20 female Coding Fellows</strong> prioritized for urban placements to ensure accessibility and representation.</div><div style="padding: 8px 0;">Special incentives to attract women in STEM, addressing Pakistan's gender gap in tech education.</div></div></div></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">Milestones Achieved</h2><div><div style="padding: 15px 0; margin-bottom: 10px;"><strong>Phase 1 Deployment:</strong> 73 Coding Fellows deployed across <strong>150 schools</strong> as of September 2024.</div><div style="padding: 15px 0; margin-bottom: 10px;"><strong>Pilot Success:</strong> A trial at <em>Islamabad College for Girls F-6/2</em> in August 2024 saw students enthusiastically engaging in Scratch programming and robotics competitions.</div><div style="padding: 15px 0;"><strong>Government Backing:</strong> The Ministry guarantees <strong>timely salary payments</strong> and logistical support, including school allocations and resource distribution.</div></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">What's Next?</h2><div style="padding: 20px 0;"><div style="margin-bottom: 10px;"><strong>October 2024:</strong> Coding Fellows begin formal classes, with lessons integrated into school timetables.</div><div style="margin-bottom: 10px;"><strong>Student Competitions:</strong> Inter-school robotics and coding contests to showcase skills.</div><div><strong>Impact Assessment:</strong> Regular LMS-based evaluations to track student progress and trainer performance.</div></div></div><div style="margin-bottom: 30px;"><h2 style="font-size: 20px; margin-bottom: 15px;">A Word from NUST</h2><div style="padding: 20px 0;"><p style="margin: 0; font-style: italic; font-size: 16px;">"This project is a testament to Pakistan's commitment to innovation. By training educators and students simultaneously, we're building a self-sustaining ecosystem for tech education."</p><div style="text-align: right; margin-top: 10px; font-weight: bold;">— Dr. Nazir Perwaiz<br><small>CEO of Murabbi, NUST's partner in curriculum development</small></div></div></div><div style="padding: 25px 0; text-align: center;"><h2 style="font-size: 20px; margin-bottom: 10px;">Join the Movement</h2><p style="margin: 0; font-size: 16px;">Follow our journey as we transform classrooms into tech hubs! Stay tuned for updates on student achievements, competitions, and how you can support scaling this initiative nationwide.</p></div></div></div>`,
      Date: "05 September, 2024",

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