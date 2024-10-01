
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState:{
    current: {},
    Settings:{},
  },
  reducers: { },
});

const {  reducer } = userSlice; 
export default reducer;