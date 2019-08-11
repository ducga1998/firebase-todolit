import React from 'react';
import firebase from './config'
import {todoContainer} from './container'
import { Subscribe, Provider } from 'unstated-x';
import styled from 'styled-components'
import { StyledListTitle ,StyledList} from './UI/UIItem';
import {ThemeProvider} from 'styled-components'
import UIInput from './UI/Input'
import theme from './theme'
import UIIcon from './UI/Icon';
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
 onChangeItem  = (text, todoItemContaine )=> {
    // const = event.target
    const {id}  = todoItemContaine.state
    // console.log('event',event)
    todoItemContaine.changeName( text, id)
    
    // event.target.focus()
 }
  render(){
    return <ThemeProvider theme={theme}>
      <Provider>
        <Subscribe to={[todoContainer]}>
        {
          () => {
            const {todo} = todoContainer.state
            
            return <Wrapper>
                {todo && todo.map((todoItemContainer,key) =>  {
                  return <Subscribe to={[todoItemContainer]} key= {key}>
                    {() => {
                      const {name , id}  = todoItemContainer.state
                      return <Layout>
                        <UIInput  
                      value={name}
                      onChange={  event => this.onChangeItem(event , todoItemContainer)}
                      />
                      <ButtonGroup onClick={()=> todoContainer.deleteItem(id) } >
                        <UIIcon  icon="binCompact" size="large" />
                      </ButtonGroup>
                      </Layout>
                    }}
                    </Subscribe>
                })}
            </Wrapper>
          }
        }
      </Subscribe>
    </Provider>
    </ThemeProvider>
  }
}
class TodoItem extends React.Component{
  render(){
    return 
  }
}
const Wrapper = styled.div`
  width : 500px;
`
const Layout = styled.div`
display : flex;
`
const ButtonGroup =  styled.div`
svg {
  cursor :pointer;
}
`
export default TodoList;
