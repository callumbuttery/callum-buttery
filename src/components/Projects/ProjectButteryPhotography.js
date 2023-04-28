import butteryphotography from '../../images/butteryphotography.webp'

import VueTag from '../tag/VueTag'
import JavaScriptTag from '../tag/JavascriptTag'
import VuetifyTag from '../tag/VuetifyTag'

export default function ProjectButteryPhotography() {
    return (
        <div className="max-sm:h-96 max-sm:max-w-48 max-sm:ml-10 max-sm:mb-32 hover:scale-110 hover:duration-300">
            <div className="flex justify-center mr-10 ml-10">
                <div className="rounded-lg bg-white max-w-sm drop-shadow-4xl max-sm:w-72">
                    <a href="https://www.butteryphotography.co.uk" rel='noreferrer' target='blank'>
                        <img className="rounded-t-lg h-52" src={butteryphotography} alt="" />
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">www.butteryphotography.co.uk</h5>
                        <p className="text-gray-700 text-base mb-4">
                            A site for my Freelance Wedding Photography business
                        </p>
                        <div className='flex flex-wrap mb-5'>
                            <VueTag/>
                            <VuetifyTag/>
                            <JavaScriptTag/>
                        </div>
                        <a href="https://www.butteryphotography.co.uk" rel='noreferrer' target='blank' type="button" className="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded">View</a>
                    </div>
                </div>
            </div>
        </div>
    )
}