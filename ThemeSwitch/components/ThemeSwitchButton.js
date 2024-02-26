import React, { useContext } from 'react';
import { Button } from 'react-native';
import ThemeContext from '../context/ThemeContext';

const ThemeSwitchButton = () => {
  const { toggleDarkMode } = useContext(ThemeContext);

  return <Button title="Toggle Theme" onPress={toggleDarkMode} />;
};

export default ThemeSwitchButton;
