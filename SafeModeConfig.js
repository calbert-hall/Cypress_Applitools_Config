module.exports = {
    testConcurrency: 5,
    apiKey: 'APPLITOOLS_API_KEY',
    browser: [
        // Add browsers with different viewports
        {width: 800, height: 600, name: 'chrome-two-versions-back'},
        {width: 1200, height: 800, name: 'firefox-two-versions-back'},
        {deviceName: 'Pixel 2', screenOrientation: 'portrait'},
        {iosDeviceInfo: {deviceName:'iPhone X', screenOrientation: 'portrait'}}, // iOS simulator on safari
    ],

    // These settings are optimal for preventing aborted tests or errors. 
    //severUrl: 'https://mycompanyeyes.applitools.com' // Use serverUrl if yoxsu have an Applitools private cloud 
    showLogs: true,
    sendDom: false,
    //disableBrowserFetching: true, // Turn on to prevent the browser from fetching resources from the network. This is useful for debugging.
    failCypressOnDiff: false, // If true, Cypress will fail the test if there are differences between the baseline and the current screenshot.
    isDisabled: false, //Set this to true to disable Applitools on the Cypress test. Used to debug to see if an error comes from Applitools.
    visualGridOptions: {
        polyfillAdoptedStyleSheets: true,
    },

    batch: {
        name: 'Safe Mode Optimization',
    }
}
