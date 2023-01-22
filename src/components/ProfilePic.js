import picture from '../images/picture.jpeg'

export default function profilePicture() {

    return (
        <div className='flex justify-center drop-shadow-4xl'>
            <img className="w-64 h-64 rounded-full ring-2 ring-white" src={picture} alt="Bordered avatar" />
        </div>
    )
}