import Avatar from '@material-ui/core/Avatar';
import logoUrl from 'assets/images/logo.png';
import NativeInput from 'components/UI/NativeInput';
import ThemeButton from 'components/UI/ThemeButton';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyle from './style';

function Navigation() {
  const classes = useStyle();

  return (
    <div className={`${classes.navWrapper} w-100vw`}>
      <div className={`${classes.nav} w-100`}>
        <div className="container h-100 flex-center-between">
          {/* Logo */}
          <Link to="/">
            <img className={classes.imgSize} src={logoUrl} alt="Logo" />
          </Link>

          {/* control, user */}
          <div className={`${classes.control} flex-center--ver`}>
            <NativeInput />

            <ThemeButton classes={classes.iconSize} />

            <Avatar
              className={`${classes.imgSize} cur-pointer`}
              alt="Username"
              src="https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/113736806_2750904441808448_2237668902459956508_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QzFOO9kmvMAAX_q5n1s&_nc_ht=scontent.fhph1-2.fna&oh=820230f945b3af2035761d8df202cbae&oe=60C9782B"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
