---
path: android11newfeauresfordevlopers
date: 2020-06-13T08:24:05.143Z
title: Exciting new features in Android 11 for developers
description: A list of new features released in Android 11 beta for app developers to use
---
![Android 11 ](https://res.cloudinary.com/dk22rcdch/image/upload/v1592042495/Blogimages/android-1869510_640_ke1eqs.jpg "Image by Pexels from Pixabay")
### Introduction

* Android 11 beta preview got recently released by goggle and it has quite a lot of interesting new features, which developers can take advantage of while developing their applications.
* In today's short article we are going to see a few of this features which can make your app more awesome.
* Going by the official statement, the first Beta of Android 11 focused on three key themes: **People, Controls, and Privacy**.

### People

* Google is trying to make Android more people-centric and expressive in order to allow users to prioritize the most important people in their life.
* **Conversation notifications**
  *  Notifications now have a dedicated section at the top of the shade, with a people-forward design and conversation specific actions, such as opening the conversation as a bubble, creating a conversation shortcut on the home screen, and setting a reminder.
* **Chat bubbles**
  * Chat head bubbles were quite popular in Facebook's Messenger app. 
  * With Android 11, the bubbles feature will be available for use in all other android apps which handle communication. 
  * Messaging and chat apps can use the Bubbles API on notifications. Google has informed developers to start using the bubbles API, so once Android 11 ships, apps should be making use of this tool.
* **Voice Access**
  *  For people who control their phone entirely by voice, Android 11 now includes an on-device visual cortex that understands screen content and context, and generates labels and access points for accessibility commands.

### Privacy

* **One-time permission location permission**
  * In Android 10, we had the option to grant an app two different permissions for location access:
While Using The App or Deny. 
  * In Android 11, users will be able to grant an app, the permission to use location access only once.
  * More information can be found [here](https://developer.android.com/preview/privacy/permissions)
* **Permissions auto-reset:** 
  * If users haven’t used an app for an extended period of time, Android 11 will “auto-reset” all of the runtime permissions associated with the app and notify the user. More info can be found in the permissions section [here](https://developer.android.com/preview/privacy/permissions#auto-reset)

### Controls

The latest release of Android can now help you can quickly get to all of your smart devices and control them in one space:

* **Device Controls** make it faster and easier than ever for users to access and control their connected devices. Now, by simply long pressing the power button, they’re able to bring up device controls instantly, and in one place. Apps can use a new API to appear in the controls. More information [here](https://developer.android.com/preview/features/device-control).
* Also there are a few more media based controls for developers to allow users to handle smart home devices.

### Android Studio Development Updates

* The Android team also released new features in Android Studio 4.1 Beta and 4.2 Canary, focused on a number of crucial tasks of developers:
  * **Simpler Debugging:**  With wireless debugging over ADB with Android 11 devices. They also added the Database Inspector and Dependency Injection (Dagger) tools.
  * **Device testing is better**, with the Android Emulator now hosted directly inside the IDE. Tests now run side-by-side so you can see results from multiple devices at the same time. 
  * **Machine learning is easier** -- you can now import your models for ML Kit and TensorFlow Lite directly in the IDE.
  * **Build and deployment are faster** thanks to [Kotlin Symbol Processing](http://goo.gle/ksp), caching of the task graph in Gradle, and faster app deployment to all devices on Android 11. And the new build analyzer can help you diagnose where your build may have bottlenecks.
  * **Games tooling is more powerful** with an updated performance profiler UI, an overhauled System Trace tool, and support for native memory profiling.
* Android 11 also includes a number of other developer productivity improvements like wireless ADB debugging, ADB incremental for faster installs of large APKs, and more nullability annotations on platform APIs (to catch issues at build time instead of runtime)
* Also google released a series of  **12 talks** on Android Developer channel related to this features:  [Youtube](https://www.youtube.com/playlist?list=PLWz5rJ2EKKc9hqKx4qZWolQxy59Bt20t_) 

### Conclusion

* That pretty much covers this article for today. Do check out official Android developer release channels for more information on this topics.

**References**:   
Android developers Blog: [Article](https://android-developers.googleblog.com/2020/06/unwrapping-android-11-beta-plus-more.html)
