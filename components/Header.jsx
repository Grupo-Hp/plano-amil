import { Link } from "react-scroll";
import Image from 'next/image';

export default function Header() {
    return (
        <div className="headerImage1 sm:h-[80vh] flex items-center">
            <div className="grid grid-cols-2 w-10/12 mx-auto">
                <div className="col-span-2 xl:col-span-1 text-white my-16">
                    <h3 className="text-6xl font-light mb-5">Reduza o valor do seu plano de saúde</h3>
                    <p className="text-xl">Em até</p>
                    <h1 className="font-bold text-9xl xl:text-super px-10 mb-5">40%</h1>
                    <div className="grid sm:flex gap-x-4 text-center">
                        <a href="./contato" className="mt-2 px-10 cursor-pointer py-3 font-medium text-md border-2 border-secondary text-secondary hover:text-white rounded-xl bg-yellow-500 leading-tight uppercase hover:bg-secondary transition duration-300 ease-in-out">simulador online</a>
                        <Link

                            to="contato"
                            smooth={true}
                            offset={50}
                            duration={1000}
                            className="mt-2 px-10 cursor-pointer py-3 font-medium text-md border-2 border-white text-white hover:bg-primary hover:border-primary rounded-xl leading-tight uppercase htransition duration-300 ease-in-out"
                        >
                            preço rapido
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}