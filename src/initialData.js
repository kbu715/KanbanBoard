const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "Take out the garbage",
      seq: 472,
      category: "전기",
      address: "서울특별시 종로구 새문안로 3길",
      description: "전기가 나갔어요",
    },
    "task-2": {
      id: "task-2",
      content: "Watch my favorite show",
      seq: 473,
      category: "전기",
      address: "서울특별시 종로구 새문안로 3길",
      description: "전기가 나갔어요",
    },
    "task-3": {
      id: "task-3",
      content: "Charge my phone",
      seq: 474,
      category: "전기",
      address: "서울특별시 종로구 새문안로 3길",
      description: "전기가 나갔어요",
    },
    "task-4": {
      id: "task-4",
      content: "Clean my room",
      seq: 475,
      category: "전기",
      address: "서울특별시 종로구 새문안로 3길",
      description: "전기가 나갔어요",
    },
    "task-5": {
      id: "task-5",
      content: "buy shoes",
      seq: 476,
      category: "전기",
      address: "서울특별시 종로구 새문안로 3길",
      description:
        "전기가 나갔어요나갔어요나갔어요나갔어요나갔어요나갔어요나갔어요나갔어요나갔어요나갔어요나갔어요나갔어요",
    },
    "task-6": {
      id: "task-6",
      content: "dddddd",
      seq: 477,
      category: "전기",
      address: "서울특별시 종로구 새문안로 3길",
      description: "전기가 나갔어요",
    },
    "task-7": {
      id: "task-7",
      content: "sssssss",
      seq: 478,
      category: "전기",
      address: "서울특별시 종로구 새문안로 3길",
      description: "전기가 나갔어요",
    },
    "task-8": {
      id: "task-8",
      content: "taaga",
      seq: 479,
      category: "전기",
      address: "서울특별시 종로구 새문안로 3길",
      description: "전기가 나갔어요",
    },
    "task-9": {
      id: "task-9",
      content: "go home",
      seq: 480,
      category: "전기",
      address: "서울특별시 종로구 새문안로 3길",
      description: "전기가 나갔어요",
    },
  },
  columns: {
    미완료: {
      id: "미완료",
      title: "미완료",
      taskIds: [
        "task-1",
        "task-2",
        "task-3",
        "task-4",
        "task-5",
        "task-6",
        "task-7",
        "task-8",
        "task-9",
      ],
    },
    보류: {
      id: "보류",
      title: "보류",
      taskIds: [],
    },
    진행: {
      id: "진행",
      title: "진행",
      taskIds: [],
    },
    완료: {
      id: "완료",
      title: "완료",
      taskIds: [],
    },
    취소: {
      id: "취소",
      title: "취소",
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["미완료", "보류", "진행", "완료", "취소"],
};

export default initialData;
