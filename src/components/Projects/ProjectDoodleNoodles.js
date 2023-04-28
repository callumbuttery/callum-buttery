import OneTreePlanted from '../../images/OneTreePlanted.webp'

import ReactTag from '../tag/ReactTag'
import JavaScriptTag from '../tag/JavascriptTag'
import BootstrapTag from '../tag/BootstrapTag'

export default function ProjectDoodleNoodles() {
    return (
        <div className="max-sm:h-96 max-sm:max-w-48 max-sm:ml-10 max-sm:mb-32 hover:scale-110 hover:duration-300">
            <div className="flex justify-center mr-10 ml-10">
                <div className="rounded-lg bg-white max-w-sm drop-shadow-4xl max-sm:w-72">
                    <a href="https://www.doodlenoodles.io" rel='noreferrer' target='blank'>
                        <img className="rounded-t-lg h-44" src={OneTreePlanted} alt="" />
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">www.doodlenoodles.io</h5>
                        <p className="text-gray-700 text-base mb-4">
                            3333 NFTs on the blockchain. Own brand Ramen & Merch. Up to 9999 trees planted
                        </p>
                        <div className='flex flex-wrap mb-5'>
                            <ReactTag/>
                            <BootstrapTag/>
                            <JavaScriptTag/>
                        </div>
                        <a href="https://www.doodlenoodles.io" rel='noreferrer' target='blank' type="button" className="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded">View</a>
                    </div>
                </div>
            </div>
        </div>
    )
}