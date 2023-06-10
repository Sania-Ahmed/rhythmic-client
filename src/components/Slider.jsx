import AwesomeSlider  from  'react-awesome-slider';
import withAutoplay from  'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
 
    return (
        <AutoplaySlider className='bg-transparent'  play={true}
        cancelOnInteraction={false} 
        interval={3000}>
        <div className='p-10 h-full flex justify-center '><img className='rounded-full' src="https://img.freepik.com/free-vector/acoustic-guitar-concept-illustration_114360-12608.jpg?size=626&ext=jpg&ga=GA1.1.632902743.1676570136&semt=country_rows_v1" alt="" /></div>
        <div className='p-10 h-full flex justify-center '>
            <img className='rounded-full' src="https://img.freepik.com/free-vector/music-letter-electric-guitar-wooden-guitar-white-background_24877-59971.jpg?size=626&ext=jpg&ga=GA1.2.632902743.1676570136&semt=country_rows_v1" alt="" /></div>
        <div className='p-10 h-full flex justify-center '><img
        className='rounded-full' src="https://img.freepik.com/free-vector/vector-hand-drawn-icon-guitarra-isolated-white-background_134830-1121.jpg?size=626&ext=jpg&ga=GA1.2.632902743.1676570136&semt=country_rows_v1" alt="" /></div>
        
      </AutoplaySlider>
    );
};

export default Slider;