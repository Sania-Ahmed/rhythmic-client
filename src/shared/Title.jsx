/* eslint-disable react/prop-types */

import { useSpring, animated } from '@react-spring/web'


const Title = ({heading}) => {
    const springs = useSpring({
        from: { y: 95 },
        to: { y: 0 },
      })
      const springsTxt = useSpring({
        from: { x: 50 },
        to: { x: -10 },
      })
    return (
        <div className='flex justify-center w-full my-10'>
        <animated.div
        style={{
          width: 90,
          height: 90,
          margin: 0 ,
          background: 'rgb(74 222 128)',
          borderRadius: 8,
          ...springs,
        }}
      />
       <animated.div
        style={{
          width: 'auto' ,
          margin: 0 ,
          ...springsTxt,
        }}
      >
        <h2 className=' w-full p-1 mt-6 font-semibold text-2xl  md:text-4xl text-purple-400 bg-white rounded '>{heading}</h2>
      </animated.div>
        </div>
    );
};

export default Title;