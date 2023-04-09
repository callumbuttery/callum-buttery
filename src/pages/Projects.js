import ProjectDoodleNoodles from "../components/ProjectDoodleNoodles"
import ProjectButteryPhotography from "../components/ProjectButteryPhotography"
import ProjectCallumButtery from "../components/ProjectCallumButtery"
import ScrollAnimator from "../components/scrollAnimator"
import Tech from "../components/Tech"

export default function Projects() {
    return (
        <div className='h-full pt-48 place-items-center bg-gradient-to-b from-black to-white max-sm:h-full'>
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

                <Tech />
            </div>
        </div>
    )
}