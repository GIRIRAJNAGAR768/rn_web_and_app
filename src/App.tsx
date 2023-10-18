import {Button} from '@melorra/component';
import {ButtonTypeTokens} from '@melorra/schema';
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

        <Button.Component
          type={ButtonTypeTokens.LargeFilled}
          label="This is button"
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
