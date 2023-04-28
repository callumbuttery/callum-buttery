import { mdiLanguageJavascript  } from '@mdi/js';
import Icon from '@mdi/react';

export default function JavaScriptTag() {
    return (
        <span
            className="px-4 py-2 mr-1 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer max-sm:w-max max-sm:text-xs active:bg-gray-300 transition duration-300 ease">
            JavaScript
            <Icon path={mdiLanguageJavascript} size={0.8} color='#FDDA0D' className='ml-1 mt-0.5' />
        </span>
    )
}