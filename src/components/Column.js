import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: #efefef;
  border-radius: 4px;
  width: 350px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
  font-weight: bold;
  text-align: left;
  font-size: 2em;
  margin: 10px 0 0 20px;
  font-style: italic;
`;
const TaskList = styled.div`
  padding: 8px;
  background-color: ${(props) =>
    props.isDraggingOver ? "#0066ff" : "#efefef"};
  min-height: 200px;
  flex-grow: 1;
  transition: background-color 0.2s ease;
`;

const Column = ({ column, tasks }) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, idx) => (
              <Task key={task.id} task={task} index={idx} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
