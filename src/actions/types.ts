import { FetchTodosAction, ClearTodosAction, DeleteTodoAction } from './todos'

export enum ActionTypes {
    fetchTodos,
    clearTodos,
    //↓追加
    deleteTodo
}
 //↓DeleteActionを追加
export type Action = FetchTodosAction | ClearTodosAction | DeleteTodoAction