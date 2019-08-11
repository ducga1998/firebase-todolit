import React from 'react';
import firebase from './config'
import {todoContainer} from './container'
import { Subscribe, Provider } from 'unstated-x';
import styled from 'styled-components'
import { StyledListTitle ,StyledList} from './UI/UIItem';
import {ThemeProvider} from 'styled-components'
import theme from './theme'
class TodoList extends React.Component {
 componentDidMount = () => {
  todoContainer.getTodoData()
    var connectedRef = firebase.database().ref(".info/connected");
    connectedRef.on("value", function(snap) {
    // if (snap.val() === true) {
    //   alert("connected");
    // } else {
    //   alert("not connected");
    // }
  });
 }
 onChangeItem  = (event, todoItemContaine )=> {
    const {value}  = event.target
    const {id}  = todoItemContaine.state
    todoItemContaine.changeName( event.target.innerText, id)
    event.target.focus()
 }
  render(){
    return <ThemeProvider theme={theme}>
      <Provider>
        <Subscribe to={[todoContainer]}>
        {
          () => {
            const {todo} = todoContainer.state
            
            return <StyledList>
                {todo && todo.map((todoItemContainer,key) =>  {
                  return <Subscribe to={[todoItemContainer]} key= {key}>
                    {() => {
                      const {name , id}  = todoItemContainer.state
                      return <StyledListTitle 
                      contentEditable 
                      suppressContentEditableWarning={true}
                      key={id}
                      onInput={event => this.onChangeItem(event , todoItemContainer)}
                      >
                      
                      </StyledListTitle>
                    }}
                    </Subscribe>
                })}
            </StyledList>
          }
        }
      </Subscribe>
    </Provider>
    </ThemeProvider>
  }
}
export default TodoList;
