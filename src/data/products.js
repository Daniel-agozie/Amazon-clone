
 const products = [
    {
      key: "1",
      image: "src/assets/images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: [
        "socks",
        "sports",
        "apparel"
      ]
    },
    {
      key: "2",
      image: "src/assets/images/products/intermediate-composite-basketball.jpg",
      name: "Intermediate Size Basketball",
      rating: {
        stars: 4,
        count: 127
      },
      priceCents: 2095,
      keywords: [
        "sports",
        "basketballs"
      ]
    },
    {
      key: "3",
      image: "src/assets/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
      name: "Adults Plain Cotton T-Shirt - 2 Pack",
      rating: {
        stars: 4.5,
        count: 56
      },
      priceCents: 799,
      keywords: [
        "tshirts",
        "apparel",
        "mens"
      ],
      "type": "clothing",
      "sizeChartLink": "images/clothing-size-chart.png",
      "id": "9051"
    },
    {
      "key": "4",
      "image": "src/assets/images/products/black-2-slot-toaster.jpg",
      "name": "2 Slot Toaster - Black",
      "rating": {
        "stars": 5,
        "count": 2197
      },
      "priceCents": 1899,
      "keywords": [
        "toaster",
        "kitchen",
        "appliances"
      ]
    },
    {
      "key": "5",
      "image": "src/assets/images/products/6-piece-white-dinner-plate-set.jpg",
      "name": "6 Piece White Dinner Plate Set",
      "rating": {
        "stars": 4,
        "count": 37
      },
      "priceCents": 2067,
      "keywords": [
        "plates",
        "kitchen",
        "dining"
      ]
    },
    {
      "key": "6",
      "image": "src/assets/images/products/6-piece-non-stick-baking-set.webp",
      "name": "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
      "rating": {
        "stars": 4.5,
        "count": 175
      },
      "priceCents": 3499,
      "keywords": [
        "kitchen",
        "cookware"
      ]
    },
    {
      "key": "7",
      "image": "src/assets/images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
      "name": "Plain Hooded Fleece Sweatshirt",
      "rating": {
        "stars": 4.5,
        "count": 317
      },
      "priceCents": 2400,
      "keywords": [
        "hoodies",
        "sweaters",
        "apparel"
      ]
    },
    {
      "key": "8",
      "image": "src/assets/images/products/luxury-tower-set-6-piece.jpg",
      "name": "Luxury Towel Set - Graphite Gray",
      "rating": {
        "stars": 4.5,
        "count": 144
      },
      "priceCents": 3599,
      "keywords": [
        "bathroom",
        "washroom",
        "restroom",
        "towels",
        "bath towels"
      ]
    },
    {
      "key": "9",
      "image": "src/assets/images/products/liquid-laundry-detergent-plain.jpg",
      "name": "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
      "rating": {
        "stars": 4.5,
        "count": 305
      },
      "priceCents": 2899,
      "keywords": [
        "bathroom",
        "cleaning"
      ]
    },
    {
      "key": "10",
      "image": "src/assets/images/products/knit-athletic-sneakers-gray.jpg",
      "name": "Waterproof Knit Athletic Sneakers - Gray",
      "rating": {
        "stars": 4,
        "count": 89
      },
      "priceCents": 3390,
      "keywords": [
        "shoes",
        "running shoes",
        "footwear"
      ]
    },
    {
      "key": "11",
      "image": "src/assets/images/products/women-chiffon-beachwear-coverup-black.jpg",
      "name": "Women's Chiffon Beachwear Cover Up - Black",
      "rating": {
        "stars": 4.5,
        "count": 235
      },
      "priceCents": 2070,
      "keywords": [
        "robe",
        "swimsuit",
        "swimming",
        "bathing",
        "apparel"
      ],
      "type": "clothing",
      "sizeChartLink": "images/clothing-size-chart.png"
    },
    {
      "key": "12",
      "image": "src/assets/images/products/round-sunglasses-black.jpg",
      "name": "Round Sunglasses",
      "rating": {
        "stars": 4.5,
        "count": 30
      },
      "priceCents": 1560,
      "keywords": [
        "accessories",
        "shades"
      ]
    },
    {
      "key": "13",
      "image": "src/assets/images/products/women-beach-sandals.jpg",
      "name": "Women's Two Strap Buckle Sandals - Tan",
      "rating": {
        "stars": 4.5,
        "count": 562
      },
      "priceCents": 2499,
      "keywords": [
        "footwear",
        "sandals",
        "womens",
        "beach",
        "summer"
      ]
    },
    {
      "key": "14",
      "image": "src/assets/images/products/blackout-curtain-set-beige.webp",
      "name": "Blackout Curtains Set 4-Pack - Beige",
      "rating": {
        "stars": 4.5,
        "count": 232
      },
      "priceCents": 4599,
      "keywords": [
        "bedroom",
        "curtains",
        "home"
      ]
    },
    {
      "key": "15",
      "image": "src/assets/images/products/men-slim-fit-summer-shorts-gray.jpg",
      "name": "Men's Slim-Fit Summer Shorts",
      "rating": {
        "stars": 4,
        "count": 160
      },
      "priceCents": 1699,
      "keywords": [
        "shorts",
        "apparel",
        "mens"
      ]
    },
    {
      "key": "16",
      "image": "src/assets/images/products/electric-glass-and-steel-hot-water-kettle.webp",
      "name": "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
      "rating": {
        "stars": 5,
        "count": 846
      },
      "priceCents": 3074,
      "keywords": [
        "water boiler",
        "appliances",
        "kitchen"
      ]
    },
    {
      "key": "17",
      "image": "src/assets/images/products/facial-tissue-2-ply-18-boxes.jpg",
      "name": "Ultra Soft Tissue 2-Ply - 18 Box",
      "rating": {
        "stars": 4,
        "count": 99
      },
      "priceCents": 2374,
      "keywords": [
        "kleenex",
        "tissues",
        "kitchen",
        "tissues box",
        "napkins"
      ]
    },
    {
      "key": "18",
      "image": "src/assets/images/products/straw-sunhat.webp",
      "name": "Straw Lifeguard Sun Hat",
      "rating": {
        "stars": 4,
        "count": 215
      },
      "priceCents": 2200,
      "keywords": [
        "hats",
        "straw hats",
        "summer",
        "apparel"
      ]
    },
    {
      "key": "19",
      "image": "src/assets/images/products/sky-flower-stud-earrings.webp",
      "name": "Sterling Silver Sky Flower Stud Earrings",
      "rating": {
        "stars": 4.5,
        "count": 52
      },
      "priceCents": 1799,
      "keywords": [
        "jewelry",
        "accessories",
        "womens"
      ]
    },
    {
      "key": "20",
      "image": "src/assets/images/products/women-stretch-popover-hoodie-black.jpg",
      "name": "Women's Stretch Popover Hoodie",
      "rating": {
        "stars": 4.5,
        "count": 2465
      },
      "priceCents": 1374,
      "keywords": [
        "hooded",
        "hoodies",
        "sweaters",
        "womens",
        "apparel"
      ],
      "type": "clothing",
      "sizeChartLink": "images/clothing-size-chart.png"
    },
    {
      "key": "21",
      "image": "src/assets/images/products/bathroom-rug.jpg",
      "name": "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
      "rating": {
        "stars": 4.5,
        "count": 119
      },
      "priceCents": 1250,
      "keywords": [
        "bathmat",
        "bathroom",
        "home"
      ]
    },
    {
      "key": "22",
      "image": "src/assets/images/products/women-knit-ballet-flat-black.jpg",
      "name": "Women's Knit Ballet Flat",
      "rating": {
        "stars": 4,
        "count": 326
      },
      "priceCents": 2640,
      "keywords": [
        "shoes",
        "flats",
        "womens",
        "footwear"
      ]
    },
    {
      "key": "23",
      "image": "src/assets/images/products/men-golf-polo-t-shirt-blue.jpg",
      "name": "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
      "rating": {
        "stars": 4.5,
        "count": 2556
      },
      "priceCents": 1599,
      "keywords": [
        "tshirts",
        "shirts",
        "apparel",
        "mens"
      ],
      "type": "clothing",
      "sizeChartLink": "images/clothing-size-chart.png"
    },
    {
      "key": "24",
      "image": "src/assets/images/products/trash-can-with-foot-pedal-50-liter.jpg",
      "name": "Trash Can with Foot Pedal - Brushed Stainless Steel",
      "rating": {
        "stars": 4.5,
        "count": 2286
      },
      "priceCents": 8300,
      "keywords": [
        "garbage",
        "bins",
        "cans",
        "kitchen"
      ]
    },
    {
      "key": "25",
      "image": "src/assets/images/products/duvet-cover-set-blue-twin.jpg",
      "name": "Duvet Cover Set with Zipper Closure",
      "rating": {
        "stars": 4,
        "count": 456
      },
      "priceCents": 2399,
      "keywords": [
        "bedroom",
        "bed sheets",
        "sheets",
        "covers",
        "home"
      ]
    },
    {
      "key": "26",
      "image": "src/assets/images/products/women-chunky-beanie-gray.webp",
      "name": "Women's Chunky Cable Beanie - Gray",
      "rating": {
        "stars": 5,
        "count": 83
      },
      "priceCents": 1250,
      "keywords": [
        "hats",
        "winter hats",
        "beanies",
        "tuques",
        "apparel",
        "womens"
      ]
    },
    {
      "key": "27",
      "image": "src/assets/images/products/men-chino-pants-beige.jpg",
      "name": "Men's Classic-fit Pleated Chino Pants",
      "rating": {
        "stars": 4.5,
        "count": 9017
      },
      "priceCents": 2290,
      "keywords": [
        "pants",
        "apparel",
        "mens"
      ]
    },
    {
      "key": "28",
      "image": "src/assets/images/products/men-athletic-shoes-green.jpg",
      "name": "Men's Athletic Sneaker",
      "rating": {
        "stars": 4,
        "count": 229
      },
      "priceCents": 3890,
      "keywords": [
        "shoes",
        "running shoes",
        "footwear",
        "mens"
      ]
    },
    {
      "key": "29",
      "image": "src/assets/images/products/men-navigator-sunglasses-brown.jpg",
      "name": "Men's Navigator Sunglasses Pilot",
      "rating": {
        "stars": 3.5,
        "count": 42
      },
      "priceCents": 1690,
      "keywords": [
        "sunglasses",
        "glasses",
        "accessories",
        "shades"
      ]
    },
    {
      "key": "30",
      "image": "src/assets/images/products/non-stick-cooking-set-15-pieces.webp",
      "name": "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
      "rating": {
        "stars": 4.5,
        "count": 511
      },
      "priceCents": 6797,
      "keywords": [
        "cooking set",
        "kitchen"
      ]
    },
    {
      "key": "31",
      "image": "src/assets/images/products/vanity-mirror-silver.jpg",
      "name": "Vanity Mirror with Heavy Base - Chrome",
      "rating": {
        "stars": 4.5,
        "count": 130
      },
      "priceCents": 1649,
      "keywords": [
        "bathroom",
        "washroom",
        "mirrors",
        "home"
      ]
    },
    {
      "key": "32",
      "image": "src/assets/images/products/women-french-terry-fleece-jogger-camo.jpg",
      "name": "Women's Fleece Jogger Sweatpant",
      "rating": {
        "stars": 4.5,
        "count": 248
      },
      "priceCents": 2400,
      "keywords": [
        "pants",
        "sweatpants",
        "jogging",
        "apparel",
        "womens"
      ]
    },
    {
      "key": "33",
      "image": "src/assets/images/products/double-elongated-twist-french-wire-earrings.webp",
      "name": "Double Oval Twist French Wire Earrings - Gold",
      "rating": {
        "stars": 4.5,
        "count": 117
      },
      "priceCents": 2400,
      "keywords": [
        "accessories",
        "womens"
      ]
    },
    {
      "key": "34",
      "image": "src/assets/images/products/round-airtight-food-storage-containers.jpg",
      "name": "Round Airtight Food Storage Containers - 5 Piece",
      "rating": {
        "stars": 4,
        "count": 126
      },
      "priceCents": 2899,
      "keywords": [
        "boxes",
        "food containers",
        "kitchen"
      ]
    },
    {
      "key": "35",
      "image": "src/assets/images/products/coffeemaker-with-glass-carafe-black.jpg",
      "name": "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
      "rating": {
        "stars": 4.5,
        "count": 1211
      },
      "priceCents": 2250,
      "keywords": [
        "coffeemakers",
        "kitchen",
        "appliances"
      ]
    },
    {
      "key": "36",
      "image": "src/assets/images/products/blackout-curtains-black.jpg",
      "name": "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
      "rating": {
        "stars": 4.5,
        "count": 363
      },
      "priceCents": 3099,
      "keywords": [
        "bedroom",
        "home"
      ]
    },
    {
      "key": "37",
      "image": "src/assets/images/products/cotton-bath-towels-teal.webp",
      "name": "100% Cotton Bath Towels - 2 Pack, Light Teal",
      "rating": {
        "stars": 4.5,
        "count": 93
      },
      "priceCents": 2110,
      "keywords": [
        "bathroom",
        "home",
        "towels"
      ]
    },
    {
      "key": "38",
      "image": "src/assets/images/products/knit-athletic-sneakers-pink.webp",
      "name": "Waterproof Knit Athletic Sneakers - Pink",
      "rating": {
        "stars": 4,
        "count": 89
      },
      "priceCents": 3390,
      "keywords": [
        "shoes",
        "running shoes",
        "footwear",
        "womens"
      ]
    },
    {
      "key": "39",
      "image": "src/assets/images/products/countertop-blender-64-oz.jpg",
      "name": "Countertop Blender - 64oz, 1400 Watts",
      "rating": {
        "stars": 4,
        "count": 3
      },
      "priceCents": 10747,
      "keywords": [
        "food blenders",
        "kitchen",
        "appliances"
      ]
    },
    {
      "key": "40",
      "image": "src/assets/images/products/floral-mixing-bowl-set.jpg",
      "name": "10-Piece Mixing Bowl Set with Lids - Floral",
      "rating": {
        "stars": 5,
        "count": 679
      },
      "priceCents": 3899,
      "keywords": [
        "mixing bowls",
        "baking",
        "cookware",
        "kitchen"
      ]
    },
    {
      "key": "41",
      "image": "src/assets/images/products/kitchen-paper-towels-30-pack.jpg",
      "name": "2-Ply Kitchen Paper Towels - 30 Pack",
      "rating": {
        "stars": 4.5,
        "count": 1045
      },
      "priceCents": 5799,
      "keywords": [
        "kitchen",
        "kitchen towels",
        "tissues"
      ]
    },
    {
      "key": "42",
      "image": "src/assets/images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
      "name": "Men's Full-Zip Hooded Fleece Sweatshirt",
      "rating": {
        "stars": 4.5,
        "count": 3157
      },
      "priceCents": 2400,
      "keywords": [
        "sweaters",
        "hoodies",
        "apparel",
        "mens"
      ]
    }
  ]

export default products;
