const storeData = async (key, value) => {
  try {
    await localStorage.setItem(key, value);
  } catch (error) {
    console.log('storeData', error);
  }
};

const getData = async (key) => {
  let res = '';
  try {
    res = await localStorage.getItem(key);
  } catch (error) {
    console.log('getData', error);
  }
  return res;
};

const formatNumber = (num = 0) => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

const getTotalCustom = (customs = []) => {
  let total = 0;
  customs.forEach((custom) => {
    total += custom.cusquantity * custom.cusprice;
  });
  return total;
};

const getGrandTotalPrice = (files = []) => {
  let total = 0;
  files.forEach((file) => {
    if (file.type === 'Custom') {
      total += getTotalCustom(file.customs);
    } else {
      total += file.quantity * file.price;
    }
  });
  return total;
};

export {
  getData, storeData, formatNumber, getTotalCustom, getGrandTotalPrice,
};
