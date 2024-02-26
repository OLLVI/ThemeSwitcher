import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import ThemeContext from '../context/ThemeContext';
import { globalStyles } from '../Styles';

const HomeScreen = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View style={[globalStyles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <Text style={{ color: isDarkMode ? '#fff' : '#333' }}>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
