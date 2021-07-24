import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import { current } from '@reduxjs/toolkit';
import InputCustom from 'components/UI/InputCustom';
import UploadButton from 'components/UI/UploadButton';
import { DEFAULTS, MAX } from 'constant';
import { cloudinaryImgOptimize } from 'helper';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMessage } from 'redux/slices/message.slice';
import useStyle from './style';

function UserAccount({ onUpload, onUpdateProfile, email, createdDate }) {
  const userInfo = useSelector((state) => state.userInfo);
  const { username, name, avt, coin } = userInfo;
  const avtSrc = Boolean(avt)
    ? cloudinaryImgOptimize(avt, 150, 150)
    : DEFAULTS.IMAGE_SRC;
  const classes = useStyle();
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef({ name, username });
  const [errors, setErrors] = useState({ name: false, username: false });
  const dispatch = useDispatch();

  const handleInputChange = (v, type = 0) => {
    if (type) {
      errors.name && v !== '' && setErrors({ ...errors, name: false });
      inputRef.current.name = v;
    } else {
      errors.username && v !== '' && setErrors({ ...errors, username: false });
      inputRef.current.username = v;
    }
  };

  const handleCloseEditMode = () => {
    inputRef.current = { name, username };
    setEditMode(false);
  };

  const handleUpdate = () => {
    const { name: currentName, username: currentUsername } = inputRef.current;
    if (currentName === name.trim() && username === currentUsername.trim()) {
      return;
    }

    if (currentName.trim() === '') {
      setErrors({ ...errors, name: true });
      dispatch(setMessage({ type: 'error', message: 'Vui lòng nhập tên' }));
      return;
    }

    if (currentUsername.trim() === '') {
      setErrors({ ...errors, username: true });
      dispatch(
        setMessage({ type: 'error', message: 'Vui lòng nhập username' }),
      );
      return;
    }

    if (currentUsername.indexOf(' ') !== -1) {
      setErrors({ ...errors, username: true });
      dispatch(
        setMessage({
          type: 'error',
          message: 'username không chứa khoảng trống',
        }),
      );
      return;
    }

    if (currentUsername.length > MAX.USERNAME_LEN) {
      setErrors({ ...errors, username: true });
      dispatch(
        setMessage({
          type: 'error',
          message: `username tối đa ${MAX.USERNAME_LEN} ký tự`,
        }),
      );
      return;
    }

    if (currentName.length > MAX.NAME_LEN) {
      setErrors({ ...errors, name: true });
      dispatch(
        setMessage({
          type: 'error',
          message: `Tên tối đa ${MAX.NAME_LEN} ký tự`,
        }),
      );
      return;
    }

    onUpdateProfile(currentName.trim(), currentUsername.trim());
  };

  return (
    <div className={`${classes.wrap} container flex-center`}>
      <div className={classes.root}>
        <div className="flex-center w-100 h-100">
          <div className={classes.avtWrap}>
            <img
              className={`${classes.avt} w-100 h-100`}
              src={avtSrc}
              alt="Avatar Photo"
            />

            <div className={`${classes.cameraIconWrap} flex-center`}>
              <CameraIcon className={classes.cameraIcon} />

              <UploadButton className={classes.fileInput} onChange={onUpload} />
            </div>
          </div>
        </div>

        {!editMode ? (
          <div className="mt-8">
            <h2 className={classes.name}>{name}</h2>
            <h4 className={classes.username}>{username}</h4>
          </div>
        ) : (
          <div className="flex-center-col mt-8">
            <InputCustom
              onChange={(e) => handleInputChange(e.target.value, 1)}
              className="mb-8"
              placeholder={name}
              label="Nhập tên"
              error={errors.name}
              defaultValue={name}
            />
            <InputCustom
              onChange={(e) => handleInputChange(e.target.value, 0)}
              placeholder={username}
              label="Nhập username"
              error={errors.username}
              defaultValue={username}
            />
          </div>
        )}

        <div className={classes.info}>
          {Boolean(email) && <p>{email}</p>}
          {Boolean(createdDate) && <p>Đã tham gia vào {createdDate}</p>}
          <p>
            Số coin hiện tại: <span className={classes.coin}>{coin}</span>
          </p>
        </div>

        {!editMode ? (
          <Button
            onClick={() => setEditMode(true)}
            className={`${classes.editBtn} _btn _btn-primary w-100`}
            startIcon={<EditIcon />}>
            Chỉnh sửa
          </Button>
        ) : (
          <div className="d-flex w-100">
            <Button
              onClick={handleCloseEditMode}
              className={`${classes.editBtn} _btn _btn-outlined-accent w-50`}>
              Huỷ bỏ
            </Button>
            <Button
              onClick={handleUpdate}
              className={`${classes.editBtn} _btn _btn-primary ml-4 w-50`}>
              Cập nhật
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

UserAccount.propTypes = {
  createdDate: PropTypes.any,
  email: PropTypes.string,
  onUpload: PropTypes.func,
  onUpdateProfile: PropTypes.func,
};

export default UserAccount;
