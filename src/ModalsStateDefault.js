import React from "react";

// import CalendarIcon from "./components/icons/CalendarIcon";
import NotesIcon from "./components/icons/NotesIcon";
import MailIcon from "./components/icons/MailIcon";

import SafariIcon from "./components/icons/SafariIcon";

import PreferencesIcon from "./components/icons/PreferencesIcon";
import PagesIcon from "./components/icons/PagesIcon";

import SafariContent from "./components/Content/SafariContent";
import SafariMobile from "./components/Mobile/Mobile";

// import CalendarContent from "./components/Content/CalendarContent";
import NotesContent from "./components/Content/NotesContent";
import NotesMobile from "./components/Mobile/Content/NotesMobile";

import MailContent from "./components/Content/MailContent";
import MailMobile from "./components/Mobile/Content/MailMobile";

import PreferencesContent from "./components/Content/PreferencesContent";
import PreferencesMobile from "./components/Mobile/Content/PreferencesMobile";

import PagesContent from "./components/Content/PagesContent";
import MobilePagesContent from "./components/Mobile/Content/MobilePages";

import Hello from "./components/Content/Hello";
import HelloMobile from "./components/Mobile/Content/HelloMobile";

import Credentials from "./components/Content/Credentials";

import { ModalNames } from "./components/constants";

export const modalsStateDefault = {
  [ModalNames.safari]: {
    Content: <SafariContent />,
    ContentMobile: <SafariMobile />,
    title: "Safari - My Projects",
    isActive: false,
    isFixed: false,
    isOnTop: false,
    toolButton: {
      Icon: SafariIcon,
      title: "Safari",
    },
    x: 0,
    y: 0,
    width: 600,
    height: 450,
  },
  [ModalNames.notes]: {
    Content: <NotesContent />,
    ContentMobile: <NotesMobile />,
    title: "Notes - Education",
    isActive: false,
    isFixed: false,
    isOnTop: false,
    toolButton: {
      Icon: NotesIcon,
      title: "Notes",
    },
    width: 530,
    height: 300,
    x: 0,
    y: 0,
  },
  [ModalNames.mail]: {
    Content: <MailContent />,
    ContentMobile: <MailMobile />,
    title: "Mail - Send Me An Email",
    isActive: false,
    isFixed: false,
    isOnTop: false,
    toolButton: {
      Icon: MailIcon,
      title: "Mail",
    },
    x: -370,
    y: -80,
    width: 450,
    height: 300,
  },
  [ModalNames.preferences]: {
    Content: <PreferencesContent />,
    ContentMobile: <PreferencesMobile />,
    title: "Preferences - Tech Skills",
    isActive: false,
    isFixed: true,
    isOnTop: false,
    toolButton: {
      Icon: PreferencesIcon,
      title: "Preferences",
    },
    x: -450,
    y: -350,
    width: 570,
    height: 400,
    countPosition: true,
  },
  [ModalNames.pages]: {
    Content: <PagesContent />,
    ContentMobile: <MobilePagesContent />,
    title: "Pages - Work Experience",
    isActive: false,
    isFixed: true,
    isOnTop: false,
    toolButton: {
      Icon: PagesIcon,
      title: "Pages",
    },
    x: -400,
    y: -420,
    width: 300,
    height: 400,
    countPosition: true,
  },
  // [ModalNames.calendar]: {
  //   Content: <CalendarContent />,
  //   title: "Calendar - Book A Call With Me",
  //   isActive: false,
  //   isFixed: true,
  //   isOnTop: false,
  //   toolButton: {
  //     Icon: CalendarIcon,
  //     title: "Calendar",
  //   },
  //   x: -380,
  //   y: -400,
  //   width: 500,
  //   height: 400,
  //   countPosition: true,
  // },
  [ModalNames.hello]: {
    Content: <Hello />,
    ContentMobile: <HelloMobile />,
    title: "Hello world!",
    isActive: true,
    isFixed: true,
    isOnTop: true,
    x: -200,
    y: -550,
    width: 400,
    height: 500,
    countPosition: true,
    upperY: true,
  },
  [ModalNames.credentials]: {
    Content: <Credentials />,
    ContentMobile: <Credentials />,
    title: "Project Credentials",
    isActive: false,
    isFixed: true,
    isOnTop: false,
    x: -100,
    y: -600,
    width: 500,
    height: 300,
    countPosition: true,
    upperY: true,
  },
};
