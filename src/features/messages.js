import { createSlice } from "@reduxjs/toolkit";

export const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    value: {
      messages: []
   
    },
  },
  reducers: {
    sendMesageReducer: ({ value }, { payload }) => {
      value.messages.push(payload);
    },
    removeMessages: ({value}, {payload}) => {
      value.messages = payload
    }
  }
});

export const { sendMesageReducer, removeMessages } = messagesSlice.actions;
export default messagesSlice.reducer;
