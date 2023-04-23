export type User = {
  name: string;
  emailAddress: string;
  state: number;
  createAt: string;
  updateAt: string;
}

export type ResponseUserData = {
  name: string;
  emailAddress: string;
  state: number;
  createAt: string;
  updateAt: string;
}

// export type User = {
//   name: Name;
//   password: Password;
//   emailAddress: EmailAddress;
// };

// export type Name = string & { readonly __brand: unique symbol };
// export const createName = (name: string): Name => {
//   if (name.length > 15) {
//     throw new Error("string is too long");
//   }
//   return name as Name;
// };

// export type Password = string & { __email: never };
// export const createPassword = (password: string): Password => {
//   if (password.length > 20) {
//     throw new Error("Password is too long");
//   }
//   return password as Password;
// };

// export type EmailAddress = string & { __email: never };

// export const createEmail = (email: string): EmailAddress => {
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
//   return email as EmailAddress;
// };
