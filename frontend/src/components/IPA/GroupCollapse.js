import { Grid } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Speaker from 'components/UI/Speaker';
import PropTypes from 'prop-types';
import React from 'react';
import useStyle from './style';

// expected result: '/I/, /i:/'
function collectPhonetics(list = []) {
  const phoneticArr = list.map((item) => `/ ${item.phonetic} /`);
  return phoneticArr.join(', ');
}

function IPAGroupCollapse({ title, phoneticList, isNoVoice }) {
  const classes = useStyle();

  return (
    <Accordion className={classes.groupCollapse}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className={classes.arrowIcon} />}>
        <p className={classes.gcTitle}>
          {title} &nbsp;<b>{collectPhonetics(phoneticList)}</b>
        </p>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container spacing={3}>
          {phoneticList &&
            phoneticList.map((item, key) => (
              <Grid
                item
                className="flex-center-between"
                xs={12}
                lg={6}
                key={key}>
                <div>
                  <div className="flex-center--ver">
                    <b className={classes.word}>/ {item.phonetic} /</b>
                    {!isNoVoice && (
                      <Speaker type={false} audioSrc={item.audioSrc} />
                    )}
                  </div>

                  <p className={classes.gcDesc}>{item.desc}</p>

                  <div className={classes.example}>
                    <b>Example:</b>
                    {item.examples &&
                      item.examples.map((example, exKey) => (
                        <div className="flex-center--ver my-4" key={exKey}>
                          <span className="mr-4">
                            {example.word}
                            <span className="phonetic px-3">
                              {example.phonetic}
                            </span>
                          </span>
                          <Speaker type={true} text={example.word} />
                        </div>
                      ))}
                  </div>
                </div>

                <img
                  className={classes.mouthShapeImg}
                  src={item.mouthShape}
                  alt="Mouth Shape"
                />
              </Grid>
            ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

IPAGroupCollapse.propTypes = {
  phoneticList: PropTypes.array,
  title: PropTypes.string,
  isNoVoice: PropTypes.bool,
};

IPAGroupCollapse.defaultProps = {
  phoneticList: [],
  title: '',
  isNoVoice: false,
};

export default IPAGroupCollapse;
