chmod 755 android/gradlew

Known bugs

- Sometimes it doesn't load the events on the calendar. If that happens,
you can click a date to refresh loading.

Troubleshooting

- If you get an error while installing the application, delete the old one if
you have installed it before.

- "Failed to delete: C:..."
Build the application again.

- "Failed to create: C:..."
Build the application again.

MYAPP_RELEASE_STORE_PASSWORD=aaaaaa
MYAPP_RELEASE_KEY_PASSWORD=aaaaaa

https://facebook.github.io/react-native/docs/signed-apk-android.html

"C:\Users...": error: Duplicate file.
"C:\Users...": Original is here. There version qualifier may be implied.
Inside the "node_modules/react-native/react.gradle" folder, add the following
block inside "currentBundleTask", after "doFirst" block.

doLast {
    def moveFunc = { resSuffix ->
        File originalDir = file("${resourcesDir}/drawable-${resSuffix}")
        if (originalDir.exists()) {
            File destDir = file("${resourcesDir}/drawable-${resSuffix}-v4")
            ant.move(file: originalDir, tofile: destDir)
        }
    }
    moveFunc.curry("ldpi").call()
    moveFunc.curry("mdpi").call()
    moveFunc.curry("hdpi").call()
    moveFunc.curry("xhdpi").call()
    moveFunc.curry("xxhdpi").call()
    moveFunc.curry("xxxhdpi").call()
}