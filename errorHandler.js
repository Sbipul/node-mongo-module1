const errorHandler = (error) => {
    const {name,message,stack} = error
    console.log(name,message)

}
module.exports = errorHandler