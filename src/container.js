import {Container} from 'unstated-x'
import firebase from './config'
class TodoContainer extends Container {
   state = {
    todo :  []
    
   }
   constructor(state){   
       super(state)
       
   
   }
    writeUserData = ( name, done, dueTime) =>  {
    const todoRef = firebase.database().ref('todolist')
    const newtodoRef = todoRef.push();
    newtodoRef.set({
      name,
      done,
      dueTime 
  });
  }
   async getTodoData(){
    await firebase.database().ref('/todolist').once('value').then((snapshot)  => {
        var todo =Object.values(snapshot.val())
        this.setState({todo })
      });
   }
}

export const todoContainer =  new TodoContainer()
window.todoContainer = todoContainer