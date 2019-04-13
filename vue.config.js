module.exports = {
    pwa: {
        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
          swSrc: "src/firebase-messaging-sw.js"
        }
      }
}