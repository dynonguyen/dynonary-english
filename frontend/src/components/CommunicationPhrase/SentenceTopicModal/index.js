import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tag from 'components/UI/Tag';
import { SENTENCE_TOPICS } from 'constant/sentence-topics';
import { addOrDelItemInArray } from 'helper';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import useStyle from './style';

function SentenceTopicModal({ onClose, onSelect, open }) {
  const classes = useStyle();
  const topicRef = useRef([]);

  return (
    <Dialog
      classes={{ paper: classes.dialogPaper }}
      open={open}
      keepMounted
      maxWidth="md"
      onClose={onClose}>
      <DialogTitle className={classes.title}>Chọn chủ đề</DialogTitle>

      <DialogContent dividers classes={{ dividers: classes.breakLine }}>
        <ul className="d-flex flex-wrap">
          {SENTENCE_TOPICS.map((topic, index) => (
            <div className="m-2" key={index}>
              <Tag
                title={topic.title}
                id={topic.key}
                onChange={(idTopic) =>
                  addOrDelItemInArray(topicRef.current, idTopic)
                }
              />
            </div>
          ))}
        </ul>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} className="_btn _btn-stand">
          Đóng
        </Button>
        <Button
          onClick={() => onSelect(topicRef.current)}
          className="_btn _btn-primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

SentenceTopicModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSelect: PropTypes.func,
};

SentenceTopicModal.defaultProps = {
  open: false,
  onClose: function () {},
  onSelect: function () {},
};

export default SentenceTopicModal;
