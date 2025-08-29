import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
}

interface TestimonialsProps {
  title?: string;
  testimonials: Testimonial[];
}

// Sample testimonials data for different pages
export const students: Testimonial[] = [
  {
    id: 1,
    name:"Ammar Nisar",
    image:"/testimonial/1.jpg",
    text: "The game development course was really spot on, and we learned all kinds of new things — from the basics of game development in Unity to advanced rendering and execution. It was truly a great experience."
  },
   {
    id: 2,
    name: "Musa",
    image: "/testimonial/2.jpg",
    text: "The course was comprehensive and aptly guided by a skilled and kind instructor, who addressed every query to the highest standard. Moreover, this course helped me and others understand how game development works and encouraged us to explore it further."
  },
  {
    id: 3,
    name: "Yahya",
    image: "/testimonial/3.jpg",
    text: "This course gave me a strong foundation in Unity and advanced game development techniques. The instructor explained everything clearly and was very supportive, which made learning easy and enjoyable. It has boosted my confidence and motivated me to keep exploring game development."
  }
 
];

export const TestimonialsSection: React.FC<TestimonialsProps> = ({ 
  title = "What They Say",
  testimonials 
}) => {

  return (
    <div className="py-32 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 text-left"
            >
              <div className="mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full "
                />
              </div>


              <div className="mb-4">
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  {testimonial.name}
                </h3>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};