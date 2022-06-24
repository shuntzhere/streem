export const authReducer = (authState, action) => {
  switch (action.type) {
    case "FIRSTNAME":
      return { ...authState, firstname: action.payload };
    case "LASTNAME":
      return { ...authState, lastname: action.payload };
    case "EMAIL":
      return { ...authState, email: action.payload };
    case "PASSWORD":
      return { ...authState, password: action.payload };
    case "CONFIRM_PASSWORD":
      return { ...authState, confirmpassword: action.payload };
    case "CLEAR_INPUTS":
      return { ...authState };
    case "CLEAR_AUTH":
      return {
        ...authState,
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        confirmpassword: "",
      };
    case "ERROR":
      return { ...authState, errorMsg: action.payload };
    case "TEST_INPUT":
      return { ...authState, email: "memasoom@gmail.com", password: "lie101" };
    case "USER_DATA":
      const { foundUser, encodedToken } = action.payload;
      return { ...authState, userData: foundUser, encodedToken };
    case "STORED_LOCALLY":
      return {
        ...authState,
        encodedToken: localStorage.getItem("userToken"),
        userData: JSON.parse(localStorage.getItem("userDetail")),
      };
    default:
      return {
        ...authState,
      };
  }
};
