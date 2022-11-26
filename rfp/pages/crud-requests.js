import Navbar from "./components/Navbar"
import { listRequests } from "../src/graphql/queries";
import { useState, useEffect, useRef } from "react";
import { API, Storage } from "aws-amplify";
import { createRequest, createFile } from "../src/graphql/mutations";
import { v4 as uuid } from "uuid";

export default function crudRequests(){

//CREATE REQUEST AND FILE API CODE -------------------------------------------
const initialState = { description: "", cost: "", vendor: "", method: "" };
const initialFileState = { name: "", location: "", type: "" };
const [request, setRequest] = useState(initialState);
const [file, setFile] = useState(initialFileState);
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
                        <option>Purchase Card</option>
                        <option>Canteen Fund</option>
                        <option>Employee Fund</option>
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
                            <td><button className="btn btn-warning" onClick={createNewRequest}>Edit</button></td>
                        </tr>
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
    )
}