import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const TaskContainer = styled.div`
  border-radius: 4px;
  border: 1px solid lightgrey;
  padding: 10px 20px;
  margin: 0 20px 10px;
  text-align: center;
  background-color: ${(props) => (props.isDragging ? "skyblue" : "white")};
  display: flex;
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: gold;
  border-radius: 4px;
  margin-right: 8px;
`;

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <TaskContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Handle {...provided.dragHandleProps} />
          {task.id}-{task.content}
        </TaskContainer>
      )}
    </Draggable>
  );
};

export default Task;
