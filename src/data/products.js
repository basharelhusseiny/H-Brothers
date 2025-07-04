const productsData = [
  {
    slug: "biscuits",
    items: [
      {
        id: crypto.randomUUID(),
        name: "Cream Biscuit 82gm",
        image: "/images/products/biscuits/6SgQAUsQ.jpeg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Cream Biscuits 75gm",
        image: "/images/products/biscuits/gJyuwW_A.jpeg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Milk Plus Biscuit 55gm",
        image: "/images/products/biscuits/AFMQ7LMA.jpeg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Biscuit Glucose 110gm",
        image: "/images/products/biscuits/TpX2qaQA.jpeg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Biscuit Glucose 150gm",
        image: "/images/products/biscuits/t7Ajdpuw.jpeg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Biscuit Valentino 26gm",
        image: "/images/products/biscuits/k00D_3jw.jpeg",
        inStock: true,
      },
    ],
  },
  {
    slug: "sugar",
    items: [
      {
        id: crypto.randomUUID(),
        name: "Brazil White Sugar 25kg",
        image: "/images/products/sugar/oLIzyaTQ.png",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Brazil Brown Sugar 25kg",
        image: "/images/products/sugar/Zf1pBwCg.png",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Kinyara Brown Sugar 50kg",
        image: "/images/products/sugar/f2RQ3CGw.png",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Kinyara White Sugar 25kg",
        image: "/images/products/sugar/zvAOBxDg.jpeg",
        inStock: true,
      },
    ],
  },
  {
    slug: "milk-powder",
    items: [
      {
        id: crypto.randomUUID(),
        name: "Almudish Milk Powder 250gm",
        image: "/images/products/milk-powder/-I6FeMFg.jpeg",
        inStock: true,
      },
      // {
      //   id: crypto.randomUUID(),
      //   name: "Almudish Milk Powder 40gm",
      //   image: "/images/products/milk-powder/-I6FeMFg.jpeg",
      //   inStock: true,
      // },
      {
        id: crypto.randomUUID(),
        name: "Almudish Milk Poweder Tin 2.5kg",
        image: "/images/products/milk-powder/lPEnr_9A.jpeg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Almudish Milk Poweder Tin 900gm",
        image: "/images/products/milk-powder/lPEnr_9A.jpeg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Royal Milk Powder 250gm",
        image: "/images/products/milk-powder/ahfYNQDA.jpeg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Royal Milk Powder 40gm",
        image: "/images/products/milk-powder/o_E_P-cw.png",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Royal Milk Powder Tin 2.5kg",
        image: "/images/products/milk-powder/oo7hJvyg.png",
        inStock: true,
      },
    ],
  },
  {
    slug: "juice-powder",
    items: [
      {
        id: crypto.randomUUID(),
        name: "Royal Powder Juice 30g",
        image: "/images/products/juice-powder/swGyMckA.jpeg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Juice Powder 2.75kg",
        image: "/images/products/juice-powder/U8oGGZMg.png",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Juice Powder 900gm",
        image: "/images/products/juice-powder/gBWeHJTg.jpeg",
        inStock: true,
      },
    ],
  },
  {
    slug: "wheat-flour",
    items: [
      {
        id: crypto.randomUUID(),
        name: "Azam Bora 25kg",
        image: "/images/products/wheat-flour/IyJgN7qg.png",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Azam Bora 50kg",
        image: "/images/products/wheat-flour/igOS5DBw.png",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Azam Carton",
        image: "/images/products/wheat-flour/NMPyeOZQ.png",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Azam SBF 25kg",
        image: "/images/products/wheat-flour/nfF-HuEQ.jpeg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Azam SBF 50kg",
        image: "/images/products/wheat-flour/nfF-HuEQ.jpeg",
        inStock: true,
      },
    ],
  },
  {
    slug: "cooking-oil",
    items: [
      {
        id: crypto.randomUUID(),
        name: "Cooking Oil 20 Ltr",
        image: "/images/products/cooking-oil/abn02V9A.png",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Cooking Oil 3 Ltr",
        image: "/images/products/cooking-oil/DHUp7ssw.png",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Cooking Oil 5 Ltr",
        image: "/images/products/cooking-oil/r4JFZivg.png",
        inStock: true,
      },
    ],
  },
  {
    slug: "sweets",
    items: [
      {
        id: crypto.randomUUID(),
        name: "Bubble Gum 3gm",
        image: "/images/products/sweets/9UCFFApA.jpeg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Lollipop Big Bombo 21gm",
        image: "/images/products/sweets/64e5xkNA.jpeg",
        inStock: true,
      },
    ],
  },
  {
    slug: "tomato-paste",
    items: [
      {
        id: crypto.randomUUID(),
        name: "Almudish Tomato Paste 50gm",
        image: "/images/products/tomato-paste/R_JrLNdg.png",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Almudish Tomato Paste 70gm",
        image: "/images/products/tomato-paste/DW26ePIg.png",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Almudish Tomato Paste  Tin 400gm",
        image: "/images/products/tomato-paste/BpodoGxw.png",
        inStock: true,
      },
    ],
  },
  {
    slug: "rice",
    items: [
      {
        id: crypto.randomUUID(),
        name: "Brown Rice 25kg",
        image:
          "/images/products/rice/9d55a00c028460da0ae4d4e29289ea8b.jpg_720x720q80.jpg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "White Rice 25kg",
        image:
          "/images/products/rice/181367351_169410801761184_8417732091264742445_n.jpg",
        inStock: true,
      },
    ],
  },
  {
    slug: "soft-drinks",
    items: [
      {
        id: crypto.randomUUID(),
        name: "7up Soda Can 300ml",
        image: "/images/products/soft-drinks/BbyZaUvw.jpeg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Pepsi Soda Can 300ml",
        image: "/images/products/soft-drinks/QbzFIUsQ.jpeg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Mirnda Soda Can 300ml",
        image: "/images/products/soft-drinks/LZUVT3HA.png",
        inStock: true,
      },
    ],
  },
];

export default productsData;
