module.exports = {
  testRegex: "(__tests__/).*(\\.spec\\.jsx?$)",
  modulePaths: ["./src"],
  moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: ["/node_modules/"],
  transform: {
    "\\.jsx?$": "babel-jest",
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["./__tests__/setupTests.js"],
};
