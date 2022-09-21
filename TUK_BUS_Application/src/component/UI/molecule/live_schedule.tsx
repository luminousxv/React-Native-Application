import React from 'react';
import {View} from 'react-native';
import {SubwayInfo, TimeInfo} from '../../../../types/navigation/types';
import {styles} from '../../../style/stylesheet.css';
import EndofService from '../atom/end_of_service_container';
import FlatlistComponent from '../atom/flatlist_container';

interface IProps {
  timeinfo: TimeInfo[];
  refreshing: boolean;
  onRefresh: () => void;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
  subwayinfo: SubwayInfo[];
  endofService: boolean;
}

const LiveSchedule = ({
  timeinfo,
  refreshing,
  onRefresh,
  setVisible,
  isVisible,
  subwayinfo,
  endofService,
}: IProps) => {
  return (
    <View style={styles.container}>
      {endofService ? (
        <EndofService />
      ) : (
        <FlatlistComponent
          timeinfo={timeinfo}
          refreshing={refreshing}
          onRefresh={onRefresh}
          setVisible={setVisible}
          isVisible={isVisible}
          subwayinfo={subwayinfo}
        />
      )}
    </View>
  );
};

export default LiveSchedule;
