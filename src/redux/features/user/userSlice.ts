import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: string | null;
}

const initialState: IUser = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: null,
};

const userSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
