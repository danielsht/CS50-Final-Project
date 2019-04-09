import React from 'react';
import { StyleSheet, Platform, StatusBar, View } from 'react-native';
import { Font, AppLoading } from 'expo'

import AppNav from './navigation/AppNavigator'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      )
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
          <AppNav />
        </View>
      )
    }
  }

  loadResourcesAsync = async () => {
    return await Font.loadAsync({
      'rochester': require('./assets/fonts/Rochester-Regular.ttf'),
      'robotoReg': require('./assets/fonts/Roboto-Regular.ttf'),
      'robotoMed': require('./assets/fonts/Roboto-Medium.ttf'),
    })
  }

  handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
