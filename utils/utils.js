const setErrorDetails = (e) => {
  let status = 500;
  let message = "Server error";
  switch (e.name) {
    case "ValidationError": {
      status = 404;
      message = "Bad input";
      break;
    }
    case "CastError": {
      status = 400;
      message = "Card/user not found";
      break;
    }
  }
  return {
    status,
    message,
  };
};

//URL validation
const regex = /^http(s)?:\/\/(www\.)?[\w\-\._~:\/\?#\[\]@!\$&'\(\)\*\+,;=]+\.[\w\/#]+$/gim;

module.exports = { setErrorDetails, regex };
