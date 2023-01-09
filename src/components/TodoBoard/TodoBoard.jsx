import TodoList from '../TodoList/TodoList';
import { useDrop } from 'react-dnd';
import { Typography } from '@material-ui/core'

export default function TodoBoard() {
    const [{ isOverTodo }, dropDone] = useDrop(() => ({
        accept: 'card',
        drop: (card) => addCardToDone(card.id),
        collect: (monitor) => ({
            isOverTodo: !!monitor.isOver()
        })
    }))

    const [{ isOverDone }, dropTodo] = useDrop(() => ({
        accept: 'card',
        drop: (card) => addCardToTodo(card.id),
        collect: (monitor) => ({
            isOverDone: !!monitor.isOver()
        })
    }))

    const addCardToDone = (id) => {
        var cardCopy = JSON.parse(localStorage.getItem('todoCards'));
        var dragedCard = cardCopy.findIndex((card) => card.id === id);
        cardCopy[dragedCard].status = false;
        localStorage.setItem('todoCards', JSON.stringify(cardCopy));
    }

    const addCardToTodo = (id) => {
        var cardCopy = JSON.parse(localStorage.getItem('todoCards'));
        var dragedCard = cardCopy.findIndex((card) => card.id === id);
        cardCopy[dragedCard].status = true;
        localStorage.setItem('todoCards', JSON.stringify(cardCopy));
    }
    
    return (
        <div className='flex flex-row justify-between'>
            <div ref={dropDone} className="w-[50%]">
                <TodoList cards={false} title='TO DO' />
            </div>
            <div className="min-h-full w-[2px] bg-red-500 mx-[20px]">

            </div>
            <div ref={dropTodo} className="w-[50%]">
                <TodoList cards={true} title='DONE' />
            </div>
        </div>
    );
}


