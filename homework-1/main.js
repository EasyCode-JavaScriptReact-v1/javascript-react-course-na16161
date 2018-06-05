const btnArray = [
    button_v1 = {
        name:"Call",
        active: true
    },
    button_v2 = {
        name:"Send SMS",
        active: true
    },
    button_v3 = {
        name: "Video",
        active: false
    }
];
let phoneNumbers = {
    vodafone: 0501112233,
    lifecell: 0731112233
};
let linkTypes = [
    viber = {
        name:NaN, 
        number:undefined
    },
    telegram = {
        name:'telegram', 
        active: true,
        number: 0501112233
    }
];
let addField = {
    fieldName: 'Company',
    fieldValue: null
};
const editContact = Infinity;

const user = {
    name: 'Masha',
    lastName: 'Mashkina',
    buttons: btnArray,
    contacts: {
        phones: phoneNumbers,
        massengers: linkTypes
    },
    edit: editContact,
    fields: addField
};

console.log(user);
