import {useEffect, useRef, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {Alert} from 'react-native';
import {
  handleAddContact,
  handleDelete,
  handleDetailContact,
  handleEditContact,
  handleGetContact,
  setDataContact,
} from '../../redux/action/contact-action';
import {launchImageLibrary} from 'react-native-image-picker';

const useDashboard = navigation => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [visibleDetail, setVisibleDetail] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [dataDetail, setDataDetail] = useState(false);
  const [valueFirstName, setValueFirstName] = useState(dataDetail?.firstName);
  const [valueLastName, setValueLastName] = useState(dataDetail?.lastName);
  const [age, setAge] = useState(dataDetail?.age);
  const [image, setImage] = useState('');
  const {dataContact, detailContact} = useSelector(
    ({contactReducer}) => ({
      dataContact: contactReducer.dataContact,
      detailContact: contactReducer.detailContact,
    }),
    shallowEqual,
  );
  useEffect(() => {
    if (dataContact === undefined) {
      dispatch(handleGetContact());
    }
  }, [dataContact]);

  const filtered = !search
    ? dataContact?.data
    : dataContact?.data?.filter(l =>
        l.firstName.toLowerCase().includes(search.toLowerCase()),
      );

  const handleBtnDelete = () => {
    setVisibleDelete(false);
    dispatch(handleDelete(dataDetail?.id));
    dispatch(setDataContact(undefined));
  };

  const handleDetail = value => {
    setVisibleDetail(true);
    dispatch(handleDetailContact(value.id));
  };

  const handleShowModalEdit = value => {
    setDataDetail(value);
    setVisibleEdit(true);
  };

  const handlePostEdit = () => {
    const payload = {
      firstName: valueFirstName,
      lastName: valueLastName,
      age: age,
      photo: image,
    };
    setVisibleEdit(false);
    dispatch(setDataContact(undefined));
    dispatch(handleEditContact(dataDetail.id, payload));
  };

  const handlePostAddContact = () => {
    const payload = {
      firstName: valueFirstName === undefined ? '' : valueFirstName,
      lastName: valueLastName === undefined ? '' : valueLastName,
      age: age === undefined ? '' : age,
      photo: 'image',
    };
    setValueFirstName('');
    setValueLastName('');
    setAge('');
    setVisibleAdd(false);
    dispatch(setDataContact(undefined));
    dispatch(handleAddContact(payload));
    dispatch(handleGetContact());
  };

  const handleEditPhoto = async () => {
    try {
      const options = {
        saveToPhotos: true,
        mediaType: 'photo',
        includeBase64: false,
        quality: 0.2,
      };
      const result = await launchImageLibrary(options);
      if (result?.didCancel === true) {
        console.log('cancel');
      }
      if (result?.assets) {
        setImage(result?.assets[0]?.uri);

        // dispatch(handlePostEditProfile('editphoto', formData));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    dataContact,
    filtered,
    setSearch,
    visibleDelete,
    setVisibleDelete,
    setDataDetail,
    dataDetail,
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
  };
};
export default useDashboard;
