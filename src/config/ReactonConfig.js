import Reactron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactron.configure()
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
