import React, {useEffect, useState} from 'react';
import {
  Alert,
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

  const ttB = [
    {
      name: 'Madelyn Vetrovs',
      date: '1/5/2021',
      unit: '18.9 km',
      type: 'Running',
      point: 'point',
    },
    {
      name: 'Madelyn bob',
      date: '1/5/2021',
      unit: '18.9 km',
      type: 'Running',
      point: 'point',
    },
    {
      name: 'Victor',
      date: '1/5/2021',
      unit: '18.9 km',
      type: 'Running',
      point: 'point',
    },
  ];
  const [tableData, settableData] = useState(tD);
  const [modalVisible, setModalVisible] = React.useState(false);

  const [name, onChangeName] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [date, onChangeDate] = React.useState(null);
  const [unit, setUnit] = React.useState(null);
  const [type, setType] = useState('Running');
  const [point, setPoint] = React.useState(null);

  useEffect(() => {
    //  update(name, date, unit, type, point);
  }, []);

  const call = () => {
    return TableG();
  };
  useEffect(() => {
    data;
  }, [update]);

  const update = (name, date, unit, type, point) => {
    // console.log(name, date, unit, type, point);
    // setData({name, date, unit, type, point});
    // setData({name: name, date: date, unit: unit, type: type, point: point});
    if (
      name == null ||
      date == null ||
      unit == null ||
      type == null ||
      point == null
    ) {
      Alert.alert('Full the info.');
    } else {
      setData([name, date, unit, type, point]);
      setModalVisible(!modalVisible);
    }

    console.log(data);
    settableData(oldArray => [...oldArray, data]);

    // settableData([...tableData, data]);
  };
  const TableG = () => {
    return (
      <Table borderStyle={{borderWidth: 2, borderColor: '#5e4f7a'}}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    );
  };

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
          // Alert.alert('Modal has been closed.');

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
                onChangeText={e => {
                  onChangeName(e);
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
                onChangeText={e => {}}
                // value={name}
                placeholder="Enter Location"
                //   keyboardType="numeric"
              />
            </View>

            <View style={styles.modalTextEach}>
              <Text>Date </Text>
              <TextInput
                style={styles.input}
                value={date}
                onChangeText={e => {
                  onChangeDate(e);
                }}
                placeholder="Date"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.modalTextEach}>
              <Text>Unit </Text>
              <TextInput
                style={styles.input}
                value={unit}
                onChangeText={e => {
                  setUnit(e);
                }}
                placeholder="Enter Units"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.modalTextEach}>
              <Text>Type </Text>
              <TextInput
                style={styles.input}
                value={type}
                onChangeText={e => {
                  setType(e);
                }}
                placeholder="type"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.modalTextEach}>
              <Text>Point </Text>
              <TextInput
                style={styles.input}
                value={point}
                onChangeText={e => {
                  setPoint(e);
                }}
                placeholder="Enter Point"
                //   keyboardType="numeric"
              />
            </View>
            <Pressable
              onPress={() => {
                // console.log(name,date, unit,type,point)

                update(name, date, unit, type, point);
              }}
              style={[styles.button, styles.buttonClose]}>
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/*  Grid */}
      {call()}
      {/* <TableG /> */}
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
    height: 45,
    width: '100%',
    backgroundColor: '#5e4f7a',
    alignSelf: 'center',
  },
  text: {
    margin: 6,
    height: 40,
    color: 'white',
  },
  centeredView: {
    // flex: 1,
    height: 500,
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
