import React from 'react'
import Hero from '../components/Hero'
import AfterHero from '../components/AfterHero'

export default function Home() {

  document.title = "Kpulu | Url Shortener"

  return (

    <>

    {/* <Header /> */}
    <Hero />
    <AfterHero/>
    
    </>
  )
}
