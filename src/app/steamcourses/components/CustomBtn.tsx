interface CustomButtonProps {
  outerColor?: string;
  innerColor?: string;
  size?: string;
  onClick?: () => void;
  isOpen?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  outerColor = '#1E3A8A',
  innerColor = '#FFFFFF',
  size = 'w-6 h-6',
  onClick,
  isOpen = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative ${size} flex items-center justify-center 
        rounded-full cursor-pointer transition hover:scale-105 active:scale-95`}
      style={{ backgroundColor: outerColor }}
    >
      {/* Play Icon */}
      <svg
        style={{ color: innerColor }}
        className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>play</title>
        <path d="M8,5.14V19.14L19,12.14L8,5.14Z" fill="currentColor" />
      </svg>
    </div>
  );
};
