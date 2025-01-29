import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: []
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push({ ...action.payload, id: Date.now() });
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    }
  }
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;