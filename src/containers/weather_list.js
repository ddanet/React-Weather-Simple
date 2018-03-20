import React, {Component} from 'react';
import {connect} from 'react-redux';

import { Sparklines } from 'react-sparklines';

class WeatherList extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.weather.map(this.renderWeather)
                }
                </tbody>
            </table>
        )
    }

    renderWeather(cityData) {

        const temps = cityData.list.map( weather => weather.main.temp);

        console.log(temps);

        return (
            <tr key={cityData.city.id}>
                <td>
                    {cityData.city.name}
                </td>
                <td>
                    <Sparklines height={120} width={180} data={temps}>
                    </Sparklines>

                </td>
                <td>
                    <Sparklines data={[5, 10, 5, 20, 8, 15]} height={120} width={180}>
                    </Sparklines>
                </td>
                <td>

                </td>
                <td>

                </td>
            </tr>
        )
    }
}

// function mapStatetoProps(state){
//     return { weather: state.weather};
// }

// can be written to below

// function mapStatetoProps({weather}){
//     return { weather: weather};
// }

// can be written to below

function mapStatetoProps({ weather }) {
    return { weather };
}

export default connect(mapStatetoProps)(WeatherList)