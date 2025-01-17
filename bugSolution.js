This solution uses `react-native-fs` to handle the file URI inconsistencies. 
```javascript
import * as DocumentPicker from 'expo-document-picker';
import RNFS from 'react-native-fs';

const pickDocument = async () => {
  let result = await DocumentPicker.getDocumentAsync({});

  if (!result.cancelled) {
    try {
      const fileContent = await RNFS.readFile(result.uri, 'utf8');
      console.log('File content:', fileContent); // Process the file content
    } catch (error) {
      console.error('Error accessing file:', error);
      // Handle the error (e.g., display an error message to the user)
    }
  }
};
```
Remember to install `react-native-fs`:
```bash
expo install react-native-fs
```
Handle necessary permissions in your `app.json` or `app.config.js` file:
```json
{"expo": {
  "android": {
    "permissions": [
      "android.permission.READ_EXTERNAL_STORAGE"
    ]
  }
}}
```