export const venues = {
  cineplex: {
    id: 'cineplex',
    name: 'Cineplex',
    floor: 'Ground Floor',
    floorLabel: 'GF',
    tagline: 'The Ultimate Entertainment Hub',
    capacity: '3–20 guests',
    facilities: ['Mini Theatre', 'PS5', 'Pool Table', 'Karaoke', 'Board Games', 'Foot Massager'],
    pricing: {
      weekday: [
        { guests: '3–5', price: 3000 },
        { guests: '6–8', price: 4000 },
        { guests: '9–11', price: 5000 },
        { guests: '12–15', price: 7000 },
        { guests: '16–20', price: 9000 },
      ],
      weekend: [
        { guests: '3–5', price: 4000 },
        { guests: '6–8', price: 5000 },
        { guests: '9–11', price: 6000 },
        { guests: '12–15', price: 8000 },
        { guests: '16–20', price: 10000 },
      ],
    },
    foodCoupon: '50% Food Coupon included',
    colorClass: 'venue-card-cineplex',
    accentColor: 'cineplex',
  },
  miniplex: {
    id: 'miniplex',
    name: 'Miniplex',
    floor: 'First Floor',
    floorLabel: '1F',
    tagline: 'Intimate & Cozy',
    capacity: '2–6 guests',
    facilities: ['Mini Theatre', 'Karaoke', 'Board Games', 'Foot Massager'],
    pricing: {
      weekday: [
        { guests: '2', price: 2000 },
        { guests: '3–4', price: 2500 },
        { guests: '5–6', price: 3000 },
      ],
      weekend: [
        { guests: '2', price: 2500 },
        { guests: '3–4', price: 3000 },
        { guests: '5–6', price: 3500 },
      ],
    },
    foodCoupon: 'Food coupons included per group size',
    colorClass: 'venue-card-miniplex',
    accentColor: 'miniplex',
  },
  rooftop: {
    id: 'rooftop',
    name: 'Rooftop',
    floor: 'Second Floor',
    floorLabel: '2F',
    tagline: 'Open Air Cinema & Garden',
    capacity: '3–20 guests',
    facilities: ['Mini Theatre', 'Garden Area', 'Karaoke', 'Board Games', 'Foot Massager'],
    pricing: {
      weekday: [
        { guests: '3–5', price: 3000 },
        { guests: '6–8', price: 4000 },
        { guests: '9–11', price: 5000 },
        { guests: '12–15', price: 7000 },
        { guests: '16–20', price: 9000 },
      ],
      weekend: [
        { guests: '3–5', price: 4000 },
        { guests: '6–8', price: 5000 },
        { guests: '9–11', price: 6000 },
        { guests: '12–15', price: 8000 },
        { guests: '16–20', price: 10000 },
      ],
    },
    foodCoupon: '50% Food Coupon included',
    colorClass: 'venue-card-rooftop',
    accentColor: 'rooftop',
  },
} as const;

export const timeSlots = [
  '8 AM – 11 AM',
  '11 AM – 2 PM',
  '3 PM – 6 PM',
  '7 PM – 10 PM',
  '10:30 PM – 1:30 AM',
];

export const decorTiers = [
  {
    name: 'Standard',
    price: 1500,
    theme: 'Red & White Color Theme',
    features: ['LED Sign Board', 'Cake Table', '1 Instant Photo Frame'],
    colors: [],
  },
  {
    name: 'Deluxe',
    price: 2000,
    theme: 'Choose 2 Colors',
    features: ['LED Sign Board', 'Cake Table', '1 Instant Photo Frame'],
    colors: ['Gold', 'Purple', 'Black', 'Silver', 'Pink', 'Blue'],
  },
  {
    name: 'Premium',
    price: 2500,
    theme: 'Choose 2 Colors',
    features: ['LED Sign Board', 'Cake Table', 'Red Carpet & LED Lights', '2 Instant Photo Frames'],
    colors: ['Gold', 'Purple', 'Black', 'Silver', 'Pink', 'Blue'],
    popular: true,
  },
];

export const menuData = {
  pizzas: {
    veg: [
      { name: 'Margherita', description: 'Classic mozzarella & basil', veg: true },
      { name: 'Cottage House', description: 'Loaded cottage cheese toppings', veg: true },
      { name: 'Load of Crop', description: 'Farm-fresh vegetable medley', veg: true },
    ],
    nonVeg: [
      { name: 'Desi Fiesta', description: 'Indian-spiced chicken celebration', veg: false },
      { name: 'Oscar Weiner', description: 'Premium sausage & pepperoni', veg: false },
      { name: 'Bae-B-Q', description: 'Smoky BBQ chicken delight', veg: false },
    ],
  },
  pastas: [
    { name: 'Alfredo', description: 'Creamy white sauce perfection', veg: true },
    { name: 'Peri Peri', description: 'Spicy African-inspired heat', veg: true },
    { name: 'Arrabiata', description: 'Fiery tomato & chili classic', veg: true },
  ],
  appetizers: [
    { name: 'French Fries', description: 'Golden crispy perfection', veg: true },
    { name: 'Chilli Garlic Potato Shots', description: 'Spiced potato bites', veg: true },
    { name: 'Cheese Corn Nuggets', description: 'Cheesy corn goodness', veg: true },
    { name: 'Chicken Popcorn', description: 'Bite-sized chicken joy', veg: false },
    { name: 'Chicken Nuggets', description: 'Classic crispy coating', veg: false },
    { name: 'Chicken Strips', description: '3 pieces of tender strips', veg: false },
  ],
  beverages: [
    { name: 'Soft Drinks', description: 'Assorted carbonated drinks', veg: true },
    { name: 'Iced Tea', description: 'Refreshing chilled tea', veg: true },
    { name: 'Mojito', description: 'Minty fresh cooler', veg: true },
  ],
};

export const foodCoupons = {
  miniplex: [
    { guests: '2', combos: '1 pizza/pasta, 1 appetizer, 1 drink per person' },
    { guests: '3–4', combos: '1 pizza/pasta, 2 appetizers, 1 drink per person' },
    { guests: '5–6', combos: '2 pizzas/pastas, 1 drink per person' },
  ],
};

export const policies = [
  'No party poppers & no snow sprays',
  'No outside food',
  'No alcohol',
  'Cake allowed',
  'Booking fee is non-refundable',
  'Additional 5% GST on billing value',
  'Reservation fee of ₹1000 applicable (adjustable against bill)',
];

export const occasions = [
  { emoji: '🎂', label: 'Birthday' },
  { emoji: '💑', label: 'Anniversary' },
  { emoji: '👯', label: 'Friends Night Out' },
  { emoji: '💼', label: 'Team Outing' },
  { emoji: '💍', label: 'Proposal' },
  { emoji: '👰', label: 'Bachelorette' },
  { emoji: '🎓', label: 'Farewell' },
  { emoji: '🌟', label: 'Just Because' },
];
