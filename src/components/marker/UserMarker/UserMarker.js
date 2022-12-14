import {Image} from 'react-native';
import {Marker} from 'react-native-maps';
import styles from './UserMarker.style';
import React from 'react';

const UserMarker = ({coordinates, userImageURL, onSelect}) => {
  return (
    <Marker coordinate={coordinates} onPress={onSelect}>
      <Image style={styles.image} source={{uri: userImageURL}} />
    </Marker>
  );
};

export default UserMarker;
