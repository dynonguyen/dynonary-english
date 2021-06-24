import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import React from 'react';
import ThemeSetting from '../Theme';
import ToggleNavButton from '../ToggleNavButton';
import VoiceSetting from '../Voice';
import useStyle from './style';

function SettingModal({ open, onClose }) {
  const classes = useStyle();

  return (
    <Dialog
      classes={{
        paper: classes.rootPaper,
      }}
      onClose={onClose}
      aria-labelledby="setting dialog"
      disableBackdropClick={true}
      maxWidth="md"
      open={open}>
      <div className={`${classes.title} flex-center-between`}>
        <span>Cài Đặt</span>
        <CloseIcon className="cur-pointer" onClick={onClose} />
      </div>

      <DialogContent classes={{ root: classes.content }}>
        <div className={classes.contentItem}>
          <h2 className={classes.contentLabel}>Chủ đề</h2>
          <ThemeSetting />
        </div>

        <div className={classes.contentItem}>
          <h2 className={classes.contentLabel}>Giọng đọc</h2>
          <VoiceSetting />
        </div>

        <div className={classes.contentItem}>
          <h2 className={classes.contentLabel}>Cài đặt khác</h2>
          <div>
            <h3 className="dyno-label my-5">Hiện/Ẩn thanh điều hướng</h3>
            <ToggleNavButton />
          </div>
        </div>
      </DialogContent>

      <DialogActions className={classes.actions}>
        <Button
          className="_btn _btn-primary"
          onClick={onClose}
          color="primary"
          size="small"
          variant="contained">
          Đóng
        </Button>
      </DialogActions>
    </Dialog>
  );
}

SettingModal.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

SettingModal.defaultProps = {
  onClose: function () {},
  open: false,
};

export default SettingModal;
