import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import UploadButton from 'components/UI/UploadButton';
import { DEFAULTS } from 'constant';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import useStyle from './style';

function UserAccount({ onUpload, email, createdDate }) {
  const userInfo = useSelector((state) => state.userInfo);
  const { username, name, avt, coin } = userInfo;
  const avtSrc = Boolean(avt) ? avt : DEFAULTS.IMAGE_SRC;
  const classes = useStyle();

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

        <div className="mt-8">
          <h2 className={classes.name}>{name}</h2>
          <h4 className={classes.username}>{username}</h4>
        </div>

        <div className={classes.info}>
          {Boolean(email) && <p>{email}</p>}
          {Boolean(createdDate) && <p>Đã tham gia vào {createdDate}</p>}
          <p>
            Số coin hiện tại: <span className={classes.coin}>{coin}</span>
          </p>
        </div>

        <Button
          className={`${classes.editBtn} _btn _btn-primary w-100`}
          startIcon={<EditIcon />}>
          Chỉnh sửa
        </Button>
      </div>
    </div>
  );
}

UserAccount.propTypes = {
  createdDate: PropTypes.any,
  email: PropTypes.string,
  onUpload: PropTypes.func,
};

export default UserAccount;
