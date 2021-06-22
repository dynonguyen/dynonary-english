import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import SelectCustom from 'components/UI/SelectCustom';
import { WORD_LEVELS, WORD_SPECIALTY, WORD_TYPES } from 'constant';
import { TOPIC_OPTIONS } from 'constant/topics';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useStyle from './style';

function addAllOption(optionList = []) {
  return [{ value: '-1', label: 'Tất cả' }, ...optionList];
}

function WordPack({ onChoose }) {
  const classes = useStyle();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const type = target.type?.value || '-1',
      specialty = target.specialty?.value || '-1',
      topic = target.topic?.value || '-1',
      level = target.level?.value || '-1';

    onChoose({ type, specialty, level, topic });
    handleClose();
  };

  return (
    <Dialog
      classes={{ paper: classes.dialogPaper }}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      open={open}>
      <DialogTitle classes={{ root: classes.title }}>
        Lựa chọn gói từ vựng
      </DialogTitle>

      <DialogContent dividers classes={{ dividers: classes.breakLine }}>
        <form id="wordPackForm" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <SelectCustom
                label="Loại từ"
                className="w-100"
                options={addAllOption(WORD_TYPES)}
                inputProps={{ name: 'type' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectCustom
                label="Cấp độ"
                className="w-100"
                options={addAllOption(WORD_LEVELS)}
                inputProps={{ name: 'level' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectCustom
                label="Chuyên ngành"
                className="w-100"
                options={addAllOption(WORD_SPECIALTY)}
                inputProps={{ name: 'specialty' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectCustom
                label="Chủ đề"
                className="w-100"
                options={addAllOption(TOPIC_OPTIONS)}
                inputProps={{ name: 'topic' }}
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>

      <DialogActions>
        <Button
          component="button"
          type="submit"
          form="wordPackForm"
          onClick={handleClose}
          className="_btn _btn-accent"
          variant="contained"
          color="primary">
          Lưu
        </Button>
      </DialogActions>
    </Dialog>
  );
}

WordPack.propTypes = {
  onChoose: PropTypes.func,
};

WordPack.defaultProps = {
  onChoose: function () {},
};

export default WordPack;