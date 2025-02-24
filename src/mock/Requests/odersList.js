import recipiesOrder from "./recipiesOrder";

const odersList = [
  {
    id: 1015,
    date: "2025-02-24T14:30:00.000Z",
    client: {
      name: "Mateus barbosa",
      image: "mock/users/user.svg",
    },
    address: "Rua coronel de castro n°43",
    items_number: 2,
    value: 130,
    freight: 10,
    status: "Em rota de entrega",
    recipies: recipiesOrder,
  },
  {
    id: 1026,
    date: "2025-02-12T14:30:00.000Z",
    client: {
      name: "Lucas alex",
      image: "mock/users/user2.svg",
    },
    address: "Rua memorial de aries n°122",
    items_number: 2,
    value: 130,
    freight: 10,
    status: "Entrege",
    recipies: recipiesOrder,
  },
];
export default odersList;
