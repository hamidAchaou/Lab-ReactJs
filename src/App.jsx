import React from "react";
import Reducer from "./Hooks/Reducer/Reducer";
import Callback from "./Hooks/callback/Callback";
import ContextProvider from "./Hooks/Context/Context";
import Mmeo from "./Hooks/memo/Mmeo";
import Ref from "./Hooks/ref/Ref";
import Props from "./Components/Props/Props";
import Context from "./Hooks/Context/Context";

const App = () => {
  return (
    <>
      {/* <Context /> */}
      {/* <Callback /> */}
      {/* <ContextProvider /> */}
      {/* <Mmeo /> */}
      <Reducer />
      {/* <Props /> */}
      {/* <Ref /> */}
    </>
  );
};

export default App;
