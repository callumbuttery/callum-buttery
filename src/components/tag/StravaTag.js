import strava from '../../images/strava-icon.png'

export default function StravaTag() {
    return (
        <span
            className="px-4 py-2 mr-1 mt-1 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer max-sm:w-max max-sm:text-xs active:bg-gray-300 transition duration-300 ease">
            Strava API
            <img src={strava} className='ml-2 mt-1 h-4'/>
        </span>
    )
}