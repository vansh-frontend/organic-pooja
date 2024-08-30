import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import icons for open/close
import { Transition } from '@headlessui/react'; // Import Transition for smooth animations

const AccordionItem = ({ id, title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => onToggle(id)}
        className={`flex items-center justify-between w-full px-4 py-3 text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors duration-300 ${
          isOpen ? 'bg-gray-200' : 'bg-white'
        }`}
      >
        <span className="text-lg font-medium">{title}</span>
        <span className="text-xl">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="px-4 py-2 text-gray-600 bg-gray-50">
          {content}
        </div>
      </Transition>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-full px-4 mx-auto my-8 sm:px-6 lg:px-8">
      <div className="bg-white shadow sm:rounded-lg">
        <h2 className="px-6 py-4 text-2xl font-semibold text-gray-900 border-b border-gray-200">
          FAQ's
        </h2>
        <AccordionItem
          id={0}
          title="Skin Treatments"
          content="Discover our range of skin treatments including Laser Hair Treatment, Thermage Treatment, and more."
          isOpen={openIndex === 0}
          onToggle={handleToggle}
        />
        <div className="h-4"></div> {/* Gap between items */}
        <AccordionItem
          id={1}
          title="Hair Treatments"
          content="Explore our hair treatments such as PRP GF Treatment, Hair Thread Treatment, and more."
          isOpen={openIndex === 1}
          onToggle={handleToggle}
        />
        <div className="h-4"></div> {/* Gap between items */}
        <AccordionItem
          id={2}
          title="Additional Services"
          content="Learn more about our additional services and how they can benefit you."
          isOpen={openIndex === 2}
          onToggle={handleToggle}
        />
      </div>
    </div>
  );
};

export default Accordion;
