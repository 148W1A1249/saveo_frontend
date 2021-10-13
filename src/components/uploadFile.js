import  { useState} from 'react';
import axios from 'axios';
const UploadFile = ()=> {
    const [file, setFile] = useState('');
    const [fileinfo, setFileInfo] = useState('');
    const handleChange =(e)=>{
        setFile(e.target.files[0]);
        setFileInfo("please click on submit...");
    }
    const handleSubmit= async(e)=>{
       e.preventDefault();
       const formData = new FormData();
       formData.append('file',file);
       try {
           const res = await axios.post('https://saveo-backend.herokuapp.com/uploadCSV',formData,{
               headers:{
                   'Content-Type': 'multipart/form-data'
               }
           });
           setFileInfo("File Submited")
        console.log(res.data)
           setTimeout(()=>{
            setFileInfo("")
           },500)
       } catch (err) {
           if(err.response.status === 500){
               console.log("server error")
           }else{
               console.log(err.response.data.msg);
               setFileInfo(err.response.data.msg);
               setTimeout(()=>{
                setFileInfo("")
               },500)
           }
       }
    }
    return <>
    <div className="container mt-5">
        <form onSubmit={handleSubmit}>
            <label className="font-weight-bold">Upload File: &ensp;</label>
            <input type="file" onChange={handleChange}  />
            <br/>
            <label>{fileinfo}</label>
            <br/>
            <button type="submit" className="btn btn-info">Submit</button>
        </form>
    </div>
    </>
}
export default UploadFile;
