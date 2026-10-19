import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ProductApi = createAsyncThunk('api/data',async()=>{
    const res =await axios.get('https://fakestoreapi.com/products')
    return res.data;   
})

const productReducer = createSlice({
    name: "Product",
    initialState: {
        data: [] ,
        loading: false,
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ProductApi.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(ProductApi.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(ProductApi.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "An error occurred";
            });
    },
});

export {ProductApi}

export default productReducer.reducer

