import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import './Home.css'; // Custom styles for additional customization if needed

const Home = () => {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      <DemoCarousel />
    </div>
  );
}

const DemoCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      infiniteLoop
      autoPlay
      transitionTime={500}
      interval={2000}
      className="w-full"
    >
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] rounded-lg overflow-hidden">
        <img src="img/pro1.jpg" alt="Slide 1" className="object-cover w-full h-full rounded-lg" />
        <p className="absolute px-4 py-2 text-xs text-white bg-black bg-opacity-50 rounded-lg bottom-4 left-4 sm:text-sm md:text-base lg:text-lg">
          Legend 1
        </p>
      </div>
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] rounded-lg overflow-hidden">
        <img src="img/pro2.jpg" alt="Slide 2" className="object-cover w-full h-full rounded-lg" />
        <p className="absolute px-4 py-2 text-xs text-white bg-black bg-opacity-50 rounded-lg bottom-4 left-4 sm:text-sm md:text-base lg:text-lg">
          Legend 2
        </p>
      </div>
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] rounded-lg overflow-hidden">
        <img src="img/pro3.jpg" alt="Slide 3" className="object-cover w-full h-full rounded-lg" />
        <p className="absolute px-4 py-2 text-xs text-white bg-black bg-opacity-50 rounded-lg bottom-4 left-4 sm:text-sm md:text-base lg:text-lg">
          Legend 3
        </p>
      </div>
    </Carousel>
  );
}

export default Home;
