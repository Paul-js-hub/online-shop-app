const initialState = {
 data: [
    {
      id: 1,
      name: "Huawei-Nova-7i",
      price: "17,000",
      image:
        "https://www.gizmochina.com/wp-content/uploads/2020/01/nova-7i.jpg",
      inCart: false,
      quantity: 1
    },
    {
      id: 2,
      name: "Iphone-11",
      price: "75,000",
      image:
        "https://www.techinn.com/f/13735/137354158/apple-iphone-11-128gb-6.1.jpg",
      inCart: false,
      quantity: 1
    },
    {
      id: 3,
      name: "Samsung-Galaxy-A30si",
      price: "25,000",
      image:
        "https://www.brightonline.co.ke/wp-content/uploads/2019/05/Samsung-Galaxy-A30si.jpg",
      inCart: false,
      quantity: 1
    },
    {
      id: 4,
      name: "Samsung-Galaxy-s20",
      price: "45,000",
      image:
        "https://www.powerplanetonline.com/cdnassets/samsung_galaxy_s20_g980_4g_cloud_blue_04_ad_l.jpg",
      inCart: false,
      quantity: 1
    },
    {
      id: 5,
      name: "Tecno-Camon-15-Premier",
      price: "35,000",
      image:
        "https://www.phoneplacekenya.com/wp-content/uploads/2020/05/Tecno-Camon-15-Premier.jpg",
      inCart: false,
      quantity: 1
    },
  ],
};

const products = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default products;
