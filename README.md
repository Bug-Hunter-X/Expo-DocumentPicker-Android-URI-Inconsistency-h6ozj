# Expo DocumentPicker Android URI Inconsistency Bug

This repository demonstrates a bug in the Expo DocumentPicker API on Android where the returned file URI is inconsistent. Sometimes a content URI is returned, while other times a file URI is returned. This inconsistency leads to challenges in accessing file contents and can result in permission-related errors.

## Bug Description

The Expo DocumentPicker API, when used on Android devices, does not consistently provide the file URI in a predictable format. This inconsistency between content URIs (`content://...`) and file URIs (`file:///storage/...`) makes it difficult to process the selected files reliably. File URIs often lead to permission problems because the app needs extra permission and may not have access to the files outside its own private storage. 

## How to Reproduce

1. Clone this repository.
2. Run the app on an Android device (emulator or physical).
3. Select a file using the DocumentPicker.
4. Observe the inconsistency in the URI format.

## Solution

The proposed solution involves using the `react-native-fs` library to access files regardless of the URI format. This library provides functions to read files from both content URIs and file URIs, making the file access process more consistent and robust across different Android devices and file systems.  The solution also includes appropriate permission handling to avoid errors related to accessing files outside the app's private storage.