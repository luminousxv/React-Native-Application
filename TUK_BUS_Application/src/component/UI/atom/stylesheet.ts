import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
  },
  arrival_container: {
    borderRadius: 15,
    borderWidth: 8,
    backgroundColor: '#ffffff',
    borderColor: '#ADD8E6',
  },
  text: {
    padding: 10,
    fontSize: 30,
    textAlign: 'left',
  },
  sub_text: {
    padding: 10,
    fontSize: 20,
  },
  sub_container: {
    flexDirection: 'row',
  },
  info_container: {
    backgroundColor: '#ffffff',
    borderWidth: 8,
    borderColor: '#ADD8E6',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
  },
});
