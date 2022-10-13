import Image from 'next/image'

export default function Info3() {
    return (
        <>
            <div className='w-10/12 mx-auto grid grid-cols-2 py-24'>
                <div className="col-span-2 md:col-span-1">
                    <p className='font-semibold tracking-widest'>Somos Líderes de Vendas no Rio de Janeiro</p>
                    <h1 className="text-3xl xl:text-5xl font-light py-6">Encontre o Plano Ideal para sua Família!</h1>
                    <p className='text-gray-600'>Uma equipe treinada com mais 10 anos de experiência ajuda você na escolha e busca do plano de saúde perfeito.</p>
                </div>
                <div className="col-span-2 md:col-span-1">01</div>
            </div>
        </>
    )
}