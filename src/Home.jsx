import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { Link } from 'react-router-dom'; // Import Link component for navigation

const Home = () => {
  return (
    <div className="relative w-full py-8 overflow-hidden bg-gray-100">
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        swipeable
        emulateTouch
        dynamicHeight={false}
        className="carousel-root"
      >
        <div className="relative flex items-center mx-4 overflow-hidden bg-white rounded-lg shadow-lg sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[500px]">
          <Link to="/products" className="flex items-center justify-center w-1/2 h-full p-2">
            <img 
              src="img/pro1.jpg" 
              alt="Product 1" 
              className="object-contain w-full h-full" // Ensure image scales within container
            />
          </Link>
          <div className="flex flex-col justify-center w-1/2 h-full p-4">
            <h3 className="text-lg font-bold text-gray-800 sm:text-xl">Face Serum</h3>
            <p className="mt-2 text-xs sm:text-sm md:text-base">
              A nourishing serum designed to revitalize your skin, providing essential hydration and a radiant glow.
            </p>
          </div>
          <div className="absolute p-2 bg-white rounded-lg shadow-lg bottom-4 right-4">
            <p className="text-sm font-semibold text-gray-800">Organic by Vansh</p>
          </div>
        </div>

        <div className="relative flex items-center mx-4 overflow-hidden bg-white rounded-lg shadow-lg sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[500px]">
          <Link to="/products" className="flex items-center justify-center w-1/2 h-full p-2">
            <img 
              src="img/pro2.jpg" 
              alt="Product 2" 
              className="object-contain w-full h-full" // Ensure image scales within container
            />
          </Link>
          <div className="flex flex-col justify-center w-1/2 h-full p-4">
            <h3 className="text-lg font-bold text-gray-800 sm:text-xl">Rice Water Spray</h3>
            <p className="mt-2 text-xs sm:text-sm md:text-base">
              Refresh and hydrate your skin with this lightweight rice water spray, perfect for a quick pick-me-up.
            </p>
          </div>
          <div className="absolute p-2 bg-white rounded-lg shadow-lg bottom-4 right-4">
            <p className="text-sm font-semibold text-gray-800">Organic by Vansh</p>
          </div>
        </div>

        <div className="relative flex items-center mx-4 overflow-hidden bg-white rounded-lg shadow-lg sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[500px]">
          <Link to="/products" className="flex items-center justify-center w-1/2 h-full p-2">
            <img 
              src="img/pro3.jpg" 
              alt="Product 3" 
              className="object-contain w-full h-full" // Ensure image scales within container
            />
          </Link>
          <div className="flex flex-col justify-center w-1/2 h-full p-4">
            <h3 className="text-lg font-bold text-gray-800 sm:text-xl">Rice Water Serum</h3>
            <p className="mt-2 text-xs sm:text-sm md:text-base">
              Deeply hydrate and brighten your skin with our rice water serum, designed for a luminous complexion.
            </p>
          </div>
          <div className="absolute p-2 bg-white rounded-lg shadow-lg bottom-4 right-4">
            <p className="text-sm font-semibold text-gray-800">Organic by Vansh</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
