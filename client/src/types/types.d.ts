/**
 * The UserType type in TypeScript represents a user with properties such as id, username, name,
 * lastname, email, status, and age.
 * @property {number | string} id - The `id` property in the `UserType` type represents the unique
 * identifier of a user and can be either a number or a string.
 * @property {string} username - The `username` property in the `UserType` type represents the username
 * of a user. It is a string type in the user object.
 * @property {string} name - The `name` property in the `UserType` type represents the first name of a
 * user.
 * @property {string} lastname - The `lastname` property in the `UserType` represents the last name of
 * a user. It is a string type in the user object.
 * @property {string} email - The `email` property in the `UserType` type represents the email address
 * of a user.
 * @property {string} status - The `status` property in the `UserType` type represents the status of a
 * user. It is a string type property in the user object.
 * @property {number} age - The `age` property in the `UserType` type represents the age of a user and
 * is of type `number`.
 */

export type UserType = {
  id:       number | string;
  username: string;
  name:     string;
  lastname: string;
  email:    string;
  status:   string;
  age:      number;
}