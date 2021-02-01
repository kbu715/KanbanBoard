import React from "react";
import styled from "styled-components";

const TaskContainer = styled.div`
  border-radius: 4px;
  border: 1px solid lightgrey;
  padding: 10px 20px;
  margin: 20px;
  text-align: center;
`;

const Task = ({ task }) => {
  return (
    <TaskContainer>
      {task.id}-{task.content}
    </TaskContainer>
  );
};

export default Task;
