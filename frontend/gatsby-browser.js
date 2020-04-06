// Set AuthWrapper Component to wrap all components
import React from "react";
import AuthWrapper from "./src/components/AuthWrapper/index";

export const wrapPageElement = ({ element, props }) => {
  console.log("wrapPage element", element);
  console.log("wrapPage props", props);
  return <AuthWrapper {...props}>{element}</AuthWrapper>;
};
