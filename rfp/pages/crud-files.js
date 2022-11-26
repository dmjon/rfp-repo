import Navbar from "./components/Navbar"
import { listFiles } from "../src/graphql/queries";
import { useState, useEffect, useRef } from "react";
import { API, Storage } from "aws-amplify";
import { createFile } from "../src/graphql/mutations";
import { v4 as uuid } from "uuid";
import { Authenticator } from '@aws-amplify/ui-react';
import '../configureAmplify'

export default function crudFiles(){

//CREATE FILE API CODE -------------------------------------------
const initialFileState = { name: "", location: "", type: "" };
const [file, setFile] = useState(initialFileState);
const{ name, location, type } = file;
const fileInput = useRef(null);
function onChange(e) {
 setFile(() => ({
     ... file,
     [e.target.name] : e.target.value,
 }));
}
function onChangeFile(e) {
    const fileUploaded = e.target.files[0];
    if (!fileUploaded) return;
    setFile(fileUploaded);
   }

async function createNewFile(){
    fileInput.current.click();
    const id2 = uuid();
    file.id = id2;

    if (file) {
        const filename = `${file.name}_${uuid()}`;
        file.name = filename;
        await Storage.put(filename, file);
      }

    await API.graphql({
        query: createFile,
        variables: {input: file}
    });

    await Storage.put(file.name, file.name)
}

//READ REQUESTS API CODE ---------------------------------------------
    const [files, setFiles] = useState([]);
    useEffect(() => {
        fetchFiles()
      }, [])
    async function fetchFiles(){
        const fileData = await API.graphql({
          query: listFiles
        })
        setFiles(fileData.data.listFiles.items)
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
                <h1>Create File</h1>
                    <div className="input-group mt-3 mb-3">
                        <input name="file" type="file" class="form-control" ref={fileInput} onChange={onChangeFile} required />
                        <select name="fileType" class="form-select" onChange={onChangeFile} value={file.type}>
                        <option disabled selected>Identify this document</option>
                        <option>Quote</option>
                        <option>Invoice</option>
                        <option>Receipt</option>
                        </select>
                    </div>
                    <button onClick={createNewFile} class="btn btn-success w-100">Upload File</button>


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
                    <th>Name</th>
                    <th>Location</th>
                    <th>Type</th>
                </tr>
                </thead>
                <tbody>
                {
                files.map((file, index) => (
                    <>
                        <tr id={file.id}>
                            <td>Dylan Jones</td>
                            <td>{file.vendor}</td>
                            <td>${file.cost}</td>
                            <td><button className="btn btn-warning" onClick={createNewFile}>Edit</button></td>
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
        </Authenticator>
    )
}