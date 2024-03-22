const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const React = require("react");
const ReactDOM = require("react-dom");
const path = require("path")

module.exports = (webpackConfigEnv, argv) => {

  console.log("webpackConfigEnv object",webpackConfigEnv);
  
  const defaultConfig = singleSpaDefaults({
    orgName: "dpure",
    projectName: "childApp",
    webpackConfigEnv,
    argv,
    
  });

  return merge(defaultConfig, {
    output: {
  path: path.resolve(__dirname, 'public'), // Change 'dist' to 'public' 
}
  });
};
