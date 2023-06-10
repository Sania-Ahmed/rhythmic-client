
import { useSpring, animated } from '@react-spring/web'

const AboutCard = () => {
    const springs = useSpring({
        from: { x: 0 },
        to: { x: 95 },
      })
    const springsTxt = useSpring({
        from: { x: 0 },
        to: { x: 55 },
      })
    const springsTxtreverse = useSpring({
        from: { x: 100 },
        to: { x: 80 },
      })
    return (
        <div  className="my-60  w-full">
         <div className='w-3/4 p-6'>
         <div className='flex w-full'>
        <animated.div
        style={{
          width: 90,
          height: 90,
          margin: 0 ,
          background: '#ff6d6d',
          borderRadius: 8,
          ...springs,
        }}
      />
       <animated.div
        style={{
          width: 170 ,
          margin: 0 ,
          ...springsTxt,
        }}
      >
        <h2 className=' w-full mt-8 font-semibold text-2xl  md:text-4xl text-green-400 bg-white rounded '>About Us</h2>
      </animated.div>
        </div>
        <animated.div
        className="mt-10  "
        style={{
          width: 400 ,
          height: 90,
          borderRadius: 8,
          ...springsTxtreverse,
        }}
      >
        <h2 className=' m-0 font-semibold md:text-4xl text-purple-400 uppercase'>The Rhythmic</h2>
        <p className=' w-3/4 p-2 text-center text-slate-500 font-medium text-xl'>
          It has been 8 years since we are providing summer school camphaign every summer . We provide guiter lessons through our expert mentors .
        </p>
      </animated.div>
         </div>
        </div>
    );
};

export default AboutCard;