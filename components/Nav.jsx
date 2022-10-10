import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import Image from "next/image";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="shadow-sm py-1 w-full bg-white z-50 border-b-4" id="home">
                <div className="w-full mx-auto">
                    <div className="flex items-center h-20 w-full">
                        <div className="flex items-center mx-20 justify-between w-full">
                            <div className="flex">
                                <a href="./"><Image
                                    src="/images/amil-logo.png"
                                    //layout='responsive'
                                    width={110}
                                    height={40}
                                    alt="Logo da Amil saúde"

                                /></a>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-10 uppercase">
                                    <Link

                                        to="portfolio"
                                        smooth={true}
                                        offset={50}
                                        duration={1000}
                                        className=' font-medium hover:text-sky-400 cursor-pointer text-slate-800'
                                    >
                                        inicio
                                    </Link>
                                    <Link

                                        to="quemSomos"
                                        smooth={true}
                                        offset={50}
                                        duration={1000}
                                        className=' font-medium hover:text-sky-400 cursor-pointer text-slate-800'
                                    >
                                        plano individual
                                    </Link>
                                    <Link

                                        to="contato"
                                        smooth={true}
                                        offset={50}
                                        duration={1000}
                                        className=' font-medium hover:text-sky-400 cursor-pointer text-slate-800'
                                    >
                                        plano familiar
                                    </Link>
                                    <Link

                                        to="contato"
                                        smooth={true}
                                        offset={50}
                                        duration={1000}
                                        className=' font-medium hover:text-sky-400 cursor-pointer text-slate-800'
                                    >
                                        plano empresarial
                                    </Link>
                                    <Link

                                        to="contato"
                                        smooth={true}
                                        offset={50}
                                        duration={1000}
                                        className=' font-medium hover:text-sky-400 cursor-pointer text-slate-800'
                                    >
                                        preço rapido
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mr-10 flex md:hidden ">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-slate-800 focus:ring-offset-2"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-200 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden uppercase bg-slate-800" id="mobile-menu">
                            <div
                                ref={ref}
                                className="bg-primary-10 pt-2 pb-3 space-y-1"
                            >
                                <Link

                                    to="portfolio"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                    className=" cursor-pointer hover:bg-sky-400 text-white block px-3 py-2 text-base font-medium"
                                >
                                    inicio
                                </Link>
                                <Link

                                    to="quemSomos"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                    className=" cursor-pointer hover:bg-sky-400 text-white block px-3 py-2 text-base font-medium"
                                >
                                    plano individual
                                </Link>
                                <Link

                                    to="contato"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                    className=" cursor-pointer hover:bg-sky-400 text-white block px-3 py-2 text-base font-medium"
                                >
                                    plano familiar
                                </Link>
                                <Link

                                    to="contato"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                    className=" cursor-pointer hover:bg-sky-400 text-white block px-3 py-2 text-base font-medium"
                                >
                                    plano empresarial
                                </Link>
                                <Link

                                    to="contato"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                    className=" cursor-pointer hover:bg-sky-400 text-white block px-3 py-2 text-base font-medium"
                                >
                                    preço rapido
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </div>
        </>
    )
}