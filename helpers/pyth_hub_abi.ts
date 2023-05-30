export const pyth_hub_abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "chainId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "sequenceNumber",
        type: "uint64",
      },
    ],
    name: "BatchPriceFeedUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "publishTime",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "int64",
        name: "price",
        type: "int64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "conf",
        type: "uint64",
      },
    ],
    name: "PriceFeedUpdate",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getEmaPrice",
    outputs: [
      {
        components: [
          {
            internalType: "int64",
            name: "price",
            type: "int64",
          },
          {
            internalType: "uint64",
            name: "conf",
            type: "uint64",
          },
          {
            internalType: "int32",
            name: "expo",
            type: "int32",
          },
          {
            internalType: "uint256",
            name: "publishTime",
            type: "uint256",
          },
        ],
        internalType: "struct PythStructs.Price",
        name: "price",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "age",
        type: "uint256",
      },
    ],
    name: "getEmaPriceNoOlderThan",
    outputs: [
      {
        components: [
          {
            internalType: "int64",
            name: "price",
            type: "int64",
          },
          {
            internalType: "uint64",
            name: "conf",
            type: "uint64",
          },
          {
            internalType: "int32",
            name: "expo",
            type: "int32",
          },
          {
            internalType: "uint256",
            name: "publishTime",
            type: "uint256",
          },
        ],
        internalType: "struct PythStructs.Price",
        name: "price",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getEmaPriceUnsafe",
    outputs: [
      {
        components: [
          {
            internalType: "int64",
            name: "price",
            type: "int64",
          },
          {
            internalType: "uint64",
            name: "conf",
            type: "uint64",
          },
          {
            internalType: "int32",
            name: "expo",
            type: "int32",
          },
          {
            internalType: "uint256",
            name: "publishTime",
            type: "uint256",
          },
        ],
        internalType: "struct PythStructs.Price",
        name: "price",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getPrice",
    outputs: [
      {
        components: [
          {
            internalType: "int64",
            name: "price",
            type: "int64",
          },
          {
            internalType: "uint64",
            name: "conf",
            type: "uint64",
          },
          {
            internalType: "int32",
            name: "expo",
            type: "int32",
          },
          {
            internalType: "uint256",
            name: "publishTime",
            type: "uint256",
          },
        ],
        internalType: "struct PythStructs.Price",
        name: "price",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "age",
        type: "uint256",
      },
    ],
    name: "getPriceNoOlderThan",
    outputs: [
      {
        components: [
          {
            internalType: "int64",
            name: "price",
            type: "int64",
          },
          {
            internalType: "uint64",
            name: "conf",
            type: "uint64",
          },
          {
            internalType: "int32",
            name: "expo",
            type: "int32",
          },
          {
            internalType: "uint256",
            name: "publishTime",
            type: "uint256",
          },
        ],
        internalType: "struct PythStructs.Price",
        name: "price",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getPriceUnsafe",
    outputs: [
      {
        components: [
          {
            internalType: "int64",
            name: "price",
            type: "int64",
          },
          {
            internalType: "uint64",
            name: "conf",
            type: "uint64",
          },
          {
            internalType: "int32",
            name: "expo",
            type: "int32",
          },
          {
            internalType: "uint256",
            name: "publishTime",
            type: "uint256",
          },
        ],
        internalType: "struct PythStructs.Price",
        name: "price",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "updateData",
        type: "bytes[]",
      },
    ],
    name: "getUpdateFee",
    outputs: [
      {
        internalType: "uint256",
        name: "feeAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getValidTimePeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "validTimePeriod",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "updateData",
        type: "bytes[]",
      },
      {
        internalType: "bytes32[]",
        name: "priceIds",
        type: "bytes32[]",
      },
      {
        internalType: "uint64",
        name: "minPublishTime",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "maxPublishTime",
        type: "uint64",
      },
    ],
    name: "parsePriceFeedUpdates",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "int64",
                name: "price",
                type: "int64",
              },
              {
                internalType: "uint64",
                name: "conf",
                type: "uint64",
              },
              {
                internalType: "int32",
                name: "expo",
                type: "int32",
              },
              {
                internalType: "uint256",
                name: "publishTime",
                type: "uint256",
              },
            ],
            internalType: "struct PythStructs.Price",
            name: "price",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "int64",
                name: "price",
                type: "int64",
              },
              {
                internalType: "uint64",
                name: "conf",
                type: "uint64",
              },
              {
                internalType: "int32",
                name: "expo",
                type: "int32",
              },
              {
                internalType: "uint256",
                name: "publishTime",
                type: "uint256",
              },
            ],
            internalType: "struct PythStructs.Price",
            name: "emaPrice",
            type: "tuple",
          },
        ],
        internalType: "struct PythStructs.PriceFeed[]",
        name: "priceFeeds",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "updateData",
        type: "bytes[]",
      },
    ],
    name: "updatePriceFeeds",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "updateData",
        type: "bytes[]",
      },
      {
        internalType: "bytes32[]",
        name: "priceIds",
        type: "bytes32[]",
      },
      {
        internalType: "uint64[]",
        name: "publishTimes",
        type: "uint64[]",
      },
    ],
    name: "updatePriceFeedsIfNecessary",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];
