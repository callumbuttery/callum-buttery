import ProjectDoodleNoodles from "../components/ProjectDoodleNoodles"
import ProjectButteryPhotography from "../components/ProjectButteryPhotography"

export default function Projects() {
    return (
        <div className='h-fill bg-gradient-to-t from-teal-200 to-teal-600'>
            <div className="place-items-center pt-60 flex justify-center max-sm:inline-block">
                <ProjectDoodleNoodles />
                <ProjectButteryPhotography />
            </div>
        </div>
    )
}