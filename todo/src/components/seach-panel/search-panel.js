import React, {Component} from "react";
import './search-input.css'
export default class SearchPanel extends Component  {
    state = {
        term: ''
    }
    onSearChange = e => {
        const term = e.target.value
        this.setState({
          term
        })
        this.props.onSearChange(term)
    }
    render(){

            return(
                < input
            type ="text"
            className = "from-controll saerch-input"
            placeholder= "type to search"
            value = {this.state.term}
            onChange = {this.onSearChange} />

        )
    }
}


