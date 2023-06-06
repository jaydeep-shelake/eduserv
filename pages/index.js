import Analytics from '@/components/Analytics'
import Category from '@/components/Category'
import Choose from '@/components/Choose'
import Courses from '@/components/Courses'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import Testomonials from '@/components/Testomonials'

const Home = () => {
  return (
    <main>
     {/* header */}
    <Header/>
    {/* hero */}
    <Hero/>

    <Analytics/>

    <Category/>

    <Courses/>

    <Mission/>

    <Choose/>

    <Testomonials/>

    <Footer/>

    </main>
  )
}

export default Home