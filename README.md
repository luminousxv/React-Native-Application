# TUK BUS Application
TUK BUS Application with React-Native
## Technology Stack
- <img src="https://img.shields.io/badge/ReactNative-61DAFB?style=flat-square&logo=React&logoColor=black"/>
- <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=black"/>
- <img src="https://img.shields.io/badge/Xcode-147EFB?style=flat-square&logo=Xcode&logoColor=black"/>
- <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=black"/>
- <img src="https://img.shields.io/badge/Sourcetree-0052CC?style=flat-square&logo=Sourcetree&logoColor=black"/>
- [Axios](https://github.com/axios/axios)
- [webview](https://github.com/react-native-webview/react-native-webview)


## API
- [카카오네비 미래 운행 정보 길찾기](https://developers.kakaomobility.com/docs/navi-api/future/)
- [카카오맵 지도 생성](https://apis.map.kakao.com/web/sample/basicMap/)

## Library
- [react navigation](https://reactnavigation.org)
- [react-native-page](https://callstack.github.io/react-native-paper/2.0/index.html)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [moment.js](https://momentjs.com/)

## What it looks like
### 등/하교
<img src="./image/home.gif" width=300>

[카카오네비 미래 운행 정보 길찾기](https://developers.kakaomobility.com/docs/navi-api/future/) 을 이용해 도착예정시간을 받아오고, 서버에서 지하철 실시간 위치 정보를 받아와 표시한다.

### 전체시간표
<img src="./image/all_schedule.gif" width=300>

### 타는 위치
<img src="./image/shuttle_location.gif" width=300>

[webview](https://github.com/react-native-webview/react-native-webview) 를 활용해 [카카오맵 지도 생성](https://apis.map.kakao.com/web/sample/basicMap/)을 해 타는 위치를 표시한다.

### 17시 이후 등교
<img src="./image/17시이후등교.png" width=300>

### 상시운행
<img src="./image/상시운행.png" width=300>