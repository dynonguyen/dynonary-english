exports.convertPackInfoToQueryStr = (packInfo) => {
  const { topics, ...restPackInfo } = packInfo;
  const topicList = typeof topics === 'string' ? JSON.parse(topics) : topics;

  // generate query string
  let query = {};
  for (let key in restPackInfo) {
    if (packInfo[key] !== '-1') {
      query[key] = packInfo[key];
    }
  }

  // query multiple topic
  if (topicList.length > 0) {
    let orList = [];
    topicList.forEach((topic) =>
      orList.push({ topics: { $elemMatch: { $eq: topic } } }),
    );
    query['$or'] = orList;
  }

  return query;
};
