import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock(
  './node_modules/react-native/Libraries/EventEmitter/NativeEventEmitter',
);

import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';

jest.mock('react-native-device-info', () => mockRNDeviceInfo);
