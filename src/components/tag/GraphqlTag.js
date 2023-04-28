import { mdiGraphql } from '@mdi/js';
import Icon from '@mdi/react';

export default function GraphqlTag() {
    return (
        <span
            className="px-4 py-2 mt-1 mr-1 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer max-sm:w-max max-sm:text-xs active:bg-gray-300 transition duration-300 ease">
            GraphQL
            <Icon path={mdiGraphql} size={0.8} color='#e535ab' className='ml-1 mt-0.5' />
        </span>
    )
}