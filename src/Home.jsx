import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { Link } from 'react-router-dom'; // Import Link component for navigation
import Accordion from "./components/Accordion";

const Home = () => {
  // Define your images and text content here
  const products = [
    {
      img: 'img/pro1.jpg',
      title: 'Hair Care',
      description: 'Explore our range of products designed to nourish and strengthen your hair.',
      link: '/haircare',
    },
    {
      img: 'img/pro2.jpg',
      title: 'Body Care',
      description: 'Body care essentials to keep your skin hydrated and smooth.',
      link: '/bodycare',
    },
    {
      img: 'img/pro3.jpg',
      title: 'Skin Care',
      description: 'Discover our skincare products for glowing, healthy skin.',
      link: '/skincare',
    }
  ];

  return (
    <div className="relative w-full py-8 overflow-hidden bg-gray-100">
      {/* Carousel Section */}
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
  {products.map((product, index) => (
    <div
      key={index}
      className="relative flex flex-col sm:flex-row overflow-hidden bg-white rounded-lg shadow-lg sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 h-auto sm:h-72 md:h-80 lg:h-96 xl:h-[500px]"
    >
      <Link to={product.link} className="w-full h-auto sm:w-1/2">
        <img
          src={product.img}
          alt={product.title}
          className="object-cover w-full h-full"
        />
      </Link>
      <div
        className="flex flex-col items-center justify-center w-full h-full p-4 sm:w-1/2 sm:p-6 md:p-8 lg:p-10"
        style={{ backgroundColor: '#D0F0C0' }} // Peach Light Green Color
      >
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-800 sm:text-xl md:text-2xl">{product.title}</h3>
          <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg">
            Organic Pooja offers a premium beauty experience using only organic products. From hair styling to nail treatments and makeup, we specialize in creating contemporary and timeless looks for every occasion. Our mission is to make you shine like a star naturally.
          </p>
          <div className="flex justify-center mt-4">
          <button className="px-4 py-2 font-serif text-sm text-white transition duration-300 transform bg-black rounded-full sm:px-6 sm:py-3 sm:text-base hover:scale-105 hover:bg-gray-700 hover:shadow-lg focus:outline-none">
  SHOP NOW
</button>


          </div>
        </div>
      </div>
      {/* <div className="absolute p-2 bg-white rounded-lg shadow-lg bottom-4 right-4 sm:bottom-6 sm:right-6">
        <p className="m-0 text-xs font-semibold text-gray-800 sm:text-sm">Organic By Pooja</p>
      </div> */}
    </div>
  ))}
</Carousel>

      {/* Centered Content - Services Section */}
      <div className="mt-8 mb-4 text-center">
        <h2 className="text-2xl font-bold">Explore Our Services</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Service 1 */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <img src="img/skin.jpg" alt="Anti-Ageing" className="object-cover w-full h-48 rounded-lg" />
          <h3 className="mt-4 text-xl font-bold">Anti-ageing</h3>
          <p className="mt-2">Discover our anti-ageing services for a youthful glow.</p>
          <Link to="/antiageing" className="inline-block mt-4 text-blue-500 hover:underline">Book Now</Link>
        </div>

        {/* Service 2 */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <img src="img/shampoo.jpg" alt="Laser Hair Reduction" className="object-cover w-full h-48 rounded-lg" />
          <h3 className="mt-4 text-xl font-bold">Laser Hair Reduction</h3>
          <p className="mt-2">Achieve smooth skin with our laser hair reduction services.</p>
          <Link to="/laserhairreduction" className="inline-block mt-4 text-blue-500 hover:underline">Book Now</Link>
        </div>

        {/* Service 3 */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <img src="img/hair.png" alt="Hair Care" className="object-cover w-full h-48 rounded-lg" />
          <h3 className="mt-4 text-xl font-bold">Hair Care</h3>
          <p className="mt-2">Explore our hair care services for healthier, shinier hair.</p>
          <Link to="/haircare" className="inline-block mt-4 text-blue-500 hover:underline">Book Now</Link>
        </div>
      </div>

      {/* Accordion component - placed below */}
      <Accordion />
    </div>
  );
};

export default Home;
