export const apiGetCategories = () => {
  const categories = [
    {
      name: "clothes",
    },
    {
      name: "tech",
    },
  ];
  return categories;
};

export const apiProductsByCategory = (name) => {
  const categories = [
    {
      name: "clothes",
      products: [
        {
          name: "Nike Air Huarache Le",
          prices: [
            {
              currency: "USD",
              amount: 144.69,
            },
            {
              currency: "GBP",
              amount: 104,
            },
            {
              currency: "AUD",
              amount: 186.65,
            },
            {
              currency: "JPY",
              amount: 15625.24,
            },
            {
              currency: "RUB",
              amount: 10941.76,
            },
          ],
          id: "huarache-x-stussy-le",
          gallery: [
            "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
            "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
            "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087",
            "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087",
            "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087",
          ],
        },
        {
          name: "Jacket",
          prices: [
            {
              currency: "USD",
              amount: 518.47,
            },
            {
              currency: "GBP",
              amount: 372.67,
            },
            {
              currency: "AUD",
              amount: 668.83,
            },
            {
              currency: "JPY",
              amount: 55990.46,
            },
            {
              currency: "RUB",
              amount: 39207.96,
            },
          ],
          id: "jacket-canada-goosee",
          gallery: [
            "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg",
            "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg",
            "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg",
            "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg",
            "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg",
            "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016111/product-image/2409L_61_e.jpg",
          ],
        },
      ],
    },
    {
      name: "tech",
      products: [
        {
          name: "PlayStation 5",
          prices: [
            {
              currency: "USD",
              amount: 844.02,
            },
            {
              currency: "GBP",
              amount: 606.67,
            },
            {
              currency: "AUD",
              amount: 1088.79,
            },
            {
              currency: "JPY",
              amount: 91147.25,
            },
            {
              currency: "RUB",
              amount: 63826.91,
            },
          ],
          id: "ps-5",
          gallery: [
            "https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg",
          ],
        },
        {
          name: "Xbox Series S 512GB",
          prices: [
            {
              currency: "USD",
              amount: 333.99,
            },
            {
              currency: "GBP",
              amount: 240.07,
            },
            {
              currency: "AUD",
              amount: 430.85,
            },
            {
              currency: "JPY",
              amount: 36068.27,
            },
            {
              currency: "RUB",
              amount: 25257.22,
            },
          ],
          id: "xbox-series-s",
          gallery: [
            "https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg",
          ],
        },
        {
          name: "iMac 2021",
          prices: [
            {
              currency: "USD",
              amount: 1688.03,
            },
            {
              currency: "GBP",
              amount: 1213.34,
            },
            {
              currency: "AUD",
              amount: 2177.57,
            },
            {
              currency: "JPY",
              amount: 182294.51,
            },
            {
              currency: "RUB",
              amount: 127653.82,
            },
          ],
          id: "apple-imac-2021",
          gallery: [
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000",
          ],
        },
        {
          name: "iPhone 12 Pro",
          prices: [
            {
              currency: "USD",
              amount: 1000.76,
            },
            {
              currency: "GBP",
              amount: 719.34,
            },
            {
              currency: "AUD",
              amount: 1290.99,
            },
            {
              currency: "JPY",
              amount: 108074.6,
            },
            {
              currency: "RUB",
              amount: 75680.48,
            },
          ],
          id: "apple-iphone-12-pro",
          gallery: [
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000",
          ],
        },
        {
          name: "AirPods Pro",
          prices: [
            {
              currency: "USD",
              amount: 300.23,
            },
            {
              currency: "GBP",
              amount: 215.8,
            },
            {
              currency: "AUD",
              amount: 387.3,
            },
            {
              currency: "JPY",
              amount: 32422.38,
            },
            {
              currency: "RUB",
              amount: 22704.14,
            },
          ],
          id: "apple-airpods-pro",
          gallery: [
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000",
          ],
        },
        {
          name: "AirTag",
          prices: [
            {
              currency: "USD",
              amount: 120.57,
            },
            {
              currency: "GBP",
              amount: 86.67,
            },
            {
              currency: "AUD",
              amount: 155.54,
            },
            {
              currency: "JPY",
              amount: 13021.04,
            },
            {
              currency: "RUB",
              amount: 9118.13,
            },
          ],
          id: "apple-airtag",
          gallery: [
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000",
          ],
        },
      ],
    },
  ];
  return categories.find((category) => category.name === name).products;
};

export const apiPricesCurrency = () => {
  const currencies = ["USD", "GBP", "AUD", "JPY", "RUB"];
  return currencies;
};
