import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  FlatList,
} from 'react-native';
import {Container, Header} from '../../components';
import styles from './styles';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';

const Detail = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {detailMovie, isLoadingMenu} = useSelector(
    ({movieReducer}) => ({
      detailMovie: movieReducer.detailMovie,
      isLoadingMenu: movieReducer.isLoadingMenu,
    }),
    shallowEqual,
  );
  const title = route.params.data;
  return (
    <Container backgroundColor={'#f0f2f0'}>
      <Header dispatch={dispatch} navigation={navigation} title={title} />
      {detailMovie === undefined && (
        <ActivityIndicator
          style={styles.margintop}
          size="small"
          color="black"
        />
      )}
      <ScrollView contentContainerStyle={styles.containerdashboard}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original${detailMovie?.poster_path}`,
          }}
          style={styles.img}
        />
        <View style={styles.genresection}>
          {detailMovie?.genres?.map((val, index) => {
            return (
              <Text style={styles.textgenre} key={index}>
                {val?.name}
                {detailMovie?.genres?.length - 1 === index ? '' : ','}
              </Text>
            );
          })}
        </View>
        {detailMovie?.production_countries?.map((val, index) => {
          return (
            <Text style={styles.sinopsi} key={index}>
              {val?.name}
              {detailMovie?.production_countries?.length - 1 === index
                ? ''
                : ','}
            </Text>
          );
        })}
        <Text style={styles.sinopsi}>
          leanguage: {detailMovie?.spoken_languages[0]?.name}
        </Text>
        <Text style={styles.sinopsi}>status: {detailMovie?.status}</Text>
        <Text style={styles.sinopsi}>
          release date: {detailMovie?.release_date}
        </Text>
        <Text style={styles.sinopsi}>synopsis: {detailMovie?.overview}</Text>
      </ScrollView>
    </Container>
  );
};

export default Detail;
