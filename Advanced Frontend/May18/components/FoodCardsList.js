const FoodCardsList = (food) => {
    return (
        <div className="foods-card">
            <h3>{food.name}</h3>
            <p>{food.details}</p>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <a href="#"><img width="300px" height="250px" src={`../Images/${food.food1[1]}.jpg`} alt={food.food1[0]} /></a>
                        </td>
                        <td>
                            <a href="#"><img width="300px" height="250px" src={`../Images/${food.food2[1]}.jpg`} alt={food.food2[0]} /></a>
                        </td>
                        <td>
                            <a href="#"><img width="300px" height="250px" src={`../Images/${food.food3[1]}.jpg`} alt={food.food3[0]} /></a>
                        </td>
                        <td>
                            <a href="#"><img width="300px" height="250px" src={`../Images/${food.food4[1]}.jpg`} alt={food.food4[0]} /></a>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><a href="#">{food.food1[0]}</a></td>
                        <td><a href="#">{food.food2[0]}</a></td>
                        <td><a href="#">{food.food3[0]}</a></td>
                        <td><a href="#">{food.food4[0]}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}