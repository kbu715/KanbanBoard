import initialData from "./initialData";
import React, { useState } from "react";
import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

const AppboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px;
`;

const Container = styled.div`
  display: flex;
`;

const HeaderItem = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ButtonCallCancel = styled.button`
  margin-left: 200px;
  min-width: 200px;
  padding: 10px 20px;
  background-color: #ab47bc;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  &:focus,
  &:active,
  &:hover {
    outline: none;
  }
`;

function App() {
  const [data, setData] = useState(initialData);

  const onDragStart = (start, provided) => {
    provided.announce(
      `You have lifted the task in position ${start.source.index + 1}`
    );

    //TODO:
    document.body.style.color = "hotpink";
    document.body.style.transition = `background-color 0.2s ease`;
  };

  const onDragUpdate = (update, provided) => {
    const message = update.destination
      ? `You have moved the task to position ${update.destination.index + 1}`
      : `You are currently not over a droppable area`;

    provided.announce(message);

    // const { destination } = update;

    // const opacity = destination
    //   ? destination.index / Object.keys(data.tasks).length
    //   : 0;
    document.body.style.backgroundColor = `rgba(153,141,217,1)`;
  };

  const onDragEnd = (result, provided) => {
    const message = result.destination
      ? `You have moved the task from position
      ${result.source.index + 1} to ${result.destination.index + 1}`
      : `The task has been returned to its starting position of
      ${result.source.index + 1}`;

    provided.announce(message);

    //TODO: reorder out column
    const { destination, source, draggableId } = result;

    if (!destination) {
      document.body.style.backgroundColor = "inherit";
      document.body.style.color = "inherit";
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      document.body.style.backgroundColor = "inherit";
      document.body.style.color = "inherit";
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);

      newTaskIds.splice(source.index, 1); //from the first arg index, remove 1 item.
      newTaskIds.splice(destination.index, 0, draggableId); // destination.index 위치에 draggableId 삽입

      const newColumn = {
        ...start,
        taskIds: newTaskIds, // taskIds만 교체
      };

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newData);
      document.body.style.backgroundColor = "inherit";
      document.body.style.color = "inherit";
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    //column one
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    //column another
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setData(newData);
    document.body.style.backgroundColor = "inherit";
    document.body.style.color = "inherit";
  };

  return (
    <AppboardContainer>
      <HeaderItem>
        <input />
        <ButtonCallCancel>콜풀기</ButtonCallCancel>
      </HeaderItem>
      <DragDropContext
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
      >
        <Container>
          {data.columnOrder.map((columnId) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </Container>
      </DragDropContext>
    </AppboardContainer>
  );
}

export default App;
