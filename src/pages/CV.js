import cv from '../files/cv.pdf'

export default function CV() {
    return (
        <div className='h-screen pt-32 pb-10 place-items-center bg-gradient-to-b from-[#00a0c2] via-[#c48f95] to-[#e06f43] max-sm:h-fill'>
            <button href='' onClick={() => window.open(cv)} className="mt-52 max-w-32 animate-pulse bg-transparent py-2 px-3 pl-6 text-center flex justify-center text-center text-4xl tracking-[.35em] text-white font-header font-bold  mx-auto max-sm:text-3xl max-sm:tracking-[.1em]">
                Open in tab
            </button>
            <span className="mt-16 max-w-32 bg-transparent py-2 px-3 pl-6 text-center flex justify-center text-center text-4xl tracking-[.35em] text-white font-header font-bold  mx-auto max-sm:text-3xl max-sm:tracking-[.1em]">OR</span>
            <a download href={cv} className="mt-16 animate-pulse bg-transparent py-2 px-3 pl-6 text-center flex justify-center text-center text-4xl tracking-[.35em] text-white font-header font-bold  mx-auto max-sm:text-3xl max-sm:tracking-[.1em]">
                Download
            </a>
        </div>
    )
}