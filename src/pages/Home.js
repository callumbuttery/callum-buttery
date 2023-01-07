import ProfilePic from '../components/ProfilePic';
import DetailsCard from '../components/DetailsCard';
import WelcomeText from '../components/WelcomeText';
import NavBar from '../components/Navbar';

function Home() {
    return (
        <div className="h-screen bg-[url('images/ae.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
            <NavBar />
            <WelcomeText />
        </div>
    )
}

export default Home;