import OneTreePlanted from '../images/OneTreePlanted.png'

import ReactTag from './tag/ReactTag'
import JavaScriptTag from './tag/JavascriptTag'
import BootstrapTag from './tag/BootstrapTag'

export default function ProjectDoodleNoodles() {
    return (
        <div className="h-screen max-sm:h-96 max-sm:mb-32">
            <div className="flex justify-center mr-10 ml-10" data-aos="flip-left" data-aos-duration="1500" data-aos-delay="0">
                <div className="rounded-lg bg-white max-w-sm drop-shadow-4xl">
                    <a href="https://www.doodlenoodles.io" rel='noreferrer' target='blank'>
                        <img class="rounded-t-lg h-52" src={OneTreePlanted} alt="" />
                    </a>
                    <div class="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Doodle Noodles</h5>
                        <p className="text-gray-700 text-base mb-4">
                            3333 NFTs on the blockchain. Own brand Ramen & Merch. Up to 9999 trees planted
                        </p>
                        <div className='flex mb-5'>
                            <ReactTag/>
                            <JavaScriptTag/>
                            <BootstrapTag/>
                        </div>
                        <a href="https://www.doodlenoodles.io" rel='noreferrer' target='blank' type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View</a>
                    </div>
                </div>
            </div>
        </div>
    )
}