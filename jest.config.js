module.exports = {
  transform: {},
  globals: {
    'ts-jest': {
      useESM: false,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};
