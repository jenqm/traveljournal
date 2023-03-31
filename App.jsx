import { useState } from 'react'
import './App.css'
import data from "./components/data"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Footer from "./components/Footer"


export default function App() {

const cards = data.map(destination => {
    return (
        <Card
            key={destination.id}
            destination={destination} 
        />
    )
})    



 return (
        <div className='App'>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
            <Footer />
        </div>
    )

}
