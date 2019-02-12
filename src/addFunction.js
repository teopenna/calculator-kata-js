module.exports = addends => {
  if (addends === '') {
    return 0;
  }

  const addendArray = addends.split(/[,\n]/);

  const numberedAddend = addendArray.map(addend => {
    if (!Number(addend)) {
      throw new Error('The argument must be a number!');
    }
    return Number(addend);
  });

  const addendSum = numberedAddend.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });

  return addendSum;
};
