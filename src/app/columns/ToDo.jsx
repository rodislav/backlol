import KeyHelper from "../helpers/KeyHelper";
import {CardDto} from "../data/CardDto";
import {cardsService} from "../data/CardsService";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Card} from "./Card";

export function ToDo() {

    let key = new KeyHelper()
    const [cards: CardDto[], setCards] = useState([])

    useEffect(() => {
        let replaySubject = cardsService.loadToDo(d => setCards(CardDto.fromValues(d)))

        return () => replaySubject?.unsubscribe()
    }, [])

    return <>
        <div className="row row-cols-1 app-featured">
            <h1 className="title">Pick your next meal</h1>
        </div>
        <div className="row row-cols-2">
            {cards.map(meal => (
                <div className="col" key={key.next()}>
                    <Link to={"cards/" + meal.id} key={key.next()}>
                        <Card picsumId={meal.id}
                                 name={meal.name}/>
                    </Link>
                </div>
            ))}
        </div>
    </>
}