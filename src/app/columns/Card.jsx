import React from "react"
import "./scss/Card.scss"

type Props = {
    picsumId: string,
    name: string,
}

export function Card(props: Props) {
    return (
        <div className="card bg-dark text-white app-card">
            <img src={"https://picsum.photos/seed/" + props.picsumId + "/20/20"} className="card-img" alt={props.name}/>
            <div className="card-img-overlay img-overlay">
                <h5 className="card-title title">{props.name}</h5>
            </div>
        </div>
    )
}