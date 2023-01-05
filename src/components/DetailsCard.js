import { mdiLinkedin, mdiGithub } from '@mdi/js';
import Icon from '@mdi/react';

export default function DetailsCard() {
    return (
        <div className="w-2/6 mx-auto mt-16 shadow-lg flex justify-center bg-white drop-shadow-3xl rounded-2xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
            <div className="px-6 py-4">
                <div className="font-bold text-5xl mb-2 flex justify-center">Howdy!</div>
                <p className="text-gray-700 text-center text-2xl mt-10">
                    I'm Callum Buttery, a Software Engineer from sunny Scotland.
                </p>
                <div className='flex'>
                    <p className="w-5/6 mx-auto text-gray-700 text-center text-2xl mt-5">
                        When I'm not wearing a Kilt or chasing the Loch Ness Monster, or whatever it is Scottish people do, you can find me out with my Camera, in the gym, or with my head in a book or some form of Javascript.
                    </p>
                </div>

                <div className="flex justify-center mt-10">
                    <a href='https://www.linkedin.com/in/callumbuttery/' rel="noreferrer" target='_blank'><Icon path={mdiLinkedin}
                        size={1.5} color='#0077b5' className="mr-5" /></a>
                    <a href='https://github.com/callumbuttery' rel="noreferrer" target='_blank'><Icon path={mdiGithub}
                        size={1.5} color='#171515' /></a>
                </div>
            </div>
        </div>
    )
}