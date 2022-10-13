import Page from '../components/Page'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Info1 from '../components/Info1'
import Cards from '../components/Cards'
import Info2 from '../components/Info2'
import Footer from '../components/Footer'
import Contato from '../components/Contato'

export default function Home() {

  return (
    <Page title="Plano de Saúde Amil Rio" description="Todos os planos de saúde amil e simulador de planos de saúde online" path="/">
      <Nav />
      <Header />
      <Info1 />
      <Cards />
      <Info2 />
      <Contato />
      <Footer />
    </Page>
  )
}