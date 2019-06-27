const HostAPI = 'http://localhost:3000';
const grantType = 'Bearer';
const defautToken = '';
const checkoutSteps = [
  {
    value: 'upload',
    label: 'Upload Photo',
  },
  {
    value: 'settup',
    label: 'Select Size & Quantity',
  },
  {
    value: 'payment',
    label: 'Fill Shipping Info',
  },
];
const photoTypes = [
  {
    value: 'Driving',
    label: 'Photos for Driving License',
  },
  {
    value: 'ID',
    label: 'Photos for ID',
  },
  {
    value: 'Passport',
    label: 'Photo for Passport',
  },
  {
    value: 'Custom',
    label: 'Custom Order',
  },
];
const pricing = {
  Driving: {
    label: '8 pcs. of 3x4 cm and 6x4 cm each',
    value: 40000,
  },
  ID: {
    label: '8 pcs. of 3x4 cm (Normal)',
    value: 50000,
  },
  Passport: {
    label: '8 pcs. of 4x6 cm (Passport)',
    value: 80000,
  },
  Custom: {
    label: 'Custom Order',
    value: 0,
  },
};

const customOrderList = [
  {
    type: 'Driving',
    label: '8 pcs. of 3x4 cm (Normal)',
    value: 40000,
  },
  {
    type: 'ID',
    label: '8 pcs. of 4x6 cm',
    value: 50000,
  },
  {
    type: 'Passport',
    label: '4 pcs. of 4x6 cm (Normal)',
    value: 60000,
  },
];

const shippingFee = 30000;

export {
  HostAPI,
  grantType,
  defautToken,
  checkoutSteps,
  photoTypes,
  pricing,
  customOrderList,
  shippingFee,
};
