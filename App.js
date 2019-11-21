/* eslint-disable react-native/no-inline-styles */
import React, {Fragment} from 'react';
import PushController from './PushController';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

// Dummy data for list, we'll replace this with data received from push
let pushData = [
  {
    title: 'First push',
    message: 'First push message',
  },
  {
    title: 'Second push',
    message: 'Second push message',
  },
];

//tutorial link:  https://medium.com/enappd/firebase-push-notifications-in-react-native-apps-d9f60726ce9c
//note:
//to send push message go to firebase priject and click on GROW tab where we can see cloud mesaging  and thengive title and message
//anf after clicking send it ask for token which we get in debugger console from pushcontroller page taht we made which ask for permission,use that token
//after sometime (10-20s ) notification occur

const App = () => {
  const renderItem = ({item}) => (
    <View key={item.title}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={{height: 30, alignItems: 'center'}}>
            <Text>header</Text>
          </View>
          <View style={styles.listHeader}>
            <Text>Push Notifications</Text>
          </View>
          <View style={styles.body}>
            <FlatList
              data={pushData}
              renderItem={item => renderItem(item)}
              keyExtractor={item => item.title}
            />
            {/* <LearnMoreLinks /> */}
          </View>
        </ScrollView>
      </SafeAreaView>
      <PushController />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {backgroundColor: 'grey'},
  listHeader: {backgroundColor: '#eee', color: '#222', height: 44, padding: 12},
  title: {fontSize: 18, fontWeight: 'bold', paddingTop: 10},
  message: {
    fontSize: 14,
    paddingBottom: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  engine: {position: 'absolute', right: 0},
  body: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionContainer: {marginTop: 32, paddingHorizontal: 24},
  sectionTitle: {fontSize: 24, fontWeight: '600', color: '#000'},
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'purple',
  },
  highlight: {fontWeight: '700'},
  footer: {
    color: 'blue',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
