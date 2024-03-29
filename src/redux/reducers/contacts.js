//gh'' GH""

const initialContacts = {
    contacts: [{name: 'jai sri ram',phoneNumber:'1234567890',email:'jaisrirama@email'}],
    contact: {},
}

export const contactsReducer = (state = initialContacts, action) => {
    switch (action.type){
        case 'GET_ALL_CONTACTS':
          return {...state};
        case 'ADD_CONTACT': {
          let contacts = [...state.contacts];
          contacts.push(action.payload);
          return {...state,contacts:contacts};
        }
        case 'GET_SINGLE_CONTACT':
          return {...state, contact: {...state.contacts[action.index], id:action.index}};
        case 'EDIT_CONTACT':{
          let contacts = [...state.contacts];
          contacts.splice(action.id, 1);
          return {...state,contacts:contacts};
        }
        case 'DELETE_CONTACT':{
          let contacts = [...state.contacts];
          contacts[action.id] = action.payload;
          return {...state,contacts:contacts};
        }
        default:
          return state;
    }
}