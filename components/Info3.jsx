import Image from 'next/image'

export default function Info3() {

    function Card(props) {

        return (
            <div className=" text-center col-span-2 lg:text-left sm:col-span-1 mt-5">
                <h1 className="text-md font-medium uppercase mb-1">{props.title}</h1>
                <p className='mt-3 text-gray-600'>{props.info}</p>
            </div>
        )
    }


    return (
        <>
            <div className='w-10/12 mx-auto grid grid-cols-2 py-24 text-center md:text-left'>
                <div className="col-span-2 lg:col-span-1">
                    <p className='font-semibold tracking-widest'>Somos Líderes de Vendas no Rio de Janeiro</p>
                    <h1 className="text-3xl xl:text-5xl font-light py-6">Encontre o Plano Ideal para sua Família!</h1>
                    <p className='text-gray-600'>Uma equipe treinada com mais 10 anos de experiência ajuda você na escolha e busca do plano de saúde perfeito.</p>
                    <div className="grid grid-cols-2 gap-4">
                        <Card title='PLANO DE SAÚDE EMPRESARIAL' info='Planos empresariais que cabem no orçamento.' />
                        <Card title='PLANO DE SAÚDE FAMILIAR E MEI' info='Panos familiares e até 40% menos para toda familía.' />
                        <Card title='PLANO DE SAÚDE INDIVIDUAL' info='Uma linha ideal para profissionais é Adesão.' />
                        <Card title='OS MELHORES PLANOS ODONTOLÓGICOS' info='Sua saúde bucal nunca mais será a mesma. Confira!' />
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1">IMAGEM</div>
            </div>
        </>
    )
}