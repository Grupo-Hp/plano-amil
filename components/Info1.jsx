import Image from "next/image";

export default function Info1() {
    return (
        <div className="bg-gray-50">
            <div className="w-10/12 lg:w-8/12 py-16 mx-auto grid grid-cols-2 gap-x-4">
                <div className="col-span-1">
                </div>
                <div className="col-span-2 lg:col-span-1 text-center ">

                    <p className="uppercase border-b-4 pb-2 text-lg border-primary text-center lg:text-left">simulador de planos amil saúde rio</p>
                    <h1 className="text-3xl mt-10 font-light lg:text-left">Planos á partir de</h1>

                    <div className="text-primary font-bold text-center">
                        <span className="text-3xl">R$</span><span className="text-super">145</span>
                        <span className="relative bottom-28 text-3xl">,00</span>
                    </div>

                    <p className="text-3xl font-light lg:text-end mb-5 lg:pr-3">Economize até 40% </p>
                    <p className="text-center text-gray-600 text-xl">Valores para o plano de saúde na linha empresarial Amil fácil.</p>
                    <p className="text-center text-gray-600 text-xl">*De 0 à 18 Anos para o Rio de Janeiro</p>

                    <div className="mt-10">
                        <a href="#" className="px-10 cursor-pointer py-3 font-medium text-md border-2 bg-primary hover:bg-white border-primary text-white hover:text-primary rounded-xl uppercase transition duration-300 ease-in-out">preço rápido</a>
                    </div>
                </div>
            </div>
        </div>
    )
}