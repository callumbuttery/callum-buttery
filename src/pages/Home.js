import ProfilePic from '../components/ProfilePic';
import DetailsCard from '../components/DetailsCard';
import WelcomeText from '../components/WelcomeText';

function Home() {
    return (
        <div className="h-screen bg-[url('images/ae.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
            {/* <div>
                <ProfilePic />
            </div>
            <div>   
                <DetailsCard />
            </div> */}
            <WelcomeText />
        </div>
    )
}

export default Home;