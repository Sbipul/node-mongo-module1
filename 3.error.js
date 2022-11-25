// =====================================================================================Handling errors
// const errorHandler = (error) => {
//     const {name,message,stack} = error
//     console.log(name,message)

// }
// const getData = async () => {
//   try {
//     // undefined.find();
//     const emailError = new Error("Email already exists");
//     throw emailError
//   } catch (error) {
//     errorHandler(error);
//   }
// };
// getData();

// console.log("test error handleing");

// ============================================================================ Module creating/export import
// const {errorHandler,test} = require("./errorHandler.js");
import test from './errorHandler.js'
import {errorHandler} from './errorHandler.js'
test()
const getData = async () => {
  try {
    // undefined.find();
    const emailError = new Error("Email already exists");
    throw emailError
  } catch (error) {
    errorHandler(error);
  }
};
getData();