import { useContext, useState } from "react";
// Data
import AppContext from "../context/AppContext";
// components
import MyProjectsInfo from "../containers/MyProjectsInfo.jsx";

const MyTools = () => {
  const { state } = useContext(AppContext);

  return (
    <MyProjectsInfo
      title={state.myTools.title}
      description={state.myTools.description}
      works={state.myTools.works}
    />
  );
};

export default MyTools;
