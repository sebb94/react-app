import { React, Component } from 'react';
import CarsList from './CarsList'
import { cars } from './Cars'
import SearchBox from './SearchBox'

class App extends Component {

 constructor(){
     super()
     this.state = {
        cars : cars,
        searchField: ''
     }
 } 

 onSearchChange = (event) => {
     this.setState({ searchField : event.target.value })

 }

 render() {
    const filterCars = this.state.cars.filter(car =>{
        return car.name.toLowerCase().includes(this.state.searchField.toLowerCase())
       
    })
    if(filterCars.length > 0){
        return (
            <div id="app" className="tc">
                <h1>Cars</h1>
                <SearchBox searchChange={this.onSearchChange} />  
                <CarsList cars={filterCars} />
            </div>
        )
     }
    else{
        return (
            <div id="app" className="tc">
                <h1>Cars</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <h1>No results</h1>
            </div>
        )
    }

 }
}

export default App