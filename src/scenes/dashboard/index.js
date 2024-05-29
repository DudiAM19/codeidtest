import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Card,
  Container,
  Header,
  ModalDelete,
  ModalDetail,
  ModalEdit,
} from '../../components';
import styles from './styles';
import {useDispatch} from 'react-redux';
import useDashboard from './useDashboard';
import ModalAdd from '../../components/modaladd';

const DashBoard = ({navigation}) => {
  const {
    dataContact,
    filtered,
    setSearch,
    visibleDelete,
    setVisibleDelete,
    dataDetail,
    setDataDetail,
    handleBtnDelete,
    handleDetail,
    visibleDetail,
    setVisibleDetail,
    detailContact,
    visibleEdit,
    setVisibleEdit,
    handleShowModalEdit,
    handlePostEdit,
    setValueFirstName,
    setValueLastName,
    setAge,
    valueFirstName,
    valueLastName,
    age,
    visibleAdd,
    setVisibleAdd,
    handlePostAddContact,
    handleEditPhoto,
    image,
  } = useDashboard(navigation);

  return (
    <Container backgroundColor={'#f0f2f0'}>
      <Header onChangeText={e => setSearch(e)} search title={'Contact List'} />
      <View style={styles.containerdashboard}>
        <TouchableOpacity
          onPress={() => setVisibleAdd(true)}
          style={styles.btnadd}>
          <Text style={styles.textbtn}>Add Contact</Text>
        </TouchableOpacity>
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
                  onPress={() => handleDetail(val)}
                  onPressDelete={() => {
                    setVisibleDelete(true);
                    setDataDetail(val);
                  }}
                  onPressEdit={() => handleShowModalEdit(val)}
                  key={index}
                  img={val.photo}
                  name={val.firstName}
                  age={val.age}
                />
              );
            })}
        </ScrollView>
      </View>
      <ModalDelete
        name={dataDetail?.firstName}
        onDelete={() => handleBtnDelete()}
        onCancel={() => setVisibleDelete(false)}
        visibleModalDelete={visibleDelete}
      />
      <ModalDetail
        data={detailContact}
        loading={detailContact === undefined}
        onCancel={() => setVisibleDetail(false)}
        visibleModalDetail={visibleDetail}
      />
      <ModalEdit
        onChangeFirstName={e => setValueFirstName(e)}
        onChangeLastName={e => setValueLastName(e)}
        onChangeAge={e => setAge(e)}
        valueFirstName={valueFirstName}
        valueLastName={valueLastName}
        valueAge={age}
        data={dataDetail}
        onCancel={() => setVisibleEdit(false)}
        onEdit={() => handlePostEdit()}
        visibleModalEdit={visibleEdit}
      />
      <ModalAdd
        visibleModalAdd={visibleAdd}
        uri={image}
        onChangeFirstName={e => setValueFirstName(e)}
        onChangeLastName={e => setValueLastName(e)}
        onChangeAge={e => setAge(e)}
        onPressEditImage={() => handleEditPhoto()}
        onEdit={() => handlePostAddContact()}
        onCancel={() => {
          setVisibleAdd(false);
          setValueFirstName('');
          setValueLastName('');
          setAge('');
        }}
        valueFirstName={valueFirstName}
        valueLastName={valueLastName}
        valueAge={age}
      />
    </Container>
  );
};

export default DashBoard;
