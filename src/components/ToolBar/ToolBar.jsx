import React from 'react';
import './ToolButton'
import ToolButton from './ToolButton';
import { ModalNames} from "../constants";


/// ICONS ///
import CalendarIcon from '../icons/CalendarIcon';
import ContactsIcon from '../icons/ContactsIcon';
import FinderIcon from '../icons/FinderIcon';
import MailIcon from '../icons/MailIcon';
import MessagesIcon from '../icons/MessagesIcon';
import SafariIcon from '../icons/SafariIcon';
import PhotosIcon from '../icons/PhotosIcon';
////////////

// const tools = [
//     {
//         Icon: CalendarIcon,
//         title: 'Calendar',
//         modalName: ModalNames.calendar,
//     },{
//         Icon: ContactsIcon,
//         title: 'Contacts',
//         modalName: ModalNames.contacts,
//     }, {
//       Icon: FinderIcon,
//       title: 'Finder',
//       modalName: ModalNames.finder,
//   }, {
//       Icon: MailIcon,
//       title: 'Mail',
//       modalName: ModalNames.mail,
//   }, {
//       Icon: MessagesIcon,
//       title: 'Messages',
//       modalName: ModalNames.messages,
//   }, {
//       Icon: SafariIcon,
//       title: 'Safari',
//       modalName: ModalNames.safari,
//   }, {
//       Icon: PhotosIcon,
//       title: 'Photos',
//       modalName: ModalNames.photos,
//   },
// ];

const ToolBar = (props) => {

    // Object.entries(props.modals).map(([key, subject], i) => (
    //     console.log(subject)
    // ))

    return (
        // <div className="tool-bar">
        //     {tools.map((tool) => 
        //         <ToolButton 
        //             key={tool.modalName} 
                    
        //             {...tool} 
        //             {...props} 
        //             />)}
        // </div>

        <div className="tool-bar">
                {Object.entries(props.modals).map(([key, subject], i) => (
                    <ToolButton
                        Icon={subject.toolButton.Icon} 
                        title={subject.toolButton.title} 
                        modalName={key} 
                        isActive={subject.isActive}
                        // addModal={} 
                        // removeModal={} 
                        // modalsOpenedState={} 
                        // setModalsOpenedState={}
                        {...props} 
                    >
                        
                    </ToolButton>
            ))}
        </div>
        

    );



}




    


export default ToolBar;