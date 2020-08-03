import React from 'react';
import './ToolButton'
import ToolButton from './ToolButton';
import hotelRooms from '../helpers/toolBarIcons'

let ToolBar = (props) => {

  console.log(hotelRooms.hotelRooms[0]);


  return (
    <div className="tool-bar">

      <ToolButton 
        icon = {hotelRooms.hotelRooms[0]}
      ></ToolButton>
      
     
    </div>);
}

export default ToolBar;