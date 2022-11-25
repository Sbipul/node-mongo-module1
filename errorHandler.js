export const errorHandler = (error) => {
    const {name,message,stack} = error
    console.log(name,message)

}
const test = () =>{
    console.log("this is a function to test for passing multi function")
}
export default test
// module.exports = {errorHandler,test};