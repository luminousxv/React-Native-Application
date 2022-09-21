import React from 'react';
import {FlatList, RefreshControl, View, TouchableOpacity} from 'react-native';
import {TimeInfo, SubwayInfo} from '../../../../types/navigation/types';
import {styles} from '../../../style/stylesheet.css';
import {
  InfoContainer,
  SubwayContainer,
} from '../common/component/subway_container';

interface IProps {
  timeinfo: TimeInfo[];
  refreshing: boolean;
  onRefresh: () => void;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
  subwayinfo: SubwayInfo[];
}

const FlatlistComponent = ({
  timeinfo,
  refreshing,
  onRefresh,
  setVisible,
  isVisible,
  subwayinfo,
}: IProps) => {
  return (
    <FlatList
      data={timeinfo}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={'black'}
        />
      }
      renderItem={({item, index}) => {
        if (index === 0) {
          return (
            <View>
              <TouchableOpacity
                style={styles.arrival_container}
                onPress={() => setVisible(!isVisible)}>
                <InfoContainer item={item} />
              </TouchableOpacity>
              {!isVisible && <SubwayContainer data={subwayinfo} />}
            </View>
          );
        }
        return (
          <View style={styles.arrival_container}>
            <InfoContainer item={item} />
          </View>
        );
      }}
    />
  );
};

export default FlatlistComponent;
