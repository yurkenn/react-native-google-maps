import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './Loading.style';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="blue" />
    </View>
  );
};

export default Loading;
