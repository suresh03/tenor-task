const Utils = (res) => {
  let finalDatas = [];
  let count = 0;
  let firstRowDatas = [];
  const firstRowItems = res?.results?.forEach((item, index) => {
    if (count === index) {
      count += 4;
      firstRowDatas.push(item);
    }
  });
  finalDatas.push(firstRowDatas);

  let secondCount = 1;
  let secondRowDatas = [];
  const secondRowItems = res?.results?.forEach((item, index) => {
    if (secondCount === index) {
      secondCount += 4;
      secondRowDatas.push(item);
    }
  });
  finalDatas.push(secondRowDatas);

  let ThirdCount = 2;
  let thirdRowDatas = [];
  const thirdRowItems = res?.results?.forEach((item, index) => {
    if (ThirdCount === index) {
      ThirdCount += 4;
      thirdRowDatas.push(item);
    }
  });
  finalDatas.push(thirdRowDatas);
  let FourthCount = 3;
  let fourthRowDatas = [];
  const fourthRowItems = res?.results?.forEach((item, index) => {
    if (FourthCount === index) {
      FourthCount += 4;
      fourthRowDatas.push(item);
    }
  });

  finalDatas.push(fourthRowDatas);
  return finalDatas;
};

export { Utils };
