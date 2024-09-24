export const createUserValidationSchema = {
  email: {
    isEmail: {
      errorMessage: "Please provide a valid email address",
    },
  },
  password: {
    isLength: {
      options: { min: 5 },
      errorMessage: "Password must be at least 5 characters long",
    },
  },
};
