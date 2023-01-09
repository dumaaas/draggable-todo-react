import { Typography } from '@material-ui/core'
import React from 'react'
import Card from '../Card/Card'

export default function TodoList({ cards }) {
    return (
        <div className="max-w-[50%]">
            <div className="mb-[25px]">
                <Typography className="text-white text-center ">
                    DONE
                </Typography>
            </div>
            {cards.map(card => (
                <Card text={card.text} key={card.id} />
            ))}
        </div>
    )
}