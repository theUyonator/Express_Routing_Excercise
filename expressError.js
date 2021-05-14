/*
ExpressError extends the built in error class in js and allows to to easily 
add a status code and a message.


*/

class ExpressError extends Error{
    constructor(message, status){
        super();
        this.message=message;
        this.status=status;
        console.error(this.stack);
    }
}

module.exports = ExpressError;