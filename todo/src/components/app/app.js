import React, {Component} from "react";
import TodoList from "../todo-list";
import SearchPanel from "../seach-panel";
import AppHeader from "../app-header";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import './app.css'
// import {createRenderer} from "react-dom/test-utils";

export default class App extends Component {

     maxIndex = 100;

   state = {
    todoData : [
        this.createTodoItem('Drink Coffe') ,
        this.createTodoItem('Make Awesome App') ,
        this.createTodoItem('Have a Lunch')

    ],
       term: ''
    }
    createTodoItem(label) {
                return{
                    label,
                    important: false,
                    done: false,
                    id: this.maxIndex++
                }
            }

     deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idX = todoData.findIndex((el) =>  el.id === id)


            const newAray = [...todoData.slice(0, idX), ...todoData.slice(idX +1)]
                return{
                todoData : newAray
                }
            }

        )
    }
    addItem = (text) => {

          const newItem = this.createTodoItem(text)

           this.setState( ({todoData}) => {
               const newArr = [...todoData, newItem]
               return {
                   todoData : newArr
               }
               })
        }
    onSearChange = (term) => {
       this.setState({term})
        }

    search(items, temps){
       if(temps.length === 0){
           return items}
        return items.filter((item) =>{return  item.label
            .toLowerCase();
            .indexOf(temps.toLowerCase()) > -1
        })
    }

      toggleProperty = (arr, id, proname) => {
          const idX = arr.findIndex((el) =>  el.id === id)
          const oldItem = arr[idX];
          const newItem = {...oldItem, [proname]: !oldItem[proname]}

          return [...arr.slice(0, idX), newItem, ...arr.slice(idX +1)]

      }



    onToggleImpotment = (id) =>{
       this.setState(({todoData}) => {return{
           todoData : this.toggleProperty(todoData, id, 'important')
           }

        }
       )}

    onToggleDone = (id) =>{
        this.setState(({todoData}) => {
            return{
            todoData : this.toggleProperty(todoData, id, 'done')
            }

            }
        )}


    render() {
        const {todoData, term} = this.state;
        const visibleItems = this.search(todoData, term)
        const counterDone = todoData.filter((el) => el.done).length;
        const counterImpotment = todoData.length - counterDone
        return (
            <div className='todo-app'>
            <AppHeader toDo={counterImpotment} done={counterDone}/>
        <div className='top-panel d-flex'>
            <SearchPanel
        onSearChange = {this.onSearChange }/>
            <ItemStatusFilter/>
            </div>
            <TodoList
        todos ={visibleItems}
        onDeleted = {this.deleteItem}
        onToggleImpotment = {this.onToggleImpotment}
        onToggleDone = {this.onToggleDone}
        />
        <ItemAddForm onItemAdded = {this.addItem}/>

        </div>
    )
    }


}
