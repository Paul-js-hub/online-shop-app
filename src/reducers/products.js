const initialState = {
  data: [
    {
      id: 1,
      name: "Huawei-Nova-7i",
      price: 17000,
      image:
        "https://www.gizmochina.com/wp-content/uploads/2020/01/nova-7i.jpg",
      count: 0,
      total: 0
    },
    {
      id: 2,
      name: "Iphone-11",
      price: 75000,
      image:
        "https://www.techinn.com/f/13735/137354158/apple-iphone-11-128gb-6.1.jpg",
      count: 0,
      total: 0
    },
    {
      id: 3,
      name: "Samsung-Galaxy-A30si",
      price: 25000,
      image:
        "https://www.brightonline.co.ke/wp-content/uploads/2019/05/Samsung-Galaxy-A30si.jpg",
      count: 0,
      total: 0
    },
    {
      id: 4,
      name: "Samsung-Galaxy-s20",
      price: 45000,
      image:
        "https://www.powerplanetonline.com/cdnassets/samsung_galaxy_s20_g980_4g_cloud_blue_04_ad_l.jpg",
      count: 0,
      total: 0
    },
    {
      id: 5,
      name: "Tecno-Camon-15-Premier",
      price: 35000,
      image:
        "https://www.phoneplacekenya.com/wp-content/uploads/2020/05/Tecno-Camon-15-Premier.jpg",
      count: 0,
      total: 0
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
