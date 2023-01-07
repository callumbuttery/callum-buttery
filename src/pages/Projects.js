import ProjectDoodleNoodles from "../components/ProjectDoodleNoodles"
import ProjectButteryPhotography from "../components/ProjectButteryPhotography"
import ProjectCallumButtery from "../components/ProjectCallumButtery"

export default function Projects() {
    return (
        <div className='h-screen place-items-center bg-gradient-to-b from-blue-400 to-cyan-300'>
            <div className="place-items-center pt-60 flex justify-center max-sm:inline-block">
                <ProjectCallumButtery />
                <ProjectButteryPhotography />
                <ProjectDoodleNoodles />
            </div>
        </div>
    )
}