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
import downarrow from "../assets/downarrow.svg";
import { Instagram, Facebook } from "lucide-react";
import bg2 from "../assets/bg2.svg";

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


const Card = ({ title, description }) => {
  return (
  <div className="rounded-2xl border-2 border-red-500 flex flex-col items-center justify-start w-60 xl:w-80 h-100 p-5 gap-3" style={{fontFamily:"Sora"}}>
        <h1 className="text-red-500 text-xl xl:text-2xl mt-30 font-semibold">{title}</h1>
        <p className="text-center font-semibold">{description}</p>
  </div>);
};

const Card2 = ({ title, description }) => {
  return (
  <div className="rounded-2xl border-2 border-red-500 flex flex-col items-center justify-start w-80  p-5 gap-3" style={{fontFamily:"Sora"}}>
        <h1 className="text-red-500 text-2xl text-center font-semibold">{title}</h1>
        <p className="text-center font-semibold">{description}</p>
  </div>);
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
      <div className="flex flex-col w-full z-10">
        <img src={arrow3} alt="" className="hidden lg:block size-50" /> 
        <div className="w-full flex flex-col xl:flex-row pl-6 lg:pl-60">
          <h2 className="font-bold text-4xl">Powering the Logistics of Tomorrow</h2>
          <div className="w-full flex flex-col lg:flex-row items-center justify-start gap-10 pt-10">
            {data3.map((item, idx) => (
              <div key={idx} className="rounded-2xl bg-white border-2 border-red-500 p-5 flex flex-col items-center justify-center gap-5 w-80 h-50" style={{fontFamily:"Sora"}}>
                <h3 className=" font-bold text-2xl">{item.title}</h3>
                <div className="flex flex-col items-center justify-center gap-2">
                  <p className="font-bold text-red-500 text-xl">{item.value}</p>
                  <p className="text-xl">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const Steps = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-end pr-4 lg:pr-80 pt-20" style={{fontFamily:"Sora"}}>
        <h2 className="font-bold text-red-500 text-5xl">3 Steps</h2>
        <p className="font-bold text-3xl">to Your First Paycheck</p>
      </div>

      {/* Box1 */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 pt-10">
        <div className="flex items-center justify-center gap-3 p-5 border-2 border-red-500 rounded-2xl">
          <h2 className="text-red-500 text-6xl lg:text-9xl">1</h2>
          <div className="flex flex-col items-center gap-3">
            <p className="font-bold text-2xl lg:text-3xl">Apply & Verify</p>
            <p className="text-base lg:text-xl">First digital KYC. Upload your <br /> documents in minutes.</p>
          </div>
        </div>
        <img src={arrow5} alt="" className="hidden lg:block size-32" />
      </div>

      {/* Box2 */}
      <div className="w-full flex flex-col lg:flex-row-reverse items-center justify-center gap-4 pt-10">
        <div className="flex items-center justify-center gap-3 p-5 border-2 border-red-500 rounded-2xl">
          <h2 className="text-red-500 text-6xl lg:text-9xl">2</h2>
          <div className="flex flex-col items-center gap-3">
            <p className="font-bold text-2xl lg:text-3xl">Pick Your DASH</p>
            <p className="text-base lg:text-xl">Choose your Scooter. Get your <br /> power-pack.</p>
          </div>
        </div>
        <img src={arrow6} alt="" className="hidden lg:block size-32" />
      </div>

      {/* Box3 */}
      <div className="w-full flex items-center justify-center gap-1 pt-10 lg:-translate-x-40">
        <div className="flex items-center justify-center gap-3 p-5 border-2 border-red-500 rounded-2xl">
          <h2 className="text-red-500 text-6xl lg:text-9xl">3</h2>
          <div className="flex flex-col items-center gap-3">
            <p className="font-bold text-2xl lg:text-3xl">Go& Grow</p>
            <p className="text-base lg:text-xl">Start delivering. Unlock your <br /> potential.</p>
          </div>
        </div>
      </div>

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
          <button className="bg-red-500 px-8 py-2 mt-4">Connect Now</button>
        </div>
        <img src={GalleryImage} alt="" className="w-150 xl:w-auto"/>
      </div>
    </div>
  )
}

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
        <div className="flex flex-col gap-5 items-center justify-center pt-20 ">
          <div className="flex flex-col items-center gap-10">
            <p className="text-semibold font-md -rotate-90 font-bold w-20">Follow on</p>
            <div>
              {" "}
              <img src={downarrow} alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <div className="rounded-full p-2 border border-2 border-red-500 flex items-center justify-center ">
              {" "}
              <img src={twitter} alt="" className="size-5" />
            </div>
            <div className="rounded-full p-2 border border-2 border-red-500 flex items-center justify-center ">
              <Instagram color="red" size={15} />{" "}
            </div>
            <div className="rounded-full p-2 border border-2 border-red-500 flex items-center justify-center ">
              {" "}
              <Facebook color="red" size={15} />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <img src={arrow1} alt="" className="hidden lg:block" />
        </div>
        <div className="pl-3 flex flex-col items-center justify-center pt-40 gap-5">
          <h3 className="font-bold text-4xl text-left">
            Powering Smarter Urban Mobility for Enterprises
          </h3>
          <p className="text-xl">
            Dash provides reliable electric vehicle solutions for last-mile
            operations, designed for scale, efficiency, and sustainability.
          </p>
          <button className="text-white bg-red-500 font-md px-8 py-3">
            Connect Us
          </button>
        </div>
        <div className="z-10 pt-5">
          <img src={scooty1} alt="" className='w-48 lg:w-auto' />
        </div>
      </div>


      {/* Section 2 */}
      <div className="max-w-4xl -translate-y-50 flex flex-col lg:flex-row items-center justify-center px-4 lg:px-0">
        <div>
          {" "}
          <img src={arrow2} alt="" className="hidden lg:block size-200" />
        </div>
        <div className="flex flex-col items-end justify-end  border-r-2 border-red w-full pr-4">
          <p className="font-semibold text-red-500 text-right">Why Choose Us</p>
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
        <div className=" -translate-y-120 flex flex-col lg:flex-row flex-wrap gap-10 items-center">
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
