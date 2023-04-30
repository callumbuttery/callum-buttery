import { mdiLanguageTypescript } from '@mdi/js';
import Icon from '@mdi/react';

export default function TypescriptTag() {
    return (
        <span
            className="px-4 py-2 mr-1 mt-1 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer max-sm:w-max max-sm:text-xs active:bg-gray-300 transition duration-300 ease">
            Typescript
            <Icon path={mdiLanguageTypescript} size={0.8} color='#007acc' className='ml-1 mt-0.5' />
        </span>
    )
}