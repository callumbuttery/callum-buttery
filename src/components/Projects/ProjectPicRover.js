import picrover from '../../images/picrover.jpg'

import ReactTag from '../tag/ReactTag'
import JavaScriptTag from '../tag/JavascriptTag'
import TailwindTag from '../tag/TailwindTag'
import AwsTag from '../tag/AwsTag'
import GraphqlTag from '../tag/GraphqlTag'

export default function ProjectButteryPhotography() {
    return (
        <div className="mt-10 max-sm:h-96 max-sm:max-w-32 max-sm:mb-32 max-sm:mr-4 hover:scale-110 hover:duration-300">
            <div className="flex justify-center mr-10 ml-10">
                <div className="rounded-lg bg-white max-w-sm drop-shadow-4xl max-sm:w-72">
                    <a href="" rel='noreferrer' target='blank'>
                        <img className="rounded-t-lg h-52 w-full" src={picrover} alt="" />
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2 max-sm:text-sm">www.picrover.co.uk - COMING SOON!</h5>
                        <p className="text-gray-700 text-base mb-4 max-sm:text-sm">
                            A site for finding picture locations
                        </p>
                        <div className='flex flex-wrap mb-5'>
                            <ReactTag/>
                            <TailwindTag/>
                            <JavaScriptTag/>
                            <AwsTag/>
                            <GraphqlTag/>
                        </div>
                        <a disabled href="" rel='noreferrer' target='blank' type="button" className="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded">View</a>
                    </div>
                </div>
            </div>
        </div>
    )
}