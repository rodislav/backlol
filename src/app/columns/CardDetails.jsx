import React, {useEffect, useState} from "react"
import "./FeaturedCard.scss"
import {useParams} from "react-router";
import {CardDto} from "../data/CardDto";
import {cardsService} from "../data/CardsService";
import {MainImage} from "./MainImage";

type Props = {
    picsumId: string,
    name: string,
}

export function CardDetails(props: Props) {
    let {id} = useParams()

    const [item: CardDto, setItem] = useState(CardDto.getDummy())

    useEffect(() => {
        let replaySubject = cardsService.loadById(id, d => setItem(CardDto.fromValue(d)))

        return () => replaySubject?.unsubscribe()
    }, [id])

    return (
        <div className="container">
            <div className="row  row-cols-1">
                <div className="col">
                    <MainImage url={item.url} name={item.name}/>
                </div>
            </div>
            <div className="row  row-cols-3">
                <div className="col">
                    tags
                </div>
                <div className="col">
                    score
                </div>
                <div className="col">
                    something
                </div>
            </div>
        </div>
    )
}