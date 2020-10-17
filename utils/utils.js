const setErrorDetails = (e) => {
  let status = 500;
  let message = "Server error";
  switch (e.name) {
    case "ValidationError": {
      status = 400;
      message = "Bad input";
      break;
    }
    case "CastError": {
      status = 404;
      message = "Not found";
      break;
    }
  }
  return {
    status,
    message,
  };
};

//URL validation
const regex = /^http(s)?:\/\/(www\.)?[\w\-\._~:\/\?#\[\]@!\$&\(\)\*\+,;=]+\.\w{1,6}[\w\-\._~:\/\?#\[\]@!\$&'\(\)\*\+,;=]+$/gim;

module.exports = { setErrorDetails, regex };
