const nameRules = () => {
    var validRegex = /^[A-Za-z]+$/i;
    return {
        required: true,
        minLength: 2,
        maxLength: 100,
        pattern: validRegex
    }
};

const emailRules = () => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return {
        required: true,
        minLength: 4,
        maxLength: 100,
        pattern: validRegex
    }
};

const phoneRules = () => {
    var validRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return {
        required: true,
        minLength: 4,
        maxLength: 100,
        pattern: validRegex
    }
};

const passwordRules = () => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]\w{5,14}$/;
    return {
        required: true,
        minLength: 4,
        maxLength: 100,
        pattern: validRegex
    }
};

export {
    nameRules,
    emailRules,
    passwordRules,
    phoneRules
};
