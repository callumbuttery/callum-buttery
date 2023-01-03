import picture from '../images/picture.jpeg'

function profilePicture() {
    return (

        <div>
            <img class="w-96 h-96 rounded-full ring-4 ring-white dark:ring-white" src={picture} alt="Bordered avatar"/>
        </div>
    )
}

export default profilePicture;