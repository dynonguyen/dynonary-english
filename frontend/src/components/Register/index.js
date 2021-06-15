import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LoopIcon from '@material-ui/icons/Loop';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import SocialNetworkLogin from 'components/SocialNetworkLogin';
import InputCustom from 'components/UI/InputCustom';
import { MAX, MIN, REGEX } from 'constant';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useStyle from './style';

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required('Nhập email')
    .email('Email không hợp lệ')
    .max(MAX.EMAIL_LEN, `Email tối đa ${MAX.EMAIL_LEN}`),
  name: yup
    .string()
    .trim()
    .required('Nhập họ tên')
    .max(MAX.NAME_LEN, `Họ tên tối đa ${MAX.NAME_LEN} ký tự`)
    .matches(REGEX.NAME, 'Họ tên không chứ số và ký tự đặc biệt'),
  password: yup
    .string()
    .trim()
    .required('Nhập mật khẩu')
    .min(MIN.PASSWORD_LEN, `Mật khẩu ít nhất ${MIN.PASSWORD_LEN} ký tự`)
    .max(MAX.PASSWORD_LEN, `Mật khẩu tối đa ${MAX.PASSWORD_LEN}`),
});

function Register({ onRegister, loading }) {
  const classes = useStyle();
  const [visiblePw, setVisiblePw] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form
      className={`${classes.root} flex-col`}
      onSubmit={handleSubmit(onRegister)}
      autoComplete="off">
      <div className="flex-col">
        <h1 className={`${classes.title} t-center`}>Tạo tài khoản</h1>
        <div className="t-center mt-5">
          <AccountCircleIcon className={classes.accountIcon} />
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
        <InputCustom
          label="Họ tên"
          size="small"
          placeholder="Nhập họ tên"
          error={Boolean(errors.name)}
          inputProps={{
            name: 'name',
            maxLength: MAX.NAME_LEN,
            ...register('name'),
          }}
        />
        {errors.name && <p className="text-error">{errors.name?.message}</p>}
      </div>

      <div className="flex-col">
        <InputCustom
          label="Mật khẩu"
          size="small"
          placeholder="Nhập mật khẩu"
          error={Boolean(errors.password)}
          inputProps={{
            name: 'password',
            maxLength: MAX.EMAIL_LEN,
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

      <Button
        className="_btn _btn-primary"
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        endIcon={loading && <LoopIcon className="ani-spin" />}
        size="large">
        Đăng ký
      </Button>

      <div className="or-option w-100 t-center">HOẶC</div>
      <SocialNetworkLogin />
    </form>
  );
}

Register.propTypes = {
  onRegister: PropTypes.func,
  loading: PropTypes.bool,
};

Register.defaultProps = {
  onRegister: function () {},
  loading: false,
};

export default Register;
