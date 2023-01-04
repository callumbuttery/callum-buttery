import picture from '../images/picture.jpeg'

export default function profilePicture() {

    return (

        <div className='flex justify-center pt-64 drop-shadow-4xl' data-aos="fade-down" data-aos-delay="700">
            <img class="w-96 h-96 rounded-full ring-4 ring-white dark:ring-white" src={picture} alt="Bordered avatar" />
        </div>
    )
}