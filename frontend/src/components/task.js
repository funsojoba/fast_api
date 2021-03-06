import styled from "styled-components";

const Container = styled.div`
    margin-bottom: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding:8px;
`

const Task = (props)=>{
    return (
        <Container>
            {props.task.content}
        </Container>
    )
}

export default Task