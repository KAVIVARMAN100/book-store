class ErrorHandler extends Error {
    constructor(message, statusCode) {
        console.log(message,"kkkkkkkkkkkkk888888");
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

export default ErrorHandler;
