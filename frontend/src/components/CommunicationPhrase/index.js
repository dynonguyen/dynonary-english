import LoopIcon from '@material-ui/icons/Loop';
import DynoDictionarySkeleton from 'components/DynoDictionary/Skeleton';
import InfiniteScroll from 'components/UI/InfiniteScroll';
import PropTypes from 'prop-types';
import React from 'react';
import CommunicationPhraseItem from './Item';
import SentenceTopicSettingModal from './SettingModal';
import useStyle from './style';

function CommunicationPhrase({
  isFirstLoad,
  loading,
  more,
  list,
  onLoadData,
  onSelectTopic,
}) {
  const classes = useStyle();

  return (
    <div className={`${classes.root} dyno-container`}>
      {/* title - menu */}
      <div className="flex-center-between">
        <h1 className="dyno-title">1000+ Cụm từ giao tiếp</h1>
        <SentenceTopicSettingModal onSelectTopic={onSelectTopic} />
      </div>
      <div className="dyno-break"></div>

      {/* list content */}
      <div className={classes.contentWrap}>
        <div className={`${classes.listWrap} w-100`}>
          <ul id="dictionaryId" className={`${classes.list} flex-col w-100`}>
            <>
              {isFirstLoad ? (
                <DynoDictionarySkeleton className={classes.skeleton} />
              ) : (
                <>
                  {list && list.length > 0 ? (
                    <>
                      {/* render list */}
                      {list.map((item, index) => (
                        <li className={classes.listItem} key={index}>
                          <CommunicationPhraseItem {...item} />
                        </li>
                      ))}

                      {/* infinite scrolling */}
                      {!loading && more && (
                        <InfiniteScroll
                          onTouchAnchor={onLoadData}
                          threshold={1}>
                          <div className="w-100 t-center">
                            <LoopIcon className="ani-spin" />
                          </div>
                        </InfiniteScroll>
                      )}
                    </>
                  ) : (
                    // empty list
                    <h3 className="notfound-title h-100 flex-center t-center">
                      Không tìm thấy cụm từ nào trong từ điển
                    </h3>
                  )}
                </>
              )}
            </>
          </ul>
        </div>
      </div>
    </div>
  );
}

CommunicationPhrase.propTypes = {
  isFirstLoad: PropTypes.bool,
  list: PropTypes.array,
  loading: PropTypes.bool,
  more: PropTypes.bool,
  onLoadData: PropTypes.func,
  onSelectTopic: PropTypes.func,
};

CommunicationPhrase.defaultProps = {
  more: false,
  loading: false,
  isFirstLoad: false,
  list: [],
  onLoadData: function () {},
  onSelectTopic: function () {},
};

export default CommunicationPhrase;
