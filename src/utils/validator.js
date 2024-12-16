export const isValidEmail = (email) => {
  const isValid = /^[a-zA-Z0-9._%+-]+@psit\.edu\.in$/;
  return isValid.test(email);
};
