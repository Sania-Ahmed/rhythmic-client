import Slider from  "../../components/Slider";
import Wave  from  'react-wavify'
import './home.css'
import AboutCard from "../../components/AboutCard";
import PopularClasses from "./PopularClasses";
import Allinstructors from "../instructors/Allinstructors";


const Home = () => {
    return (
        <>
        <div className="md:w-3/4 w-full bg md:mx-auto ronded shadow-2xl ">
           <div className="md:w-5/6 w-full md:h-96  rounded-full mx-auto my-10 p-14  ">
                <div className="w-full md:mx-auto my-10">
                <Slider ></Slider>
                </div>
            </div>
        </div>
        <Wave className="h-72 w-full " fill='rgb(74 222 128)'
        paused={false}
        options={{
          height: 40,
          amplitude: 30,
          speed: 0.17,
          points: 4
        }}>
        </Wave>
        <div  className="-mt-40 mb-40 z-20">
           <h1 className="font-semibold   text-4xl 
           text-center">WELCOME TO RHYTHMIC!</h1>
        </div>
        <AboutCard></AboutCard>
        <PopularClasses></PopularClasses>
        <Allinstructors></Allinstructors>
        
        </>
    );
};

export default Home;