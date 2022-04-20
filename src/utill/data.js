export const getStringDate = (data) => {
  let year = date.getFullYear();
  let month = data.getMonth() + 1;
  let day = date.getData();
  if (month < 10) {
    month = `0${month}`;
  }

  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};
