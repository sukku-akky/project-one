var expenses = {
    Food: 5,
    Petrol: 20,
    Movie: 10
  };
  




function ExpenseItem(){
    return (
        <div>
            {Object.entries(expenses).map(([item,cost])=>(
                <h2 key={item}>
                    {item}-${cost}

                </h2>
            ))
                
            }
        </div>
    )

}

export default ExpenseItem;