import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import fbIcon from 'assets/icons/fb-icon.png';
import ggIcon from 'assets/icons/gg-icon.png';
import InputCustom from 'components/UI/InputCustom';
import { MAX } from 'constant';
import React, { useState } from 'react';
import useStyle from './style';

function Login() {
  const classes = useStyle();
  const [visiblePw, setVisiblePw] = useState(false);

  return (
    <form className={`${classes.root} flex-col`} autoComplete="off">
      <h1 className={`${classes.title} t-center`}>Đăng nhập</h1>
      <div className="t-center">
        <LockIcon className={classes.lockIcon} />
      </div>

      <InputCustom
        label="Email"
        size="small"
        placeholder="Nhập email"
        inputProps={{ maxLength: MAX.EMAIL_LEN, autoFocus: true }}
      />
      <InputCustom
        label="Mật khẩu"
        placeholder="Nhập mật khẩu"
        size="small"
        inputProps={{
          maxLength: MAX.EMAIL_LEN,
          type: visiblePw ? 'text' : 'password',
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

      <Button
        className="_btn _btn-primary"
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
