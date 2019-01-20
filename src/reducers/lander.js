import {RECEIVED_SEARCH_DATA} from '../actions/locationSearchActions'
import React from 'react'; 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'; 
import MyLocationIcon from '@material-ui/icons/MyLocation';

const previouslySearchedData = [];

export const searchResults = (state = previouslySearchedData, action) => {
    switch (action.type) { 
      case RECEIVED_SEARCH_DATA:
        const getTime = new Date();
        
        previouslySearchedData.push({"location": action.payload, "dateTime": getTime.toDateString() + " " + getTime.getHours() + ":" + getTime.getMinutes() + ":" + getTime.getSeconds()}); 
            return (
                <div>
                    {
                       previouslySearchedData.map((history, idx) => {  
                        return (
                        <div className='searchedDetails' key={idx}> 
                            <List className='listName'>
                                <ListItem>
                                    <MyLocationIcon></MyLocationIcon>
                                    <ListItemText primary={history.location} secondary={history.dateTime}/> 
                                </ListItem>
                            </List>
                        </div>
                        
                    )})
                   } 
                 
                </div>
            ); 
      default:
        return state;
    }
  };