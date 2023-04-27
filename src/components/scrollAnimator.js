import { mdiArrowDownCircleOutline } from '@mdi/js';
import Icon from '@mdi/react';

export default function scrollAnimator() {
    return (
        <div className="flex justify-center pt-16">
            <Icon className="animate-pulse w-10 h-10" color='#fff' path={mdiArrowDownCircleOutline} />
        </div>
    )
}