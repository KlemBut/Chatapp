import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: {
      users: [
        {
          email: "Petras!",
          password: "Petras!",
          pic: "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg",
          role: true,
          blockedBy:[]
        },
        {
          email: "Zbigi!",
          password: "Zbigi!",
          pic: "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg",
          role: false,
          blockedBy:[]
        }
      ],
      loggedIn: null,
    },
  },
  reducers: {
    register: ({ value }, { payload }) => {
      value.users.push(payload);
    },
    logIn: ({ value }, { payload }) => {
      value.loggedIn = payload;
    },
    updatePass: ({ value }, { payload }) => {
      const { index, newPass } = payload;
      value.users[index].password = newPass;
    },
    updatePic: ({ value }, { payload }) => {
      const { index, newPic } = payload;
      value.users[index].pic = newPic;
      value.loggedIn.pic = newPic;
    },
    removeUser: ({ value }, { payload }) => {
      value.users = value.users.filter(x => x.email !== payload)
    },
    blockUser: ({ value }, { payload }) => {
      const {index, blockedBy} = payload
      value.users[index].blockedBy.push(blockedBy)
    }
  }
});

export const { register, logIn, updatePass, updatePic, removeUser, blockUser } = usersSlice.actions;
export default usersSlice.reducer;
