const FoodCards = () => {
    const FoodObjects = [
        {
            id : 1,
            name: 'Breakfast',
            details: 'Be Ready for the Day with our Energetic Breakfast',
            food1: ['Tea','breakfastTea'],
            food2: ['Coffee','breakfastCoffe'],
            food3: ['South Indian','breakfastSouth'],
            food4: ['Mumbai Special','breakfastMumbai']
        },
        {
            id : 2,
            name: 'Lunch',
            details: 'All You Need Is Lunch',
            food1: ['Sandwich','lunchSandwitch'],
            food2: ['Salad','lunchSalad'],
            food3: ['Frankie','lunchFrankie'],
            food4: ['Noodles','lunchNoodles']
        },
        {
            id : 3,
            name: 'Dinner',
            details: 'Eat away at hunger',
            food1: ['Rice','dinnerRice'],
            food2: ['Mughlai','dinnerMughlai'],
            food3: ['Chinese','dinnerChinese'],
            food4: ['Dessert','dinnerDessert']
        }
    ];
    return (
        <div>
            {FoodObjects.map((food)  => {
        return (
          <FoodCardsList key={food.id} name={food.name} details={food.details} food1={food.food1} food2={food.food2} food3={food.food3} food4={food.food4} />
        ) 
      })}
        </div>
    )
}