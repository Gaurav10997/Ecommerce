import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchItems , addItem ,updateItem , deleteItem  } from './cartAPI';

const initialState = {
  items: [],
  status: 'idle',
};

// typically used to make async requests.
export const fetchAsync = createAsyncThunk(
  'cart/fetchItems',
  async () => {
    const response = await fetchItems();
    const data = await response.json()
    // console.log(data.data.user.carts);
    // The value we return becomes the `fulfilled` action payload
    return data.cart.items
  }
);

export const addAsync = createAsyncThunk(
  'cart/addItems',
  async (item) => {
    const response = await addItem(item);
    const data = await response.json();
    return data.data;
    // The value we return becomes the `fulfilled` action payload
    // return response.data;
  }
);

export const updateAsync = createAsyncThunk(
  'cart/updateItems',
  async ({itemId , count} )  => {
    const response = await updateItem({itemId , count});
    const data = await response.json();
    console.log(data)
    
    return {itemId,count} 
    // The value we return becomes the `fulfilled` action payload
    // return response.data;
  }
);

export const deleteAsync = createAsyncThunk(
  'cart/deleteItems',
  async (item )  => {
    // console.log(item)
    const response = await deleteItem(item);
    const data = await response.json();
    return data.cart.items
   
    // The value we return becomes the `fulfilled` action payload
    // return response.data;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.fulfilled , (state , action) =>{
        // console.log(action.payload)
        state.items = action.payload;
        
      })
      .addCase(addAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // console.log(action)
        state.items.push(action.payload)
      })
      .addCase(addAsync.pending, (state, action) => {
        state.status = 'loading';
        // console.log(action)
       state.items=state.items
      })
      .addCase(updateAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items=state.items
        console.log(action.payload.itemId)
        const updatedItem = state.items.find((item)=>item.product._id.toString() === action.payload.itemId)
        // state.items.push(action.payload);
        updatedItem.quantity=action.payload.count
  
        // const updatedItem = state.items.find((item)=>item.product._id.toString() === action.payload.itemId)
        // // state.items.push(action.payload);
        // updatedItem.quantity=action.payload.count
      })
      .addCase(updateAsync.pending , (state,action)=>{
        state.status = 'loading';
        state.items=state.items
        // console.log(action.payload)
        // state.status = 'idle';
        // console.log(action.payload)
        // const updatedItem = state.items.find((item)=>item.product._id.toString() === action.payload.itemId)
        // // state.items.push(action.payload);
        // updatedItem.quantity=action.payload.count
      })

      .addCase(deleteAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items= (action.payload);
        // state.items.push(action.payload);
      });
  },
});

// export const {  } = productsSlice.actions;


export default cartSlice.reducer;