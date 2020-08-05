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

const tools = [
    {
        icon: <CalendarIcon />,
        title: 'Calendar',
        modalName: ModalNames.calendar,
    },{
        icon: <ContactsIcon />,
        title: 'Contacts',
        modalName: ModalNames.contacts,
    }, {
      icon: <FinderIcon />,
      title: 'Finder',
      modalName: ModalNames.finder,
  }, {
      icon: <MailIcon />,
      title: 'Mail',
      modalName: ModalNames.mail,
  }, {
      icon: <MessagesIcon />,
      title: 'Messages',
      modalName: ModalNames.messages,
  }, {
      icon: <SafariIcon />,
      title: 'Safari',
      modalName: ModalNames.safari,
  }, {
      icon: <PhotosIcon />,
      title: 'Photos',
      modalName: ModalNames.photos,
  },
]

const ToolBar = () => 
    (<div className="tool-bar">
        {tools.map((tool) => <ToolButton {...tool} />)}
    </div>);


export default ToolBar;