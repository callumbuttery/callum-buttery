import { mdiLinkedin, mdiGithub } from '@mdi/js';
import Icon from '@mdi/react';

export default function DetailsCard() {
    return (
        <div class="w-2/6 mx-auto mt-16 shadow-lg flex justify-center bg-white drop-shadow-3xl rounded-2xl" data-aos="fade-up" data-aos-delay="700">
            <div class="px-6 py-4">
                <div class="font-bold text-5xl mb-2 flex justify-center">Howdy!</div>
                <p class="text-gray-700 flex justify-center text-2xl mt-10">
                    I'm Callum Buttery, a Software Engineer from sunny Scotland.
                </p>
                <p class="text-gray-700 justify-center text-2xl mt-5">
                    When I'm not wearing a Kilt or chasing the Loch Ness Monster, you can find me in some of Scotland's most beautiful locations with my Camera.
                </p>

                <div className="flex justify-center mt-10">
                    <a href='https://www.linkedin.com/in/callumbuttery/' rel="noreferrer" target='_blank'><Icon path={mdiLinkedin}
                        size={1.5} color='#0077b5' className="mr-5"/></a>
                    <a href='https://github.com/callumbuttery' rel="noreferrer" target='_blank'><Icon path={mdiGithub}
                        size={1.5} color='#171515'/></a>
                </div>
            </div>
        </div>
    )
}