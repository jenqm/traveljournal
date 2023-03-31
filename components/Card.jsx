import { useState } from 'react'

export default function Card(props) {

    return (
        <div className="card">
            <div className="card--image">
                <img src={props.destination.imageUrl} />
            </div>
            <div className="card--stats">
                    <div className='card--header'>
                        <i className="pin fa-solid fa-location-dot"></i>
                        <h3 className="card--location">{props.destination.location}</h3>
                        <a href="{props.destination.googleMapsUrl}" className="card--map">View on Google Maps</a>
                    </div>
                <h1 className="card--title">{props.destination.title}</h1>
                <p className="card--dates">{props.destination.startDate} - {props.destination.endDate}</p>
                <p className="card--description">{props.destination.description}</p>
            </div>
        </div>
    )
}
