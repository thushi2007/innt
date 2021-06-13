module.exports = {
  packages: {
    'agm-direction': {
      ignorableDeepImportMatchers: [
        /@agm\//
      ]
    },
    'angular-file': {
      ignorableDeepImportMatchers: [
        /file\//
      ]
    }
  }
};
