module.exports = {
    reporters: [
      'default',
      ["jest-junit",
      {
        outputDirectory: "reports",
        outputName: "ng-test.xunit.xml"
      }],
    ],
    preset: 'jest-preset-angular',
    globalSetup: 'jest-preset-angular/global-setup',
};
  