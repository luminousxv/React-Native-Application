import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
  },
  arrival_container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 15,
    borderWidth: 8,
    backgroundColor: '#ffffff',
    borderColor: '#E0E0E0',
    paddingRight: 10,
    paddingLeft: 10,
  },
  time_container: {
    flex: 1,
    justifyContent: 'center',
  },
  infoText_container: {
    flex: 2,
    flexDirection: 'row',
  },
  calctime_container: {
    flex: 1,
  },
  time_text: {
    fontSize: 30,
    textAlign: 'left',
  },
  left_time_text: {
    textAlign: 'right',
    fontSize: 18,
    padding: 5,
    color: 'red',
  },
  arrival_time_text: {
    textAlign: 'right',
    fontSize: 18,
    paddingRight: 5,
    marginBottom: 5,
  },
  remain_text: {
    textAlign: 'right',
    fontSize: 15,
    marginBottom: 6,
    color: 'grey',
  },
  arrival_text: {
    textAlign: 'right',
    fontSize: 15,
    marginTop: 5,
    color: 'grey',
  },
  sub_text: {
    padding: 10,
    fontSize: 20,
    color: 'black',
  },
  sub_container: {
    flexDirection: 'row',
  },
  info_container: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#32373C',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
  },
  timetable_container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 60,
    paddingTop: 20,
  },
});
