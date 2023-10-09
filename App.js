import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [code, setCode] = useState('');
  const isCodeValid = code.length === 5;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleVerify = () => {
    if (isCodeValid) {
      toggleModal(); 
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome</Text>
      <TouchableOpacity onPress={toggleModal}>
        <Text>Show Modal</Text>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Text>Close</Text>
            </TouchableOpacity>
            <Icon name="lock" size={20} color="gray" />
            <Text style={styles.text1}>We've sent you a code</Text>
            <Text style={styles.text2}>We're just making sure it's you</Text>
            <TextInput
              placeholder="*****"
              value={code}
              onChangeText={(text) => setCode(text)}
              keyboardType="numeric"
              maxLength={5}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={toggleModal}
              style={styles.tryAnotherButton}>
              <Text>Try Another Method</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleVerify}
              disabled={!isCodeValid}
              style={[
                styles.verifyButton,
                { backgroundColor: isCodeValid ? 'green' : 'gray' },
              ]}>
              <Text style={{ color: 'white' }}>Verify</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'lightgray',
    padding: 50,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  text1: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
  },
  text2: {
    fontSize: 14, 
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    textAlign: 'center'
  },
  verifyButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  tryAnotherButton: {
    marginTop: 10,
  },
});

export default App;
