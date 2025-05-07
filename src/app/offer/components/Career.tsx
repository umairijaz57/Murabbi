import { motion } from "framer-motion";

interface Props{
  children:HTMLAllCollection
}

const Circle = ({ children }:{children:React.ReactNode}) => (
  <div className="relative">
    <div className="w-16 h-16 rounded-full bg-gray-500"></div>
    <div className="absolute inset-0 flex items-center justify-center">{children}</div>
  </div>
);

const Arrow = () => (
  <svg className="h-12 w-12">
    <path
      d="M2 12h20M2 12l8-8M2 12l8 8"
      stroke="#a0aec0"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const Career = () => (
  <div className="flex items-center justify-center mt-10">
    <motion.div
      className="flex items-center justify-center space-x-8 sm:space-x-12"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Circle>Step 1</Circle>
      <Arrow />
      <div >
      <Circle>Step 2</Circle>
      </div>
      <Arrow />

      <Circle>Step 3</Circle>
      <Arrow />
      <Circle>Step 4</Circle>
      <Arrow />
      <Circle>Step 5</Circle>
    </motion.div>
  </div>
);

export default Career;
