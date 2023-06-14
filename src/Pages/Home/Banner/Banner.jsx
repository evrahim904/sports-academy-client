
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import slider1 from '../../../assets/banner/slider1.jpg'
import slider2 from '../../../assets/banner/slider2.jpg'
import slider3 from '../../../assets/banner/slider3.jpg'
import slider4 from '../../../assets/banner/slider4.jpg'


const Banner = () => {

    return (
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={67}
        totalSlides={4}
      >
        <Slider className='relative mt-5'>
           
          <Slide index={0}>
          <div className='absolute top-1/3 text-white'>
            <h3 className=' text-white text-5xl uppercase'> academy training center </h3>
          <p className='w-2/4 mt-4'>Welcome to our premier sports training center. We offer expert coaching and top-notch facilities for athletes of all levels. With personalized programs, cutting-edge equipment, and a supportive environment, we help you unlock your full potential. Join us and elevate your game today</p>
            </div>
            <img src={slider1} alt="" />
        
         
          
          </Slide>
          <Slide index={1}>
          <div className='absolute top-1/3 text-white'>
            <h3 className=' text-white text-5xl uppercase'> academy training center </h3>
          <p className='w-2/4 mt-4'>Welcome to our premier sports training center. We offer expert coaching and top-notch facilities for athletes of all levels. With personalized programs, cutting-edge equipment, and a supportive environment, we help you unlock your full potential. Join us and elevate your game today</p>
            </div>
            <img src={slider2} alt="" /></Slide>
          <Slide index={2}>
          <div className='absolute top-1/3 text-white'>
            <h3 className=' text-white text-5xl uppercase'> academy training center </h3>
          <p className='w-2/4 mt-4'>Welcome to our premier sports training center. We offer expert coaching and top-notch facilities for athletes of all levels. With personalized programs, cutting-edge equipment, and a supportive environment, we help you unlock your full potential. Join us and elevate your game today</p>
            </div>
            <img src={slider3} alt="" /></Slide>
          <Slide index={3}>
          <div className='absolute top-1/3 text-white'>
            <h3 className=' text-white text-5xl uppercase'> academy training center </h3>
          <p className='w-2/4 mt-4'>Welcome to our premier sports training center. We offer expert coaching and top-notch facilities for athletes of all levels. With personalized programs, cutting-edge equipment, and a supportive environment, we help you unlock your full potential. Join us and elevate your game today</p>
            </div>
            <img src={slider4} alt="" /></Slide>
         
        </Slider>
        
        <div className='text-center'>
        <ButtonBack className='btn btn-warning btn-xs m-4'>Back</ButtonBack>
        <ButtonNext  className="btn btn-warning btn-xs">Next</ButtonNext>
        </div>
      </CarouselProvider>
    );
};

export default Banner;