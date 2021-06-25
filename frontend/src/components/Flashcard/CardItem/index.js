import Speaker from 'components/UI/Speaker';
import React from 'react';
import useStyle from './style';

const picture =
  'https://cdn5.vectorstock.com/i/1000x1000/81/34/cute-dinosaur-vector-948134.jpg';
function CardItem() {
  const classes = useStyle({ picture });
  return (
    <div className={`${classes.wrapper} flex-center--ver`}>
      <div className={classes.root}>
        <div className={classes.picture} />
        <div className={`${classes.content} flex-center-col`}>
          <h2 className={classes.mean}>Con khủng long</h2>
          <h3 className={`${classes.word} flex-center--ver`}>
            <span>Dinosaur</span> <Speaker className="ml-4" text="Dinosaur" />
          </h3>
          <p className={classes.type}>(n)</p>
          <p className={classes.phonetic}>/ˈdaɪnəsɔː(r)/</p>
          <p className={classes.example}>
            What if dinosaurs had not died out? Lorem ipsum dolor sit amet
            consec.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
