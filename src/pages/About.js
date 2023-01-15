import ProfilePic from "../components/ProfilePic"
import DetailsCard from "../components/DetailsCard"
import Timeline from "../components/Timeline"

export default function About() {
    return (
        <div className='h-full pt-40 pb-10 place-items-center bg-gradient-to-b from-[#00a0c2] via-[#c48f95] to-[#e06f43] max-sm:h-full'>
            <ProfilePic />
            <DetailsCard/>
            <Timeline/>
        </div>
    )
}