import charity from '../../images/charity.PNG'

import ReactTag from '../tag/ReactTag'
import TypescriptTag from '../tag/TypescriptTag'
import TailwindTag from '../tag/TailwindTag'
import AwsTag from '../tag/AwsTag'
import GoogleMapsTag from '../tag/GoogleMapsTag'
import StravaTag from '../tag/StravaTag'

export default function ProjectChairity() {
    return (
        <div className="mt-10 max-sm:h-96 max-sm:max-w-32 max-sm:mb-32 max-sm:mr-4 hover:scale-110 hover:duration-300">
            <div className="flex justify-center mr-10 ml-10">
                <div className="rounded-lg bg-white max-w-sm drop-shadow-4xl max-sm:w-72">
                    <a href="" rel='noreferrer' target='blank'>
                        <img className="rounded-t-lg h-52 w-full" src={charity} alt="" />
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2 max-sm:text-sm">www.callumraisesmoney.co.uk - COMING SOON!</h5>
                        <p className="text-gray-700 text-base mb-4 max-sm:text-sm">
                            A site following my charity raising attempts
                        </p>
                        <div className='flex flex-wrap mb-5'>
                            <ReactTag/>
                            <TypescriptTag/>
                            <TailwindTag/>
                            <AwsTag/>
                            <StravaTag/>
                            <GoogleMapsTag/>
                        </div>
                        <a disabled href="" rel='noreferrer' target='blank' type="button" className="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded">View</a>
                    </div>
                </div>
            </div>
        </div>
    )
}