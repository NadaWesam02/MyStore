
const products = [
    {
        id: 1,
        title: "Wireless Headphones",
        description: "Experience high-quality sound with noise cancellation and long battery life.",
        price: 99.99,
        image: "Wireless Headphones.jpeg",
        category: "Electronics",
        rating: 4.5
    },
    {
        id: 2,
        title: "Smart Watch",
        description: "Stay connected and track your fitness with this sleek and durable smart watch.",
        price: 149.99,
        image: "Smart Watch.jpeg",
        category: "Wearables",
        rating: 4.2
    },
    {
        id: 3,
        title: "Bluetooth Speaker",
        description: "Portable speaker with rich sound and waterproof design for outdoor use.",
        price: 59.99,
        image: "Bluetooth Speaker.jpeg",
        category: "Audio",
        rating: 4.0
    },
    {
        id: 4,
        title: "Gaming Mouse",
        description: "High precision sensor and customizable buttons for the ultimate gaming experience.",
        price: 39.99,
        image: "Gaming Mouse.jpeg",
        category: "Accessories",
        rating: 4.7
    },
    {
        id: 5,
        title: "4K Monitor",
        description: "Stunning 27-inch 4K display with vivid colors and wide viewing angles.",
        price: 329.99,
        image: "4K Monitor.jpeg",
        category: "Monitors",
        rating: 4.8
    },
    {
        id: 6,
        title: "Mechanical Keyboard",
        description: "Durable keyboard with tactile switches and customizable lighting effects.",
        price: 89.99,
        image: "Mechanical Keyboard.jpeg",
        category: "Accessories",
        rating: 4.3
    }
];

function getAllProducts() {
    return products;
}

function getProductById(id) {
    return products.find(product => product.id === id);
}
