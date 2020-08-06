import React from "react";
import Draggable from "react-draggable";
import ModalWindow from './Modal';

class DraggableWindow extends React.Component {
   
  render(){
      return(
         <Draggable
          handle=".drag"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[5, 5]}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}
         >
         <div className="drag">
           <ModalWindow>
               {this.props.children}
           </ModalWindow>
         </div>
         </ Draggable>
      )
   }
}
export default DraggableWindow;