import Navbar from "./components/Navbar"
import { listRequests } from "../src/graphql/queries";
import { useState, useEffect } from "react";
import { API, Auth } from "aws-amplify";
import { userInfo } from "os";

export default function crudRequests(){

//CREATE REQUEST API CODE -------------------------------------------
const initialState = { description: "", cost: "", vendor: "" };
const [request, setRequest] = useState(initialState);
const { description, cost, vendor } = request;
function onChange(e) {
 setRequest(() => ({
     ... request,
     [e.target.name] : e.target.value,
 }));
}
async function createNewRequest() {
    if (!description || !cost || !vendor) return;
    const id = uuid();
    request.id = id;

    await API.graphql({
        query: createRequest,
        variables: {input: request}
    });
    Router.push(`/request/${id}`);
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
                <form action="/action_page.php">
                    <div class="mb-2 mt-3">
                    <label for="description">Description:</label>
                    <textarea type="textarea" class="form-control" id="description" placeholder="Please describe the goods/services you are requesting to purchase" name="description" rows="5" onChange={onChange} value={request.description} required />
                    </div>
                    <div class="row mb-3">
                    <div className="col-md mb-2"> 
                        <label for="description">Price:</label>
                        <div class="input-group">
                            <span class="input-group-text">$</span>
                            <input type="number" min="0" step=".01" class="form-control" placeholder="9.99" onChange={onChange} value={request.cost} required />
                        </div>
                    </div>  
                    <div className="col-md mb-2"> 
                        <label for="description">Vendor:</label>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Jones Web Services" onChange={onChange}  value={request.vendor} required />
                        </div>
                    </div>  
                    <div className="col-md mb-2"> 
                        <label for="description">Payment Method:</label>
                        <div class="input-group">
                        <select class="form-select">
                        <option disabled selected>Select option</option>
                        <option>Purchase Card</option>
                        <option>Canteen Fund</option>
                        <option>Employee Fund</option>
                        </select>
                        </div>
                    </div>

                    <div className="input-group mt-3 mb-3">
                        <input type="file" class="form-control" multiple required />
                        <select class="form-select">
                        <option disabled selected>Identify this document</option>
                        <option>Quote</option>
                        <option>Invoice</option>
                        <option>Receipt</option>
                        </select>
                    </div>

                    </div>  
                    <button type="submit" class="btn btn-primary w-100">Submit</button>
                </form>
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