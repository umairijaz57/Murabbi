import {
  CenteredHeading,
  Description,
  Events,
  Footer,
  NavBar,
} from "@/app/homeComponents";
import HImage from "../components/image";
import PageWrapper from "@/app/layouts/pageLayout";
import InLayout from "@/app/layouts/inlayout";
import Image from "next/image";

function page() {
  return (
    <div>
      <NavBar />
      <HImage Image="/news/0.JPG" />
      <PageWrapper>
        <InLayout>
          <div
            className={`flex my-4 text-center justify-center text-3xl md:text-4xl text-gray-900/90 font-extrabold transition duration-1000  `}
          >
           Murabbi Successfully Concludes Winter STEM Camp - 2023
          </div>
          <div
            className={` text-left transition  mt-4 duration-1000 text-gray-600 text-lg p-0 px-4 `}
          >
            Murabbi is delighted to announce the successful completion of the
            Winter STEM Camp, a collaborative endeavor featuring NCLS (NUST
            College of Electrical and Mechanical Engineering), NUST, and
            Elements Learning. Over the course of five enriching days at NCLS&C
            within NUST, participants aged 8-18 years engaged in a diverse range
            of activities spanning Science, Mathematics, Game Development, and
            Robotics & AI.
          </div>
          <div
            className={`flex my-8 text-left justify-start text-2xl md:text-3xl text-gray-900/90 font-extrabold `}
          >
            Day 1: "Unveiling the Wonders of Science"
          </div>
          <div className="relative">
            <Image
              src="/news/1.JPG"
              layout="responsive"
              width={1000}
              height={500}
              className="max-w-full m-auto max-h-[35rem] "
              style={{ objectFit: "cover", objectPosition: "50% 50%" }}
              alt=""
            />
          </div>{" "}
          <div
            className={` text-left transition  mt-4 duration-1000 text-gray-600 text-lg p-0 px-4 `}
          >
            The inaugural day immersed participants in a scientific adventure,
            conducting hands-on experiments to explore fundamental scientific
            principles. From physics and chemistry to biology, activities
            fostered a deep understanding of the scientific method, all captured
            in vivid detail.
          </div>
          <div
            className={`flex my-8 text-left justify-start text-2xl md:text-3xl text-gray-900/90 font-extrabold `}
          >
            Day 2: "Math Marvels Unleashed"
          </div>
          <div className="relative">
            <Image
              src="/news/2.JPG"
              layout="responsive"
              width={1000}
              height={500}
              className="max-w-full m-auto max-h-[35rem] "
              style={{ objectFit: "cover", objectPosition: "50% 50%" }}
              alt=""
            />
          </div>{" "}
          <div
            className={` text-left transition  mt-4  duration-1000 text-gray-600 text-lg p-0 px-4 `}
          >
            Day two unfolded as participants unleashed the power of numbers
            through interactive challenges. Strengthening mathematical skills,
            engaging in practical applications, and exploring mathematical
            patterns and logic were all integral components, documented through
            captivating visuals.
          </div>
          <div
            className={`flex my-8 text-left justify-start text-2xl md:text-3xl text-gray-900/90 font-extrabold `}
          >
            Days 3-5: "Crafting Interactive Worlds through Game Development"
          </div>
          <div className="relative">
            <Image
              src="/news/scratch.jpeg"
              layout="responsive"
              width={1000}
              height={500}
              className="max-w-full m-auto max-h-[35rem] "
              style={{ objectFit: "cover", objectPosition: "50% 50%" }}
              alt=""
            />
          </div>{" "}
          <div
            className={` text-left transition  mt-4  duration-1000 text-gray-600 text-lg p-0 px-4 `}
          >
            The following days witnessed an exploration of the art of game
            development. From mastering design basics to creating interactive
            games, participants dived into the essentials of game design,
            animation, and development. Rich visual documentation captured their
            creative journey.
          </div>
          <div
            className={`flex my-8 text-left justify-start text-2xl md:text-3xl text-gray-900/90 font-extrabold `}
          >
            Days 3-5: "Building Tomorrow’s Innovators with Robotics and AI"
          </div>
          <div className="relative">
            <Image
              src="/news/scratch2.jpg"
              layout="responsive"
              width={1000}
              height={500}
              className="max-w-full m-auto max-h-[35rem] "
              style={{ objectFit: "cover", objectPosition: "50% 50%" }}
              alt=""
            />
          </div>{" "}
          <div
            className={` text-left transition  mt-4 duration-1000 text-gray-600 text-lg p-0 px-4 `}
          >
            Concluding the camp, days three through five focused on building
            tomorrow's innovators through Robotics and AI. Participants delved
            into the world of robotic programming and communication, engaged in
            friendly competitions, and explored the fundamentals of Artificial
            Intelligence in robotics, all impeccably documented.
          </div>
          <div
            className={`flex my-4 text-left justify-start text-2xl md:text-3xl text-gray-900/90 font-extrabold `}
          >
            Missed the camp? Fear not!
          </div>
          <div
            className={` text-left transition  duration-1000 text-gray-600 text-lg p-0 px-4 `}
          >
            Stay tuned for more enriching learning opportunities with Murabbi,
            where knowledge meets excellence!
          </div>
          <div className="text-sm text-gray-400 px-2 md:px-12">
            Publish date: 30 January 2024
          </div>
        </InLayout>
        <InLayout offer={true}>
          <CenteredHeading text="Other News" />
          <Events />
        </InLayout>
      </PageWrapper>
      <Footer />
    </div>
  );
}

export default page;
