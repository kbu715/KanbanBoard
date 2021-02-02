import initialData from "./initialData";
import React, { useState } from "react";
import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [data, setData] = useState(initialData);

  const onDragStart = () => {
    //TODO:
    document.body.style.color = "hotpink";
    document.body.style.transition = `background-color 0.2s ease`;
  };

  const onDragUpdate = (update) => {
    const { destination } = update;

    const opacity = destination
      ? destination.index / Object.keys(data.tasks).length
      : 0;
    document.body.style.backgroundColor = `rgba(153,141,217, ${opacity})`;
  };

  const onDragEnd = (result) => {
    //TODO: reorder out column
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = data.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);

    newTaskIds.splice(source.index, 1); //from the first arg index, remove 1 item.
    newTaskIds.splice(destination.index, 0, draggableId); // destination.index 위치에 draggableId 삽입

    const newColumn = {
      ...column,
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
  };

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
    >
      {data.columnOrder.map((columnId) => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}

export default App;
