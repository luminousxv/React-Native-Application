import React from 'react';
import {View} from 'react-native';
import {SubwayInfo, TimeInfo} from '../../../../types/navigation/types';
import {styles} from '../../../style/stylesheet.css';
import ExclusiveComponent from '../common/component/exclusive_component';
import FlatlistComponent from '../atom/flatlist_container';
import FullTime from '../atom/full_time_component';

interface IProps {
  timeinfo: TimeInfo[];
  refreshing: boolean;
  onRefresh: () => void;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
  subwayinfo: SubwayInfo[];
  endofService: boolean;
  alwaysOn: boolean;
  text: string;
}

const LiveSchedule = ({
  timeinfo,
  refreshing,
  onRefresh,
  setVisible,
  isVisible,
  subwayinfo,
  endofService,
  alwaysOn,
  text,
}: IProps) => {
  return (
    <View style={styles.container}>
      {endofService ? (
        <ExclusiveComponent item1="운행종료" />
      ) : alwaysOn ? (
        <FullTime
          text={text}
          subwayinfo={subwayinfo}
          onRefresh={onRefresh}
          refreshing={refreshing}
        />
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
