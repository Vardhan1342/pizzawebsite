import Aboutus from '@/components/Aboutus'
import Contactus from '@/components/Contactus'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Menu />
      <Aboutus />
      <Contactus />
    </div>
  )
}
