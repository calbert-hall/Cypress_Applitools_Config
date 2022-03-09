module.exports = {
    testConcurrency: 5,
    apiKey: 'APPLITOOLS_API_KEY',
    browser: [
        // Add browsers with different viewports
        {width: 800, height: 600, name: 'chrome'},
        {width: 1200, height: 800, name: 'firefox'},
        {deviceName: 'Pixel 2', screenOrientation: 'portrait'},
        {iosDeviceInfo: {deviceName:'iPhone X', screenOrientation: 'portrait'}}, // iOS simulator on safari
    ],

    // These settings are optimal for focusing on the Pass rate of tests, with some sacrifice to performance.
    //severUrl: 'https://mycompanyeyes.applitools.com' // Use serverUrl if you have an Applitools private cloud 
    //showLogs: true,
    layoutBreakpoints: true,
    ignoreDisplacements: true,
    useDom: true,
    enablePatterns: true,
    waitBeforeCapture: 1500,
    batch: {
        name: 'Pass Rate Optimization',
        notifyOnCompletion: true,
        properties: [{name: 'My prop', value:'My value'}],
        sequenceName: 'My batch sequence',
    }
}
