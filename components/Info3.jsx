import Image from 'next/image'

export default function Info3() {

    function Card(props) {

        return (
            <div className=" text-center col-span-2 lg:text-left sm:col-span-1 mt-5">
                <h1 className="text-md font-medium uppercase mb-1 text-primary">{props.title}</h1>
                <p className='mt-3 text-gray-600'>{props.info}</p>
            </div>
        )
    }


    return (
        <div className='grid grid-cols-2 py-16 text-center md:text-left'>
            <div className="w-3/4 mx-auto col-span-2 xl:col-span-1">
                <p className='font-semibold tracking-widest'>Somos Líderes de Vendas no Rio de Janeiro</p>
                <h1 className="text-3xl xl:text-5xl font-light py-6 text-primary">Encontre o Plano Ideal para sua Família!</h1>
                <p className='text-gray-600'>Uma equipe treinada com mais 10 anos de experiência ajuda você na escolha e busca do plano de saúde perfeito.</p>
                <div className="grid grid-cols-2 gap-4">
                    <Card title='PLANO DE SAÚDE EMPRESARIAL' info='Planos empresariais que cabem no orçamento.' />
                    <Card title='PLANO DE SAÚDE FAMILIAR E MEI' info='Panos familiares e até 40% menos para toda familía.' />
                    <Card title='PLANO DE SAÚDE INDIVIDUAL' info='Uma linha ideal para profissionais é Adesão.' />
                    <Card title='OS MELHORES PLANOS ODONTOLÓGICOS' info='Sua saúde bucal nunca mais será a mesma. Confira!' />
                </div>
            </div>
            <div className="hidden xl:block xl:col-span-1">
                <Image
                    src="/images/bebe.jpg"
                    //layout='responsive'
                    width={1000}
                    height={600}
                    alt="Imagem de médicos"
                />
            </div>
        </div>
    )
}