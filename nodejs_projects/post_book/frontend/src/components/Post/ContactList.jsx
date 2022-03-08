import React, { useEffect, useState } from 'react';
import { ContactService } from '../../services/ContactService';
import Spinner from '../Spinner/Spinner';

let ContactList = () => {

  let [state, setState] = useState({
    loading: false,
    contacts: [],
    errorMessage: ''
  });

  useEffect(async () => {
    try {
      setState({
        ...state,
        loading: true
      });
      let response = await ContactService.getAllContacts();
      console.log(response.data);
      setState({
        ...state,
        loading: false,
        contacts: response.data
      });
    } catch (e) {
      setState({
        ...state,
        loading: false,
        errorMessage: e.message
      })
    }
  }, []);

  let { loading, contacts, errorMessage } = state;

  return (
    <React.Fragment>
      {
        loading ? <Spinner /> : <React.Fragment>
          <section className="contact-list">
            <div className="container-fluid">
              <div className="row">
                <h2>Contacts</h2>
                {
                  contacts.length > 0 &&
                  contacts.map(contact => {
                    return (
                      <div className="col-md-12" key={contact.id}>
                        <div className="card my-2">
                          <div className="card-body">
                            <div className="row align-items-center d-flex justify-content-around">
                              <div className="col-md-12">
                                <ul className="list-group">
                                  <li className="list-group-item list-group-item-action">
                                    {contact.name}
                                  </li>
                                  <li className="list-group-item list-group-item-action">
                                    {contact.email}
                                  </li>
                                  <li className="list-group-item list-group-item-action">
                                    {contact.phone}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </section>
        </React.Fragment>
      }


    </React.Fragment>
  );
};

export default ContactList;