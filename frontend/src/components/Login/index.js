import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import fbIcon from 'assets/icons/fb-icon.png';
import ggIcon from 'assets/icons/gg-icon.png';
import InputCustom from 'components/UI/InputCustom';
import { MAX, ROUTES } from 'constant';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import useStyle from './style';

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required('Nhập email')
    .email('Email không hợp lệ')
    .max(MAX.EMAIL_LEN, `Email tối đa ${MAX.EMAIL_LEN}`),
  password: yup
    .string()
    .trim()
    .required('Nhập mật khẩu')
    .max(MAX.PASSWORD_LEN, `Mật khẩu tối đa ${MAX.PASSWORD_LEN}`),
});

function Login() {
  const classes = useStyle();
  const [visiblePw, setVisiblePw] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className={`${classes.root} flex-col`}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off">
      <h1 className={`${classes.title} t-center`}>Đăng nhập</h1>
      <div className="t-center">
        <LockIcon className={classes.lockIcon} />
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

      <Link className={classes.forgotPw} to={ROUTES.FORGOT_PASSWORD}>
        Quên mật khẩu ?
      </Link>

      <Button
        className="_btn _btn-primary"
        type="submit"
        variant="contained"
        color="primary"
        size="large">
        Đăng nhập
      </Button>

      <div className="or-option w-100 t-center">HOẶC</div>
      <div className="d-flex" style={{ gap: '0.8rem' }}>
        <div className={classes.socialBtn}>
          <img className={classes.socialImg} src={fbIcon} alt="FB" />
          <span className={classes.socialName}>Facebook</span>
        </div>
        <div className={classes.socialBtn}>
          <img className={classes.socialImg} src={ggIcon} alt="GG" />
          <span className={classes.socialName}>Google</span>
        </div>
      </div>
    </form>
  );
}

export default Login;
