import bg from "../assets/bg.svg";
import scooty1 from "../assets/scooty1.svg";
import arrow1 from "../assets/arrow1.svg";
import arrow2 from "../assets/arrow2.svg";
import arrow3 from "../assets/arrow3.svg";
import arrow4 from "../assets/arrow4.svg";
import arrow5 from "../assets/arrow5.svg";
import arrow6 from "../assets/arrow6.svg";
import GalleryImage from "../assets/gallery.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import downarrow from "../assets/downarrow.svg";
import { Instagram, Facebook } from "lucide-react";
import bg2 from "../assets/bg2.svg";
import { motion } from 'framer-motion';

const data = [
  { title: "Infinite Energy", description: "Never wait to charge. Swap batteries in 2 minutes at any Battery Smart station and keep moving." },
  { title: "Zero Headaches", description: "Free on-road assistance. Flat tyre? Breakdown? We come to you." },
  { title: "Heavy Duty Ride", description: "Built for Indian roads. Strong, comfortable, and reliable for long shifts." },
];

const data2 = [
  { title: "Strong Durable Scotty", description: "Real Time Smart Battery and Health Tracking" },
  { title: "Swappable Battery Packs", description: "2-min battery exchange" },
  { title: "On-Road Mechanic Assistance", description: "Real Time Smart Battery and Health Tracking" },
];

const data3 = [
  { title:"God Speed",
    value:"500 +",
    description:"Active Dashers"
  },
  { title:"God Speed",
    value:"10,000 +",
    description:"Swaps Completed"
  },
  { title:"Investor Metrics",
    value:"99.9%",
    description:"Uptime Reliability"
  },
];


const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Card = ({ title, description }) => {
  return (
    <motion.div
      className="rounded-2xl border-2 border-[#cd1d1d] flex flex-col items-center justify-start w-60 xl:w-80 h-100 p-5 gap-3 hover:shadow-lg hover:scale-105 transition-transform duration-300"
      style={{ fontFamily: "Sora" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-[#cd1d1d] text-xl xl:text-2xl mt-30 font-semibold">{title}</h1>
      <p className="text-center font-semibold">{description}</p>
    </motion.div>
  );
};

const cardVariants2 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Card2 = ({ title, description }) => {
  return (
    <motion.div
      className="rounded-2xl border-2 border-[#cd1d1d] flex flex-col items-center justify-start w-80 p-5 gap-3 hover:shadow-lg hover:scale-105 transition-transform duration-300"
      style={{ fontFamily: "Sora" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants2}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-[#cd1d1d] text-2xl text-center font-semibold">{title}</h1>
      <p className="text-center font-semibold">{description}</p>
    </motion.div>
  );
};


const Stats = () => {
  return (
    <div
      className="w-full relative flex flex-col items-center"
      style={{ fontFamily: "Inter" }}
    >
      {/* First Background */}
      <img
        src={bg}
        alt=""
        className="size-[900px] absolute right-0 top-0 -translate-y-48"
      />
      <div className="flex flex-row w-full z-10">
        <img src={arrow3} alt="" className="hidden lg:block size-50" />
        <div className="flex flex-col w-full items-center">
          <h2 className="font-bold text-4xl mb-8 text-center">Powering the Logistics of Tomorrow</h2>
          <div className="w-full flex flex-col items-center">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 pt-2">
              {data3.map((item, idx) => (
                <div key={idx} className="rounded-2xl bg-white border-2 border-[#cd1d1d] p-5 flex flex-col items-center justify-center gap-5 w-80 h-50" style={{fontFamily:"Sora"}}>
                  <h3 className=" font-bold text-2xl">{item.title}</h3>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <p className="font-bold text-[#cd1d1d] text-xl">{item.value}</p>
                    <p className="text-xl">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const stepVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Steps = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-end pr-4 lg:pr-80 pt-20" style={{ fontFamily: "Sora" }}>
        <h2 className="font-bold text-[#cd1d1d] text-5xl">3 Steps</h2>
        <p className="font-bold text-3xl">to Your First Paycheck</p>
      </div>

      {/* Box1 */}
      <motion.div
        className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 pt-10 hover:shadow-lg hover:scale-105 transition-transform duration-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stepVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center justify-center gap-3 p-5 border-2 border-[#cd1d1d] rounded-2xl">
          <h2 className="text-[#cd1d1d] text-6xl lg:text-9xl">1</h2>
          <div className="flex flex-col items-center gap-3">
            <p className="font-bold text-2xl lg:text-3xl">Apply & Verify</p>
            <p className="text-base lg:text-xl">First digital KYC. Upload your <br /> documents in minutes.</p>
          </div>
        </div>
        <img src={arrow5} alt="" className="hidden lg:block size-32" />
      </motion.div>

      {/* Box2 */}
      <motion.div
        className="w-full flex flex-col lg:flex-row-reverse items-center justify-center gap-4 pt-10 hover:shadow-lg hover:scale-105 transition-transform duration-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stepVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex items-center justify-center gap-3 p-5 border-2 border-[#cd1d1d] rounded-2xl">
          <h2 className="text-[#cd1d1d] text-6xl lg:text-9xl">2</h2>
          <div className="flex flex-col items-center gap-3">
            <p className="font-bold text-2xl lg:text-3xl">Pick Your DASH</p>
            <p className="text-base lg:text-xl">Choose your Scooter. Get your <br /> power-pack.</p>
          </div>
        </div>
        <img src={arrow6} alt="" className="hidden lg:block size-32" />
      </motion.div>

      {/* Box3 */}
      <motion.div
        className="w-full flex items-center justify-center gap-1 pt-10 lg:-translate-x-40 hover:shadow-lg hover:scale-105 transition-transform duration-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stepVariants}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex items-center justify-center gap-3 p-5 border-2 border-[#cd1d1d] rounded-2xl hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <h2 className="text-[#cd1d1d] text-6xl lg:text-9xl">3</h2>
          <div className="flex flex-col items-center gap-3">
            <p className="font-bold text-2xl lg:text-3xl">Go& Grow</p>
            <p className="text-base lg:text-xl">Start delivering. Unlock your <br /> potential.</p>
          </div>
        </div>
      </motion.div>

    </div>
  )
}

const Gallery = () => {
  return (
    <div className="w-full flex flex-col ">
      <img src={arrow4} alt="" className="hidden lg:block size-64" />
      <div className="flex flex-col lg:flex-row items-center justify-center -translate-y-32">
        <div className=" xl:-translate-y-40 text-center lg:text-left px-4 lg:px-0">
          <p className="font-bold text-3xl lg:text-4xl" style={{fontFamily:"Sora"}}>The DASH Family:<br />More Than a Rental,<br />A Brotherhood</p>
          <button className="text-white bg-[#cd1d1d] font-md px-8 py-3 text-lg transition duration-300 hover:bg-white hover:text-[#cd1d1d] hover:border hover:border-[#cd1d1d] mt-4">Rent Now</button>
        </div>
        <img src={GalleryImage} alt="" className="w-150 xl:w-auto xl:translate-x-27 "/>
      </div>
    </div>
  )
}

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


const Home = () => {
  return (
    <div
      className="w-full relative flex flex-col items-center"
      style={{ fontFamily: "Inter" }}
    >
      {/* First Background */}
      <img
        src={bg}
        alt=""
        className="size-[900px] absolute right-0 top-0 -translate-y-25"
      />

      {/* Section 1 */}
      <div className="w-full flex flex-col lg:flex-row justify-start z-10 items-center lg:items-start gap-6 lg:gap-0 px-4 lg:px-0">
        <div className="flex flex-col gap-5 items-center justify-center pt-2 lg:pt-10 ">
          <div className="flex flex-col items-center gap-10 mt-10 lg:mt-24">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 1 }}
            >
              <p className="text-semibold font-md -rotate-90 font-bold w-20 hidden lg:block">Follow on</p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="hidden lg:block">
                <img src={downarrow} alt="" />
              </div>
            </motion.div>
          </div>
          <div className="hidden lg:flex flex-col items-center gap-2 mt-10">
            <div className="rounded-full p-2 border border-2 border-[#cd1d1d] flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <img src={twitter} alt="" className="size-5" />
            </div>
            <div className="rounded-full p-2 border border-2 border-[#cd1d1d] flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <img src={instagram} alt="" className="size-5" />
            </div>
            <div className="rounded-full p-2 border border-2 border-[#cd1d1d] flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <mg src={facebook} alt="" className="size-5" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <img src={arrow1} alt="" className="hidden lg:block translate-y-40" />
        </div>
        <div className="pl-3 flex flex-col items-start justify-center pt-60 gap-7">
          <h3 className="font-bold text-5xl text-left">
            Powering Smarter Urban Mobility for Enterprises
          </h3>
          <p className="text-2xl">
            Dash provides reliable electric vehicle solutions for last-mile
            operations, designed for scale, efficiency, and sustainability.
          </p>
          <button className="text-white bg-[#cd1d1d] font-md px-8 py-3 text-lg transition duration-300 hover:bg-white hover:text-[#cd1d1d] hover:border hover:border-[#cd1d1d]">
            Connect With Us
          </button>
        </div>
        <div className="z-10 pt-5">
          <motion.img
            src={scooty1}
            alt=""
            className='w-400  translate-y-10'
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60, damping: 15, duration: 1 }}
          />
        </div>
      </div>


      {/* Section 2 */}
      <div className="max-w-4xl -translate-y-50 flex flex-col lg:flex-row items-center justify-center px-4 lg:px-0">
        <div>
          {" "}
          <img src={arrow2} alt="" className="hidden lg:block size-200" />
        </div>
        <div className="flex flex-col items-end justify-end  border-r-2 border-[#cd1d1d] w-full pr-4">
          <p className="font-semibold text-[#cd1d1d] text-right">Why Choose Us</p>
          <h2 className="text-4xl font-bold leading-tight text-right">
            Why Our
            <span className="block whitespace-nowrap">Electric Vehicle</span>
          </h2>
        </div>
        <div className="pl-5">
          <p className="font-semibold">
            Dash is built to remove friction from everyday mobility. With a
            system designed for long hours, real road conditions, and
            predictable support, Dash lets partners and drivers focus on work,
            not the vehicle. Simple, dependable, and ready to scale, that’s why
            Dash makes sense.
          </p>
        </div>
      </div>


      {/* Section 3 */}
        <div className="-translate-y-120 flex flex-row flex-wrap gap-4 lg:gap-10 items-center justify-center">
          {data.map((item, idx) => (<Card key={idx} title={item.title} description={item.description} />))}
        </div>


      {/* Section 4 */}
        <div className="w-full relative -translate-y-100">
          {/* Background 2 */}
          <img src={bg2} alt="" className="absolute top-0" />
          {/* Section 4A */}
          <div className="z-10 flex flex-col items-start justify-start mt-10 ml-6 xl:ml-60 px-4 lg:px-0">
              <h2 className="z-10 font-bold text-4xl mb-10" style={{fontFamily:"Sora"}}>The Ecosystem built for <br />
Quick Commerce</h2>
            <div className="z-10 flex flex-col gap-5 ">
              {data2.map((item, idx) => (<Card2 key={idx} title={item.title} description={item.description} />))}
            </div>
          </div>
        </div>

      <Stats/>
      <Steps/>
      <Gallery/>

    </div>
  );
};

export default Home;
