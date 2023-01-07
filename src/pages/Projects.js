import ProjectDoodleNoodles from "../components/ProjectDoodleNoodles"
import ProjectButteryPhotography from "../components/ProjectButteryPhotography"
import ProjectCallumButtery from "../components/ProjectCallumButtery"

export default function Projects() {
    return (
        <div className='h-fill bg-gradient-to-t from-teal-100 via-teal-200 to-teal-600'>
            <div className="place-items-center pt-60 flex justify-center max-sm:inline-block">
                <ProjectCallumButtery />
                <ProjectButteryPhotography />
                <ProjectDoodleNoodles />
            </div>
        </div>
    )
}