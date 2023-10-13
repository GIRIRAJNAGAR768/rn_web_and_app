import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          margin: 12,
        }}>
        <Text style={{fontSize: 24}}>Hello World</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
