import { itemTypes, recipe } from "./types";

// ITEMS //

export const inventoryItems: itemTypes = [
  {
    name: "Honey",
    image: "Honey.png",
  },
  {
    name: "Red Extract",
    image: "RedExtract.png",
  },
  {
    name: "Blue Extract",
    image: "BlueExtract.png",
  },
  {
    name: "Enzymes",
    image: "Enzymes.png",
  },
  {
    name: "Oil",
    image: "Oil.png",
  },
  {
    name: "Glue",
    image: "Glue.png",
  },
  {
    name: "Gumdrops",
    image: "Gumdrops.png",
  },
  {
    name: "Glitter",
    image: "Glitter.png",
  },
  {
    name: "Tropical Drink",
    image: "TropicalDrink.png",
  },
  {
    name: "Soft Wax",
    image: "SoftWax.png",
  },
  {
    name: "Hard Wax",
    image: "HardWax.png",
  },
  {
    name: "Swirled Wax",
    image: "SwirledWax.png",
  },
  {
    name: "Caustic Wax",
    image: "CausticWax.png",
  },
  {
    name: "Field Dice",
    image: "FieldDice.png",
  },
  {
    name: "Smooth Dice",
    image: "SmoothDice.png",
  },
  {
    name: "Loaded Dice",
    image: "LoadedDice.png",
  },
  {
    name: "Purple Potion",
    image: "PurplePotion.png",
  },
  {
    name: "Turpentine",
    image: "Turpentine.png",
  },
  {
    name: "Super Smoothies",
    image: "SuperSmoothie.png",
  },
];

// MATERIALS //

export const inventoryMaterials: itemTypes = [
  {
    name: "Strawberries",
    image: "Strawberries.png",
  },
  {
    name: "Blueberries",
    image: "Blueberries.png",
  },
  {
    name: "Pineapples",
    image: "Pineapples.png",
  },
  {
    name: "Sunflower Seeds",
    image: "SunflowerSeeds.png",
  },
  {
    name: "Coconuts",
    image: "Coconuts.png",
  },
  {
    name: "Magic Bean",
    image: "MagicBean.png",
  },
  {
    name: "Moon Charms",
    image: "Moon.png",
  },
  {
    name: "Treats",
    image: "Treats.png",
  },
  {
    name: "Royal Jelly",
    image: "RoyalJelly.png",
  },
  {
    name: "Star Jelly",
    image: "StarJelly.png",
  },
  {
    name: "Stingers",
    image: "Stingers.png",
  },
  {
    name: "Neon Berries",
    image: "NeonBerries.png",
  },
  {
    name: "Honey Suckle",
    image: "HoneySuckle.png",
  },
  {
    name: "Gold Eggs",
    image: "GoldEgg.png",
  },
  {
    name: "Diamond Eggs",
    image: "DiamondEgg.png",
  },
  {
    name: "Spirit Petal",
    image: "SpiritPetal.png",
  },
];

// MASKS //

export const masks: itemTypes = [
  {
    name: "Honey",
    image: "HoneyMask.png",
  },
  {
    name: "Gummy",
    image: "GummyMask.png",
  },
  {
    name: "Diamond",
    image: "DiamondMask.png",
  },
  {
    name: "Demon",
    image: "DemonMask.png",
  },
];

export const maskRecipes: recipe = [
  {
    honey: [
      { material: "Honey", value: 100000000, image: "Honey.png" },
      { material: "Treats", value: 9999, image: "Treats.png" },
      {
        material: "Oil",
        value: 50,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Enzymes",
        value: 25,
        image: "Enzymes.png",
        subRecipe: [
          {
            material: "Pineapples",
            value: 50,
            image: "Pineapples.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      { material: "Gold Eggs", value: 5, image: "GoldEgg.png" },
    ],
  },
  {
    gummy: [
      { material: "Honey", value: 5000000000, image: "Honey.png" },
      {
        material: "Glue",
        value: 250,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Oil",
        value: 100,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Enzymes",
        value: 100,
        image: "Enzymes.png",
        subRecipe: [
          {
            material: "Pineapples",
            value: 50,
            image: "Pineapples.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 100,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
    ],
  },
  {
    diamond: [
      { material: "Honey", value: 5000000000, image: "Honey.png" },
      {
        material: "Blue Extract",
        value: 250,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Oil",
        value: 150,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 100,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
      { material: "Diamond Eggs", value: 5, image: "DiamondEgg.png" },
    ],
  },
  {
    demon: [
      { material: "Honey", value: 5000000000, image: "Honey.png" },
      {
        material: "Red Extract",
        value: 250,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glue",
        value: 100,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Enzymes",
        value: 150,
        image: "Enzymes.png",
        subRecipe: [
          {
            material: "Pineapples",
            value: 50,
            image: "Pineapples.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },

      { material: "Stingers", value: 500, image: "Stingers.png" },
    ],
  },
];

// TOOLS //

export const tools: itemTypes = [
  {
    name: "Petal Wand",
    image: "PetalWand.png",
  },
  {
    name: "Gummy Baller",
    image: "GummyBaller.png",
  },
  {
    name: "Tide Popper",
    image: "TidePopper.png",
  },
  {
    name: "Dark Scythe",
    image: "DarkScythe.png",
  },
];

export const toolRecipes: recipe = [
  {
    petal: [
      { material: "Honey", value: 1500000000, image: "Honey.png" },
      {
        material: "Enzymes",
        value: 75,
        image: "Enzymes.png",
        subRecipe: [
          {
            material: "Pineapples",
            value: 50,
            image: "Pineapples.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 100,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
      {
        material: "Star Jelly",
        value: 10,
        image: "StarJelly.png",
      },
      { material: "Spirit Petal", value: 1, image: "SpiritPetal.png" },
    ],
  },
  {
    gummy: [
      { material: "Honey", value: 10000000000000, image: "Honey.png" },
      {
        material: "Glue",
        value: 1500,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Caustic Wax",
        value: 50,
        image: "CausticWax.png",
        subRecipe: [
          {
            material: "Hard Wax",
            value: 5,
            image: "HardWax.png",
          },
          {
            material: "Enzymes",
            value: 5,
            image: "Enzymes.png",
          },
          {
            material: "Neon Berries",
            value: 25,
            image: "NeonBerries.png",
          },
          {
            material: "Royal Jelly",
            value: 5252,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Super Smoothies",
        value: 10,
        image: "SuperSmoothie.png",
        subRecipe: [
          {
            material: "Neon Berries",
            value: 3,
            image: "NeonBerries.png",
          },
          {
            material: "Purple Potion",
            value: 3,
            image: "PurplePotion.png",
          },
          {
            material: "Tropical Drink",
            value: 6,
            image: "TropicalDrink.png",
          },
          {
            material: "Star Jelly",
            value: 3,
            image: "StarJelly.png",
          },
        ],
      },
      {
        material: "Turpentine",
        value: 5,
        image: "Turpentine.png",
        subRecipe: [
          {
            material: "Super Smoothies",
            value: 10,
            image: "SuperSmoothie.png",
          },
          {
            material: "Caustic Wax",
            value: 10,
            image: "CausticWax.png",
          },
          {
            material: "Honey Suckle",
            value: 1000,
            image: "HoneySuckle.png",
          },
          {
            material: "Star Jelly",
            value: 10,
            image: "StarJelly.png",
          },
        ],
      },
    ],
  },
  {
    tide: [
      { material: "Honey", value: 2500000000000, image: "Honey.png" },
      {
        material: "Blue Extract",
        value: 1500,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Tropical Drink",
        value: 150,
        image: "TropicalDrink.png",
        subRecipe: [
          {
            material: "Coconuts",
            value: 10,
            image: "Coconuts.png",
          },
          {
            material: "Oil",
            value: 2,
            image: "Oil.png",
          },
          {
            material: "Enzymes",
            value: 2,
            image: "Enzymes.png",
          },
        ],
      },
      {
        material: "Swirled Wax",
        value: 75,
        image: "SwirledWax.png",
        subRecipe: [
          {
            material: "Hard Wax",
            value: 3,
            image: "HardWax.png",
          },
          {
            material: "Soft Wax",
            value: 9,
            image: "SoftWax.png",
          },
          {
            material: "Purple Potion",
            value: 9,
            image: "PurplePotion.png",
          },
          {
            material: "Royal Jelly",
            value: 3333,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Super Smoothies",
        value: 50,
        image: "SuperSmoothie.png",
        subRecipe: [
          {
            material: "Neon Berries",
            value: 3,
            image: "NeonBerries.png",
          },
          {
            material: "Purple Potion",
            value: 3,
            image: "PurplePotion.png",
          },
          {
            material: "Tropical Drink",
            value: 6,
            image: "TropicalDrink.png",
          },
          {
            material: "Star Jelly",
            value: 3,
            image: "StarJelly.png",
          },
        ],
      },
      { material: "Stingers", value: 200, image: "Stingers.png" },
    ],
  },
  {
    scythe: [
      { material: "Honey", value: 2500000000000, image: "Honey.png" },
      {
        material: "Red Extract",
        value: 1500,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Hard Wax",
        value: 150,
        image: "HardWax.png",
        subRecipe: [
          {
            material: "Soft Wax",
            value: 3,
            image: "SoftWax.png",
          },
          {
            material: "Enzymes",
            value: 3,
            image: "Enzymes.png",
          },
          {
            material: "Neon Berries",
            value: 33,
            image: "NeonBerries.png",
          },
          {
            material: "Royal Jelly",
            value: 33,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Caustic Wax",
        value: 50,
        image: "CausticWax.png",
        subRecipe: [
          {
            material: "Hard Wax",
            value: 5,
            image: "HardWax.png",
          },
          {
            material: "Enzymes",
            value: 5,
            image: "Enzymes.png",
          },
          {
            material: "Neon Berries",
            value: 25,
            image: "NeonBerries.png",
          },
          {
            material: "Royal Jelly",
            value: 5252,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Super Smoothies",
        value: 50,
        image: "SuperSmoothie.png",
        subRecipe: [
          {
            material: "Neon Berries",
            value: 3,
            image: "NeonBerries.png",
          },
          {
            material: "Purple Potion",
            value: 3,
            image: "PurplePotion.png",
          },
          {
            material: "Tropical Drink",
            value: 6,
            image: "TropicalDrink.png",
          },
          {
            material: "Star Jelly",
            value: 3,
            image: "StarJelly.png",
          },
        ],
      },
      { material: "Stingers", value: 200, image: "Stingers.png" },
    ],
  },
];

// BAGS //

export const bags: itemTypes = [
  {
    name: "Coconut Canister",
    image: "CoconutCanister.png",
  },
];

export const bagRecipes: recipe = [
  {
    coconut: [
      { material: "Honey", value: 25000000000, image: "Honey.png" },
      { material: "Coconuts", value: 150, image: "Coconuts.png" },

      {
        material: "Red Extract",
        value: 150,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Blue Extract",
        value: 150,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Tropical Drink",
        value: 50,
        image: "TropicalDrink.png",
        subRecipe: [
          {
            material: "Coconuts",
            value: 10,
            image: "Coconuts.png",
          },
          {
            material: "Oil",
            value: 2,
            image: "Oil.png",
          },
          {
            material: "Enzymes",
            value: 2,
            image: "Enzymes.png",
          },
        ],
      },
    ],
  },
];

// GUARDS //

export const guards: itemTypes = [
  {
    name: "Bucko",
    image: "BuckoGuard.png",
  },
  {
    name: "Riley",
    image: "RileyGuard.png",
  },
  {
    name: "Cobalt",
    image: "CobaltGuard.png",
  },
  {
    name: "Crimson",
    image: "CrimsonGuard.png",
  },
];

export const guardRecipes: recipe = [
  {
    bucko: [
      { material: "Honey", value: 30000000, image: "Honey.png" },
      { material: "Blueberries", value: 100, image: "Blueberries.png" },
      {
        material: "Blue Extract",
        value: 10,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glue",
        value: 5,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      { material: "Moon Charms", value: 75, image: "Moon.png" },
    ],
  },
  {
    riley: [
      { material: "Honey", value: 30000000, image: "Honey.png" },
      { material: "Strawberries", value: 100, image: "Strawberries.png" },
      {
        material: "Red Extract",
        value: 10,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glue",
        value: 5,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      { material: "Stingers", value: 25, image: "Stingers.png" },
    ],
  },
  {
    cobalt: [
      { material: "Honey", value: 200000000, image: "Honey.png" },
      {
        material: "Blue Extract",
        value: 10,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Enzymes",
        value: 50,
        image: "Enzymes.png",
        subRecipe: [
          {
            material: "Pineapples",
            value: 50,
            image: "Pineapples.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 25,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
      { material: "Stingers", value: 100, image: "Stingers.png" },
    ],
  },
  {
    crimson: [
      { material: "Honey", value: 200000000, image: "Honey.png" },
      {
        material: "Red Extract",
        value: 10,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Oil",
        value: 50,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 25,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
      { material: "Stingers", value: 100, image: "Stingers.png" },
    ],
  },
];

// BELTS //

export const belts: itemTypes = [
  {
    name: "Mondo",
    image: "MondoBelt.png",
  },
  {
    name: "Honey",
    image: "HoneycombBelt.png",
  },
  {
    name: "Petal",
    image: "PetalBelt.png",
  },
];

export const beltRecipes: recipe = [
  {
    mondo: [
      { material: "Honey", value: 12400000, image: "Honey.png" },
      { material: "Pineapples", value: 150, image: "Pineapples.png" },
      { material: "Sunflower Seeds", value: 150, image: "SunflowerSeeds.png" },
      { material: "Stingers", value: 10, image: "Stingers.png" },
    ],
  },
  {
    honeycomb: [
      { material: "Honey", value: 75000000, image: "Honey.png" },
      {
        material: "Glue",
        value: 50,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Oil",
        value: 25,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Enzymes",
        value: 50,
        image: "Enzymes.png",
        subRecipe: [
          {
            material: "Pineapples",
            value: 50,
            image: "Pineapples.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
    ],
  },
  {
    petal: [
      { material: "Honey", value: 15000000000, image: "Honey.png" },
      {
        material: "Glue",
        value: 100,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 50,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
      { material: "Star Jelly", value: 25, image: "StarJelly.png" },
      { material: "Spirit Petal", value: 1, image: "SpiritPetal.png" },
    ],
  },
];

// BOOTS //

export const boots: itemTypes = [
  {
    name: "Beekeeper",
    image: "BeekeeperBoots.png",
  },
  {
    name: "Coconut",
    image: "CoconutClogs.png",
  },
  {
    name: "Gummy",
    image: "GummyBoots.png",
  },
];

export const bootRecipes: recipe = [
  {
    beekeeper: [
      { material: "Honey", value: 15000000, image: "Honey.png" },
      {
        material: "Red Extract",
        value: 3,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Blue Extract",
        value: 3,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Oil",
        value: 5,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      { material: "Stingers", value: 10, image: "Stingers.png" },
    ],
  },
  {
    coconut: [
      { material: "Honey", value: 10000000000, image: "Honey.png" },
      { material: "Coconuts", value: 150, image: "Coconuts.png" },
      {
        material: "Glue",
        value: 100,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Oil",
        value: 100,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Tropical Drink",
        value: 50,
        image: "TropicalDrink.png",
        subRecipe: [
          {
            material: "Coconuts",
            value: 10,
            image: "Coconuts.png",
          },
          {
            material: "Oil",
            value: 2,
            image: "Oil.png",
          },
          {
            material: "Enzymes",
            value: 2,
            image: "Enzymes.png",
          },
        ],
      },
    ],
  },
  {
    gummy: [
      { material: "Honey", value: 100000000000, image: "Honey.png" },
      {
        material: "Red Extract",
        value: 250,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Blue Extract",
        value: 250,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glue",
        value: 500,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 250,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
    ],
  },
];

// PLANTERS //

export const planters: itemTypes = [
  {
    name: "Candy",
    image: "CandyPlanter.png",
  },
  {
    name: "Blue",
    image: "BlueClayPlanter.png",
  },
  {
    name: "Red",
    image: "RedClayPlanter.png",
  },
  {
    name: "Tacky",
    image: "TackyPlanter.png",
  },
  {
    name: "Pesticide",
    image: "PesticidePlanter.png",
  },
  {
    name: "Petal",
    image: "PetalPlanter.png",
  },
];

export const planterRecipes: recipe = [
  {
    candy: [
      { material: "Honey", value: 15000000, image: "Honey.png" },
      {
        material: "Red Extract",
        value: 3,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Blue Extract",
        value: 3,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Oil",
        value: 5,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      { material: "Stingers", value: 10, image: "Stingers.png" },
    ],
  },
  {
    coconut: [
      { material: "Honey", value: 10000000000, image: "Honey.png" },
      { material: "Coconuts", value: 150, image: "Coconuts.png" },
      {
        material: "Glue",
        value: 100,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Oil",
        value: 100,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Tropical Drink",
        value: 50,
        image: "TropicalDrink.png",
        subRecipe: [
          {
            material: "Coconuts",
            value: 10,
            image: "Coconuts.png",
          },
          {
            material: "Oil",
            value: 2,
            image: "Oil.png",
          },
          {
            material: "Enzymes",
            value: 2,
            image: "Enzymes.png",
          },
        ],
      },
    ],
  },
  {
    gummy: [
      { material: "Honey", value: 100000000000, image: "Honey.png" },
      {
        material: "Red Extract",
        value: 250,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Blue Extract",
        value: 250,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glue",
        value: 500,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 250,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
    ],
  },
];
