const NODE_ENV = process.env.BABEL_ENV || process.env.NODE_ENV;

const presets = ["@babel/react"];
const plugins = [
  "@babel/plugin-syntax-dynamic-import",
  "babel-plugin-transform-class-properties",
];

if (NODE_ENV === "development") {
  plugins.push("react-hot-loader/babel");
  plugins.push("@babel/plugin-transform-react-jsx-source");
}

if (NODE_ENV === "test") {
  presets.push(["@babel/env"]);
  plugins.push(["dynamic-import-node"]);
  plugins.push(["@babel/plugin-transform-runtime"]);
}

module.exports = { presets, plugins };
