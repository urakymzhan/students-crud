function mustBeInArray(array, id) {
  return new Promise((resolve, reject) => {
    const row = array.find((r) => r.id == id);
    if (!row) {
      reject({
        message: 'Incorrect ID given',
        status: 404,
      });
    }
    resolve(row);
  });
}

const getNewId = (array) => {
  if (array.length > 0) {
    return array[array.length - 1].id + 1;
  } else {
    return 1;
  }
};

module.exports = {
  mustBeInArray,
  getNewId,
};
