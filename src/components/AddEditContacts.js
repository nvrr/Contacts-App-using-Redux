import React, {useState, useRef, useEffect} from 'react'
import { connect } from 'react-redux';
import { addContact,editContact } from '../redux/actions/contacts-action';

//gh'' GH""
function AddEditContacts({addContact,editContactData,editContact}) {
    //console.log(editContact);
    const [contact, setContact] = useState({
        name: "",
        phoneNumber: "",
        email: "",
    });
    useEffect(
        () => {
          setContact(editContactData);
        },[editContactData]
    );
    const handleChange = (name,value) => {
        const oldContact = {...contact};
        oldContact[name] = value;
        setContact(oldContact);
    };
    const handleSubmit = () => {
        if (contact.id !== null && contact.id !== undefined){
            editContact(contact, contact.id);
            let oldContact = {...contact};
            oldContact.id = null;
            setContact(oldContact);
        }else{
            addContact(contact);
        }
        setContact({
            name: "",
            phoneNumber: "",
            email: "",
        })
        closeRef.current.click();
    }
    const closeRef = useRef();

    return (
        <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add/Edit Contact</h5>
        <button type="button" ref={closeRef} className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
       <form>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput">Name</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" value={contact.name} onChange={(e) => handleChange('name', e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Phone Number</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Phone Number" value={contact.phoneNumber} onChange={(e) => handleChange('phoneNumber', e.target.value)} />
    </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Email</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email" value={contact.email} onChange={(e) => handleChange('email', e.target.value)} />
  </div>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={() => handleSubmit()} >Submit</button>
      </div>
    </div>
    )
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => dispatch(addContact(contact)),
    editContact: (contact,id) => dispatch(editContact(contact,id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEditContacts);

//gh'' GH""