const appReducer = (state = { products : []}, action) =>
{
    debugger;
    switch(action.type)
    {
        case "ADD":
            return {...state, products : [...state.products, action.payload ]}

        case "LOADDATA":
            return {...state, products : action.payload  }
      
        case "DELETE":
            let name = action.payload.name;
            let price = action.payload.price;
            
            let arr = state.products;

            let index = arr.findIndex(x => x.name == name && x.price == price)
            if(index >= 0)
            {
                arr.splice(index,1)
            }
            return {...state, products : arr }

        default:
            return state
    }
}

export default appReducer