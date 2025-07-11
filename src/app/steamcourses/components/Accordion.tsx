import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CustomButton } from "./CustomBtn";

type AccordionItemType = {
  id: string;
  disabled?: boolean;
  title: string;
  content: React.ReactNode;
};

type CustomAccordionProps = {
  containerClass: string;
  items: AccordionItemType[];
  changeHeaders?: boolean;
};

export const CustomAccordion: React.FC<CustomAccordionProps> = ({
  containerClass,
  items,
  changeHeaders = false,
}) => {
  const [opened, setOpened] = useState<string>("");

  return (
    <div className={containerClass}>
      <style jsx global>{`
        [data-radix-accordion-content] {
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.87, 0, 0.13, 1);
        }
        
        [data-radix-accordion-content][data-state="open"] {
          animation: slideDown 0.3s cubic-bezier(0.87, 0, 0.13, 1);
        }
        
        [data-radix-accordion-content][data-state="closed"] {
          animation: slideUp 0.2s cubic-bezier(0.87, 0, 0.13, 1);
        }
        
        @keyframes slideDown {
          from {
            height: 0;
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            height: var(--radix-accordion-content-height);
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            height: var(--radix-accordion-content-height);
            opacity: 1;
            transform: translateY(0);
          }
          to {
            height: 0;
            opacity: 0;
            transform: translateY(-10px);
          }
        }
      `}</style>
      
      <Accordion
        onValueChange={(value: string) => setOpened(value || "")}
        className="space-y-4"
        type="single"
        collapsible
        value={opened}
      >
        {items.map((item) => {
          const isOpen = opened === item.id;

          return (
            <AccordionItem 
              key={item.id} 
              value={item.id}
              className="border-none"
            >
              <AccordionTrigger
                disabled={item.disabled}
                className={`p-4 hover:no-underline font-bold text-xs xs:text-base sm:text-xl md:text-2xl lg:text-xl flex items-center group transition-all duration-300 ease-in-out rounded-full
                  ${!isOpen && changeHeaders
                    ? "bg-transparent delay-0 duration-0"
                    : item.disabled
                    ? "bg-gray-300 text-gray-600"
                    : "bg-[#1c398e] text-white duration-200"
                  }`}
              >
                <CustomButton 
                  outerColor={item.disabled ? "#d1d5db" : "#1c398e"}
                  innerColor={item.disabled ? "#9ca3af" : "#ffffff"}
                  size="w-8 h-8"
                  onClick={() => {}}
                  isOpen={isOpen}
                />
                <p className="flex-1 text-left ml-3">{item.title}</p>
              </AccordionTrigger>

              <AccordionContent className="px-4 pb-4 pt-2">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};