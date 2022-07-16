import { createSlice } from "@reduxjs/toolkit";

export const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    value: {
      messages: [
        {
            participants: ["hihihi@hihihi.com", "Zbigi!"],
            content: "Labas ka tu?",
            id:1657864569887,
            timeStamp: "Fri Jul 15 2022 08:57:53 GMT+0300 (Eastern European Summer Time)"
        },
        {
            participants: ["Zbigi!", "hihihi@hihihi.com"],
            content: "Nk ka tu?",
            id:1657864569891,
            timeStamp: "Fri Jul 15 2022 08:58:53 GMT+0300 (Eastern European Summer Time)"
        },
        {
            participants: ["Habibi!", "Petras!"],
            content: "Nk ka tu?",
            id:1657864569893,
            timeStamp: "Fri Jul 15 2022 08:58:53 GMT+0300 (Eastern European Summer Time)"
        },
        {
            participants: ["Petras!", "hihihi@hihihi.com"],
            content: "Nk ka tu?",
            id:1657864569896,
            timeStamp: "Fri Jul 15 2022 08:58:53 GMT+0300 (Eastern European Summer Time)"
        },
      ],
   
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
