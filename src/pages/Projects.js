import ProjectDoodleNoodles from "../components/ProjectDoodleNoodles"
import ProjectButteryPhotography from "../components/ProjectButteryPhotography"
import ProjectCallumButtery from "../components/ProjectCallumButtery"

export default function Projects() {
    return (
        <div className='h-screen pt-60 place-items-center bg-gradient-to-b from-[#00a0c2] via-[#c48f95] to-[#e06f43] max-sm:h-full'>
            <div data-aos="fade-down" data-aos-duration="2000" data-aos-delay="700" className="flex justify-center text-center text-4xl tracking-[.15em] text-white font-header font-bold w-4/6 mx-auto max-sm:text-3xl max-sm:tracking-[.1em]">
                PROJECTS
            </div>
            <div className="place-items-center pt-16 flex justify-center max-sm:inline-block">
                <ProjectCallumButtery />
                <ProjectButteryPhotography />
                <ProjectDoodleNoodles />
            </div>
        </div>
    )
}