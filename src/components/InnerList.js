import Task from "./Task";
import React, { memo } from "react";

// React.memo를 통해 관계없는 전체가 리렌더링 되는것을 방지. shouldComponentUpdate
const InnerList = memo(({ tasks, columnId }) => {
  return tasks.map((task, index) => (
    <Task key={task.id} task={task} index={index} columnId={columnId} />
  ));
});
export default InnerList;
