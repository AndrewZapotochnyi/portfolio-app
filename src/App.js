import React, { useState, useEffect } from "react";
import "./App.css";
import "./styles/App.scss";
import "./components/ToolBar/ToolBar";
import ToolBar from "./components/ToolBar/ToolBar";
import TopBar from "./components/TopBar/TopBar";
import DraggableResizable from "./components/Modal/DraggableResizable";
// import MobileWindow from "./components/Modal/MobileWindow.jsx";
import { modalsStateDefault } from "./ModalsStateDefault";

import MobileB from "./components/Mobile/MobileB";

function App() {
  const [modals, setModals] = useState(modalsStateDefault);

  // MODAL STATE UPDATES
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

  const openMobile = (name) =>
    setModals(
      Object.entries(modals).reduce((acc, [key, value]) => {
        const isActive = key === name;
        const isOnTop = key === name;
        return { ...acc, [key]: { ...value, isOnTop, isActive } };
      }, {})
    );

  // MOBILE HANDLING

  const size = useWindowSize();
  const mobile = size.width < 600 || size.height < 600 ? true : false;

  // Hook
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }

  if (mobile) {
    return (
      <MobileB
        openModal={openModal}
        modals={modals}
        closeModal={closeModal}
        setModals={setModals}
        openMobile={openMobile}
      ></MobileB>
    );
  }

  // DESKTOP HANDLING
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
                upperY,
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
                  upperY={upperY}
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
