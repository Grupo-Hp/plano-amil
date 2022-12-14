import Page from '../components/Page'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Info4 from '../components/Info4'
import Info1 from '../components/Info1'
import Cards from '../components/Cards'
import Info2 from '../components/Info2'
import Info3 from '../components/Info3'
import Footer from '../components/Footer'
import Contato from '../components/Contato'
import Faixa from '../components/Faixa'

export default function Home() {

  return (
    <Page title="Plano de Saúde Amil Rio" description="Todos os planos de saúde amil e simulador de planos de saúde online" path="/">
      <Nav />
      <Header />
      <Info4 />
      <Info1 />
      <Cards />
      <Info2 />
      <Faixa />
      <Info3 />
      <Contato button='enviar' display='hidden' />
      <Footer />
    </Page>
  )
}