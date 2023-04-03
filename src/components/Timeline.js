export default function Timeline() {
    return (
        <section className="pt-32">
            <div className="container max-w-5xl px-4 py-12 mx-auto backdrop-blur-sm drop-shadow-3xl rounded-2xl border-solid border-2 border-white"  data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
                <div className="grid gap-10 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-[#00a0c2]">
                            <h3 className="text-3xl font-semibold text-white">History</h3>
                            <span className="text-2xl font-bold tracking-wider uppercase text-gray-200">2018-2023</span>
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-white">
                            <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500" className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#00a0c2]">
                                <h3 className="text-2xl text-white font-semibold tracking-wide">Raytheon UK</h3>
                                <time className="text-lg tracking-wide uppercase text-gray-200">Dec 2022 - Current</time>
                                <p className="mt-1 text-white">Full Stack Software Engineer</p>
                            </div>
                            <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000" className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#00a0c2]">
                                <h3 className="text-2xl text-white font-semibold tracking-wide">Odro LTD</h3>
                                <time className="text-lg tracking-wide uppercase text-gray-200">Jan 2021 - Dec 2022</time>
                                <p className="mt-1 text-white">Junior software engineer - Working with Vue.js / JS / Node.js / MongoDB</p>
                            </div>
                            <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1500" className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#00a0c2]">
                                <h3 className="text-2xl text-white font-semibold tracking-wide">Edinburgh Napier University</h3>
                                <time className="text-lg tracking-wide uppercase text-gray-200">Jun 2018 - May 2021</time>
                                <p className="mt-1 text-white">BEng Software Engineering - Graduated with 1st Class Honours</p>
                            </div>
                            <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1750" className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#00a0c2]">
                                <h3 className="text-2xl text-white font-semibold tracking-wide">Glasgow Clyde College</h3>
                                <time className="text-lg tracking-wide uppercase text-gray-200">Jan 2018 - Jun 2018</time>
                                <p className="mt-1 text-white">HNC Computing - Graduated with an A</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 