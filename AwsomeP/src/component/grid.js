import React, {useEffect, useState} from 'react';
import {
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';

export default function Grid() {
  const tableHead = ['Participant name', 'Date', 'Units', 'Type', 'Points'];
  const tD = [
    ['Madelyn Vetrovs', '1/5/2021', '18.9 km', 'Running', 'point'],
    ['a', '1/5/2021', '18.9 km', 'Running', 'point'],
    ['1', '1/5/2021', '18.9 km', 'Running', 'point'],
    ['c', '1/5/2021', '18.9 km', 'Running', 'point'],
  ];
  const [tableData, settableData] = useState(tD);
  const [modalVisible, setModalVisible] = React.useState(false);

  const [name, onChangeName] = React.useState(null);
  const [data, setData] = useState(null);
  const [date, onChangeDate] = React.useState(null);
  const [unit, setUnit] = React.useState(null);
  const [type, setType] = useState('Running');
  const [point, setPoint] = React.useState(null);
  const update = () => {
    setData(name, date, unit, type, point);
    settableData([...tableData, data]);
  };
  const TableG = () => {
    return (
      <Table borderStyle={{borderWidth: 2, borderColor: '#5e4f7a'}}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    );
  };
  useEffect(() => {
    <TableG/>
  }, [data,tableData,settableData]);
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignSelf: 'center',
        }}>
        <Text style={styles.nameText}>Leaderboard</Text>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          style={{backgroundColor: '#5e4f7a', width: '25%', borderRadius: 10}}>
          <Text style={styles.buttnText}>Add Player</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 30}} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');

          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          {/* <Text style={styles.buttnText}>Add New Player!</Text> */}

          <View style={styles.modalView}>
            <Text style={{}}>Add New Player!</Text>
            <View style={styles.modalTextEach}>
              <Text>Name </Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={() => {
                  onChangeName(name);
                }}
                placeholder="Enter Name"
                //   keyboardType="numeric"
              />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                //   alignContent: 'center',
                alignItems: 'center',
                //   alignSelf: 'center',
              }}>
              <Text>Location </Text>
              <TextInput
                style={styles.input}
                onChangeText={() => {}}
                value={name}
                placeholder="Enter Location"
                //   keyboardType="numeric"
              />
            </View>

            <View style={styles.modalTextEach}>
              <Text>Name </Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={() => {
                  onChangeDate(date);
                }}
                placeholder="Date"
                  keyboardType="numeric"
              />
            </View>
            <View style={styles.modalTextEach}>
              <Text>Name </Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={() => {
                  setUnit(unit);
                }}
                placeholder="Enter Units"
                  keyboardType="numeric"
              />
            </View>
            <View style={styles.modalTextEach}>
              <Text>Name </Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={() => {
                  setType(type);
                }}
                placeholder="type"
                  keyboardType="numeric"
              />
            </View>
            <View style={styles.modalTextEach}>
              <Text>Name </Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={() => {
                  setPoint(point);
                }}
                placeholder="Enter Point"
                //   keyboardType="numeric"
              />
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                update();
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/*  Grid */}
      <TableG/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#473241',
    height: '100%',
    width: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 10,
    paddingTop: 100,
    // padding: '10%',
  },
  text2: {
    marginTop: '5%',
    color: 'blue',
  },
  nameText: {
    // translucent: true,
    color: 'white',
    fontSize: 35,
    marginHorizontal: '5%',
  },
  input: {
    height: 40,
    width: '50%',
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  buttnText: {
    // translucent: true,
    color: 'white',
    fontSize: 20,
    padding: '5%',
    alignSelf: 'center',
    justifyContent: 'center',
    // marginHorizontal: '10%'
  },
  head: {
    height: 40,
    width: '100%',
    backgroundColor: '#5e4f7a',
  },
  text: {
    margin: 6,
    height: 40,
    color: 'white',
  },
  centeredView: {
    // flex: 1,
    height: '70%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // borderWidth: 5,
    borderColor: 'black',
  },
  modalView: {
    // margin: 20,

    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,

    alignSelf: 'center',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTextEach: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    //   alignContent: 'center',
    alignItems: 'center',
    //   alignSelf: 'center',
  },
  
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
