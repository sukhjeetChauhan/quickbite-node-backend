/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface) {
  await queryInterface.bulkInsert('menu_items', [
    // Indian
    {
      name: 'Chana Masala',
      description: 'Spicy chickpea curry',
      price: 12.5,
      isAvailable: true,
      imgurl: null,
      category: 'indian',
      dietType: 'vegan',
    },
    {
      name: 'Butter Chicken',
      description: 'Creamy tomato chicken curry',
      price: 15.0,
      isAvailable: true,
      imgurl: null,
      category: 'indian',
      dietType: 'none',
    },
    {
      name: 'Palak Paneer',
      description: 'Spinach with cottage cheese',
      price: 13.0,
      isAvailable: true,
      imgurl: null,
      category: 'indian',
      dietType: 'vegetarian',
    },
    {
      name: 'Tandoori Chicken',
      description: 'Grilled spiced chicken',
      price: 14.5,
      isAvailable: true,
      imgurl: null,
      category: 'indian',
      dietType: 'keto',
    },

    // Asian
    {
      name: 'Vegetable Stir Fry',
      description: 'Mixed vegetables with soy sauce',
      price: 11.0,
      isAvailable: true,
      imgurl: null,
      category: 'asian',
      dietType: 'vegan',
    },
    {
      name: 'Beef Bulgogi',
      description: 'Marinated Korean beef',
      price: 16.0,
      isAvailable: true,
      imgurl: null,
      category: 'asian',
      dietType: 'none',
    },
    {
      name: 'Shrimp Pad Thai',
      description: 'Thai noodles with shrimp',
      price: 15.5,
      isAvailable: true,
      imgurl: null,
      category: 'asian',
      dietType: 'paleo',
    },
    {
      name: 'Vegetarian Sushi',
      description: 'Assorted veggie sushi rolls',
      price: 13.5,
      isAvailable: true,
      imgurl: null,
      category: 'asian',
      dietType: 'vegetarian',
    },

    // American
    {
      name: 'Cheeseburger',
      description: 'Classic beef burger with cheese',
      price: 14.0,
      isAvailable: true,
      imgurl: null,
      category: 'american',
      dietType: 'none',
    },
    {
      name: 'Vegan Salad',
      description: 'Mixed greens with vinaigrette',
      price: 10.0,
      isAvailable: true,
      imgurl: null,
      category: 'american',
      dietType: 'vegan',
    },
    {
      name: 'Grilled Chicken Sandwich',
      description: 'Chicken sandwich with lettuce and tomato',
      price: 13.0,
      isAvailable: true,
      imgurl: null,
      category: 'american',
      dietType: 'keto',
    },
    {
      name: 'Mac and Cheese',
      description: 'Creamy macaroni and cheese',
      price: 11.5,
      isAvailable: true,
      imgurl: null,
      category: 'american',
      dietType: 'vegetarian',
    },

    // Mediterranean
    {
      name: 'Falafel Wrap',
      description: 'Chickpea falafel in pita bread',
      price: 12.0,
      isAvailable: true,
      imgurl: null,
      category: 'mediterranean',
      dietType: 'vegan',
    },
    {
      name: 'Greek Salad',
      description: 'Tomatoes, cucumbers, olives and feta',
      price: 11.5,
      isAvailable: true,
      imgurl: null,
      category: 'mediterranean',
      dietType: 'vegetarian',
    },
    {
      name: 'Grilled Lamb Chops',
      description: 'Herb-marinated grilled lamb',
      price: 18.0,
      isAvailable: true,
      imgurl: null,
      category: 'mediterranean',
      dietType: 'none',
    },
    {
      name: 'Stuffed Grape Leaves',
      description: 'Rice and herbs wrapped in grape leaves',
      price: 13.0,
      isAvailable: true,
      imgurl: null,
      category: 'mediterranean',
      dietType: 'gluten-free',
    },
  ]);
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('menu_items', {});
}
