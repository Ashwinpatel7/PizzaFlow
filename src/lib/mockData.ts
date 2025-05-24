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
    customerName: "Arjun Sharma",
    pizzaType: "Margherita",
    quantity: 2,
    orderDate: "2024-01-15 14:30",
    status: "Delivered"
  },
  {
    id: "PZA002",
    customerName: "Priya Patel",
    pizzaType: "Pepperoni",
    quantity: 1,
    orderDate: "2024-01-15 15:45",
    status: "Out for Delivery"
  },
  {
    id: "PZA003",
    customerName: "Vikram Singh",
    pizzaType: "Veggie Supreme",
    quantity: 3,
    orderDate: "2024-01-15 16:20",
    status: "Preparing"
  },
  {
    id: "PZA004",
    customerName: "Ananya Gupta",
    pizzaType: "Paneer Tikka",
    quantity: 1,
    orderDate: "2024-01-15 17:10",
    status: "Pending"
  },
  {
    id: "PZA005",
    customerName: "Rohit Kumar",
    pizzaType: "Chicken Tandoori",
    quantity: 2,
    orderDate: "2024-01-15 18:00",
    status: "Delivered"
  },
  {
    id: "PZA006",
    customerName: "Sneha Reddy",
    pizzaType: "BBQ Chicken",
    quantity: 1,
    orderDate: "2024-01-15 18:30",
    status: "Preparing"
  },
  {
    id: "PZA007",
    customerName: "Karan Mehta",
    pizzaType: "Four Cheese",
    quantity: 2,
    orderDate: "2024-01-15 19:15",
    status: "Pending"
  },
  {
    id: "PZA008",
    customerName: "Kavya Iyer",
    pizzaType: "Margherita",
    quantity: 1,
    orderDate: "2024-01-15 19:45",
    status: "Out for Delivery"
  },
  {
    id: "PZA009",
    customerName: "Aditya Joshi",
    pizzaType: "Pepperoni",
    quantity: 3,
    orderDate: "2024-01-15 20:20",
    status: "Delivered"
  },
  {
    id: "PZA010",
    customerName: "Riya Agarwal",
    pizzaType: "Veggie Supreme",
    quantity: 1,
    orderDate: "2024-01-15 20:50",
    status: "Cancelled"
  },
  {
    id: "PZA011",
    customerName: "Siddharth Rao",
    pizzaType: "Chicken Keema",
    quantity: 2,
    orderDate: "2024-01-16 12:15",
    status: "Delivered"
  },
  {
    id: "PZA012",
    customerName: "Pooja Nair",
    pizzaType: "Paneer Makhani",
    quantity: 1,
    orderDate: "2024-01-16 13:30",
    status: "Preparing"
  },
  {
    id: "PZA013",
    customerName: "Aryan Malhotra",
    pizzaType: "Chicken Tikka",
    quantity: 2,
    orderDate: "2024-01-16 14:45",
    status: "Pending"
  },
  {
    id: "PZA014",
    customerName: "Ishita Bansal",
    pizzaType: "BBQ Chicken",
    quantity: 1,
    orderDate: "2024-01-16 15:20",
    status: "Out for Delivery"
  },
  {
    id: "PZA015",
    customerName: "Nikhil Verma",
    pizzaType: "Four Cheese",
    quantity: 3,
    orderDate: "2024-01-16 16:10",
    status: "Delivered"
  },
  {
    id: "PZA016",
    customerName: "Shreya Kapoor",
    pizzaType: "Margherita",
    quantity: 1,
    orderDate: "2024-01-16 17:00",
    status: "Preparing"
  },
  {
    id: "PZA017",
    customerName: "Varun Chopra",
    pizzaType: "Pepperoni",
    quantity: 2,
    orderDate: "2024-01-16 18:15",
    status: "Pending"
  },
  {
    id: "PZA018",
    customerName: "Divya Sinha",
    pizzaType: "Veggie Delight",
    quantity: 1,
    orderDate: "2024-01-16 19:30",
    status: "Delivered"
  },
  {
    id: "PZA019",
    customerName: "Akash Tiwari",
    pizzaType: "Chicken Dominator",
    quantity: 2,
    orderDate: "2024-01-16 20:00",
    status: "Out for Delivery"
  },
  {
    id: "PZA020",
    customerName: "Meera Saxena",
    pizzaType: "Paneer Tikka",
    quantity: 1,
    orderDate: "2024-01-16 20:45",
    status: "Cancelled"
  },
  {
    id: "PZA021",
    customerName: "Rahul Bhardwaj",
    pizzaType: "Chicken Tandoori",
    quantity: 3,
    orderDate: "2024-01-17 11:30",
    status: "Delivered"
  },
  {
    id: "PZA022",
    customerName: "Nisha Aggarwal",
    pizzaType: "BBQ Chicken",
    quantity: 1,
    orderDate: "2024-01-17 12:45",
    status: "Preparing"
  },
  {
    id: "PZA023",
    customerName: "Harsh Goyal",
    pizzaType: "Cheese Burst",
    quantity: 2,
    orderDate: "2024-01-17 13:20",
    status: "Pending"
  },
  {
    id: "PZA024",
    customerName: "Tanvi Mishra",
    pizzaType: "Margherita",
    quantity: 1,
    orderDate: "2024-01-17 14:10",
    status: "Out for Delivery"
  },
  {
    id: "PZA025",
    customerName: "Rajesh Khanna",
    pizzaType: "Achari Paneer",
    quantity: 2,
    orderDate: "2024-01-17 15:30",
    status: "Preparing"
  },
  {
    id: "PZA026",
    customerName: "Deepika Sharma",
    pizzaType: "Butter Chicken",
    quantity: 1,
    orderDate: "2024-01-17 16:45",
    status: "Delivered"
  },
  {
    id: "PZA027",
    customerName: "Amit Agrawal",
    pizzaType: "Spicy Chicken Tikka",
    quantity: 3,
    orderDate: "2024-01-17 17:20",
    status: "Pending"
  },
  {
    id: "PZA028",
    customerName: "Sunita Devi",
    pizzaType: "Paneer Makhani",
    quantity: 1,
    orderDate: "2024-01-17 18:15",
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
