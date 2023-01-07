import OneTreePlanted from '../images/OneTreePlanted.png'

import ReactTag from './tag/ReactTag'
import JavaScriptTag from './tag/JavascriptTag'
import BootstrapTag from './tag/BootstrapTag'

export default function ProjectDoodleNoodles() {
    return (
        <div className="max-sm:h-96 max-sm:mb-32 hover:scale-110 hover:duration-300 motion-reduce">
            <div className="flex justify-center mr-10 ml-10" data-aos="flip-left" data-aos-duration="1700" data-aos-delay="1000">
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
                            <BootstrapTag/>
                            <JavaScriptTag/>
                        </div>
                        <a href="https://www.doodlenoodles.io" rel='noreferrer' target='blank' type="button" className="inline-block px-6 py-2.5 bg-cyan-500 text-white font-medium text-xs leading-tight uppercase rounded">View</a>
                    </div>
                </div>
            </div>
        </div>
    )
}