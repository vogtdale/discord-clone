import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    channelId: null,
    channelName: null,
  },

  reducers: {
    setChannelId: (state, action) => {
      state.chat += action.payload;
    },

    
  },
});

export const { setChannelId } = chatSlice.actions;

export const selectChannelId = (state) => state.chat.channelId;
export const selectChannelName = (state) => state.chat.channelName;

export default chatSlice.reducer;
