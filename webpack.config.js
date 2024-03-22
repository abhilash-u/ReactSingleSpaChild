const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const React = require("react");
const ReactDOM = require("react-dom");

module.exports = (webpackConfigEnv, argv) => {

  console.log("webpackConfigEnv object",webpackConfigEnv);
  
  const defaultConfig = singleSpaDefaults({
    orgName: "dpure",
    projectName: "childApp",
    webpackConfigEnv,
    argv,
    
  });

  return merge(defaultConfig, {
    
  });
};
