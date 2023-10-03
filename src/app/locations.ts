export interface VendorLocation {
  id: number;
  name: string;
  address: string;
  coordinates: number[];
}

export interface NearestLocation extends VendorLocation {
  latitude: number;
  longitude: number;
}

export const locations: VendorLocation[] = [
  {
    id: 1,
    name: "Weinberg's Good Food",
    address: "6856 Island Hwy S, Fanny Bay, BC V0R 1W0",
    coordinates: [49.525358286026425, -124.8488898385739],
  },
  {
    id: 2,
    name: "Gladstone Brewing Co.",
    address: "244 4th St, Courtenay, BC V9N 1G6",
    coordinates: [49.69186943761356, -124.99804392778239],
  },
  {
    id: 3,
    name: "Edible Island Whole Foods Market",
    address: "477 6th St, Courtenay, BC V9N 6V4",
    coordinates: [49.68958882257685, -125.00058992007597],
  },
  {
    id: 4,
    name: "Atlas Cafe",
    address: "250 6th St. Courtenay, B.C. V9N 1M1",
    coordinates: [49.6903685491362, -124.9972552039747],
  },
  // {
  //   id: 5,
  //   name: "Rawthentic Eatery",
  //   address: "407 5th St, Courtenay, BC V9N 1J7",
  // },
  {
    id: 6,
    name: "Local Refillery",
    address: "420 Fitzgerald Ave, Courtenay, BC V9N 7N2",
    coordinates: [49.690534942652675, -125.0018017812361],
  },
  {
    id: 7,
    name: "4 Quarters Restaurant",
    address: "2744 Dunsmuir Ave Box # 1233, Cumberland, BC V0R 1S0",
    coordinates: [49.619293603946915, -125.02732206699226],
  },
  {
    id: 8,
    name: "Biblio Taco",
    address: "2724 Dunsmuir Ave, Cumberland, BC V0R 1S0",
    coordinates: [49.61914537435822, -125.02860208593347],
  },
  {
    id: 9,
    name: "Seeds Food Market",
    address: "2733a Dunsmuir Ave, Cumberland, BC",
    coordinates: [49.61887261023973, -125.02793149510633],
  },
  {
    id: 10,
    name: "Duncan Garage",
    address: "330 Duncan St, Duncan, BC V9L 3W4",
    coordinates: [48.77751607120142, -123.7059694964388],
  },
  {
    id: 11,
    name: "Cow - Op",
    address: "3504 Drinkwater Rd Duncan, BC V9L 5Z2",
    coordinates: [48.802946860292124, -123.74836305021255],
  },
  {
    id: 12,
    name: "The Community Farm Store",
    address: "5380 Trans-Canada Hwy, Duncan, BC V9L 6W4",
    coordinates: [48.766954978697925, -123.69942650772234],
  },
  {
    id: 13,
    name: "Vorizo Café",
    address: "5875 Central Rd, Hornby Island, BC V0R 1Z0",
    coordinates: [49.52423736707723, -124.6481096607575],
  },
  {
    id: 14,
    name: "Farm Gate Store",
    address: "568 Fernhill Rd, Mayne Island, BC V0N 2J2",
    coordinates: [48.845182376364555, -123.27814386475352],
  },
  {
    id: 15,
    name: "Pomme Natural Market Nanaimo",
    address: "6560 Metral Dr, Nanaimo, BC V9T 2L8",
    coordinates: [49.233463876994946, -124.04790329231984],
  },
  {
    id: 16,
    name: "Modo Yoga Nanaimo",
    address: "5271 Rutherford Rd #100, Nanaimo, BC V9T 5N9",
    coordinates: [49.22550329258856, -124.02344739812101],
  },
  {
    id: 17,
    name: "Country Grocer",
    address: "1800 Dufferin Crescent, Nanaimo, BC V9S 0A9",
    coordinates: [49.184231617787646, -123.98416657696852],
  },
  {
    id: 18,
    name: "Category 12 Brewing",
    address: "2200 Keating Cross Rd C, Saanichton, BC V8M 2A6",
    coordinates: [48.56539109983977, -123.40791641776185],
  },
  {
    id: 19,
    name: "Rawthentic Eatery",
    address: "4440 W Saanich Rd #108, Victoria, BC V8Z 3E9",
    coordinates: [48.49180149957435, -123.38763520305882],
  },
  {
    id: 20,
    name: "Lifestyle Markets",
    address: "Lifestyle Markets, 2950 Douglas St Victoria, BC V8T 4N4",
    coordinates: [48.44328368129797, -123.37018956066139],
  },
  {
    id: 21,
    name: "The Local General Store",
    address: "1440 Haultain St, Victoria, BC V8R 2J9",
    coordinates: [48.436262537744334, -123.34016699476368],
  },
  {
    id: 22,
    name: "Mother Nature's Market & Deli",
    address: "240 Cook St, Victoria, BC V8V 3X3",
    coordinates: [48.414349668234806, -123.35685492236243],
  },
  {
    id: 23,
    name: "Imagine Studio Café",
    address: "31 Erie St, Victoria, BC V8V 1P8",
    coordinates: [48.42130029630954, -123.38331754509981],
  },
  {
    id: 24,
    name: "Market On Yates",
    address: "903 Yates St, Victoria, BC V8V 3M4",
    coordinates: [48.42535345010745, -123.35888931428047],
  },
  {
    id: 25,
    name: "Market On Millstream",
    address: "2401 Millstream Rd, Victoria, BC V9B 3R5",
    coordinates: [48.46256734723962, -123.49592884432222],
  },
  {
    id: 26,
    name: "Ferris Oyster Bar",
    address: "536 A Yates St, Victoria, BC V8W 1K8",
    coordinates: [48.42695249112121, -123.36907025674735],
  },
  {
    id: 27,
    name: "Country Grocer",
    address: "4420 W Saanich Rd, Victoria, BC V8Z 3E9",
    coordinates: [48.49218216463776, -123.38961949573869],
  },
  {
    id: 28,
    name: "The Root Cellar Village Green Grocer",
    address:
      "The Root Cellar Village Green Grocer, 1286 McKenzie Ave, Victoria, BC V8P 5P2",
    coordinates: [48.472276487291055, -123.35210668631153],
  },
  {
    id: 29,
    name: "The Drake Eatery",
    address: "The Drake Eatery, 517 Pandora Ave Victoria, BC V8W 1N6",
    coordinates: [48.428385032620845, -123.36908301166173],
  },
  //   { id: 30, name: "Hearth", address: "Fernwood Rd, Victoria, BC V8T 2Y6",
  // coordinates: [] },
  {
    id: 31,
    name: "One Yoga Victoria",
    address: "239 Menzies St #201, Victoria, BC V8V 2G6",
    coordinates: [48.416311761225266, -123.37308700486686],
  },
  {
    id: 32,
    name: "Q Restaurant at The Empress",
    address: "721 Government St, Victoria, BC V8W 1W5",
    coordinates: [48.421652600319014, -123.36784389404798],
  },
  {
    id: 33,
    name: "Zero Waste Emporium",
    address: "1728 Douglas St, Victoria, BC V8W 2G7",
    coordinates: [48.42997749729164, -123.36492336745613],
  },
  {
    id: 34,
    name: "Boom and Batten",
    address: "2 Paul Kane Pl, Victoria, BC V9A 7J8",
    coordinates: [48.426671456758335, -123.38178239895626],
  },
];
