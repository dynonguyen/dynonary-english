import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FilterIcon from '@material-ui/icons/FilterList';
import AZIcon from '@material-ui/icons/TextRotateUp';
import ZAIcon from '@material-ui/icons/TextRotationDown';
import AutoSearchInput from 'components/UI/AutoSearchInput';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useStyle from './style';
import initList from 'constant/irregular-verb.min.js';

function IrregularVerbFilter({ classes, onSort, onFilter }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortType, setSortType] = useState(false);

  const handleFilter = (v) => {
    setAnchorEl(null);
  };

  const handleSort = () => {
    if (!sortType !== sortType) onSort(sortType);
    setSortType(!sortType);
  };

  return (
    <div className="d-flex ml-8">
      <div onClick={handleSort} className={`${classes.controlItem} mr-8`}>
        <span className="pr-2">Sắp xếp</span>
        {sortType ? (
          <AZIcon className={classes.controlIcon} />
        ) : (
          <ZAIcon className={classes.controlIcon} />
        )}
      </div>
      <div
        className={classes.controlItem}
        onClick={(e) => setAnchorEl(e.currentTarget)}>
        <span className="pr-2">Lọc</span>
        <FilterIcon className={classes.controlIcon} />
      </div>
      <Menu
        classes={{
          paper: classes.filterMenu,
        }}
        anchorEl={anchorEl}
        disableScrollLock={true}
        getContentAnchorEl={null}
        onClose={() => setAnchorEl(null)}
        keepMounted
        open={Boolean(anchorEl)}>
        <MenuItem onClick={() => handleFilter(1)}>v1 = v2 = v3</MenuItem>
        <MenuItem onClick={() => handleFilter(1)}>v2 = v3</MenuItem>
        <MenuItem onClick={() => handleFilter(1)}>{`ay > aid > aid`}</MenuItem>
        <MenuItem onClick={() => handleFilter(1)}>{`d > t`}</MenuItem>
        <MenuItem onClick={() => handleFilter(1)}>{`eed > ed`}</MenuItem>
        <MenuItem onClick={() => handleFilter(1)}>{`ow > ew > own`}</MenuItem>
      </Menu>
    </div>
  );
}

IrregularVerbFilter.propTypes = {
  classes: PropTypes.object,
  onSort: PropTypes.func,
  onFilter: PropTypes.func,
};

function IrregularVerb(props) {
  const classes = useStyle();
  const [list, setList] = useState([...initList]);

  const handleSort = (sortType = true) => {
    let newList = [];
    if (sortType) {
      newList = list.sort((a, b) => (a.v1 > b.v1 ? 1 : a.v1 < b.v1 ? -1 : 0));
    } else {
      newList = list.sort((a, b) => (a.v1 > b.v1 ? -1 : a.v1 < b.v1 ? 1 : 0));
    }
    setList([...newList]);
  };

  const handleSearch = (word) => {
    const foundList = initList.filter((item) => {
      const chainStr = `${item.v1} $${item.v2} ${item.v3} ${item.mean}`;
      return chainStr.toLowerCase().indexOf(word.toLowerCase()) !== -1;
    });

    setList([...foundList]);
  };

  return (
    <div className={`${classes.root} container`}>
      {/* header */}
      <h1 className="dyno-title">Động từ bất quy tắc (Irregular Verb)</h1>
      <p className="dyno-sub-title">
        Chúng ta có hơn 600 động từ bất quy tắc, nhưng chỉ có khoảng 360 từ
        thường xuyên xuất hiện nhất. <br /> Bạn hãy tập trung học những từ này
        trước nhé 😎
      </p>
      <div className="dyno-break"></div>

      {/* search, filter */}
      <div className="flex-center-between">
        <AutoSearchInput
          onSearch={handleSearch}
          maxLength={40}
          style={{ padding: '1rem 1.2rem', maxWidth: '45rem' }}
        />
        <IrregularVerbFilter classes={classes} onSort={handleSort} />
      </div>

      {/* verb table */}
      <div className={classes.tableWrap}>
        <table className={classes.table}>
          <thead>
            <tr className={classes.tableHeader}>
              <th>Infinitive (V1)</th>
              <th>Simple Past (V2)</th>
              <th>Past Participle (V3)</th>
              <th>Mean</th>
            </tr>
          </thead>

          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>{item.v1}</td>
                <td>{item.v2}</td>
                <td>{item.v3}</td>
                <td>{item.mean}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IrregularVerb;
