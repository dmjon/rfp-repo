import Navbar from "./components/Navbar"
import { listRequests } from "../src/graphql/queries";
import { useState, useEffect, useRef } from "react";
import { API } from "aws-amplify";
import { createRequest, deleteRequest } from "../src/graphql/mutations";
import { v4 as uuid } from "uuid";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from "react";
import { Authenticator } from '@aws-amplify/ui-react';
import '../configureAmplify'


function MyVerticallyCenteredModal(props) {
        ///DELETE REQUESTS API CODE-------------------------------------------
        const initialState = { id: props.ID };
        const [request, setRequest] = useState(initialState);
        const { id } = request;
        async function removeRequest(){
              await API.graphql({ query: deleteRequest, variables: {input: request}});
              location.reload()
        }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Are you sure? 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
           Are you sure you want to delete this request ID: <strong>{props.ID}</strong>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={removeRequest}>Delete</Button> 
          <Button variant="warning" onClick={props.onHide}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function MyVerticallyCenteredEditModal(props) {
    ///DELETE REQUESTS API CODE-------------------------------------------
    const initialState = { id: props.ID };
    const [request, setRequest] = useState(initialState);
    const { id } = request;


return (
  <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
       Edit Request #{props.ID}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
      <h1>Edit Request</h1>
                    <div class="mb-2 mt-3">
                    <label for="description">Description:</label>
                    <textarea type="textarea" class="form-control" id="description" name="description" rows="5" value={props.Description} required />
                    </div>
                    <div class="row mb-3">
                    <div className="col-md mb-2"> 
                        <label for="description">Price:</label>
                        <div class="input-group">
                            <span class="input-group-text">$</span>
                            <input type="number" name="cost" min="0" step=".01" class="form-control" value={props.Cost} required />
                        </div>
                    </div>  
                    <div className="col-md mb-2"> 
                        <label for="vendor">Vendor:</label>
                        <div class="input-group">
                            <input type="text" name="vendor" class="form-control" value={props.Vendor} required />
                        </div>
                    </div>  
                    <div className="col-md mb-2"> 
                        <label for="description">Payment Method:</label>
                        <div class="input-group">
                        <select name="method" class="form-select">  
                        <option>Select option</option>
                        <option>Purchase Card</option>
                        <option>Canteen Fund</option>
                        <option>Employee Fund</option>
                        </select>
                        </div>
                    </div>
                    </div>  
                    <button class="btn btn-primary w-100">Submit</button>
      </p>
    </Modal.Body>
    <Modal.Footer>
      <input type="hidden" value={props.ID} name="ID" />
      <Button variant="warning" onClick={props.onHide}>Cancel</Button>
    </Modal.Footer>
  </Modal>
);
}




export default function crudRequests(){

//MODAL
const [modalShow, setModalShow] = React.useState(false);
const [editModalShow, setEditModalShow] = React.useState(false);
//CREATE REQUEST AND FILE API CODE -------------------------------------------
const initialState = { description: "", cost: "", vendor: "", method: "" };
const [request, setRequest] = useState(initialState);
const { description, cost, vendor, method } = request;

function onChange(e) {
 setRequest(() => ({
     ... request,
     [e.target.name] : e.target.value,
 }));
}

async function createNewRequest() {
    if (!description || !cost || !vendor || !method) return;
    const id = uuid();
    request.id = id;

    await API.graphql({
        query: createRequest,
        variables: {input: request}
    });
    //Router.push(`/request/${id}`);
    location.reload();
   }


//READ REQUESTS API CODE ---------------------------------------------
    const [requests, setRequests] = useState([]);
    useEffect(() => {
        fetchRequests()
      }, [])
    async function fetchRequests(){
        const requestData = await API.graphql({
          query: listRequests
        })
        setRequests(requestData.data.listRequests.items)
      }

    return(
      <Authenticator
      variation="modal"
      hideSignUp={true}
      >
        <>
        <Navbar />
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                <h1>Create Request</h1>
                    <div class="mb-2 mt-3">
                    <label for="description">Description:</label>
                    <textarea type="textarea" class="form-control" id="description" placeholder="Please describe the goods/services you are requesting to purchase" name="description" rows="5" onChange={onChange} value={request.description} required />
                    </div>
                    <div class="row mb-3">
                    <div className="col-md mb-2"> 
                        <label for="description">Price:</label>
                        <div class="input-group">
                            <span class="input-group-text">$</span>
                            <input type="number" name="cost" min="0" step=".01" class="form-control" placeholder="9.99" onChange={onChange} value={request.cost} required />
                        </div>
                    </div>  
                    <div className="col-md mb-2"> 
                        <label for="vendor">Vendor:</label>
                        <div class="input-group">
                            <input type="text" name="vendor" class="form-control" placeholder="Jones Web Services" onChange={onChange}  value={request.vendor} required />
                        </div>
                    </div>  
                    <div className="col-md mb-2"> 
                        <label for="description">Payment Method:</label>
                        <div class="input-group">
                        <select name="method" class="form-select" onChange={onChange} value={request.method}>
                        <option>Select option</option>
                        <option value="Purchase Card">Purchase Card</option>
                        <option value="Canteen Fund">Canteen Fund</option>
                        <option value="Employee Fund">Employee Fund</option>
                        </select>
                        </div>
                    </div>
                    </div>  
                    <button onClick={createNewRequest} class="btn btn-primary w-100">Submit</button>


                </div>
                <div className="col-md-6">
                <div class="buttons-toolbar">
                </div>
                <div class="table-responsive">
                <table 
                class="table"
                data-toggle="table"
                data-search="true"
                data-show-refresh="true"
                data-show-columns="true"
                data-buttons-toolbar=".buttons-toolbar"              
                >
                <thead>
                <tr>
                    <th>Requester</th>
                    <th>Vendor</th>
                    <th>Price</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                requests.map((request, index) => (
                    <>
                        <tr id={request.id}>
                            <td>Dylan Jones</td>
                            <td>{request.vendor}</td>
                            <td>${request.cost}</td>
                            <td><Button variant="warning" onClick={() => setEditModalShow(true)}>Edit</Button></td>
                            <td><Button variant="danger" onClick={() => setModalShow(true)}>Delete</Button></td>
                        </tr>

                        <MyVerticallyCenteredEditModal
                                show={editModalShow}
                                onHide={() => setEditModalShow(false)}
                                ID={request.id}
                                Description={request.description}
                                Cost={request.cost}
                                Vendor={request.vendor}

                            />

                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                ID={request.id}
                            />
                    </>
                    ))
                }
                </tbody>
                </table>
                </div>
                </div>
            </div>
        </div>
        </>
        </Authenticator>
    )
}