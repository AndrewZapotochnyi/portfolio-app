import React from 'react';
import './ToolButton'
import ToolButton from './ToolButton';
import { ModalNames} from "./constants";

let ToolBar = () => {

  const tools = [
      {
          // icon: <FinderIcon />,
          title: 'Calendar',
          alt: 'Calendar icon',
          modalName: ModalNames.calendar,
      },{
          // icon: <FinderIcon />,
          title: 'Finder',
          alt: 'Finder icon',
          modalName: ModalNames.finder,
      },
  ]

  return (
    <div className="tool-bar">
        {tools.map((tool) => <ToolButton {...tool} />)}
    </div>);
};

export default ToolBar;