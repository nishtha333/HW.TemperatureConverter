const ConvertToFfromC = (celsius) => {
    if(typeof celsius !== 'number') throw("Argument must be a valid number");
    return celsius * 1.8 + 32;
}

const ConvertToCfromF = (fahrenheit) => {
    if(typeof fahrenheit !== 'number') throw("Argument must be a valid number");
    return (fahrenheit - 32) / 1.8;
}

module.exports = {
    ConvertToCfromF,
    ConvertToFfromC
}