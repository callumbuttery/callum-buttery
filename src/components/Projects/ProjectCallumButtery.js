import callumdev from '../../images/callumdev.webp'

import ReactTag from '../tag/ReactTag'
import JavaScriptTag from '../tag/JavascriptTag'
import TailwindTag from '../tag/TailwindTag'

export default function ProjectCallumButtery() {
    return (
        <div className="max-sm:h-96 max-sm:max-w-32 max-sm:mb-40 max-sm:mr-4 hover:scale-110 hover:duration-300">
            <div className="flex justify-center mr-10 ml-10">
                <div className="rounded-lg bg-white max-w-sm drop-shadow-4xl max-sm:w-72">
                    <a rel='noreferrer' target='blank'>
                        <img className="rounded-t-lg h-52" src={callumdev} alt="" />
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2 max-sm:text-sm">www.callumbuttery.dev</h5>
                        <p className="text-gray-700 text-base mb-4 max-sm:text-sm">
                            The very site you are on! All things about my career and my hobbies!
                        </p>
                        <div className='flex flex-wrap mb-5'>
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