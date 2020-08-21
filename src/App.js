import React, { useState } from "react";
import "./App.css";
import "./styles/App.scss";
import "./components/ToolBar/ToolBar";
import ToolBar from "./components/ToolBar/ToolBar";
import TopBar from "./components/TopBar/TopBar";
import DraggableResizable from "./components/Modal/DraggableResizable";
import { modalsStateDefault } from "./ModalsStateDefault";

function App() {
  const [modals, setModals] = useState(modalsStateDefault);

  const openModal = (name) =>
    setModals(
      Object.entries(modals).reduce((acc, [key, value]) => {
        const isOnTop = key === name;
        const isActive = key === name;
        if (key === name) {
          return { ...acc, [key]: { ...value, isOnTop, isActive } };
        }
        return { ...acc, [key]: { ...value, isOnTop } };
      }, {})
    );

  const closeModal = (name) =>
    setModals({
      ...modals,
      [name]: {
        ...modals[name],
        isActive: false,
      },
    });

  const moveOnTop = (name) =>
    setModals(
      Object.entries(modals).reduce((acc, [key, value]) => {
        const isOnTop = key === name;
        return { ...acc, [key]: { ...value, isOnTop } };
      }, {})
    );

  return (
    <div className="App">
      <div className="App-Holder">
        <TopBar addModal={openModal} />

        {Object.entries(modals).map(
          (
            [
              key,
              {
                isActive,
                Content,
                title,
                width,
                height,
                isFixed,
                isOnTop,
                x,
                y,
                countPosition,
              },
            ],
            i
          ) => (
            <div>
              {isActive && (
                <DraggableResizable
                  name={key}
                  removeModal={closeModal}
                  key={key}
                  width={width}
                  height={height}
                  isFixed={isFixed}
                  isOnTop={isOnTop}
                  moveOnTop={moveOnTop}
                  title={title}
                  x={x}
                  y={y}
                  countPosition={countPosition}
                >
                  {" "}
                  {Content}
                </DraggableResizable>
              )}
            </div>
          )
        )}

        <ToolBar
          addModal={openModal}
          removeModal={closeModal}
          modals={modals}
          moveOnTop={moveOnTop}
        />
      </div>
    </div>
  );
}

export default App;
