export type User = {
  name: string;
  password: string;
  email: string;
};

// type Name = string & { readonly __brand: unique symbol };
// const createName = (name: string): Name => {
//   if (name.length > 15) {
//     throw new Error("string is too long");
//   }
//   return name as Name;
// };

// type Password = string & { __email: never };
// const createPassword = (password: string): Password => {
//   if (password.length > 20) {
//     throw new Error("Password is too long");
//   }
//   return password as Password;
// };

// type Email = string & { __email: never };

// const createEmail = (email: string): Email => {
//   if (email.length > 255) {
//     throw new Error("Email is too long");
//   }
//   if (email.split("@")[0].length > 64) {
//     throw new Error("Account of Email is too long");
//   }
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!regex.test(email)) {
//     throw new Error("Invalid email address");
//   }
//   return email as Email;
// };
