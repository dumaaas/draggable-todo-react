import { Typography } from '@material-ui/core'
import React from 'react'
import DragCard from '../Card/Card'

export default function TodoList({ title, cards }) {
    return (
        <div className="w-full">
            <div className="mb-[25px]">
                <Typography className="text-center text-white " variant="h4">
                    {title}
                </Typography>
            </div>
            {JSON.parse(localStorage.getItem('todoCards')).filter(card => card.status === cards).map(card => (
                <DragCard key={card.id} status={card.status} title={card.title} date={card.date} smallDescription={card.smallDescription} bigDescription={card.bigDescription} id={card.id} />
            ))}
        </div>
    )
}