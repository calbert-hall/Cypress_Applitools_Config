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

    // These settings are optimal for test performance. Most of these settings are correct by default. 
    //severUrl: 'https://mycompanyeyes.applitools.com' // Use serverUrl if yoxsu have an Applitools private cloud 
    sendDom: false,
    batch: {
        name: 'Performance Optimization',
    }
}
