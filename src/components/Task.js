import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const TaskContainer = styled.div`
  border-radius: 4px;
  border: 1px solid lightgrey;
  padding: 10px 20px;
  margin: 20px;
  text-align: center;
  background-color: #fff;
`;

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <TaskContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.id}-{task.content}
        </TaskContainer>
      )}
    </Draggable>
  );
};

export default Task;
