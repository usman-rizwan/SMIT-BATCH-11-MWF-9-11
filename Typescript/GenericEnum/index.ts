//Generic Type

// interface User<Type extends { name: string }> {
//   name: string;
//   email: string;
//   data: Type;
// }

// const user1: User<{ name: string; rollNo: number; CNIC: string }> = {
//   name: "Bilal",
//   email: "attari1235@gmail.com",
//   data: {
//     name: "123",
//     rollNo: 123,
//     CNIC: "42101",
//   },
// };

//Enum
enum OrderStatus {
  pending = 'cc-pending',
  inProcces = 'inProcess',
  readyToDeliver = 'readyToDeliver', 
  onTheWay = 'onTheWay',
  delivered = 'delivered',
  inReview = 'inReview',
}

const orders: { status: string; orderId: string }[] = [
  {
    status: OrderStatus.pending, //pending
    orderId: "AC-12",
  },
  {
    status: OrderStatus.pending, //pending
    orderId: "AC-12",
  },
  {
    status: OrderStatus.pending, //pending
    orderId: "AC-12",
  },
  {
    status: OrderStatus.inProcces, //in proces
    orderId: "AC-122",
  },
  {
    status: OrderStatus.readyToDeliver, //ready to deliver
    orderId: "AC-1223",
  },
  {
    status: OrderStatus.onTheWay, //ontheway
    orderId: "AC-12233",
  },
  {
    status: OrderStatus.delivered, //delivered
    orderId: "AC-1223w3",
  },
  {
    status: OrderStatus.inReview, //inreveiw
    orderId: "AC-1223w231",
  },
];

console.log("orders=>",orders)
