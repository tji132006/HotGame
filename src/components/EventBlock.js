import React from 'react';
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
        var myFetchOptions ={
            method: 'GET'
        };
        fetch("https://api.smarkets.com/v3/events/?states=upcoming&types=football_match&sort=id&limit=10", myFetchOptions)
            .then(response => response.json())
            .then(json => this.setState({soccer: json}));
    }
    render(){
        const {soccer} = this.state;

        const soccerList = soccer.length
        ? soccer.map((soccerItem, index)=>(
            <li key={index}>
                <Link to={`details/${soccerItem.uniquekey}`} target="_blank">
                    {soccerItem.title}
                </Link>
            </li>
            ))
            : 'There is no match today.'
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
