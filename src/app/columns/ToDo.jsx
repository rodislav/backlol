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

    function onAdd() {
        let c = new CardDto();
        c.id = 1;
        c.name = "ceva";
        return setCards([c]);
    }
    return <div onDoubleClick={() => onAdd()}>
        <div className="row row-cols-1 app-featured">
            <h1 className="title">Todo</h1>
        </div>
        <div className="row row-cols-2">
            {cards.map(card => (
                <div className="col" key={key.next()}>
                    <Link to={"cards/" + card.id} key={key.next()}>
                        <Card picsumId={card.id}
                                 name={card.name}/>
                    </Link>
                </div>
            ))}
        </div>
    </div>
}