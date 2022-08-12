import {View, Text} from 'react-native';
import React from 'react';
import styles from './InfoCard.style';
import Modal from 'react-native-modal';
const InfoCard = ({visible, close, user}) => {
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={close}
      onBackdropPress={close}
      onBackButtonPress={close}>
      <View style={styles.container}>
        <Text style={styles.fullname}>
          {user.first_name} {user.last_name}
        </Text>
        <Text style={styles.username}>{user.username}</Text>
      </View>
    </Modal>
  );
};

export default InfoCard;
