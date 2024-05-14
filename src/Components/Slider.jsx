

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Components/Css/styles.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';

export const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
  };
  return (

    <div className='h-[calc(100vh-95px)]'>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper rounded-xl"
      >
        <SwiperSlide>
          <div className="flex flex-col h-full items-end text-left space-y-2 justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-[url('https://i.ibb.co/vhSZ2yK/karly-santiago-E7zsz8-JA8-FM-unsplash.jpg')] w-full bg-cover bg-center  lg:pt-5 lg:pb-5 p-5 rounded-lg">

            <div className='flex flex-col h-auto lg:w-8/12 w-full items-cenert justify-center p-5 pl-10 rounded-lg bg-[#071f1f73] space-y-1'>
              <p className='lg:text-3xl md:text-xl text-base text-orange-200 font-extrabold'>Embroidery Thread Ball</p>
              <p className=' lg:text-lg md:text-base text-sm md:flex hidden'>Elevate your embroidery with our vibrant Embroidery Thread Balls. Smooth, durable, and rich in color, perfect for all your stitching projects.</p>
              <p className='lg:text-lg md:text-base text-sm'>
                Price: 10 bdt per unit
              </p>
              <p className='lg:text-lg md:text-base text-sm'>Stock: In Stock</p>
            </div>
            <Link to={'/allItemsTable'} href="#cards_sec" className='w-8/12 flex justify-start'>
              <button className='btn btn-outline text-orange-200 bg-[#071f1f73] hover:bg-accent md:ml-10 md:font-bold md:text-base text-sm px-10'>All Items</button>
            </Link>


          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col h-full items-end text-left space-y-2 justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-[url('https://i.ibb.co/vdP8z2Y/wool-knitting-needles-basket-23-2148859122.jpg')] w-full bg-cover lg:pt-5 lg:pb-5 p-5 rounded-lg">

            <div className='flex flex-col h-auto lg:w-8/12 w-full items-cenert justify-center p-5 rounded-lg bg-[#071f1f73] space-y-1'>
              <p className='lg:text-3xl md:text-xl text-base text-orange-200 font-extrabold'>Cozy Cable Knit Scarf</p>
              <p className=' lg:text-lg md:text-base text-sm md:flex hidden'>Wrap yourself in warmth and style with our Cozy Cable Knit Scarf. Crafted with soft, high-quality yarn, it's the perfect accessory for chilly days, providing comfort and fashion in one delightful piece.</p>
              <p className='lg:text-lg md:text-base text-sm'>
                Price: 700 bdt
              </p>
              <p className='lg:text-lg md:text-base text-sm'>Stock Status: In Stock</p>
            </div>
            <Link to={'/allItemsTable'} href="#cards_sec" className='w-8/12 flex justify-start'>
              <button className='btn btn-outline text-orange-200 bg-[#071f1f73] hover:bg-accent md:ml-10 md:font-bold md:text-base text-sm px-10'>All Items</button>
            </Link>


          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col h-full items-start text-left space-y-2 justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-[url('https://i.ibb.co/10D3YDx/knitting-needles-wool-basket-with-copy-space-23-2148859150.jpg')] w-full bg-cover lg:pt-5 lg:pb-5 p-5 rounded-lg">

            <div data-aos="fade-right" data-aos-duration="1000" className='flex flex-col h-auto lg:w-8/12 w-full items-cenert justify-center p-5  pl-10 rounded-lg bg-[#071f1f73] space-y-1'>

              <p  className='lg:text-3xl md:text-xl text-base text-orange-200 font-extrabold'>Embroidery Thread Ball Niddle</p>
              <p className='lg:text-lg md:text-base text-sm md:flex hidden'>Elevate your embroidery with our vibrant Embroidery Thread Balls. Smooth, durable, and rich in color, perfect for all your stitching projects.</p>
              <p className='lg:text-lg md:text-base text-sm'>
                Price: 100 bdt per unit
              </p>
              <p className='lg:text-lg mdtext-base text-sm'>Stock: In Stock</p>
            </div>
            <Link to={'/allItemsTable'} href="#cards_sec" className='w-8/12 flex justify-start  '>
              <button className='btn btn-outline text-orange-200 bg-[#071f1f73] hover:bg-accent md:ml-10 md:font-bold md:text-base text-sm px-10'>All Items</button>
            </Link>


          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col h-full items-end text-left space-y-2 justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-[url('https://i.ibb.co/F7Nmf5k/top-view-wool-knitting-needles-23-2148859129.jpg')] w-full bg-cover lg:pt-5 lg:pb-5 p-5 rounded-lg">

            <div className='flex flex-col h-auto lg:w-8/12 w-full items-cenert justify-center p-5 rounded-lg bg-[#071f1f73] space-y-1'>
              <p className='lg:text-3xl md:text-xl text-base text-orange-200 font-extrabold'>Embroidery Thread Ball</p>
              <p className=' lg:text-lg md:text-base text-sm md:flex hidden'>Elevate your embroidery with our vibrant Embroidery Thread Balls. Smooth, durable, and rich in color, perfect for all your stitching projects.</p>
              <p className='lg:text-lg md:text-base text-sm'>
                Price: 10 bdt per unit
              </p>
              <p className='lg:text-lg md:text-base text-sm'>Stock: In Stock</p>
            </div>
            <Link to={'/allItemsTable'} href="#cards_sec" className='w-8/12 flex justify-start'>
              <button className='btn btn-outline text-orange-200 bg-[#071f1f73] hover:bg-accent md:ml-10 md:font-bold md:text-base text-sm px-10'>All Items</button>
            </Link>


          </div>
        </SwiperSlide>

        <div className="autoplay-progress text-accent" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>

  )
}
