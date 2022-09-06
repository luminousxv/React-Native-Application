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
  button_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    // borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'black',
  },
  time_text: {
    fontSize: 30,
    textAlign: 'left',
  },
  left_time_text: {
    textAlign: 'right',
    fontSize: 18,
    padding: 5,
    color: '#FF3333',
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
  sub_direction_text: {
    padding: 11,
    fontSize: 15,
    color: 'black',
    textAlign: 'left',
  },
  sub_location_text: {
    padding: 10,
    fontSize: 15,
    color: 'black',
    textAlign: 'right',
  },
  sub_title_text: {
    padding: 10,
    fontSize: 20,
    color: 'black',
  },
  sub_container: {
    flexDirection: 'column',
    flex: 1,
  },
  info_container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
  },
  timetable_container: {
    flex: 1,
    marginRight: 30,
    marginLeft: 30,
  },
  touchable: {
    flex: 1,
    borderWidth: 3,
    borderColor: '#E0E0E0',
    padding: 10,
    backgroundColor: 'white',
  },
  touchable_text: {
    textAlign: 'center',
    fontSize: 15,
  },
  webview_container: {
    flex: 1,
  },
  location_container: {
    flex: 1,
  },
  location_title_container: {
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 2,
    paddingBottom: 0,
  },
  location_title_text: {
    textAlign: 'center',
    fontSize: 20,
  },
  map_conatiner: {
    height: 300,
  },
  last_map_info_container: {
    backgroundColor: 'white',
  },
  map_info_container: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  map_info_text: {
    marginLeft: 10,
    color: 'grey',
  },
});
