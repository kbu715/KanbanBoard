import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

//TODO: 섹션별로 카드 색깔 바꾸기
const TaskContainer = styled.div`
  border-radius: 4px;
  border: 1px solid lightgrey;
  padding: 10px 20px;
  margin: 0 20px 10px;
  text-align: center;
  background-color: ${(props) =>
    props.isDragDisabled
      ? "lightgrey"
      : props.isDragging
      ? "skyblue"
      : props.columnId === "보류"
      ? "#ffc107"
      : props.columnId === "진행"
      ? "#00b894"
      : props.columnId === "완료"
      ? "#198149"
      : props.columnId === "취소"
      ? "#e57373"
      : "#999999"};
  display: flex;
  flex-direction: column;
  min-width: 200px;
  max-width: 300px;
  font-size: 20px;
  color: white;
`;

// const Handle = styled.div`
//   width: 20px;
//   height: 20px;
//   background-color: #fafafa;
//   border-radius: 4px;
//   margin-right: 8px;
// `;

const Task = ({ task, index, columnId }) => {
  // const isDragDisabled = task.id === "task-1";

  console.log(task);

  return (
    <Draggable
      draggableId={task.id}
      index={index}
      // isDragDisabled={isDragDisabled} //conditionally allow movement
    >
      {(provided, snapshot) => {
        return (
          <TaskContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            draggingOver={snapshot.draggingOver}
            columnId={columnId}
            // isDragDisabled={isDragDisabled}
          >
            {/* <Handle {...provided.dragHandleProps} /> */}
            {/* {task.content} */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span>
                {task.category}-{task.seq}
              </span>
              <span>{columnId}</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
              }}
            >
              <div style={{ marginBottom: "10px" }}>{task.address}</div>
              <div>{task.description}</div>
            </div>
          </TaskContainer>
        );
      }}
    </Draggable>
  );
};

export default Task;
