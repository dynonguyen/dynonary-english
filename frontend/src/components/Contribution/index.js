import Grid from '@material-ui/core/Grid';
import InputCustom from 'components/UI/InputCustom';
import SelectCustom from 'components/UI/SelectCustom';
import React from 'react';
import useStyle from './style';

function Contribution() {
  const classes = useStyle();
  return (
    <div className="container">
      <div className={classes.root}>
        <h1 className={classes.title}>Thêm từ mới của bạn vào Dynonary</h1>
        <div className="dyno-break"></div>

        <form>
          <Grid className={classes.grid} container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <InputCustom
                className="w-100"
                label="Từ mới (*)"
                inputProps={{ autoFocus: true }}
              />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <InputCustom className="w-100" label="Nghĩa của từ (*)" />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <InputCustom className="w-100" label="Ký âm (*)" />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <SelectCustom className="w-100" label="Loại từ (*)" />
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default Contribution;
