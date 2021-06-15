import FacebookIcon from '@material-ui/icons/Facebook';
import DollarIcon from '@material-ui/icons/MonetizationOn';
import UpIcon from '@material-ui/icons/Publish';
import ShareIcon from '@material-ui/icons/Share';
import StarsIcon from '@material-ui/icons/Stars';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import React, { useState } from 'react';
import useStyle from './style';

const actions = [
  { icon: <FacebookIcon />, name: 'Liên hệ Dyno' },
  { icon: <UpIcon />, name: 'Nâng cấp' },
  { icon: <DollarIcon />, name: 'Donate' },
  { icon: <ShareIcon />, name: 'Chia sẻ' },
  { icon: <StarsIcon />, name: 'Góp ý, đánh giá' },
];

function SpeedDials() {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <SpeedDial
      classes={{
        root: classes.root,
        fab: classes.fab,
        actions: classes.actions,
      }}
      hidden={false}
      ariaLabel="Speed Dial"
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction="up">
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={handleClose}
        />
      ))}
    </SpeedDial>
  );
}

export default SpeedDials;
