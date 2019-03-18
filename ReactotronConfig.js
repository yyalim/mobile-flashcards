import Reactotron from 'reactotron-react-native'
// import host from './host'

Reactotron
  .configure({ host: '192.168.1.35', port: 9090 }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!