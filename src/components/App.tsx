import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos, clearTodos, deleteTodo } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
    todos: Todo[];
    fetchTodos: Function; //only for Action creators
    clearTodos: Function;
    deleteTodo: Function; //デリートのインターフェイスいれる
}

interface AppState {
    fetching: boolean
}
class _App extends Component<AppProps,AppState> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: AppProps){
        super(props)

        this.state = { fetching: false }
    }

    componentDidUpdate(prevProps: AppProps){
        if(!prevProps.todos.length && this.props.todos.length){
            this.setState({ fetching: false })
        }
    }

    onButtonClick = (): void => {
        this.props.clearTodos()
        this.props.fetchTodos()
        this.setState({ fetching: true })
    }

    //リストクリックしたら消す関数
    onListClick = (id: number):void => {
        this.props.deleteTodo(id)
    }

    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return(
                //オンクリックとアイテムクリックのイベントをいれる
                <div key={todo.id} onClick={()=> this.onListClick(todo.id)}>
                    {todo.title}
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>Fetch</button>
                {this.state.fetching ? 'Loading....' : null}
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos }
}

//deleteTodoを追加する
export const App = connect(mapStateToProps, { fetchTodos, clearTodos, deleteTodo })(_App)