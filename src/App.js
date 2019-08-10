import React from 'react';
import firebase from './config'
import {todoContainer} from './container'
import { Subscribe, Provider } from 'unstated-x';
import styled from 'styled-components'

class TodoList extends React.Component {
 componentDidMount = () => {
  todoContainer.getTodoData()
 }

  render(){
    return <Provider>
        <Subscribe to={[todoContainer]}>
        {
          () => {
            const {todo} = todoContainer.state
            console.log('todo init',todo)
            return <div>
                {todo && todo.map((item,key) => <Item key={key}>{item.name}</Item>)}
            </div>
          }
        }
      </Subscribe>
    </Provider>
  }
}

const Item  = styled.div`
  width : 300px;
  background : red;
  height : 30px;

`
export default TodoList;
