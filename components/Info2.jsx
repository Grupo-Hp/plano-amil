import Image from 'next/image'

export default function Info2() {
    return (
        <div className="bg-gray-50 text-center">
            <div className="w-11/12 xl:w-7/12 py-10 mx-auto">
                <h4 className="text-md font-medium uppercase">atendimento grande rio e capital</h4>
                <h1 className="text-3xl xl:text-5xl font-light py-6">Uma equipe preparada e a melhor consultoria do Rio de Janeiro</h1>
                <div className="md:w-8/12 mx-auto mt-5">
                    <p className="md:text-xl font-light">Consulte conosco a linha completa Amil Familiar, Adesão, Empresarial e Odontológica.
                        Desconto especial para novos clientes e cotação online com nossa equipe.
                    </p>
                </div>
                <Image src='/images/testeimage.jpg' width={500} height={300} />
                <Image src='/images/testeimage.jpg' width={500} height={300} />
            </div>
        </div >
    )
}