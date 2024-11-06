import { useState, useEffect } from 'react';
import * as Network from 'expo-network';
import Toast from 'react-native-toast-message';
import { Linking, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function useNetworkStatus() {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const checkNetwork = async () => {
      const status = await Network.getNetworkStateAsync();
      setIsConnected(status.isConnected);

      if (!status.isConnected) {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'No hay conexión a internet.',
            text2: 'Por favor, revisa tu conexión y vuelve a intentarlo.',
          visibilityTime: 0, 
          autoHide: false, 
          onPress: () => {
            if (Platform.OS === 'android') {
              Linking.openURL('intent://wifi#Intent;scheme=wifi;package=com.android.settings;end'); 
            } else {
              Linking.openURL('app-settings:'); 
            }
          },
          props: {
            icon: <MaterialIcons name="wifi-off" size={30} color="white" style={{ marginRight: 15 }} />, 
          },
        });
      } else {
        Toast.hide(); 
      }
    };

    checkNetwork();

    const interval = setInterval(checkNetwork, 5000);

    return () => clearInterval(interval); 
  }, []);

  return isConnected;
}
