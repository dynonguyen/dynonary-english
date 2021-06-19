import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ResetIcon from '@material-ui/icons/RotateLeft';
import SaveIcon from '@material-ui/icons/Save';
import InputCustom from 'components/UI/InputCustom';
import SelectCustom from 'components/UI/SelectCustom';
import { WORD_LEVELS, WORD_SPECIALTY, WORD_TOPICS, WORD_TYPES } from 'constant';
import React from 'react';
import InformationTooltip from './InformationTooltip';
import PhoneticInput from './PhoneticInput';
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
            {/* new word */}
            <Grid item xs={12} md={6} lg={4}>
              <InputCustom
                className="w-100"
                label="Từ mới (*)"
                inputProps={{ autoFocus: true }}
                endAdornment={
                  <InformationTooltip title="Nhập từ vựng mới mà bạn cần thêm" />
                }
              />
            </Grid>

            {/* mean */}
            <Grid item xs={12} md={6} lg={4}>
              <InputCustom
                className="w-100"
                label="Nghĩa của từ (*)"
                endAdornment={
                  <InformationTooltip title="Nhập nghĩa bằng tiếng Việt của từ mới" />
                }
              />
            </Grid>

            {/* phonetic */}
            <PhoneticInput />

            {/* word type */}
            <Grid item xs={12} md={6} lg={4}>
              <SelectCustom
                className="w-100"
                label="Loại từ (*)"
                options={WORD_TYPES}
              />
            </Grid>

            {/* word level */}
            <Grid item xs={12} md={6} lg={4}>
              <SelectCustom
                className="w-100"
                label="Cấp bậc của từ (*)"
                options={WORD_LEVELS}
              />
            </Grid>

            {/* word topic */}
            <Grid item xs={12} md={6} lg={4}>
              <SelectCustom
                className="w-100"
                label="Chủ đề (*)"
                options={WORD_TOPICS}
              />
            </Grid>

            {/* word specialty */}
            <Grid item xs={12} md={6} lg={4}>
              <SelectCustom
                className="w-100"
                label="Thuộc chuyên ngành"
                options={WORD_SPECIALTY}
              />
            </Grid>

            {/* examples */}
            <Grid item xs={12} md={6} lg={4}>
              <InputCustom
                className="w-100"
                label="Câu ví dụ"
                multiline
                endAdornment={
                  <InformationTooltip title="Thêm các câu ví dụ cho từ trên. Đảm bảo có sự xuất hiện của từ đó trong câu. Bạn có thể thêm nhiều câu bằng cách xuống dòng." />
                }
              />
            </Grid>

            {/* picture */}
            <Grid item xs={12} md={6} lg={4}>
              <InputCustom
                className="w-100"
                label="Ảnh mô tả"
                endAdornment={
                  <InformationTooltip title="Nhập ký âm (ngữ âm) của từ mới. Ví dụ: fəˈnetɪk" />
                }
              />
            </Grid>

            {/* synonyms */}
            <Grid item xs={12} md={6} lg={4}>
              <InputCustom
                className="w-100"
                label="Từ đồng nghĩa"
                multiline
                endAdornment={
                  <InformationTooltip title="Nhập các từ đồng nghĩa với từ này. Thêm nhiêu từ bằng cách xuống hàng." />
                }
              />
            </Grid>

            {/* note */}
            <Grid item xs={12} md={6} lg={4}>
              <InputCustom
                className="w-100"
                label="Ghi chú"
                endAdornment={
                  <InformationTooltip title="Nhập thêm ghi chú mà bạn muốn cho từ" />
                }
              />
            </Grid>
          </Grid>

          <div className="dyno-break"></div>
          {/* button group */}
          <div className="d-flex flex-end jus-content-end pt-5 w-100">
            <Button
              className={`${classes.btn} ${classes.btnReset}`}
              color="secondary"
              endIcon={<ResetIcon />}
              variant="outlined">
              Reset
            </Button>
            <Button
              className={`${classes.btn} _btn _btn-primary`}
              endIcon={<SaveIcon />}
              variant="contained">
              Thêm từ
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contribution;
