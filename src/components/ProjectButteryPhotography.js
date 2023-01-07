import butteryphotography from '../images/butteryphotography.JPG'

import VueTag from './tag/VueTag'
import JavaScriptTag from './tag/JavascriptTag'
import VuetifyTag from './tag/VuetifyTag'

export default function ProjectButteryPhotography() {
    return (
        <div className="h-screen max-sm:h-96 max-sm:mb-32">
            <div className="flex justify-center mr-10 ml-10" data-aos="flip-left" data-aos-duration="1500" data-aos-delay="500">
                <div className="rounded-lg bg-white max-w-sm drop-shadow-4xl">
                    <a href="https://www.butteryphotography.co.uk" rel='noreferrer' target='blank'>
                        <img class="rounded-t-lg h-52" src={butteryphotography} alt="" />
                    </a>
                    <div class="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Buttery Photography</h5>
                        <p className="text-gray-700 text-base mb-4">
                            A site for my Freelance Wedding Photography business
                        </p>
                        <div className='flex mb-5'>
                            <VueTag/>
                            <VuetifyTag/>
                            <JavaScriptTag/>
                        </div>
                        <a href="https://www.butteryphotography.co.uk" rel='noreferrer' target='blank' type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View</a>
                    </div>
                </div>
            </div>
        </div>
    )
}