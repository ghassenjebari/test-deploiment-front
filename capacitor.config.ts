import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.miniprojet.ionic',
  appName: 'test-front-mobile',
  webDir: 'dist/test-front',
  server: {
    androidScheme: 'https'
  }
};

export default config;
