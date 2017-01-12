var responses = {
    messages: {},
    codes: {} 
};

responses.codes = {
    HTTP_OK: 200,
    HTTP_CONFLICT: 409,
    HTTP_INTERNAL_ERROR: 500,
    HTTP_NOT_FOUND: 404
}


responses.messages = {
    CONFLICT: "Sorry, User already resgistered",
    INTERNAL_ERROR: "Internal Server Error",
}

module.exports = {
    response: responses
}