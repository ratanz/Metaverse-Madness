'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to play together in the same
            world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="group1 absolute top-[270px] left-[200px]"> <img src="/group1.png" alt="gropup1" />
          <div className="icons absolute top-[73px] left-[15px] flex flex-row">
            <img src="people-01.png" alt="people" className="w-[23px] h-[23px] object-contain" />
            <img src="people-02.png" alt="people" className="w-[23px] h-[23px] object-contain" />
            <img src="people-03.png" alt="people" className="w-[23px] h-[23px] object-contain" />
          </div>
          <h3 className='text-white absolute left-[90px] top-[77px] text-[10px]'> + 274 has joined</h3>
          <h1 className='text-white text-[15px] font-semibold absolute top-[103px] left-[15px]'>The Hawkings Lab</h1>
        </div>

        <div className="group2 absolute top-[50px] right-[280px]"> <img src="/group2.png" alt="gropup1" />
          <div className="icons absolute top-[85px] left-[15px] flex flex-row ">
            <img src="people-01.png" alt="people" className="w-[23px] h-[23px] object-contain" />
            <img src="people-02.png" alt="people" className="w-[23px] h-[23px] object-contain" />
            <img src="people-03.png" alt="people" className="w-[23px] h-[23px] object-contain" />
          </div>
          <h3 className='text-white absolute left-[90px] top-[90px] text-[10px]'> + 134 has joined</h3>
          <h1 className='text-white text-[15px] font-semibold absolute top-[113px] left-[15px]'>The Upside Down</h1>
        </div>


        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

       

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
