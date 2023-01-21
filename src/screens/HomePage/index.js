import React from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';
import YemegimButton from '../../components/YemegimButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const HomePage = props => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text>Y-EMEĞİM Home Page</Text>
      <YemegimButton
        text="Tıkla"
        onPress={() => props.navigation.navigate('Profile')}
      />
    </SafeAreaView>
  );
};

export default HomePage;
