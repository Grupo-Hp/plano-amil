import { useState } from 'react'
import Image from "next/image";

export default function Contato(props) {

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
            await fetch('https://api.grupohp.com.br/send/amil', {
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
        <div id='contato' className={`p-8 contatoImage1 flex items-center ${props.height}`}>
            <div className="mx-auto grid grid-cols-2 lg:w-10/12">
                <div className={`col-span-2 mb-28 text-white text-center ${props.display}`}>
                    <h2 className='text-4xl font-bold mb-5'>Cotação de Planos de Saúde Rio de Janeiro.
                        Preço na Hora!</h2>
                    <p className='text-xl'>Todos os planos de saúde amil e simulador de planos de saúde online</p>
                </div>
                <div className="text-center sm:w-2/3 m-auto col-span-2 lg:col-span-1 text-white">
                    <h2 className='text-4xl font-bold mb-10 '>A Amil tem o plano certo para você viver o seu melhor.</h2>
                    <p className='text-2xl'>Planos com flexibilidade para o cuidado certo</p>
                    <div className='flex place-content-evenly my-10'>
                        <div className='mx-5'>
                            <Image
                                src="/images/amilbranco.png"
                                //layout='responsive'
                                width={150}
                                height={60}
                                alt="Logo da Amil saúde"

                            />
                        </div>
                        <div>
                            <Image
                                src="/images/amildental.png"
                                //layout='responsive'
                                width={150}
                                height={100}
                                alt="Logo da Amil dental"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <h4 className='text-4xl font-bold text-white pb-3 text-center'>Preço Rápido</h4>
                    <p className='text-xl font-bold text-white text-center mb-5'>Estamos dispostos a mostrar os valores dos Planos de Saúde na palma da sua mão em minutos.</p>
                    <form onSubmit={sendContact}>

                        <div className="form-group mb-6 grid grid-cols-2 gap-4">

                            <input type="text" className="rounded-xl col-span-2 md:col-span-1 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-secondary  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" name="nome" onChange={onChangeInput} value={dataForm.nome} placeholder="Digite seu nome*" />

                            <input type="text" className="rounded-xl col-span-2 md:col-span-1 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-secondary  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" name="sobrenome" onChange={onChangeInput} value={dataForm.sobrenome} placeholder="Digite seu sobrenome*" />
                        </div>


                        <div className="form-group mb-6">
                            <input type="text" className="rounded-xl form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-secondary  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" name="email" onChange={onChangeInput} value={dataForm.email} placeholder="Digite seu e-mail*" />
                        </div>


                        <div className="grid grid-cols-2 gap-4 form-group mb-6">

                            <input type="text" className="rounded-xl col-span-2 md:col-span-1 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-secondary  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" name="telefone" onChange={onChangeInput} value={dataForm.telefone} placeholder="Digite seu principal telefone*" />

                            <input type="text" className="rounded-xl col-span-2 md:col-span-1 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-secondary  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" name="cidade" onChange={onChangeInput} value={dataForm.cidade} placeholder="Digite a cidade onde mora*" />

                        </div>

                        <div className="grid grid-cols-2 gap-4 form-group mb-6">

                            <div className="flex col-span-2 md:col-span-1">
                                <div className="w-full">
                                    <select className="rounded-xl form-select block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-secondary  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" aria-label="Default select example" name='tipo' value={dataForm.tipo} onChange={onChangeInput}>
                                        <option defaultValue>Tipo de Plano:</option>
                                        <option value="Individual/Adesão">Individual ou adesão</option>
                                        <option value="Familiar">Familiar</option>
                                        <option value="Empresarial">Empresarial</option>
                                        <option value="Odontológico">Odontológico</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex col-span-2 md:col-span-1">
                                <div className="mb-3 w-full">
                                    <select className="rounded-xl form-select block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-secondary  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" aria-label="Default select example" name='forma' value={dataForm.forma} onChange={onChangeInput}>
                                        <option defaultValue>Melhor Forma de Simulação:</option>
                                        <option value="Online">Online</option>
                                        <option value="WhatsApp">WhatsApp</option>
                                        <option value="Telefone">Telefone</option>
                                        <option value="E-mail">E-mail</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div className="form-group mb-6">
                            <button type="submit" className="mt-2 w-full px-6 py-2.5 font-medium text-lg border border-secondary text-secondary hover:text-white rounded-xl bg-white leading-tight uppercase hover:bg-primary-10 hover:bg-secondary transition duration-300 ease-in-out">{props.button}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}