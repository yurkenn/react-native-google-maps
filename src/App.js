import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import MapView from 'react-native-maps';
import useFetch from './hooks/useFetch';
import Config from 'react-native-config';
import Loading from './components/Loading';
import UserMarker from './components/marker/UserMarker';
import InfoCard from './components/InfoCard/InfoCard';

const App = () => {
  const {data, loading, error} = useFetch(Config.API_URL);
  const [user, setUser] = useState();
  const [infoModalVisible, setinfoModalVisible] = useState(false);

  const renderUserMarker = () => {
    return data.map(
      ({
        id,
        first_name,
        last_name,
        username,
        avatar,
        address: {coordinates},
      }) => {
        return (
          <UserMarker
            key={id}
            coordinates={{
              latitude: coordinates.lat,
              longitude: coordinates.lng,
            }}
            userImageURL={avatar}
            onSelect={() =>
              handlePressUser({
                first_name,
                last_name,
                username,
              })
            }
          />
        );
      },
    );
  };

  const handlePressUser = selectedUser => {
    handleInfoModalVisiblity();
    setUser(selectedUser);
  };

  const handleInfoModalVisiblity = () => {
    setinfoModalVisible(!infoModalVisible);
  };

  return (
    <View style={styles.container}>
      <MapView provider="google" style={styles.map}>
        {data && renderUserMarker()}
      </MapView>
      {loading && <Loading />}
      {user && (
        <InfoCard
          user={user}
          visible={infoModalVisible}
          close={handleInfoModalVisiblity}
        />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
  map: {flex: 1},
});
