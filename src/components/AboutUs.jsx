import React from 'react';
import { Target, Shield, Zap, Users, Leaf, TrendingUp } from 'lucide-react';
import bg from "../assets/bg.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import downarrow from "../assets/downarrow.svg";

const AboutUs = () => {
    return (
        <div className="w-full bg-white relative overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
            {/* Hero Section */}
            <div className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-4 relative">
                {/* Background Pattern */}
                <img
                    src={bg}
                    alt=""
                    className="absolute -right-20 lg:right-0 top-1/2 -translate-y-1/2 w-[400px] lg:w-[800px] opacity-100 pointer-events-none z-0"
                />

                {/* Social Sidebar - Desktop Only */}
                <div className="hidden lg:flex absolute left-10 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-10">
                    <div className="flex flex-col items-center gap-20 -mb-6">
                        <p className="text-gray-900 font-bold -rotate-90 whitespace-nowrap opacity-60">Follow on</p>
                        <img src={downarrow} alt="" className="w-2" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <a href="#" className="w-10 h-10 rounded-full border-2 border-[#cd1d1d] flex items-center justify-center hover:scale-110 transition-transform">
                            <img src={twitter} alt="" className="w-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border-2 border-[#cd1d1d] flex items-center justify-center hover:scale-110 transition-transform">
                            <img src={instagram} alt="" className="w-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border-2 border-[#cd1d1d] flex items-center justify-center hover:scale-110 transition-transform">
                            <img src={facebook} alt="" className="w-5" />
                        </a>
                    </div>
                </div>

                <div className="max-w-5xl z-10 px-4">
                    <h1 className="text-[#cd1d1d] text-4xl lg:text-7xl font-bold mb-8 leading-[1.1]" style={{ fontFamily: 'Sora, sans-serif' }}>
                        We Exist to Move the People <br className="hidden md:block" /> Who Move India
                    </h1>
                    <p className="text-gray-900 text-lg lg:text-xl font-medium max-w-3xl mx-auto leading-relaxed opacity-80">
                        At DASH, we don't just see delivery drivers; we see the backbone of the modern economy. Our mission is to provide the speed, reliability, and support they deserve.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Sora, sans-serif' }}>
                    Our Mission
                </h2>
                <div className="flex flex-col gap-6">
                    <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                        DASH Mobility was founded with a single goal: to empower the last-mile delivery ecosystem with sustainable, efficient, and affordable electric vehicle solutions.
                    </p>
                    <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                        We believe that the future of urban delivery is electric. By providing riders with high-performance scooters and businesses with scalable fleet solutions, we are reducing carbon footprints one delivery at a time.
                    </p>
                </div>
            </div>

            {/* Core Values Section */}
            <div className="bg-gray-50 py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
                            Our Core Values
                        </h2>
                        <p className="text-gray-500 text-lg">The principles that drive every DASH decision.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Leaf className="text-[#cd1d1d]" />,
                                title: "Sustainability",
                                desc: "Committed to zero-emission mobility and reducing the environmental impact of urban logistics."
                            },
                            {
                                icon: <Zap className="text-[#cd1d1d]" />,
                                title: "Efficiency",
                                desc: "Developing swappable battery technology and smart tracking to maximize rider uptime."
                            },
                            {
                                icon: <Shield className="text-[#cd1d1d]" />,
                                title: "Reliability",
                                desc: "Building durable vehicles and providing on-road assistance to keep our riders safe."
                            },
                            {
                                icon: <Users className="text-[#cd1d1d]" />,
                                title: "Community",
                                desc: "Fostering a brotherhood of dashers, providing more than just a rental service."
                            },
                            {
                                icon: <Target className="text-[#cd1d1d]" />,
                                title: "Innovation",
                                desc: "Constantly evolving our tech stack for batteries, fleet management, and rider apps."
                            },
                            {
                                icon: <TrendingUp className="text-[#cd1d1d]" />,
                                title: "Scalability",
                                desc: "Designing systems that grow with businesses, from small fleets to enterprise operations."
                            }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-5xl mx-auto px-6 lg:px-12 py-24 text-center">
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Sora, sans-serif' }}>
                    Join the Electric Revolution
                </h2>
                <p className="text-gray-500 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                    Whether you're a rider looking for your next paycheck or a business aiming for efficiency, DASH is your partner in growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/booking" className="bg-[#cd1d1d] text-white font-bold px-10 py-4 rounded-xl hover:bg-[#b01919] transition-all shadow-lg shadow-red-100 text-lg">
                        Rent a Scooter
                    </a>
                    <a href="/contact" className="bg-white text-[#cd1d1d] border-2 border-[#cd1d1d] font-bold px-10 py-4 rounded-xl hover:bg-red-50 transition-all text-lg">
                        Partner with Us
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
