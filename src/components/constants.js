import React from 'react';

import CalendarIcon from './icons/CalendarIcon';
import ContactsIcon from './icons/ContactsIcon';
import FinderIcon from './icons/FinderIcon';
import MailIcon from './icons/MailIcon';
import MessagesIcon from './icons/MessagesIcon';
import SafariIcon from './icons/SafariIcon';
import PhotosIcon from './icons/PhotosIcon';


export const ModalNames = {
    calendar: 'CALENDAR',
    bucket: 'BUCKET',
    finder: 'FINDER',
    contacts: 'CONTACTS',
    mail: 'MAIL',
    safari: 'SAFARI',
    photos: 'PHOTOS',
    messages: 'MESSAGES',
};

export const modalsStateDefault = {
    [ModalNames.calendar]: {
      Content: <div>Calendar CONTENT</div>,
      isActive: true,
      toolButton: {
        Icon: CalendarIcon,
        title: 'Calendar',
      },
      x: 0,
      y: 0,
      width: 200,
      height: 300,
    },
    [ModalNames.contacts]: {
      Content: <div>Contacts CONTENT</div>,
      isActive: false,
      toolButton: {
        Icon: ContactsIcon,
        title: 'Contacts',
      },
      x: 10,
      y: 10,
      width: 200,
      height: 300,
    },
    [ModalNames.finder]: {
        Content: <div>Finder CONTENT</div>,
        isActive: false,
        toolButton: {
          Icon: FinderIcon,
          title: 'Finder',
        },
        x: 0,
        y: 0,
        width: 200,
        height: 300,
      },
      [ModalNames.mail]: {
        Content: <div>Mail CONTENT</div>,
        isActive: false,
        toolButton: {
          Icon: MailIcon,
          title: 'Mail',
        },
        x: 0,
        y: 0,
        width: 200,
        height: 300,
      },
      [ModalNames.messages]: {
        Content: <div>Messages CONTENT</div>,
        isActive: false,
        toolButton: {
          Icon: MessagesIcon,
          title: 'Messages',
        },
        x: 0,
        y: 0,
        width: 200,
        height: 300,
      },
      [ModalNames.safari]: {
        Content: <div>Safari CONTENT</div>,
        isActive: false,
        toolButton: {
          Icon: SafariIcon,
          title: 'Safari',
        },
        x: 0,
        y: 0,
        width: 200,
        height: 300,
      },
      [ModalNames.photos]: {
        Content: <div>Photos CONTENT</div>,
        isActive: false,
        toolButton: {
          Icon: PhotosIcon,
          title: 'Photos',
        },
        x: 0,
        y: 0,
        width: 200,
        height: 300,
      }
  };