const formatDate = (oldDate) => {
  var date = new Date(oldDate);
  const fortmattedDate =
    date.toLocaleTimeString() +
    "," +
    " " +
    date.getDate() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getFullYear();
  return String(fortmattedDate);
};

export default formatDate;