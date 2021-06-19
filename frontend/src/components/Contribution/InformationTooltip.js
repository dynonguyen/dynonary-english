import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import PropTypes from 'prop-types';
import useStyle from './style';

function InformationTooltip({ title }) {
  const classes = useStyle();
  // Fix issue show tooltip when use mobile
  const [openTooltip, setOpenTooltip] = useState(false);

  return (
    <Tooltip title={title} open={openTooltip} className="cur-help">
      <InfoIcon
        className={classes.tooltipIcon}
        onMouseEnter={() => setOpenTooltip(true)}
        onMouseLeave={() => setOpenTooltip(false)}
        onClick={() => setOpenTooltip(!openTooltip)}
      />
    </Tooltip>
  );
}

InformationTooltip.propTypes = {
  title: PropTypes.string,
};

export default InformationTooltip;
