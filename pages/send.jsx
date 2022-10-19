import Page from '../components/Page'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { BiMailSend } from "react-icons/bi";


export default function SendPage() {

    return (
        <Page title="Mensagem enviada!" description="Mensagem enviada com sucesso!" path="/">
            <Nav />
            <header className='contatoImage1 h-[90vh] flex items-center'>
                <div className="mx-auto w-8/12 text-white text-center">
                    <BiMailSend className='mx-auto text-9xl' />
                    <h1 className='text-5xl my-8'>Enviado com sucesso!</h1>
                    <p className='text-2xl'>Em breve, sua simulação será encaminhada via e-mail, whatsapp ou telefone por um dos nossos corretores.</p>
                    <p className='text-xl mt-5 mb-16'>LIGUE AGORA PARA COTAÇÃO VIA TELEFONE:&nbsp;(21) 4040-4148
                    </p>
                    <a href="/" className='uppercase font-semibold bg-yellow-500 px-10 py-3 rounded-lg border-2 border-secondary text-secondary hover:bg-secondary hover:text-white duration-300'>Página inicial</a>
                </div>
            </header>
            <Footer />
        </Page>
    )
}