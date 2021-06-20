import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ResetIcon from '@material-ui/icons/RotateLeft';
import SaveIcon from '@material-ui/icons/Save';
import InputCustom from 'components/UI/InputCustom';
import SelectCustom from 'components/UI/SelectCustom';
import { MAX, WORD_LEVELS, WORD_SPECIALTY, WORD_TYPES } from 'constant';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InformationTooltip from './InformationTooltip';
import PhoneticInput from './PhoneticInput';
import useStyle from './style';
import TopicSelect from './TopicSelect';

const schema = yup.object().shape({
  word: yup
    .string()
    .trim()
    .required('Hãy nhập một từ vào đây')
    .max(MAX.WORD_LEN, `Từ dài tối đã ${MAX.WORD_LEN} ký tự`),
  mean: yup
    .string()
    .trim()
    .required('Hãy nhập ý nghĩa từ')
    .max(MAX.MEAN_WORD_LEN, `Từ dài tối đã ${MAX.MEAN_WORD_LEN} ký tự`),
  phonetic: yup
    .string()
    .trim()
    .required('Hãy nhập ký âm của từ')
    .max(MAX.PHONETIC_LEN, `Từ dài tối đã ${MAX.PHONETIC_LEN} ký tự`),
  type: yup
    .string()
    .required('Chọn loại của từ')
    .oneOf(WORD_TYPES.map((i) => i.value)),
  level: yup
    .string()
    .required('Chọn cấp bậc của từ')
    .oneOf(WORD_LEVELS.map((i) => i.value)),
  specialty: yup
    .string()
    .required('Chọn cấp bậc của từ')
    .oneOf(WORD_SPECIALTY.map((i) => i.value)),
  examples: yup
    .string()
    .max(MAX.EXAMPLE_WORD_LEN, `Ví dụ tối đa ${MAX.EXAMPLE_WORD_LEN} ký tự`),
  synonyms: yup
    .string()
    .max(
      MAX.SYNONYMS_WORD_LEN,
      `Từ đồng nghĩa tối đa ${MAX.SYNONYMS_WORD_LEN} ký tự`,
    ),
  note: yup
    .string()
    .max(MAX.NOTE_WORD_LEN, `Ghi chú tối đa ${MAX.NOTE_WORD_LEN} ký tự`),
});

function Contribution() {
  const classes = useStyle();
  const [resetFlag, setResetFlag] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const topics = useRef([]);

  const onSubmit = (data) => {
    console.log(data);
    console.log(topics.current);
  };

  const onTopicChange = (id, isActive) => {
    if (isActive) {
      topics.current.push(id);
    } else {
      topics.current = topics.current.filter((i) => i !== id);
    }
  };

  const onResetForm = () => {
    const initialValues = {
      word: '',
      mean: '',
      phonetic: '',
      type: 'n',
      level: 'A0',
      specialty: '0',
      examples: '',
      synonyms: '',
      note: '',
    };
    topics.current = [];
    reset(initialValues);
    setResetFlag(Math.random() + 1);
  };

  return (
    <div className="container">
      <div className={classes.root}>
        <h1 className={classes.title}>Thêm từ mới của bạn vào Dynonary</h1>
        <div className="dyno-break"></div>

        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Grid className={classes.grid} container spacing={3}>
            {/* new word */}
            <Grid item xs={12} md={6} lg={4}>
              <InputCustom
                className="w-100"
                label="Từ mới (*)"
                error={Boolean(errors.word)}
                inputProps={{
                  autoFocus: true,
                  maxLength: MAX.WORD_LEN,
                  name: 'word',
                  ...register('word'),
                }}
                endAdornment={
                  <InformationTooltip title="Nhập từ vựng mới mà bạn cần thêm" />
                }
              />
              {errors.word && (
                <p className="text-error">{errors.word?.message}</p>
              )}
            </Grid>

            {/* mean */}
            <Grid item xs={12} md={6} lg={4}>
              <InputCustom
                className="w-100"
                label="Nghĩa của từ (*)"
                error={Boolean(errors.mean)}
                inputProps={{
                  maxLength: MAX.MEAN_WORD_LEN,
                  name: 'mean',
                  ...register('mean'),
                }}
                endAdornment={
                  <InformationTooltip title="Nhập nghĩa bằng tiếng Việt của từ mới" />
                }
              />
              {errors.mean && (
                <p className="text-error">{errors.mean?.message}</p>
              )}
            </Grid>

            {/* phonetic */}
            <PhoneticInput
              errorMessage={errors.phonetic?.message}
              error={Boolean(errors.phonetic)}
              resetFlag={resetFlag}
              inputProps={{
                maxLength: MAX.PHONETIC_LEN,
                name: 'phonetic',
              }}
              register={register('phonetic')}
            />

            {/* word type */}
            <Grid item xs={12} md={6} lg={4}>
              <SelectCustom
                className="w-100"
                label="Loại từ (*)"
                options={WORD_TYPES}
                error={Boolean(errors.type)}
                resetFlag={resetFlag}
                inputProps={{
                  name: 'type',
                  ...register('type'),
                }}
              />
              {errors.type && (
                <p className="text-error">{errors.type?.message}</p>
              )}
            </Grid>

            {/* word level */}
            <Grid item xs={12} md={6} lg={4}>
              <SelectCustom
                className="w-100"
                label="Cấp bậc của từ (*)"
                options={WORD_LEVELS}
                error={Boolean(errors.level)}
                resetFlag={resetFlag}
                inputProps={{ name: 'level', ...register('level') }}
              />
              {errors.level && (
                <p className="text-error">{errors.level?.message}</p>
              )}
            </Grid>

            {/* word topics */}
            <TopicSelect onChange={onTopicChange} resetFlag={resetFlag} />

            {/* word specialty */}
            <Grid item xs={12} md={6} lg={4}>
              <SelectCustom
                className="w-100"
                label="Thuộc chuyên ngành"
                options={WORD_SPECIALTY}
                error={Boolean(errors.specialty)}
                resetFlag={resetFlag}
                inputProps={{
                  name: 'specialty',
                  ...register('specialty'),
                }}
              />
              {errors.specialty && (
                <p className="text-error">{errors.specialty?.message}</p>
              )}
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
                error={Boolean(errors.examples)}
                inputProps={{
                  name: 'examples',
                  ...register('examples'),
                }}
              />

              {errors.examples && (
                <p className="text-error">{errors.examples?.message}</p>
              )}
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
                error={Boolean(errors.synonyms)}
                inputProps={{
                  name: 'synonyms',
                  ...register('synonyms'),
                }}
              />
              {errors.synonyms && (
                <p className="text-error">{errors.synonyms?.message}</p>
              )}
            </Grid>

            {/* note */}
            <Grid item xs={12} md={6} lg={4}>
              <InputCustom
                className="w-100"
                label="Ghi chú"
                endAdornment={
                  <InformationTooltip title="Nhập thêm ghi chú mà bạn muốn cho từ" />
                }
                error={Boolean(errors.note)}
                inputProps={{
                  name: 'note',
                  ...register('note'),
                }}
              />
              {errors.note && (
                <p className="text-error">{errors.note?.message}</p>
              )}
            </Grid>
          </Grid>

          <div className="dyno-break"></div>
          {/* button group */}
          <div className="d-flex flex-end jus-content-end pt-5 w-100">
            <Button
              className={`${classes.btn} ${classes.btnReset}`}
              color="secondary"
              endIcon={<ResetIcon />}
              variant="outlined"
              onClick={onResetForm}>
              Reset
            </Button>
            <Button
              type="submit"
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
