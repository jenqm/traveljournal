import { useState } from 'react'
import Binoculars from "./images/binoculars.png";


export default function Navbar() {
    return (
        <nav>
            <img src={Binoculars} />
            <h3>my travel journal</h3>
        </nav>
    )
}