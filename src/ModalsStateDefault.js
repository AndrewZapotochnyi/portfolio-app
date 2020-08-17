import React from 'react';

import CalendarIcon from './components/icons/CalendarIcon';
import NotesIcon from './components/icons/NotesIcon';
import FinderIcon from './components/icons/FinderIcon';
import MailIcon from './components/icons/MailIcon';
import MessagesIcon from './components/icons/MessagesIcon';
import SafariIcon from './components/icons/SafariIcon';
import PhotosIcon from './components/icons/PhotosIcon';
import PreferencesIcon from './components/icons/PreferencesIcon';
import PagesIcon from './components/icons/PagesIcon';

import SafariContent from './components/Content/SafariContent';
import CalendarContent from './components/Content/CalendarContent';
import NotesContent from './components/Content/NotesContent';
import MailContent from './components/Content/MailContent';
import PreferencesContent from './components/Content/PreferencesContent';
import PagesContent from './components/Content/PagesContent';
import MessagesContent from './components/Content/MessagesContent';
import Hello from './components/Content/Hello';


import {ModalNames} from './components/constants';

export const modalsStateDefault = {
  [ModalNames.safari]: {
    Content: <SafariContent />,
    isActive: false,
    isFixed: false,
    toolButton: {
      Icon: SafariIcon,
      title: 'Safari',
    },
    x: 0,
    y: 0,
    width: 400,
    height: 520,
  },
  [ModalNames.calendar]: {
    Content: <CalendarContent />,
    isActive: false,
    isFixed: false,
    toolButton: {
      Icon: CalendarIcon,
      title: 'Calendar',
    },
    x: 0,
    y: 0,
    width: 500,
    height: 400,
  },
  [ModalNames.notes]: {
    Content: <NotesContent />,
    isActive: false,
    isFixed: true,
    toolButton: {
      Icon: NotesIcon,
      title: 'Notes',
    },
    x: 10,
    y: 10,
    width: 520,
    height: 300,
  },
    [ModalNames.mail]: {
      Content: <MailContent />,
      isActive: true,
      isFixed: false,
      toolButton: {
        Icon: MailIcon,
        title: 'Mail',
      },
      x: 0,
      y: 0,
      width: 200,
      height: 300,
    },
    [ModalNames.preferences]: {
      Content: <PreferencesContent />,
      isActive: false,
      isFixed: false,
      toolButton: {
        Icon: PreferencesIcon,
        title: 'Preferences',
      },
      x: 0,
      y: 0,
      width: 400,
      height: 300,
    },
    [ModalNames.pages]: {
      Content: <PagesContent />,
      isActive: false,
      isFixed: true,
      toolButton: {
        Icon: PagesIcon,
        title: 'Pages',
      },
      x: 0,
      y: 0,
      width: 400,
      height: 300,
    },
    [ModalNames.hello]: {
      Content: <Hello />,
      isActive: false,
      isFixed: false,
      x: 0,
      y: 0,
      width: 400,
      height: 300,
    }
};