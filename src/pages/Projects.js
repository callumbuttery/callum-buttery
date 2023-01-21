import ProjectDoodleNoodles from "../components/ProjectDoodleNoodles"
import ProjectButteryPhotography from "../components/ProjectButteryPhotography"
import ProjectCallumButtery from "../components/ProjectCallumButtery"
import ScrollAnimator from "../components/scrollAnimator"

import JS from '../images/javascript.png'
import React from '../images/react.png'
import vue from '../images/vue.png'
import node from '../images/node.png'
import tailwind from '../images/tailwind.png'
import mongodb from '../images/mongodb.png'
import aws from '../images/aws.png'

export default function Projects() {
    return (
        <div className='h-full pt-48 place-items-center bg-gradient-to-b from-[#00a0c2] via-[#c48f95] to-[#e06f43] max-sm:h-full'>
            <h2 data-aos="fade-down" data-aos-duration="2000" data-aos-delay="700" className="flex justify-center text-center text-4xl tracking-[.35em] text-white font-header font-bold w-4/6 mx-auto max-sm:text-3xl max-sm:tracking-[.1em]">
                PROJECTS
            </h2>
            <div className="place-items-center pt-16 flex justify-center max-sm:inline-block">
                <ProjectCallumButtery />
                <ProjectButteryPhotography />
                <ProjectDoodleNoodles />
            </div>

            <ScrollAnimator/>


            <div className="pt-52">
                <h2 data-aos="fade-down" data-aos-duration="2000" className="flex justify-center text-center text-5xl tracking-[.25em] text-white font-header font-bold w-4/6 mx-auto max-sm:text-3xl max-sm:tracking-[.1em]">
                    TECH EXPOSURE
                </h2>

                <div className="place-items-center pt-16 pb-32 max-w-fit flex-wrap mx-auto flex justify-center max-sm:inline-block">
                    <img className="object-contain h-48 w-96 ml-10 mt-10 drop-shadow-4xl" src={JS} />
                    <img className="object-contain h-48 w-96 ml-10 mt-10 drop-shadow-4xl" src={vue} />
                    <img className="animate-spin-slow object-contain h-48 w-96 ml-10 mt-10 drop-shadow-4xl" src={React} />
                    <img className="object-contain h-48 w-96 ml-10 mt-20 drop-shadow-4xl" src={node} />
                    <img className="object-contain h-32 w-72 ml-10 mt-20 drop-shadow-4xl" src={tailwind} />
                    <img className="object-contain h-48 w-96 ml-10 mt-20 drop-shadow-4xl" src={mongodb} />
                    <img className="object-contain h-48 w-96 ml-10 mt-20 drop-shadow-4xl" src={aws} />
                </div>
            </div>
        </div>
    )
}