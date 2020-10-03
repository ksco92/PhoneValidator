import parsePhoneNumber from 'libphonenumber-js'

exports.handler =  async function(event, context) {
    const phoneNumber = parsePhoneNumber(event.numberInput, event.countryCode);

    if (phoneNumber.isValid()) {
        return {
            countryCallingCode: phoneNumber.countryCallingCode,
            nationalNumber: phoneNumber.nationalNumber,
            number: phoneNumber.number,
            country: phoneNumber.country
        };
    } else {
        return {};
    }
};


const test_number = {
    numberInput: '87181917',
    countryCode: 'CR'
};


this.handler(test_number, '');
