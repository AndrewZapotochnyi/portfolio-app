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

let ToolBar = () => {

  const tools = [
      {
          icon: <CalendarIcon />,
          title: 'Calendar',
          alt: 'Calendar icon',
          modalName: ModalNames.calendar,
      },{
          icon: <ContactsIcon />,
          title: 'Contacts',
          alt: 'Contacts icon',
          modalName: ModalNames.contacts,
      }, {
        icon: <FinderIcon />,
        title: 'Finder',
        alt: 'Finder icon',
        modalName: ModalNames.finder,
    }, {
        icon: <MailIcon />,
        title: 'Mail',
        alt: 'Mail icon',
        modalName: ModalNames.mail,
    }, {
        icon: <MessagesIcon />,
        title: 'Messages',
        alt: 'Messages icon',
        modalName: ModalNames.messages,
    }, {
        icon: <SafariIcon />,
        title: 'Safari',
        alt: 'Safari icon',
        modalName: ModalNames.safari,
    }, {
        icon: <PhotosIcon />,
        title: 'Photos',
        alt: 'Photos icon',
        modalName: ModalNames.photos,
    },
  ]

  return (
    <div className="tool-bar">
        {tools.map((tool) => <ToolButton {...tool} />)}
    </div>);
};

export default ToolBar;