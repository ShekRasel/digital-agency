import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Team from '../components/Team'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import ContactForm from './../components/ContactForm';
import BlogPage from '../components/BlogPage'
import Services from "../components/Services";



export const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Team/>
        <Services/>
        <BlogPage/>
        <Carousel/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}
