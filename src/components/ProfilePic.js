import picture from '../images/picture.jpeg'

export default function profilePicture() {

    return (
        <div className='flex justify-center drop-shadow-4xl' data-aos="fade-down" data-aos-duration="2000" data-aos-delay="700">
            <img className="w-72 h-72 rounded-full ring-2 ring-white" src={picture} alt="Bordered avatar" />
        </div>
    )
}