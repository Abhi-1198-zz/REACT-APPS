import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }
    render() 
    {
        //Using Arrow functions to define event handlers
        return(
        <div className="search-bar " >
        <input onChange={(event) => this.onInputChange(event.target.value)} />
            <br /> <br />        
       </div>   
       );
       }
 //Long Way to add event event handlers
    // onInputChange(event) 
    // {
    //     console.log(event.target.value);
    // }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChanged(term);
    }
}

export default SearchBar;
