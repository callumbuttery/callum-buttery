import ProjectDoodleNoodles from "../components/ProjectDoodleNoodles"
import ProjectButteryPhotography from "../components/ProjectButteryPhotography"
import ProjectCallumButtery from "../components/ProjectCallumButtery"
import ScrollAnimator from "../components/scrollAnimator"

import JS from '../images/javascript.webp'
import React from '../images/react.webp'
import vue from '../images/vue.webp'
import node from '../images/node.webp'
import tailwind from '../images/tailwind.webp'
import mongodb from '../images/mongodb.webp'
import aws from '../images/aws.webp'

export default function Projects() {
    return (
        <div className='h-full pt-48 place-items-center bg-gradient-to-b from-[#00a0c2] via-[#c48f95] to-[#e06f43] max-sm:h-full'>
            <h2 className="flex justify-center text-center text-4xl tracking-[.35em] text-white font-header font-bold w-4/6 mx-auto max-sm:text-3xl max-sm:tracking-[.1em]">
                PROJECTS
            </h2>
            <div className="place-items-center pt-16 flex justify-center max-sm:inline-block">
                <ProjectCallumButtery />
                <ProjectButteryPhotography />
                <ProjectDoodleNoodles />
            </div>

            <ScrollAnimator/>


            <div className="pt-52">
                <h2 className="flex justify-center text-center text-5xl tracking-[.25em] text-white font-header font-bold w-4/6 mx-auto max-sm:text-3xl max-sm:tracking-[.1em]">
                    TECH EXPOSURE
                </h2>

                <div className="place-items-center pt-16 pb-32 max-w-fit flex-wrap mx-auto flex justify-center max-sm:inline-block">
                    <a href="https://www.javascript.com/" rel='noreferrer' target='blank'><img className="object-contain h-48 w-96 ml-10 mt-10 drop-shadow-4xl hover:scale-110 hover:duration-300" src={JS} alt='Javascript' /></a>
                    <a href="https://vuejs.org/" rel='noreferrer' target='blank'><img className="object-contain h-48 w-96 ml-10 mt-10 drop-shadow-4xl hover:scale-110 hover:duration-300" src={vue} alt='Vue.js' /></a>
                    <a href="https://reactjs.org/" rel='noreferrer' target='blank'><img className="animate-spin-slow object-contain h-48 w-96 ml-10 mt-10 drop-shadow-4xl hover:scale-110 hover:duration-300" src={React} alt='React.js' /></a>
                    <a href="https://nodejs.org/en/" rel='noreferrer' target='blank'><img className="object-contain h-48 w-96 ml-10 mt-20 drop-shadow-4xl hover:scale-110 hover:duration-300" src={node} alt='Node.js' /></a>
                    <a href="https://tailwindcss.com/" rel='noreferrer' target='blank'><img className="object-contain h-32 w-72 ml-10 mt-20 drop-shadow-4xl hover:scale-110 hover:duration-300 " src={tailwind} alt='Tailwindcss'/></a>
                    <a href="https://www.mongodb.com/" rel="noreferrer" target="blank"><img className="object-contain h-48 w-96 ml-10 mt-20 drop-shadow-4xl hover:scale-110 hover:duration-300" src={mongodb} alt='MongoDB' /></a>
                    <a href="https://aws.amazon.com/s3/" rel="noreferrer" target="blank"><img className="object-contain h-48 w-96 ml-10 mt-20 drop-shadow-4xl hover:scale-110 hover:duration-300" src={aws} alt='Aws S3'/></a>
                </div>
            </div>
        </div>
    )
}