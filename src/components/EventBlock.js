import React from 'react';
import 'whatwg-fetch';
import {Card} from 'antd';
import { Link } from 'react-router-dom';

export class EventBlock extends React.Component{

    constructor(){
        super();
        this.state = {
            soccer: '',
        }
    }

    componentWillMount(){
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://api.smarkets.com/v3/events/?states=upcoming&types="
        var myFetchOptions ={
            method: 'GET',
        };

        fetch(proxyUrl + url +this.props.types+"&sort=id&limit=" + this.props.limit, myFetchOptions)
            .then(response => response.json())
            .then(json => {this.setState({soccer: json})});
            //.then(res => console.log(res));
    }

    render(){
        const {soccer} = this.state;

        // const soccerList = Object.keys(soccer).length;
        //console.log(Object.values(soccer)[0]);

        console.log(soccer.events);
        const soccerList = Object.keys(soccer).length
            ? soccer.events.map((soccerItem, index)=>(
                <li key={index}>
                    <Link to={`details/${soccerItem.short_name}`} target="_blank">
                        {soccerItem.name}
                    </Link>
                </li>
            ))
            :'Loading...';
        //console.log(soccerItem);
        return(
          <div className="list">
              <Card>
                  <ul>
                      {soccerList}
                  </ul>
              </Card>
          </div>
        );
    }
}
