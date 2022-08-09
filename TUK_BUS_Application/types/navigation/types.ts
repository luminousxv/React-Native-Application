import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  TabScreen: undefined;
};

export type TabParamList = {
  등교: undefined;
  하교: undefined;
};

type Tab_Props = NativeStackScreenProps<RootStackParamList, 'TabScreen'>;

type TabNavigationProp = Tab_Props['navigation'];

export type Tab_Screen_Props = {
  navigation: TabNavigationProp;
};
