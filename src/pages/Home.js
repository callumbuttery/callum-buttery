import ProfilePic from '../components/ProfilePic';
import DetailsCard from '../components/DetailsCard';


function Home() {
    return (
        <div className="h-screen bg-[#5bc0be]">
            <div>
                <ProfilePic />
            </div>
            <div>   
                <DetailsCard />
            </div>
        </div>
    )
}

export default Home;