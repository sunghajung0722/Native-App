import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { CameraView, useCameraPermissions } from 'expo-camera';
export default class App extends React.Component {
  state = {
    appIsReady: false,
  };

  async componentDidMount() {
    // Prevent native splash screen from autohiding
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    this.prepareResources();
  }

  /**
   * Method that serves to load resources and make API calls
   */
  prepareResources = async () => {

    this.setState({ appIsReady: true }, async () => {
      await SplashScreen.hideAsync();
    });
  }

  render() {
    if (!this.state.appIsReady) {
      return null;
    }

    return (
      <CameraView style={styles.camera} >
        <View>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});