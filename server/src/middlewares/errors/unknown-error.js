const unknownError = function (err, request, response, next) {

    const status = err.status || 500;
    const message = err.message || 'Hubo un error inesperado en el servidor del backend.';

    response.status(status).json({
        error: true,
        code: status,
        message: message,
        data: err
    });
};

export { unknownError };