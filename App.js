import React, {useRef} from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import useFetch from './src/hook/useFetch';
import Loading from './src/component/Loading';
import UserMarker from './src/component/UserMarker';

const URL = 'https://random-data-api.com/api/users/random_user?size=15';

const App = () => {
  const {data, loading, error} = useFetch(URL);
  const mapRef = useRef();

  const renderMarker = () => {
    return data.map(({id, address: {coordinates}, avatar}) => {
      return (
        <UserMarker
          key={id}
          coordinates={{latitude: coordinates.lat, longitude: coordinates.lng}}
          imageUrl={avatar}
          onPress={() => handleMarkerSelect(coordinates)}
        />
      );
    });
  };

  const handleMarkerSelect = coord => {
    mapRef.current.animateToRegion({
      latitude: coord.lat,
      longitude: coord.lng,
      latitudeDelta: 10,
      longitudeDelta: 10,
    });
  };

  return (
    <View style={{flex: 1}}>
      <MapView style={{flex: 1}} ref={mapRef}>
        {data && renderMarker()}
      </MapView>
      {loading && <Loading />}
    </View>
  );
};

export default App;
