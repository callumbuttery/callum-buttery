import ProfilePic from "../components/ProfilePic"
import DetailsCard from "../components/DetailsCard"
import Timeline from "../components/Timeline"
import ScrollAnimator from "../components/scrollAnimator"

export default function About() {
    return (
        <div className='place-items-center max-sm:h-full bg-gradient-to-t from-red-500 via-gray-900 to-black'>
            <div className="h-full">
                <div className="pt-48 pb-24">
                    <ProfilePic />
                    <DetailsCard />
                    <ScrollAnimator />
                </div>
            </div>
            <div className="h-full">
                <div className="pb-32">
                    <Timeline />
                </div>
            </div>
        </div>
    )
}