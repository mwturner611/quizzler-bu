import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import { useParams } from "react-router-dom";

function HomePage() {

    const [user, setUser] = useState({});
    const [decks, setDecks] = useState([]);
    
    const {id} = useParams()
    useEffect(() => {
        loadUser(id);
    }, [])

    const loadUser = (id) => {
        API.getUser(id)
        .then(res => setUser(
            {
                email: res.data.email,
                id: res.data._id
            }
        ) || setDecks(res.data.decks))
        .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>Home Page</h1>
            <h3>{ user.email }</h3>
            <h3>{ user.id }</h3>
            <h4>Decks</h4>
            <ul>
            {decks.map(deck => {
                return (
                <li>
                    <p>{ deck.name }</p>
                    <p>{ deck.descr }</p>
                    <ul>
                        {deck.cards.map(card =>{
                            return(
                            <li>
                                <p>{ card._id }</p>
                                <p>{ card.keyWord }</p>
                                <p>{ card.definition }</p>
                            </li>)
                        })}
                    </ul>
                </li>)
            })}
            </ul>
        </div>
    )
}

export default HomePage;