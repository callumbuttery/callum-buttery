import ProfilePic from "../components/ProfilePic"
import DetailsCard from "../components/DetailsCard"
import Timeline from "../components/Timeline"
import ScrollAnimator from "../components/scrollAnimator"

export default function About() {
    return (
        <div className='place-items-center max-sm:h-full'>
            <div className="h-full bg-[url('images/aboutwallpaper.webp')] bg-no-repeat bg-cover bg-center bg-fixed">
                <div className="pt-48 pb-48">
                    <ProfilePic />
                    <DetailsCard />
                    <ScrollAnimator />
                </div>
            </div>
            <div className="h-full bg-[url('images/aboutwallpaper2.webp')] bg-no-repeat bg-cover bg-center bg-fixed">
                <div className="pt-48 pb-32">
                    <Timeline />
                </div>
            </div>
        </div>
    )
}