import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock';
import LoopIcon from '@material-ui/icons/Loop';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import makeStyles from '@material-ui/styles/makeStyles';
import InputCustom from 'components/UI/InputCustom';
import { formStyle } from 'components/UI/style';
import { MAX, MIN } from 'constant';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setMessage } from 'redux/slices/message.slice';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required('Nhập email')
    .email('Email không hợp lệ')
    .max(MAX.EMAIL_LEN, `Email tối đa ${MAX.EMAIL_LEN}`),
  verifyCode: yup
    .string()
    .trim()
    .required('Nhập mã xác thực')
    .length(MAX.VERIFY_CODE, `Mã xác thực có ${MAX.VERIFY_CODE} chữ số`)
    .matches(
      new RegExp(`\\d{${MAX.VERIFY_CODE}}`),
      `Mã xác thực là số có ${MAX.VERIFY_CODE} chữ số`,
    ),
  password: yup
    .string()
    .trim()
    .required('Nhập mật khẩu')
    .min(MIN.PASSWORD_LEN, `Mật khẩu ít nhất ${MIN.PASSWORD_LEN} ký tự`)
    .max(MAX.PASSWORD_LEN, `Mật khẩu tối đa ${MAX.PASSWORD_LEN}`),
  confirmPw: yup
    .string()
    .trim()
    .required('Xác nhận lại mật khẩu')
    .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp'),
});

function ForgotPassword({ onSubmit, loading, mailSending, onSendVerifyCode }) {
  const classes = makeStyles(formStyle())();
  const [visiblePw, setVisiblePw] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const handleSendCode = async () => {
    const email = getValues('email');

    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!regex.test(email.toLowerCase())) {
      dispatch(
        setMessage({
          type: 'error',
          message: 'Email không hợp lệ',
        }),
      );
      return;
    }

    onSendVerifyCode(email);
  };

  return (
    <form
      className={`${classes.root} flex-col`}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off">
      <div className="flex-col">
        <h1 className={`${classes.title} t-center`}>Lấy lại mật khẩu</h1>
        <div className="t-center mt-5">
          <LockIcon className={classes.labelIcon} />
        </div>
      </div>

      <div className="flex-col">
        <InputCustom
          label="Email"
          size="small"
          placeholder="Nhập email"
          error={Boolean(errors.email)}
          inputProps={{
            name: 'email',
            maxLength: MAX.EMAIL_LEN,
            autoFocus: true,
            ...register('email'),
          }}
        />
        {errors.email && <p className="text-error">{errors.email?.message}</p>}
      </div>

      <div className="flex-col">
        <div className="d-flex">
          <InputCustom
            className="w-50"
            label="Mã xác nhận"
            size="small"
            placeholder="X X X X X X"
            error={Boolean(errors.verifyCode)}
            inputProps={{
              name: 'verifyCode',
              maxLength: MAX.VERIFY_CODE,
              ...register('verifyCode'),
            }}
          />
          <Button
            className="_btn _btn-stand w-50"
            disabled={mailSending}
            endIcon={mailSending && <LoopIcon className="ani-spin" />}
            onClick={handleSendCode}>
            Gửi mã
          </Button>
        </div>
        {errors.verifyCode && (
          <p className="text-error">{errors.verifyCode?.message}</p>
        )}
      </div>

      <div className="flex-col">
        <InputCustom
          label="Mật khẩu"
          size="small"
          placeholder="Nhập mật khẩu"
          error={Boolean(errors.password)}
          inputProps={{
            name: 'password',
            maxLength: MAX.PASSWORD_LEN,
            type: visiblePw ? 'text' : 'password',
            ...register('password'),
          }}
          endAdornment={
            visiblePw ? (
              <VisibilityIcon
                className={`${classes.icon} ${classes.visiblePw}`}
                onClick={() => setVisiblePw(false)}
              />
            ) : (
              <VisibilityOffIcon
                className={classes.icon}
                onClick={() => setVisiblePw(true)}
              />
            )
          }
        />
        {errors.password && (
          <p className="text-error">{errors.password?.message}</p>
        )}
      </div>

      <div className="flex-col">
        <InputCustom
          label="Xác nhận mật khẩu"
          size="small"
          placeholder="Nhập lại mật khẩu"
          error={Boolean(errors.confirmPw)}
          inputProps={{
            name: 'confirmPw',
            maxLength: MAX.PASSWORD_LEN,
            type: visiblePw ? 'text' : 'password',
            ...register('confirmPw'),
          }}
          endAdornment={
            visiblePw ? (
              <VisibilityIcon
                className={`${classes.icon} ${classes.visiblePw}`}
                onClick={() => setVisiblePw(false)}
              />
            ) : (
              <VisibilityOffIcon
                className={classes.icon}
                onClick={() => setVisiblePw(true)}
              />
            )
          }
        />
        {errors.confirmPw && (
          <p className="text-error">{errors.confirmPw?.message}</p>
        )}
      </div>

      <Button
        className="_btn _btn-primary"
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        endIcon={loading && <LoopIcon className="ani-spin" />}
        size="large">
        Đổi mật khẩu
      </Button>
    </form>
  );
}

ForgotPassword.propTypes = {
  loading: PropTypes.bool,
  mailSending: PropTypes.bool,
  onSendVerifyCode: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default ForgotPassword;
