import {
    Container
} from 'unstated-x'
import firebase from './config'
const database   = firebase.database()
class TodoContainer extends Container {
    state = {
        todo: []

    }
    constructor(state) {
        super(state)
    }
    addItem = (name, done, dueTime) => {
        const todoRef = database.ref('todolist')
        const newtodoRef = todoRef.push();
        const todoItem = {
            name,
            done,
            dueTime
        }
        const itemContainer  = new ItemContainer(todoItem)
        newtodoRef.set(todoItem);
        this.setState({todo : [...this.state.todo , ...[itemContainer] ]})
    }
    deleteItem(id){
        this.setState({todo : this.state.todo.filter(todoItem => todoItem.state.id !== id ) }, ()  => {
            database.ref('/todolist/'+id).remove()
        })
        console.log('click')
    }
    setDueDate(){

    }
    
    async getTodoData() {
        const spanshot = await database.ref('/todolist').once('value')
        // console.log('todoList',todoList)
        const todoList  =spanshot.val()
        const todo = Object.keys(todoList).map(id => {
            const  {name , done, dueTime}  = todoList[id]
            return new ItemContainer({name , done, dueTime , id  })
        })
        this.setState({
                todo
        })
    }
}
class ItemContainer extends Container  {
    state = {
        id : '',
        name : '',
        done : false,
        dueTime : '10/21/2019'
    }
    constructor(state){
        super(state)
        this.state = state
    }
    changeName  = (name,id) => {
        this.setState({name},()  => {
         database.ref(`/todolist/${id}`).set({
             name
         })
        })
    }
        
}
const reg = new Map()
class BaseContainer extends Container{
    constructor(state){
        super(state)
        reg.set()
    }
}
export const todoContainer = new TodoContainer()
window.todoContainer = todoContainer