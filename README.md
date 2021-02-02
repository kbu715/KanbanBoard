## To do list

- 더미데이터로 카드 info 구현

참고:

```
export const SEE_TASKS = gql`
  query seeTasks($state: TaskStateEnum!) {
    seeTasks(state: $state) {
      id
      seq
      category
      address
      description
      state
    }
  }
`;
```
