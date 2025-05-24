export interface PizzaOrder {
  id: string;
  customerName: string;
  pizzaType: string;
  quantity: number;
  orderDate: string;
  status: 'Pending' | 'Preparing' | 'Out for Delivery' | 'Delivered' | 'Cancelled';
}

export const mockPizzaOrders: PizzaOrder[] = [
  {
    id: "PZA001",
    customerName: "John Doe",
    pizzaType: "Margherita",
    quantity: 2,
    orderDate: "2024-01-15 14:30",
    status: "Delivered"
  },
  {
    id: "PZA002",
    customerName: "Jane Smith",
    pizzaType: "Pepperoni",
    quantity: 1,
    orderDate: "2024-01-15 15:45",
    status: "Out for Delivery"
  },
  {
    id: "PZA003",
    customerName: "Mike Johnson",
    pizzaType: "Veggie Supreme",
    quantity: 3,
    orderDate: "2024-01-15 16:20",
    status: "Preparing"
  },
  {
    id: "PZA004",
    customerName: "Sarah Wilson",
    pizzaType: "Hawaiian",
    quantity: 1,
    orderDate: "2024-01-15 17:10",
    status: "Pending"
  },
  {
    id: "PZA005",
    customerName: "David Brown",
    pizzaType: "Meat Lovers",
    quantity: 2,
    orderDate: "2024-01-15 18:00",
    status: "Delivered"
  },
  {
    id: "PZA006",
    customerName: "Emily Davis",
    pizzaType: "BBQ Chicken",
    quantity: 1,
    orderDate: "2024-01-15 18:30",
    status: "Preparing"
  },
  {
    id: "PZA007",
    customerName: "Chris Miller",
    pizzaType: "Four Cheese",
    quantity: 2,
    orderDate: "2024-01-15 19:15",
    status: "Pending"
  },
  {
    id: "PZA008",
    customerName: "Lisa Anderson",
    pizzaType: "Margherita",
    quantity: 1,
    orderDate: "2024-01-15 19:45",
    status: "Out for Delivery"
  },
  {
    id: "PZA009",
    customerName: "Tom Garcia",
    pizzaType: "Pepperoni",
    quantity: 3,
    orderDate: "2024-01-15 20:20",
    status: "Delivered"
  },
  {
    id: "PZA010",
    customerName: "Anna Martinez",
    pizzaType: "Veggie Supreme",
    quantity: 1,
    orderDate: "2024-01-15 20:50",
    status: "Cancelled"
  },
  {
    id: "PZA011",
    customerName: "Robert Taylor",
    pizzaType: "Supreme",
    quantity: 2,
    orderDate: "2024-01-16 12:15",
    status: "Delivered"
  },
  {
    id: "PZA012",
    customerName: "Jennifer White",
    pizzaType: "Hawaiian",
    quantity: 1,
    orderDate: "2024-01-16 13:30",
    status: "Preparing"
  },
  {
    id: "PZA013",
    customerName: "Kevin Lee",
    pizzaType: "Meat Lovers",
    quantity: 2,
    orderDate: "2024-01-16 14:45",
    status: "Pending"
  },
  {
    id: "PZA014",
    customerName: "Michelle Clark",
    pizzaType: "BBQ Chicken",
    quantity: 1,
    orderDate: "2024-01-16 15:20",
    status: "Out for Delivery"
  },
  {
    id: "PZA015",
    customerName: "James Rodriguez",
    pizzaType: "Four Cheese",
    quantity: 3,
    orderDate: "2024-01-16 16:10",
    status: "Delivered"
  },
  {
    id: "PZA016",
    customerName: "Amanda Lewis",
    pizzaType: "Margherita",
    quantity: 1,
    orderDate: "2024-01-16 17:00",
    status: "Preparing"
  },
  {
    id: "PZA017",
    customerName: "Daniel Walker",
    pizzaType: "Pepperoni",
    quantity: 2,
    orderDate: "2024-01-16 18:15",
    status: "Pending"
  },
  {
    id: "PZA018",
    customerName: "Nicole Hall",
    pizzaType: "Veggie Supreme",
    quantity: 1,
    orderDate: "2024-01-16 19:30",
    status: "Delivered"
  },
  {
    id: "PZA019",
    customerName: "Ryan Young",
    pizzaType: "Supreme",
    quantity: 2,
    orderDate: "2024-01-16 20:00",
    status: "Out for Delivery"
  },
  {
    id: "PZA020",
    customerName: "Stephanie King",
    pizzaType: "Hawaiian",
    quantity: 1,
    orderDate: "2024-01-16 20:45",
    status: "Cancelled"
  },
  {
    id: "PZA021",
    customerName: "Mark Wright",
    pizzaType: "Meat Lovers",
    quantity: 3,
    orderDate: "2024-01-17 11:30",
    status: "Delivered"
  },
  {
    id: "PZA022",
    customerName: "Rachel Green",
    pizzaType: "BBQ Chicken",
    quantity: 1,
    orderDate: "2024-01-17 12:45",
    status: "Preparing"
  },
  {
    id: "PZA023",
    customerName: "Brian Scott",
    pizzaType: "Four Cheese",
    quantity: 2,
    orderDate: "2024-01-17 13:20",
    status: "Pending"
  },
  {
    id: "PZA024",
    customerName: "Laura Adams",
    pizzaType: "Margherita",
    quantity: 1,
    orderDate: "2024-01-17 14:10",
    status: "Out for Delivery"
  }
];

export const getStatusConfig = (status: PizzaOrder['status']) => {
  switch (status) {
    case 'Pending':
      return {
        color: 'bg-amber-100 text-amber-800 border-amber-200',
        icon: '⏳',
        dotColor: 'bg-amber-400'
      };
    case 'Preparing':
      return {
        color: 'bg-blue-100 text-blue-800 border-blue-200',
        icon: '👨‍🍳',
        dotColor: 'bg-blue-400'
      };
    case 'Out for Delivery':
      return {
        color: 'bg-purple-100 text-purple-800 border-purple-200',
        icon: '🚚',
        dotColor: 'bg-purple-400'
      };
    case 'Delivered':
      return {
        color: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        icon: '✅',
        dotColor: 'bg-emerald-400'
      };
    case 'Cancelled':
      return {
        color: 'bg-red-100 text-red-800 border-red-200',
        icon: '❌',
        dotColor: 'bg-red-400'
      };
    default:
      return {
        color: 'bg-gray-100 text-gray-800 border-gray-200',
        icon: '❓',
        dotColor: 'bg-gray-400'
      };
  }
};
