import React from "react";

type Props = {
    name: string,
    url: string
}
export function MainImage(props: Props) {
    return <div className="card bg-dark text-white">
        <img src={props.url} className="card-img" alt={props.name}/>
        <div>
            <h5 className="card-title">{props.name}</h5>
        </div>
    </div>;
}