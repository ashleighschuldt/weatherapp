import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class City extends Component {
    constructor(){
        super();
        this.state = {
            forecast: [],
            newCity: '',
            newState: '',
            weather: [],
            searches: [],
        }
    }
    
    OnChange(input, value){
        this.setState({
          [input]: value
        })
      }

    getWeather(){
        axios.get(`http://localhost:8080/api/weather/${this.state.newState}/${this.state.newCity}`)
        .then(res => {
            this.setState({
                weather: res.data.weather,
                searches: res.data.searches})
        })
    }

    render(){
        const fiveDayForecast = this.state.weather.map((element, i) => {
            return (
            <div className='forecast-cards' key={i}> 
                <p>{element.day}</p>
                <p>{element.condition}</p>
                <p>High {element.high}</p>
                <p>Low {element.low}</p>
                <div><img src = {element.icon} /></div>
            </div>
        )
        })
            
        
        return(
            <div>
            <div>
                <input className='city' placeholder='city' onChange = {e => this.OnChange('newCity', e.target.value)}/>
            </div>
            <div>
            <select onChange={e => this.OnChange('newState', e.target.value)}>
            <option value=''></option> 
            <option value="Alaska">Alaska</option>
            <option value="Alabama">Alabama</option>
            <option value='Arkansas'>Arkansas</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Arizona">Arizona</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="District of Columbia">District of Columbia</option>
            <option value="Delaware">Delaware</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Guam">Guam</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Iowa">Iowa</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Maryland">Maryland</option>
            <option value="Maine">Maine</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Missouri">Missouri</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Montana">Montana</option>
            <option value="North Carolina">North Carolina</option>
            <option value=" North Dakota">North Dakota</option>
            <option value="Nebraska">Nebraska</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico"> New Mexico</option>
            <option value="Nevada">Nevada</option>
            <option value="New York">New York</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota"> South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Virginia">Virginia</option>
            <option value="Virgin Islands">Virgin Islands</option>
            <option value="Vermont">Vermont</option>
            <option value="Washington">Washington</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wyoming">Wyoming</option>     
                </select>
            </div>
            <div>
                <button onClick = {() => this.getWeather(this.state.newState,this.state.newCity)}>Get Weather</button>
                
            </div>
            <div>
                <p className='title'>5 Day Forecast</p>
                <div className='forecast'>
                {fiveDayForecast}
                </div>
            </div>
            <div>
                <p className='title'>Recent Searches</p>
                <div className='searches'>
                {this.state.searches.map((e, i)=>{
                    return <p key={i}>{e}</p>
                })}
               </div> 
            </div>
            </div>
        )
    }
} 

export default City;