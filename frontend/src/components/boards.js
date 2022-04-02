import {useState, useEffect} from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios"
import styled   from 'styled-components';
import Column from './column';


const Container = styled.div`
    padding:10px;
    background:#f5f5f5;
    display:flex;
`

const Board = ()=>{
    const initialState = {tasks: {},columns: {},columnOrder: []}
    const [board, setBoard] = useState(initialState)

    useEffect(()=> fetchBoard(), [])

    const fetchBoard = async ()=>{
        axios.get('http://127.0.0.1:8000/board')
        .then(res=>{
            setBoard(res.data.board)
        })
    }
    console.log(board)

    const onDragEnd = ()=>{
        console.log("Dragged")
    }

    return(
        <DragDropContext onDragEnd={onDragEnd}>
            <Container>
                {
                    board?.column_order?.map((columnId, index)=>{
                        const column = board.columns[columnId]
                        const tasks = column.taskIds?.map(taskId=>board.tasks[taskId])
                        return <Column key={column.id} column={column} tasks={tasks} index={index} />
                    })
                }
            </Container>
        </DragDropContext>
    )
}

export default Board