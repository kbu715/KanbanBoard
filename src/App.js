import initialData from "./initialData";
import React, { useState } from "react";
import Column from "./components/Column";

function App() {
  const [data] = useState(initialData);

  return (
    <div>
      {data.columnOrder.map((columnId) => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </div>
  );
}

export default App;
