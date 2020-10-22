module.exports = {
  env: {
    test: {
      plugins: [
        [
          "@babel/plugin-transform-modules-commonjs",
          {
            spec: true,
          },
        ],
        ["@babel/plugin-transform-runtime"],
      ],
    },
  },
};
