import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LoopIcon from '@material-ui/icons/Loop';
import ResetIcon from '@material-ui/icons/RotateLeft';
import SaveIcon from '@material-ui/icons/Save';
import wordApi from 'apis/wordApi';
import InputCustom from 'components/UI/InputCustom';
import SelectCustom from 'components/UI/SelectCustom';
import TopicSelect from 'components/UI/TopicSelect';
import UploadButton from 'components/UI/UploadButton';
import { MAX, WORD_LEVELS, WORD_SPECIALTY, WORD_TYPES } from 'constant';
import { debounce } from 'helper';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setMessage } from 'redux/slices/message.slice';
import * as yup from 'yup';
import InformationTooltip from './InformationTooltip';
import PhoneticInput from './PhoneticInput';
import useStyle from './style';

let delayTimer = null;

const schema = yup.object().shape({
  word: yup
    .string()
    .trim()
    .required('Hãy nhập một từ vào đây')
    .lowercase()
    .max(MAX.WORD_LEN, `Từ dài tối đã ${MAX.WORD_LEN} ký tự`),
  mean: yup
    .string()
    .trim()
    .lowercase()
    .required('Hãy nhập ý nghĩa từ')
    .max(MAX.MEAN_WORD_LEN, `Từ dài tối đã ${MAX.MEAN_WORD_LEN} ký tự`),
  phonetic: yup
    .string()
    .trim()
    .lowercase()
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
  antonyms: yup
    .string()
    .max(
      MAX.SYNONYMS_WORD_LEN,
      `Từ trái nghĩa tối đa ${MAX.SYNONYMS_WORD_LEN} ký tự`,
    ),
  note: yup
    .string()
    .max(MAX.NOTE_WORD_LEN, `Ghi chú tối đa ${MAX.NOTE_WORD_LEN} ký tự`),
});

// Prevent unmount component topic select
const ButtonWrapper = (props) => <Grid {...props} item xs={12} md={6} lg={4} />;
const TagsWrapper = (props) => <Grid {...props} item xs={12} />;

function WordContribution({ onSubmitForm, submitting }) {
  const classes = useStyle();
  const [resetFlag, setResetFlag] = useState(0);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const topics = useRef([]);
  const picture = useRef(null);

  const onSubmit = (data) => {
    onSubmitForm({ ...data, topics: topics.current, picture: picture.current });
  };

  const onResetForm = () => {
    const initialValues = {
      word: '',
      mean: '',
      phonetic: '',
      type: 'n',
      level: 'A1',
      specialty: '0',
      examples: '',
      synonyms: '',
      antonyms: '',
      note: '',
    };
    topics.current = [];
    picture.current = null;
    reset(initialValues);
    setResetFlag(Math.random() + 1);
  };

  const handleCheckWordExistence = (eWord, eType) => {
    delayTimer = debounce(
      delayTimer,
      async () => {
        try {
          const word = eWord ? eWord.target?.value : getValues('word'),
            type = eType ? eType.target?.value : getValues('type');

          const apiRes = await wordApi.getCheckWordExistence(word, type);
          if (apiRes.status === 200) {
            const { isExist = false } = apiRes.data;
            if (isExist) {
              dispatch(
                setMessage({
                  type: 'warning',
                  message: `Từ ${word} (${type}) đã tồn tại trong Dynonary !`,
                  duration: 2000,
                }),
              );
            }
          }
        } catch (error) {}
      },
      1000,
    );
  };

  return (
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
              onChange={(e) => handleCheckWordExistence(e, null)}
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
              onChange={(e) => handleCheckWordExistence(null, e)}
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

          {/* synonyms */}
          <Grid item xs={12} md={6} lg={4}>
            <InputCustom
              className="w-100"
              label="Các từ đồng nghĩa"
              multiline
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

          {/* antonyms */}
          <Grid item xs={12} md={6} lg={4}>
            <InputCustom
              className="w-100"
              label="Các từ trái nghĩa"
              multiline
              error={Boolean(errors.antonyms)}
              inputProps={{
                name: 'antonyms',
                ...register('antonyms'),
              }}
            />
            {errors.antonyms && (
              <p className="text-error">{errors.antonyms?.message}</p>
            )}
          </Grid>

          {/* note */}
          <Grid item xs={12} md={6} lg={4}>
            <InputCustom
              className="w-100"
              label="Ghi chú"
              multiline
              endAdornment={
                <InformationTooltip title="Nhập thêm ghi chú mà bạn muốn cho từ. Thêm nhiều dòng bằng cách xuống dòng." />
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

          {/* picture */}
          <Grid item xs={12} md={6} lg={4}>
            <UploadButton
              title="Thêm ảnh minh hoạ"
              className="w-100 h-100"
              resetFlag={resetFlag}
              onChange={(imgSrc) => (picture.current = imgSrc)}
            />
          </Grid>

          {/* word topics */}
          <TopicSelect
            onChange={(topicList) => (topics.current = topicList)}
            resetFlag={resetFlag}
            buttonTitle="Thêm chủ đề"
            buttonWrapper={ButtonWrapper}
            tagsWrapper={TagsWrapper}
          />
        </Grid>

        <div className="dyno-break"></div>
        {/* button group */}
        <div className="d-flex flex-end jus-content-end pt-5 w-100">
          <Button
            className={`${classes.btn} ${classes.btnReset}`}
            color="secondary"
            endIcon={<ResetIcon />}
            variant="outlined"
            disabled={submitting}
            onClick={onResetForm}>
            Reset
          </Button>
          <Button
            type="submit"
            className={`${classes.btn} _btn _btn-primary`}
            disabled={submitting}
            endIcon={
              submitting ? <LoopIcon className="ani-spin" /> : <SaveIcon />
            }
            variant="contained">
            Thêm từ
          </Button>
        </div>
      </form>
    </div>
  );
}

WordContribution.propTypes = {
  onSubmitForm: PropTypes.func,
  submitting: PropTypes.bool,
};

WordContribution.defaultProps = {
  onSubmitForm: function () {},
  submitting: false,
};

export default WordContribution;
