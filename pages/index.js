import Contact from './components/Contact'
import Features from './components/Features'
import Footer from './components/Footer'
import FormSection from './components/FormSection'
import HeroSection from './components/HeroSection'
import Layout from './components/Layout'
import HeaderNavBar from './components/Nav'
export default function Home() {
  return (
    <Layout>
        <HeaderNavBar/>
        <HeroSection/>
        <Features/>
        <Contact/>
        <FormSection/>
        <Footer/>
    </Layout>
  )
}
