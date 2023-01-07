import callumdev from '../images/callumdev.JPG'

import ReactTag from './tag/ReactTag'
import JavaScriptTag from './tag/JavascriptTag'
import TailwindTag from './tag/TailwindTag'

export default function ProjectCallumButtery() {
    return (
        <div className="max-sm:h-96 max-sm:mb-32 hover:scale-110 hover:duration-300">
            <div className="flex justify-center mr-10 ml-10" data-aos="flip-left" data-aos-duration="1700" data-aos-delay="0">
                <div className="rounded-lg bg-white max-w-sm drop-shadow-4xl">
                    <a rel='noreferrer' target='blank'>
                        <img class="rounded-t-lg h-52" src={callumdev} alt="" />
                    </a>
                    <div class="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">www.callumbuttery.dev</h5>
                        <p className="text-gray-700 text-base mb-4">
                            The very site you are on! All things about my career and my hobbies!
                        </p>
                        <div className='flex mb-5 w-10'>
                            <ReactTag/>
                            <TailwindTag/>
                            <JavaScriptTag/>
                        </div>
                        <a rel='noreferrer' target='blank' type="button" className="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded">View</a>
                    </div>
                </div>
            </div>
        </div>
    )
}