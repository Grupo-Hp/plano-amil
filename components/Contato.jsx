import { useState } from 'react'
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";

export default function Contato() {

    const [dataForm, setDataForm] = useState({
        empresa: 'Amil',
        imagem: 'Hpcap',
        site: 'https://www.hpcap.com.br/',
        nome: '',
        sobrenome: '',
        email: '',
        telefone: '',
        cidade: '',
        tipo: '',
        forma: ''
    })

    const onChangeInput = e => setDataForm({ ...dataForm, [e.target.name]: e.target.value })

    const sendContact = async e => {
        e.preventDefault()

        try {
            await fetch('https://api.grupohp.com.br/send', {
                method: 'POST',
                body: JSON.stringify(dataForm),
                headers: { 'Content-Type': 'application/json' }
            })
            alert('Dados enviado com sucesso!')
        } catch (error) {
            alert('Ocorreu um erro')
        }
    }

    return (
        <div id='contato'>
            <div className="container mx-auto px-12 py-12 md:w-10/12">
                <div>
                    <div className="grid grid-cols-2 gap-10 mt-4">
                        <div className="col-span-2 xl:col-span-1">
                            <h4 className='text-3xl text-primary-10 pb-3 xl:hidden'>Fale conosco</h4>
                            <p className='text-xl xl:max-w-lg text-justify'>Estamos dispostos a sanar quaisquer dúvidas que possam surgir. Caso queira falar conosco, basta preencher o formulário ao lado.</p>
                            <div className='xl:flex xl:flex-col hidden'>
                                <div className='py-7 border-y-2 my-7 list-none'>
                                    <h2 className='text-2xl'>Nossos contatos</h2>
                                    <ul>
                                        <li><FiPhone className={`text-primary-10 text-2xl`} />&ensp;(21)4040-4148</li>
                                        <li><GoMail className={`text-primary-10 text-2xl`} />&ensp;contato@agaempreendimentos.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 xl:col-span-1">
                            <h4 className='text-3xl text-primary-10 pb-3 hidden xl:flex '>Fale conosco</h4>
                            <form onSubmit={sendContact}>

                                <div className="form-group mb-6">

                                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" name="nome" onChange={onChangeInput} value={dataForm.nome} placeholder="Digite seu nome*" />

                                </div>

                                <div className="form-group mb-6">
                                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" name="email" onChange={onChangeInput} value={dataForm.email} placeholder="Digite seu e-mail*" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-2 md:col-span-1 form-group mb-6">

                                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" name="telefone" onChange={onChangeInput} value={dataForm.telefone} placeholder="Digite seu principal telefone*" />

                                    </div>

                                    <div className="col-span-2 md:col-span-1 form-group mb-6">

                                        <div className="flex">
                                            <div className="mb-3 w-full">
                                                <select className="form-select block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" aria-label="Default select example" name='assunto' value={dataForm.assunto} onChange={onChangeInput}>
                                                    <option defaultValue>Melhor Forma de Simulação:</option>
                                                    <option value="Online">Online</option>
                                                    <option value="WhatsApp">WhatsApp</option>
                                                    <option value="Telefone">Telefone</option>
                                                    <option value="E-mail">E-mail</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group mb-6">

                                    <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" name="mensagem" rows="7" onChange={onChangeInput} value={dataForm.mensagem} placeholder="Escreva aqui..." required ></textarea>

                                    <button type="submit" className="mt-2 w-full px-6 py-2.5 text-primary-10 font-medium text-xs leading-tight uppercase border border-primary-20 hover:bg-primary-10 hover:text-white transition duration-300 ease-in-out">Enviar</button>

                                </div>
                            </form>
                            <div className='grid grid-cols-2 gap-x-24 xl:hidden mt-10 pt-10 border-t-2'>
                                <div className="col-span-1">
                                    <h2 className='text-2xl'>Nossos contatos</h2>
                                    <ul>
                                        <li><FiPhone className={`text-primary-10 text-2xl`} />&ensp;(21)4040-4148</li>
                                        <li><GoMail className={`text-primary-10 text-2xl`} />&ensp;contato@agaempreendimentos.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}