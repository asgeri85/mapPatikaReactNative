import React from 'react';
import {Image} from 'react-native';
import {Marker} from 'react-native-maps';
import styles from './UserMarker.style';

const UserMarker = ({coordinates, imageUrl, onPress}) => {
  return (
    <Marker coordinate={coordinates} onPress={onPress}>
      <Image style={styles.image} source={{uri: imageUrl}} />
    </Marker>
  );
};

export default UserMarker;
