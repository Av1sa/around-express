const status = require("http-status-codes");
require("dotenv").config();

const { NODE_ENV, JWT_SECRET } = process.env;

//Secret key for hashing passwords
const secretKey = NODE_ENV === "production" ? JWT_SECRET : "dev-secret";

//Error handling
// const setErrorDetails = (e) => {
//   let status;
//   let message;
//   switch (e.name) {
//     case "ValidationError": {
//       status = 400;
//       message = "Bad input";
//       break;
//     }
//     case "CastError": {
//       status = 404;
//       message = "Not found";
//       break;
//     }
//     default: {
//       status = 400;
//       message = "Server error";
//     }
//   }
//   return {
//     status,
//     message,
//   };
// };

// URL validation
const regex = /https?:\/\/(www\.)?[a-zA-Z0-9-@:%_+.~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([a-zA-Z0-9-@:%_+.~#=?&/]*)/;

module.exports = { setErrorDetails, regex, secretKey };
