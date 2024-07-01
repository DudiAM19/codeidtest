import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Card,
  Container,
  CustomModal,
  Header,
  Icon,
  ModalDelete,
  ModalDetail,
  ModalEdit,
} from '../../components';
import styles from './styles';
import {useDispatch} from 'react-redux';
import useDashboard from './useDashboard';
import ModalAdd from '../../components/modaladd';
import Spinner from 'react-native-loading-spinner-overlay';
import {setDataLike} from '../../redux/action/movie-action';

const DashBoard = ({navigation}) => {
  const {
    filtered,
    setSearch,
    arrTab,
    uniqId,
    setUniqId,
    handleDetail,
    isLoadingMenu,
    handlePagenation,
    handlePressLike,
    loadLike,
    isLiked,
    dispatch,
    handleTab,
  } = useDashboard(navigation);

  return (
    <Container backgroundColor={'#f0f2f0'}>
      <Header onChangeText={e => setSearch(e)} search title={'Contact List'} />
      <View style={styles.containerdashboard}>
        <View style={styles.tabsection}>
          {arrTab.map((val, index) => {
            return (
              <TouchableOpacity
                onPress={() => handleTab(index)}
                style={styles.tabbtn(uniqId, index)}
                key={index}>
                <Text style={styles.texttab(uniqId, index)}>{val.text}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {filtered === undefined && (
            <ActivityIndicator
              size="small"
              color="black"
              style={styles.margintop}
            />
          )}
          {filtered?.length === 0 && (
            <Text style={styles.textnotfound}>Data not found</Text>
          )}
          {filtered !== undefined &&
            filtered?.map((val, index) => {
              return (
                <Card
                  onPressLike={() => handlePressLike(val)}
                  // onPressEdit={() => handleShowModalEdit(val)}
                  onPress={() => handleDetail(val)}
                  key={index}
                  img={val.backdrop_path}
                  name={val.original_title}
                  rating={val.vote_average}
                />
              );
            })}
        </ScrollView>
        <View style={styles.pagesection}>
          {arrTab.map((val, index) => {
            return (
              <TouchableOpacity
                onPress={() => handlePagenation(val.label)}
                key={index}
                style={styles.pagesectino}>
                <Icon
                  type="Ionicons"
                  name={
                    val.label === 'back'
                      ? 'arrow-back-circle'
                      : 'arrow-forward-circle'
                  }
                  style={styles.icon}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      {Platform.OS === 'android' ? <Spinner visible={loadLike} /> : null}
      <CustomModal
        onBackdropPress={() => dispatch(setDataLike(false))}
        visible={isLiked}>
        <View style={styles.conteinermodal}>
          <Text style={styles.textmodal}>Success add to Favorite</Text>
          <Icon style={styles.iconmodal} type="Entypo" name="check" />
        </View>
      </CustomModal>
    </Container>
  );
};

export default DashBoard;
