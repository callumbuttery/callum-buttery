import JS from '../images/javascript.webp'
import TS from '../images/typescript.webp'
import React from '../images/react.webp'
import vue from '../images/vue.webp'
import node from '../images/node.webp'
import tailwind from '../images/tailwind.webp'
import mongodb from '../images/mongodb.webp'
import aws from '../images/aws.webp'

export default function Tech() {
    return (
        <div className="place-items-center pt-16 pb-32 max-w-fit flex-wrap mx-auto flex justify-center max-sm:inline-block">
            <a href="https://www.javascript.com/" rel='noreferrer' target='blank'><img className="object-contain h-48 w-96 ml-10 mt-10 drop-shadow-4xl hover:scale-110 hover:duration-300" src={JS} alt='Javascript' /></a>
            <a href="https://www.typescriptlang.org/" rel='noreferrer' target='blank'><img className="object-contain h-48 w-96 ml-10 mt-10 drop-shadow-4xl hover:scale-110 hover:duration-300" src={TS} alt='Typescript' /></a>
            <a href="https://vuejs.org/" rel='noreferrer' target='blank'><img className="object-contain h-48 w-96 ml-10 mt-10 drop-shadow-4xl hover:scale-110 hover:duration-300" src={vue} alt='Vue.js' /></a>
            <a href="https://reactjs.org/" rel='noreferrer' target='blank'><img className="animate-spin-slow object-contain h-48 w-96 ml-10 mt-10 drop-shadow-4xl hover:scale-110 hover:duration-300" src={React} alt='React.js' /></a>
            <a href="https://nodejs.org/en/" rel='noreferrer' target='blank'><img className="object-contain h-48 w-96 ml-10 mt-20 drop-shadow-4xl hover:scale-110 hover:duration-300" src={node} alt='Node.js' /></a>
            <a href="https://tailwindcss.com/" rel='noreferrer' target='blank'><img className="object-contain h-32 w-72 ml-10 mt-20 drop-shadow-4xl hover:scale-110 hover:duration-300 " src={tailwind} alt='Tailwindcss' /></a>
            <a href="https://www.mongodb.com/" rel="noreferrer" target="blank"><img className="object-contain h-48 w-96 ml-10 mt-20 drop-shadow-4xl hover:scale-110 hover:duration-300" src={mongodb} alt='MongoDB' /></a>
            <a href="https://aws.amazon.com/s3/" rel="noreferrer" target="blank"><img className="object-contain h-48 w-96 ml-10 mt-20 drop-shadow-4xl hover:scale-110 hover:duration-300" src={aws} alt='Aws S3' /></a>
        </div>
    )
}