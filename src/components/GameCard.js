import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

const GameCardWrapper = styled.div`
    border: 2px solid #cccccc;
    border-radius: 10px;
    width: max-content;
    min-width: 255px;
    height: max-content;
    padding: 10px;
    margin: 10px;
`

const GameCard = ({gameId, gameTitle, gamePlatform, gameRelease}) => {
    return (
        <GameCardWrapper key={gameId}>
            <Link to={`/game/${gameId}`}>
                <h2>{gameTitle}</h2>
            </Link>
            <p>{gameRelease}</p>
            <p>{gamePlatform}</p>
        </GameCardWrapper>
    )

}

export default GameCard;
