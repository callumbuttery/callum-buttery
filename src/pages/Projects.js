import ProjectDoodleNoodles from "../components/Projects/ProjectDoodleNoodles"
import ProjectButteryPhotography from "../components/Projects/ProjectButteryPhotography"
import ProjectCallumButtery from "../components/Projects/ProjectCallumButtery"
import ProfilePicRover from "../components/Projects/ProjectPicRover"
import ScrollAnimator from "../components/scrollAnimator"
import Tech from "../components/Tech"

export default function Projects() {
    return (
        <div className='h-full pt-48 place-items-center bg-gradient-to-t from-red-500 via-gray-900 to-black max-sm:h-full'>
            <h2 className="flex justify-center text-center text-4xl tracking-[.35em] text-white font-header font-bold w-4/6 mx-auto max-sm:text-3xl max-sm:tracking-[.1em]">
                PROJECTS
            </h2>
            <div className="place-items-center pt-16 flex flex-wrap justify-center max-sm:inline-block">
                <ProjectCallumButtery />
                <ProjectButteryPhotography />
                <ProjectDoodleNoodles />
                <ProfilePicRover />
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