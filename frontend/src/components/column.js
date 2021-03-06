import styled from "styled-components";
import Task from "./task"

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
`;
const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div`
  padding: 8px;
`;


const Column = (props) => {
  return (
    <Container>
       <Title>{props.column.title}</Title>
      <TaskList>
        {props.tasks.map((task, index) => (
          <Task key={task.id} task={task} index={index} columnId={props.column.id} />
        ))}
      </TaskList>
    </Container>
  );
}

export default Column;