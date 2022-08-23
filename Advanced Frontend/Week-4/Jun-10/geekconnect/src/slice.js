import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'geekConnect',
  initialState: {
    theme: 'light',
  },
  reducers: {
    setThemeLight: (state) => {
      state.theme = 'light'
    },
    setThemeDark: (state) => {
      state.theme = 'dark'
    },
  },
});

export const { setThemeDark, setThemeLight } = slice.actions;
export default slice.reducer;