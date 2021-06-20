import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import Skeleton from '@material-ui/lab/Skeleton';
import Compressor from 'compressorjs';
import { MAX } from 'constant';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from 'redux/slices/message.slice';
import useStyle from './style';

function checkFile(file) {
  if (!file) return { status: false, message: 'File không hợp lệ' };
  const { type, size } = file;

  if (type.split('/')[0] !== 'image')
    return { status: false, message: 'File gửi lên phải là một ảnh' };

  if (size / 1024 ** 2 > MAX.IMG_SIZE)
    return {
      status: false,
      message: `Kích thước của ảnh tối đa là ${MAX.IMG_SIZE} MB`,
    };

  return { status: true };
}

function UploadButton({ title, className, onChange, resetFlag }) {
  const classes = useStyle();
  const dispatch = useDispatch();
  const [state, setState] = useState({ status: 0, data: null });

  useEffect(() => {
    if (!resetFlag) return;
    // reset value if parent component reset, except first render
    setState({ status: 0, data: null });
  }, [resetFlag]);

  const loadFileError = () => {
    onChange(null);
    setState({ status: 0 });
    dispatch(
      setMessage({
        type: 'error',
        message: 'Tải tập tin thất bại, thử lại',
      }),
    );
  };

  const onFileChange = (file) => {
    const { status, message = '' } = checkFile(file);
    if (!status) {
      dispatch(setMessage({ type: 'error', message }));
      onChange(null);
      return;
    }

    setState({ status: 1 }); // loading
    const size = file.size / 1024 ** 2;

    // compress image
    new Compressor(file, {
      quality: size > 1 ? 0.6 : 0.8,

      success(fileResult) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(fileResult);

        fileReader.onerror = loadFileError;

        fileReader.onload = function (e) {
          const imgSrcBase64 = e.target.result;
          onChange(imgSrcBase64);
          setState({
            status: 2,
            data: {
              imgSrc: imgSrcBase64,
              fileName: fileResult.name,
              fileSize: (fileResult.size / 1024 ** 2).toFixed(2),
            },
          });
        };
      },

      error() {
        loadFileError();
      },
    });
  };

  const onRemoveFile = () => {
    onChange(null);
    setState({ status: 0, data: null });
  };

  return (
    <div className={className}>
      {/* waiting */}
      {state.status === 0 && (
        <>
          <input
            className={classes.input}
            accept="image/*"
            id="button-file"
            htmlFor="contained-button-file"
            type="file"
            onChange={(e) => onFileChange(e.target.files[0])}
          />
          <label htmlFor="button-file">
            <Button
              className={`${classes.btn} w-100 h-100`}
              variant="contained"
              color="primary"
              component="span"
              endIcon={<CloudUploadIcon />}>
              {title}
            </Button>
          </label>
        </>
      )}

      {/* loading */}
      {state.status === 1 && (
        <Skeleton variant="rect" classes={{ root: classes.skeleton }} />
      )}

      {/* done */}
      {state.status === 2 && (
        <div className={`${classes.review} w-100 h-100 flex-center-between`}>
          <img src={state.data?.imgSrc} alt="photo" />
          <p>{`${state.data?.fileName} (${state.data?.fileSize} MB)`} </p>
          <DeleteIcon className="icon cur-pointer" onClick={onRemoveFile} />
        </div>
      )}
    </div>
  );
}

UploadButton.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  resetFlag: PropTypes.number,
};

UploadButton.defaultProps = {
  title: 'Upload',
  className: '',
  onChange: () => {},
  resetFlag: 0,
};

export default UploadButton;
