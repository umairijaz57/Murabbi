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
  projects?: Project[];
}



export const newsData :NewsItem[] = [
    {
      Title: "Circuits & Combat – Day 10 of Summer Camp 2025",
      Image: "/news/day10.jpeg",
      Description: '<article style="padding: 2rem; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif; line-height: 1.6; max-width: 100%;"><div style="margin-bottom: 2rem;"><p style="font-size: 1.1rem; margin-bottom: 2rem; text-align: justify;">As Summer Camp 2025 entered double digits, <strong>Day 10</strong> delivered a perfect mix of <strong>hands-on electronics and robotic engineering</strong>—a day packed with logic, learning, and lots of action!</p></div><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">Phase 1: Snap Circuits – Wiring the Basics</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin-bottom: 1rem; font-size: 1.1rem; text-align: justify;">The morning session was all about exploring the fundamentals of <strong>electrical flow and connectivity</strong> through <strong>Snap Circuits</strong>. Students were introduced to the <strong>concepts of series and parallel circuits</strong>, learning how electricity moves, splits, and powers up different components.</p><p style="margin-bottom: 1rem; font-size: 1.1rem; text-align: justify;">Under guided supervision, the children created basic yet functional projects such as:</p><p style="margin-bottom: 1rem; font-size: 1.1rem; text-align: justify;"><strong>Fans connected in parallel and series</strong>, <strong>Whistle-triggered alarms</strong>, and <strong>Simple light-and-sound combinations</strong>.</p><p style="margin: 0; font-size: 1.1rem; text-align: justify;">It was a delightful opportunity for young learners to understand how common electronic systems work—building curiosity for real-life technology in a safe, simplified environment.</p></div></section><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">Phase 2: Sumo Bot Wars – The Return</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin-bottom: 1rem; font-size: 1.1rem; text-align: justify;">The afternoon brought back the thrill of <strong>LEGO EV3 Robotics</strong>, as students were once again tasked with designing bots for a <strong>Sumo Wrestling Challenge</strong>. This time, with prior experience, the competition was fiercer, bots were better, and strategies more refined.</p><p style="margin-bottom: 1rem; font-size: 1.1rem; text-align: justify;">Campers revised their engineering approaches, adding stability, power, and intelligence to their bots before sending them into the ring.</p><p style="margin: 0; font-size: 1.1rem; text-align: justify;">The <strong>Sumo Showdown</strong> was filled with laughter, cheers, and edge-of-seat excitement as students watched their creations battle it out in the spirit of fun and friendly competition.</p></div></section><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">A Day of Connection—In Circuits & in Teams</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin: 0; font-size: 1.1rem; text-align: justify;">What made Day 10 special was how it taught campers the <strong>connection between hardware, logic, and teamwork</strong>. Whether it was linking circuits or building bots, every activity nurtured critical thinking, creativity, and collaboration.</p></div></section><div style="margin: 2rem 0;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1rem;">A Day of Innovation and Learning</h2><p style="font-size: 1.1rem; margin-bottom: 1.5rem; text-align: justify;">Day 10 was not just about building circuits and robots—it was about understanding the fundamental principles that power our modern world. It was a day of <strong>exploration and discovery</strong>, where every connection made sense and every battle taught valuable lessons about engineering and perseverance.</p></div><footer style="margin-top: 3rem; padding: 1.5rem; border: 2px solid #000; background: #f5f5f5;"><p style="font-size: 1.2rem; font-weight: bold; margin: 0; text-align: center;">As the camp continues to push the boundaries of what young minds can explore, Day 10 stood as another milestone of innovation and hands-on learning!</p></footer></article>',
      Date: "June 27, 2025",
    },
    {
      Title: "Inked with Grace: Campers Explore the Art of Urdu Calligraphy on Day 9",
      Image: "/news/day9.jpeg",
      Description: `<article style="padding: 2rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; max-width: 100%;"><div style="margin-bottom: 2rem;"><p style="font-size: 1.1rem; margin-bottom: 2rem; text-align: justify;">Day 9 at Summer Camp 2025 brought with it a beautiful shift in pace—from action-packed games and robotics to the peaceful and artistic world of <strong>Urdu calligraphy</strong>. The day was centered on <strong>creativity, culture, and self-expression</strong>, allowing the children to explore the graceful beauty of their language through art.</p></div><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">A Journey Through Haroof-e-Tahajji</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin-bottom: 1rem; font-size: 1.1rem; text-align: justify;">The session began with an introduction to the <strong>Urdu alphabet</strong>, where children learned the proper formation, flow, and elegance of each <strong>harf (letter)</strong>. From "Alif" to "Yeh," students carefully practiced the structure of the script under the guidance of instructors who gently walked them through strokes, spacing, and writing posture.</p><p style="margin: 0; font-size: 1.1rem; text-align: justify;">As their confidence grew, so did the beauty of their work.</p></div></section><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">Words with Meaning</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin-bottom: 1rem; font-size: 1.1rem; text-align: justify;">After mastering individual letters, students began writing full words—starting with spiritually rich and meaningful expressions like:</p><p style="margin-bottom: 1rem; font-size: 1.1rem; text-align: justify;"><strong>"Bismillah"</strong>, <strong>"Alhamdulillah"</strong>, <strong>"SubhanAllah"</strong>, <strong>"Allah"</strong>, <strong>"Muhammad"</strong>, and many more.</p><p style="margin: 0; font-size: 1.1rem; text-align: justify;">Their calligraphy sheets turned into art pieces filled with not only beautiful handwriting, but also <strong>deep emotion and pride</strong> in their cultural and religious identity.</p></div></section><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">Calm Minds, Creative Hands</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin: 0; font-size: 1.1rem; text-align: justify;">The entire session had a peaceful atmosphere—with focused faces, soft conversation, and the scratch of pens on paper filling the room. It was a powerful contrast to the usual hustle and bustle, reminding everyone that <strong>expression isn't always loud—it can be silent, graceful, and profoundly personal.</strong></p></div></section><div style="margin: 2rem 0;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1rem;">A Day to Reflect and Create</h2><p style="font-size: 1.1rem; margin-bottom: 1.5rem; text-align: justify;">Day 9 was not just about learning to write—it was about learning to appreciate the art hidden within language. It was a day of <strong>discipline and beauty</strong>, where every stroke held meaning and every word reflected purpose. Campers walked away not just with improved writing skills, but with hearts a little fuller and minds a little calmer.</p></div><footer style="margin-top: 3rem; padding: 1.5rem; border: 2px solid #000; background: #f5f5f5;"><p style="font-size: 1.2rem; font-weight: bold; margin: 0; text-align: center;">From circuits to calligraphy—Day 9 reminded us that true beauty lies in the graceful art of expression!</p></footer></article>`,
      Date: "June 26, 2025"
    },
    {
      Title: "From Courts to Fields – Outdoor Fun Marks Day 8",
      Image: "/news/day8.jpeg",
      Description: `<article style="padding: 2rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; max-width: 100%;"><div style="margin-bottom: 2rem;"><p style="font-size: 1.1rem; margin-bottom: 2rem; text-align: justify;">After days of focused learning, code-breaking, and robotics, <strong>Day 8 at Summer Camp 2025</strong> offered a much-needed breath of fresh air—literally! Campers were taken outdoors for a <strong>full day of energetic games, open spaces, and team bonding</strong>.</p></div><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">An Excursion into Fun</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin: 0; font-size: 1.1rem; text-align: justify;">The day began with great excitement as students set out for an outdoor sports venue. The weather was pleasant, spirits were high, and everyone was eager to swap screens and circuits for sunshine and sweat.</p></div></section><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">Game On: Basketball, Football & More</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin-bottom: 1rem; font-size: 1.1rem; text-align: justify;">Once on the grounds, the real fun began. Campers were divided into friendly teams and took part in a variety of classic outdoor games. From <strong>basketball</strong> matches filled with quick passes and bold shots, to <strong>football</strong> games echoing with teamwork and cheers, every child got a chance to shine.</p><p style="margin: 0; font-size: 1.1rem; text-align: justify;">The atmosphere was electric—with sneakers squeaking on courts, balls bouncing across fields, and encouragement flying from all sides. Those looking for a more finesse-based challenge took to <strong>badminton</strong> courts, where birdies flew back and forth in fast-paced rallies that brought laughter and focus together.</p></div></section><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">Beyond the Game</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin-bottom: 1rem; font-size: 1.1rem; text-align: justify;">While competition added excitement, the day was more about <strong>celebration than scores</strong>. It gave the children an opportunity to <strong>unwind, connect with friends</strong>, and engage in <strong>healthy physical activity</strong>—a perfect counterbalance to the mental focus of previous sessions.</p><p style="margin: 0; font-size: 1.1rem; text-align: justify;">Breaks under the shade, shared snacks, and post-game high-fives became just as memorable as the matches themselves. Teachers and team leads also joined in, creating an environment of camaraderie and mutual joy.</p></div></section><div style="margin: 2rem 0;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1rem;">A Day to Remember</h2><p style="font-size: 1.1rem; margin-bottom: 1.5rem; text-align: justify;">By the end of the day, tired legs and bright smiles told the whole story. Day 8 was not just a break from routine—it was a reminder that <strong>play is also a powerful part of learning and growing</strong>. As the campers returned, a renewed energy could be felt—ready to dive back into the exciting journey that Summer Camp 2025 continues to offer.</p></div><footer style="margin-top: 3rem; padding: 1.5rem; border: 2px solid #000; background: #f5f5f5;"><p style="font-size: 1.2rem; font-weight: bold; margin: 0; text-align: center;">From circuits to courts—Day 8 proved that the best learning happens when body and mind work in harmony!</p></footer></article>`,
      Date: "June 25, 2025"

    },
    {
      Title: "From Secret Ciphers to Sports Spirit: A Dynamic Day at Camp",
      Image: "/news/day7.jpeg",
      Description: `<article style="padding: 2rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; max-width: 100%;"><div style="margin-bottom: 2rem;"><p style="font-size: 1.1rem; margin-bottom: 2rem; text-align: justify;">Day 7 at Summer Camp 2025 was all about <strong>mental sharpness and physical energy</strong> — a perfect mix of classical cryptography and outdoor play.</p></div><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">Morning Session: Crack the Code!</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin-bottom: 1rem; font-size: 1.1rem; text-align: justify;">The day began with an intriguing dive into <strong>ancient encryption techniques</strong>. The campers explored historical methods of hiding messages, learning about the <strong>Cardan Grille</strong> and the <strong>Polybius Square</strong>—two timeless tools that introduced them to the art of secret communication.</p><p style="margin: 0; font-size: 1.1rem; text-align: justify;">One of the highlights of the session was the introduction to the <strong>Caesar Cipher</strong>, accompanied by the captivating story of <strong>Julius Caesar</strong> himself. Students then created their very own <strong>Caesar Cipher Wheels</strong>, making the theory come alive with hands-on fun. Each rotation of the wheel brought a new message to decode and a spark of excitement in their eyes.</p></div></section><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">Afternoon Session: Game Time!</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin-bottom: 1rem; font-size: 1.1rem; text-align: justify;">After a mentally stimulating morning, it was time to stretch, run, and play! The kids took a <strong>mini trip to the sports complex</strong>, where they unleashed their energy on the courts.</p><p style="margin: 0; font-size: 1.1rem; text-align: justify;">From <strong>basketball matches</strong> to <strong>bowling lanes</strong>, the session was filled with laughter, cheers, and team spirit.</p></div></section><div style="margin: 2rem 0;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1rem;">The Perfect Balance</h2><p style="font-size: 1.1rem; margin-bottom: 1.5rem; text-align: justify;">Whether solving secret codes or scoring points, Day 7 was all about <strong>balance</strong> — keeping the brain active and the body moving. The perfect combination of mental challenges and physical activity made for an unforgettable day.</p></div><footer style="margin-top: 3rem; padding: 1.5rem; border: 2px solid #000; background: #f5f5f5;"><p style="font-size: 1.2rem; font-weight: bold; margin: 0; text-align: center;">From Caesar's secrets to court victories—Day 7 proved that the best learning happens when mind and body work together!</p></footer></article>`,
      Date: "June 24, 2025",
    },
    {
      Title : "Secrets, Ciphers & Smart Thinking – Day 6 of Summer Camp 2025",
      Image: "/news/day6.jpeg",
      Description: `<article style="padding: 2rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; max-width: 100%;"><div style="margin-bottom: 2rem;"><p style="font-size: 1.1rem; margin-bottom: 2rem; text-align: justify;">Today at camp, the kids embarked on a fun and fascinating journey into the world of <strong>cyber security and secret codes</strong>. With their teacher guiding the way, they took a unique historical detour—exploring the secret-writing techniques of none other than <strong>Leonardo da Vinci</strong>.</p></div><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">From Ancient Secrets to Modern Safety</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin-bottom: 1rem; font-size: 1.1rem; text-align: justify;">From <strong>mirror writing</strong> to <strong>reverse lettering</strong>, students learned how simple yet clever methods were used to hide messages in the past. But it didn't stop there.</p><p style="margin: 0; font-size: 1.1rem; text-align: justify;">The campers were encouraged to connect the dots between <strong>ancient secrets</strong> and <strong>modern-day digital safety</strong>, making the session both meaningful and highly relevant in today's tech-driven world.</p></div></section><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">Hands-On Secret Code Adventures</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin-bottom: 1rem; font-size: 1.1rem; text-align: justify;">Throughout the day, the kids got hands-on experience with different types of secret codes, including:</p><p style="margin-bottom: 1rem; font-size: 1.1rem; text-align: justify;"><strong>Pigpen ciphers</strong>, <strong>Morse code</strong>, <strong>Inchwords</strong>, and <strong>Clip tales</strong>.</p><p style="margin: 0; font-size: 1.1rem; text-align: justify;">These brain-boosting activities sparked curiosity and developed creative problem-solving skills. The mystery and thrill of <strong>decoding hidden messages</strong> kept the energy alive, making every child feel like a real-life secret agent!</p></div></section><div style="margin: 2rem 0;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1rem;">A Day of Smart Thinking and Safe Learning</h2><p style="font-size: 1.1rem; margin-bottom: 1.5rem; text-align: justify;">It was a day of thinking smart, staying safe, and having fun—all rolled into one unforgettable experience. The perfect blend of historical intrigue and modern cybersecurity awareness made this session both educational and thrilling.</p></div><footer style="margin-top: 3rem; padding: 1.5rem; border: 2px solid #000; background: #f5f5f5;"><p style="font-size: 1.2rem; font-weight: bold; margin: 0; text-align: center;">From da Vinci's secrets to digital safety—every camper became a code-breaking detective today!</p></footer></article>`,
      Date: "June 23, 2025",

    },
    {
      Title: "Code. Compete. Circuit – Day 5 of Summer Camp 2025",
      Image:"/news/day5.png",
      Description:`<article style="padding: 2rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; max-width: 100%;"><div style="margin-bottom: 2rem;"><p style="font-size: 1.1rem; margin-bottom: 2rem; text-align: justify;">Day 5 of Summer Camp 2025 brought together the thrill of robotics combat and the wonder of hands-on electronics. With each passing day, the campers are not just learning—they're <em>building</em>, <em>competing</em>, and <em>creating</em>.</p></div><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">Phase 1: The Sumo Robot Showdown</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin-bottom: 1rem; font-size: 1.1rem; text-align: justify;">The day kicked off with students designing and building <strong>Sumo Wrestler Bots</strong> using LEGO EV3 kits. The challenge? Engineer a robot strong and smart enough to push its opponent out of the ring! Campers worked in teams, experimenting with bot design, weight distribution, and movement strategies.</p><p style="margin: 0; font-size: 1.1rem; text-align: justify;">By the end of the first phase, the arena was alive with energy as bots faced off in the <strong>Sumo Wrestling Competition</strong>. Students cheered, adjusted their code, and celebrated every win and creative twist. It was a playful yet intellectually stimulating session where engineering met excitement!</p></div></section><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">Phase 2: Enter the World of Snap Circuits</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin-bottom: 1rem; font-size: 1.1rem; text-align: justify;">In the second half of the day, students were introduced to <strong>Snap Circuit kits</strong>—an exciting way to explore real-world electronics safely and creatively. With a variety of components at hand, campers built functioning electronic projects like:</p><p style="margin-bottom: 1rem; font-size: 1.1rem; text-align: justify;"><strong>Police sirens activated by clapping hands</strong>, <strong>Flashing laser lights with built-in sound effects</strong>, <strong>Two-mode fans with adjustable speed and direction</strong>, and many more original circuit designs!</p><p style="margin: 0; font-size: 1.1rem; text-align: justify;">This activity empowered students to understand the basics of electrical flow, sensors, sound modules, and circuit logic—all while having a blast experimenting.</p></div></section><div style="margin: 2rem 0;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1rem;">From Competition to Creation</h2><p style="font-size: 1.1rem; margin-bottom: 1.5rem; text-align: justify;">Day 5 was a perfect balance of competitive fun and creative discovery. While the morning phase sharpened problem-solving and robotics strategy, the afternoon sparked innovation through hands-on circuit building. As Summer Camp 2025 continues, the young minds grow more confident, creative, and collaborative.</p></div><footer style="margin-top: 3rem; padding: 1.5rem; border: 2px solid #000; background: #f5f5f5;"><p style="font-size: 1.2rem; font-weight: bold; margin: 0; text-align: center;">From sumo bots to snap circuits—Day 5 was all about building tomorrow, one wire and one bot at a time!</p></footer></article>`,
      Date: "June 20, 2025"
    },
    {
      Title: "Gear Masters in Action – Day 4 of Summer Camp 2025",
      Image:"/news/day4.jpeg",
      Description:`<article style="padding: 2rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; max-width: 100%;"><div style="margin-bottom: 2rem;"><p style="font-size: 1.1rem; margin-bottom: 2rem; text-align: justify;">After a day of refreshing fun, Day 4 brought the campers back into the thrilling world of robotics — this time with a deeper focus on mechanics, control, and friendly competition.</p></div><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">Gearing Up for Real Engineering</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin-bottom: 1rem; font-size: 1.1rem; text-align: justify;">The day began with an exciting robotics workshop where students revisited their LEGO EV3 bots — but this time, with a mission: to explore <strong>gears</strong> and understand how mechanical advantage works. From increasing <strong>power</strong> to enhancing <strong>speed</strong>, students learned how changing gear combinations could directly affect a robot's performance.</p><p style="margin: 0; font-size: 1.1rem; text-align: justify;">Instructors explained how gear ratios impact torque and speed, helping the students not just build, but <em>engineer</em> their bots like real-world roboticists. The hands-on gear experiments sparked both excitement and critical thinking.</p></div></section><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">Slope Climbing Challenge</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin: 0; font-size: 1.1rem; text-align: justify;">To put their new knowledge into action, students took part in a <strong>Slope Climbing Competition</strong>. They tested how well their bots could climb steep inclines using enhanced torque and carefully adjusted balance. Watching young minds fine-tune their robots and cheer each other on was a true highlight of the day.</p></div></section><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">Speed Racing Face-off</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin: 0; font-size: 1.1rem; text-align: justify;">In the second phase, it was all about <strong>speed</strong>! The camp hosted a <strong>Speed Racing Competition</strong>, where students modified their robots for maximum acceleration and control. The thrill of racing, combined with the technical pride of seeing their bots zoom forward, created a charged and joyful atmosphere.</p></div></section><div style="margin: 2rem 0;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1rem;">Hands-On Learning at its Best</h2><p style="font-size: 1.1rem; margin-bottom: 1.5rem; text-align: justify;">Day 4 wasn't just another robotics session—it was a lesson in real-time problem solving, engineering creativity, and teamwork. With competitions that were as fun as they were educational, the students walked away with not only enhanced robots but stronger confidence in their abilities.</p></div><footer style="margin-top: 3rem; padding: 1.5rem; border: 2px solid #000; background: #f5f5f5;"><p style="font-size: 1.2rem; font-weight: bold; margin: 0; text-align: center;">Power, Precision & Performance – Day 4 of Summer Camp 2025 was engineering excellence in action!</p></footer></article>`,
      Date: "June 19, 2025",
    },
    {
      Title: "A Day of Fun, Fitness, and Future – Day 3 of Summer Camp 2025",
      Image:"/news/day3.jpeg",
      Description: `<article style="padding: 2rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; max-width: 100%;"><div style="margin-bottom: 2rem;"><p style="font-size: 1.1rem; margin-bottom: 2rem; text-align: justify;">After two immersive days of robotic adventures and phonics exploration, Day 3 of Summer Camp 2025 brought a refreshing change of pace—a well-deserved <em>Tech and Play Break</em> for all our brilliant young minds.</p></div><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">From Code to Controller</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin-bottom: 1rem; font-size: 1.1rem; text-align: justify;">To recharge their creative engines, students were given a break from structured learning and introduced to a tech-driven recreation day. The day started with PC-based game sessions that allowed children to engage in digital entertainment while also developing reflexes, strategy, and coordination in a relaxed setting.</p></div></section><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">VR Experience – A Window into New Worlds</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin-bottom: 1rem; font-size: 1.1rem; text-align: justify;">One of the most exciting moments of the day was the <strong>Virtual Reality</strong> session, where students got a chance to step into immersive digital worlds. Their faces lit up with wonder and thrill as they played interactive VR games—some experiencing it for the very first time.</p><p style="margin: 0; font-size: 1.1rem; text-align: justify;">The VR experience not only entertained but also opened doors to the possibilities of future tech beyond screens and keyboards.</p></div></section><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">Let the Games Begin!</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin: 0; font-size: 1.1rem; text-align: justify;">The day continued with energetic <strong>sports and outdoor games</strong> at the sports complex. Whether it was running, teaming up, bowling, or friendly competition, the playground echoed with laughter and high spirits. It was a chance to stretch, move, and build stronger bonds with fellow campers.</p></div></section><div style="margin: 2rem 0;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1rem;">A Balanced Break</h2><p style="font-size: 1.1rem; margin-bottom: 1.5rem; text-align: justify;">This fun-filled day served as a vital reminder that growth comes not just from learning but from pausing, playing, and letting the mind breathe. With hearts full and minds refreshed, our campers are now geared up for even more exciting discoveries in the coming days.</p></div><footer style="margin-top: 3rem; padding: 1.5rem; border: 2px solid #000; background: #f5f5f5;"><p style="font-size: 1.2rem; font-weight: bold; margin: 0; text-align: center;">Summer Camp 2025 continues to balance learning with joy—and Day 3 was all about celebrating the joy!</p></footer></article>`,
      Date: "June 18, 2025"
      
    },
    {
      Title: "Exploring Senses through Sensors – Day 2 of Summer Camp 2025",
      Image:"/news/day2.jpeg",
      Description:`<article style="padding: 2rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; max-width: 100%;"><div style="margin-bottom: 2rem;"><p style="font-size: 1.1rem; margin-bottom: 2rem; text-align: justify;">The excitement of Summer Camp 2025 continued into its second day with hands-on exploration and digital curiosity. Day 2 was all about understanding how robots perceive the world—through the fascinating use of sensors!</p></div><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">Diving Deeper into Robotics</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin-bottom: 1rem; font-size: 1.1rem; text-align: justify;">The day kicked off with a dynamic session on ultrasonic and color detection sensors. Camp participants got the opportunity to interact with <strong>LEGO EV3 bots</strong> at a more advanced level. They explored how these machines can "see" and "sense" their environment using cutting-edge technology.</p><p style="margin: 0; font-size: 1.1rem; text-align: justify;">Students were thrilled to learn how ultrasonic sensors measure distances and help robots avoid obstacles—mimicking how bats use echolocation. The practical demo was both educational and entertaining, as bots successfully navigated through custom-built mazes designed by the students themselves.</p></div></section><div style="margin: 2rem 0;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1rem;">An Enthusiastic End to an Insightful Day</h2><p style="font-size: 1.1rem; margin-bottom: 1.5rem; text-align: justify;">Day 2 concluded with proud faces and new questions on every curious mind. By combining fun with future-forward skills, the camp continued to build momentum and deeper interest in both early education and robotics.</p></div><footer style="margin-top: 3rem; padding: 1.5rem; border: 2px solid #000; background: #f5f5f5;"><p style="font-size: 1.2rem; font-weight: bold; margin: 0; text-align: center;">Another day of discovery, play, and purpose—Summer Camp 2025 is truly buzzing with energy!</p></footer></article>`,
      Date: "June 17, 2025"
      
    },
    {
      Title: "A Glimpse into the First Day of Summer Camp 2025",
      Image:"/news/opening.jpeg",
      Description: `<article style="padding: 2rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; max-width: 100%;"><div style="margin-bottom: 2rem;"><p style="font-size: 1.1rem; margin-bottom: 1.5rem; text-align: justify;">The Summer Camp 2025 was off to a high-energy start! The day started with an inspiring orientation session that included Chief Guest <strong>Dr. Latif Anjum</strong>, who gave a thought-evoking speech on the future of education and where it meets robotics. He was accompanied by <strong>Miss Sobia</strong>, Head of Jolly Phonics Learning for Kids, who highlighted the significance of early childhood learning and its changing role in today's tech world.</p><p style="font-size: 1.1rem; margin-bottom: 2rem; text-align: justify;">The morning session was for learning about the world of technical education. The participants were introduced to the fundamentals of robotics engineering and how to control mechanical components in tandem with its programming.</p></div><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">Learning Activities</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><h3 style="font-size: 1.2rem; font-weight: bold; margin-bottom: 0.5rem;">Technical Learning</h3><p style="margin: 0; font-size: 1.1rem; text-align: justify;">A practical contest challenged the students' critical thinking and problem-solving skills—yielding a vibrant and interactive session that enhanced autonomous thinking and creativity.</p></div><div style="padding: 1rem; border-left: 4px solid #000; background: white;"><h3 style="font-size: 1.2rem; font-weight: bold; margin-bottom: 0.5rem;">Jolly Phonics Experience</h3><p style="margin: 0; font-size: 1.1rem; text-align: justify;">At the same time, the younger audience had a wonderful sidetrip into the realm of Jolly Phonics, having their initial experience with technical learning in a light-hearted and easily digestible manner. This combination of soft and technical learning made sure that students of every age had something to look forward to.</p></div></section><footer style="margin-top: 3rem; padding: 1.5rem; border: 2px solid #000; background: #f5f5f5;"><p style="font-size: 1.2rem; font-weight: bold; margin: 0; text-align: center;">The day ended on a high note—with laughter, learning, and a feeling of accomplishment in the air. A great and thrilling beginning to Summer Camp 2025!</p></footer></article>`,
      Date: "June 16, 2025"
    },
    {
      Title: "Tech Titan 2 Champions Crowned – A Celebration of Innovation and Excellence Under the 75 Coding Fellows Project",
      Image: "/news/tt1/thumb2.jpg",
      Description: `<article style="padding: 2rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; max-width: 100%;"><div style="margin-bottom: 2rem;"><p style="font-size: 1.1rem; margin-bottom: 1.5rem; text-align: justify;">The <strong>Tech Titan 2 Competition</strong> has officially concluded with an electrifying final showdown between the top two teams—delivering a spectacle of skill, strategy, and cutting-edge innovation. This thrilling finale, held under the banner of the <strong>75 Coding Fellows Project</strong>, once again proved that the future of tech is bright in the hands of our young visionaries.</p><p style="font-size: 1.1rem; margin-bottom: 2rem; text-align: justify;">From intense robot-building sessions to problem-solving challenges, students showcased their <strong>coding expertise, collaborative spirit, and creative thinking</strong>. The competition highlighted how far these students have come through this initiative, which is proudly powered by <strong>Murabbi</strong>, <strong>Federal Directorate of Education (FDE)</strong>, and <strong>NUST</strong>.</p></div><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">Championship Highlights</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin: 0; font-size: 1.1rem; text-align: justify;">The champions of Tech Titan 2 rose to the occasion with remarkable performance, combining <strong>technical mastery with effective teamwork</strong>—setting a high bar for what's to come in the tech education space.</p></div><div style="padding: 1rem; border-left: 4px solid #000; background: white;"><p style="margin: 0; font-size: 1.1rem; text-align: justify;">Yesterday's final face-off was more than just a competition—it was a <strong>celebration of empowerment</strong>, where passion met purpose, and learning transformed into real-world innovation.</p></div></section><footer style="margin-top: 3rem; padding: 1.5rem; border: 2px solid #000; background: #f5f5f5;"><p style="font-size: 1.2rem; font-weight: bold; margin: 0; text-align: center;">Congratulations to all participants, and especially to our new champions—you are the pride of the 75 Coding Fellows Project! 🚀</p></footer></article>`,
      Date: "April 9, 2025",

    },
    {
      Title: "Chromebooks Distributed to FDE Students – A Leap Towards Digital Empowerment Under the 75 Coding",
      Image: "/news/chromebooks.jpg",
      Description:  `<article style="padding: 2rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; max-width: 100%;"><div style="margin-bottom: 2rem;"><p style="font-size: 1.1rem; margin-bottom: 1.5rem; text-align: justify;">In a powerful move to accelerate digital learning across public schools, <strong>Mr. Mohyuddin Wani</strong>, Secretary of the <strong>Federal Directorate of Education (FDE)</strong>, has generously facilitated the distribution of <strong>Chromebooks</strong> among students enrolled in the <strong>75 Coding Fellows Project</strong>—a groundbreaking collaboration between <strong>Murabbi</strong>, <strong>NUST</strong>, and <strong>FDE</strong>.</p><p style="font-size: 1.1rem; margin-bottom: 2rem; text-align: justify;">This initiative marks a significant milestone in the journey of transforming education through technology. The distributed Chromebooks are more than just devices; they represent <strong>opportunity, access, and empowerment</strong>—giving students the tools to explore <strong>coding, AI, and digital innovation</strong> hands-on.</p></div><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">Impact and Vision</h2><div style="padding: 1rem; border-left: 4px solid #000; background: white; margin-bottom: 1.2rem;"><p style="margin: 0; font-size: 1.1rem; text-align: justify;">Speaking about the impact, Murabbi emphasized how essential it is for students to engage with real-world tools as part of their learning experience. These Chromebooks will enable FDE students to continue practicing the skills they've learned during training, fostering a culture of continuous growth and curiosity.</p></div><div style="padding: 1rem; border-left: 4px solid #000; background: white;"><p style="margin: 0; font-size: 1.1rem; text-align: justify;">By placing cutting-edge technology directly into the hands of young learners, this step ensures that <strong>no student is left behind in the race toward a tech-driven future</strong>. It also reflects a strong commitment from all partners involved—Murabbi, FDE, and NUST—to create an inclusive, skill-oriented educational ecosystem.</p></div></section><footer style="margin-top: 3rem; padding: 1.5rem; border: 2px solid #000; background: #f5f5f5;"><p style="font-size: 1.2rem; font-weight: bold; margin: 0; text-align: center;">Thank you to Mr. Wani and the leadership at FDE for believing in the potential of our youth and investing in their future. The digital revolution in education has truly begun!</p></footer></article>`,
      Date: "Febuary 7, 2025",
    },
    {
      Title:"Tech Titan Robotics Competition: Igniting Innovation Under the 75 Coding Fellows Project",
      Image: "/news/tt1/tech (7).jpg",
      Description: `<article style="padding: 2rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; max-width: 100%;"><div style="margin-bottom: 2rem;"><p style="font-size: 1.1rem; margin-bottom: 1.5rem; text-align: justify;">An electrifying wave of innovation took over the National University of Sciences and Technology (NUST) as the much-awaited <strong>Tech Titan Robotics Competition</strong> officially kicked off under the umbrella of the <strong>75 Coding Fellows Project</strong>. This initiative, powered by <strong>Murabbi</strong>, <strong>Federal Directorate of Education (FDE)</strong>, and <strong>NUST</strong>, brought together the brightest young minds from FDE institutions across Islamabad.</p><p style="font-size: 1.1rem; margin-bottom: 2rem; text-align: justify;">From the very first day, students enthusiastically immersed themselves in robot assembly, advanced coding, and real-time problem-solving. Guided by mentors and inspired by their own creativity, these future tech leaders showcased a perfect blend of <strong>teamwork, innovation, and passion</strong>.</p></div><section style="margin: 2.5rem 0; padding: 1.5rem; border: 1px solid #ddd; background: #f9f9f9;"><h2 style="font-size: 1.4rem; font-weight: bold; margin-bottom: 1.5rem;">Competition Timeline</h2><ul style="list-style: none; padding: 0; margin: 0;"><li style="margin-bottom: 1.2rem; padding: 1rem; border-left: 4px solid #000; background: white;"><strong style="font-size: 1.1rem;">Day 1:</strong> Students began transforming their ideas into bots, laying the foundation with smart code and strategic thinking.</li><li style="margin-bottom: 1.2rem; padding: 1rem; border-left: 4px solid #000; background: white;"><strong style="font-size: 1.1rem;">Day 2:</strong> Intense training sessions and hands-on practice helped refine their skills under the expert guidance of NUST instructors.</li><li style="margin-bottom: 0; padding: 1rem; border-left: 4px solid #000; background: white;"><strong style="font-size: 1.1rem;">Day 3:</strong> With adrenaline rising, students prepared for the final showdown, driven by ambition and determination to succeed.</li></ul></section><div style="margin: 2rem 0;"><p style="font-size: 1.1rem; margin-bottom: 1.5rem; text-align: justify;">One of the highlights was an insightful reflection shared by a teacher from Islamabad Model College for Girls, who praised the dedication and curiosity displayed by the students. Their feedback echoed a common sentiment: <strong>this project is shaping the tech leaders of tomorrow</strong>.</p><p style="font-size: 1.1rem; margin-bottom: 2rem; text-align: justify;">As the grand finale approached, excitement reached new heights. The competition became not just a test of coding and robotics skills, but a <strong>celebration of creativity, collaboration, and futuristic learning</strong>.</p></div><footer style="margin-top: 3rem; padding: 1.5rem; border: 2px solid #000; background: #f5f5f5;"><p style="font-size: 1.2rem; font-weight: bold; margin: 0; text-align: center;">Let the best bot win – but in truth, every student walked away as a winner, equipped with confidence, competence, and a clearer vision for their future in tech.</p></footer></article>`,
      Date: "January 15, 2025",
      projects: [
        {
          id: 200,
          name: "",
          description: "Students built a chatbot to report broken streetlights, reducing neighborhood repair time by 48 hours.",
          thumbnail: "/news/tt1/thumb.jpg",
          gallery: [
            {
              id: 21,
              src: "/news/tt1/thumb.jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 22,
              src: "/news/tt1/tech (1).jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 23,
              src: "/news/tt1/tech (2).jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 24,
              src: "/news/tt1/tech (3).jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            }

          ]
        },
        {
          id: 201,
          name: "",
          description: "Students built a chatbot to report broken streetlights, reducing neighborhood repair time by 48 hours.",
          thumbnail: "/news/tt1/tech (4).jpg",
          gallery: [
            {
              id: 2011,
              src: "/news/tt1/tech (4).jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2012,
              src: "/news/tt1/tech (5).jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2013,
              src: "/news/tt1/tech (6).jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2014,
              src: "/news/tt1/tech (7).jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            }

          ]
        },
        {
          id: 202,
          name: "",
          description: "Students built a chatbot to report broken streetlights, reducing neighborhood repair time by 48 hours.",
          thumbnail: "/news/tt1/tech (8).jpg",
          gallery: [
            {
              id: 2021,
              src: "/news/tt1/tech (8).jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2022,
              src: "/news/tt1/tech (9).jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2023,
              src: "/news/tt1/tech (10).jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2024,
              src: "/news/tt1/tech (11).jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            }

          ]
        },
        {
          id: 203,
          name: "",
          description: "Students built a chatbot to report broken streetlights, reducing neighborhood repair time by 48 hours.",
          thumbnail: "/news/tt1/tech (12).jpg",
          gallery: [
            {
              id: 2031,
              src: "/news/tt1/tech (12).jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2032,
              src: "/news/tt1/tech (13).jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2033,
              src: "/news/tt1/tech (14).jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            },
            {
              id: 2034,
              src: "/news/tt1/tech (15).jpg",
              alt: "IMCG,G-10/2, Islamabad - Chatbot Project"
            }

          ]
        }
      ]
    },
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
    {
      Title: "Murabbi in Action – Tech Education Ignites Islamabad’s Classrooms",
      Image: "/SchoolProgress/murabbi.jpg",
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