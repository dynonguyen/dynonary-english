const whiteList = [
  process.env.CORS_ORIGIN_1,
  process.env.CORS_ORIGIN_2,
  process.env.CORS_ORIGIN_3,
];

const corsConfig = {
  // Configures the Access-Control-Allow-Origin
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },

  // Configures the Access-Control-Allow-Methods
  methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',

  //Configures the Access-Control-Allow-Headers
  allowedHeaders:
    'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept',

  // Configures the Access-Control-Allow-Credentials
  credentials: true,

  //Configures the Access-Control-Expose-Headers
  exposedHeaders: 'Content-Range,X-Content-Range,Authorization',

  // Provides a status code to use for successful OPTIONS requests
  optionsSuccessStatus: 200,
};

module.exports = corsConfig;
