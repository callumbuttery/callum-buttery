import ProfilePic from '../components/ProfilePic'


function Home() {
    return (
        <div className="h-screen bg-[#5bc0be]">
            <div className='flex justify-center pt-52'>
                <ProfilePic />
            </div>
            <h1 className="text-5xl font-bold underline text-white flex justify-center pt-16">
                Hello world!
            </h1>
        </div>
    )
}

export default Home;