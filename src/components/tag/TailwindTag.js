import { mdiTailwind } from '@mdi/js';
import Icon from '@mdi/react';

export default function TailwindTag() {
    return (
        <span
            className="px-4 py-2 mr-1 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
            Tailwind
            <Icon path={mdiTailwind} size={0.8} className='ml-1 mt-0.5' />
        </span>
    )
}