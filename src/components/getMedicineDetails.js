import {useState,useEffect} from 'react';
import axios from 'axios';
const GetMedicineDetails = ()=>{
     const [uniqueId, setuniqueId] = useState([])
     const [queryId, setqueryId] = useState("")
     useEffect(()=>{
        async function getData(){
            const res = await axios.get('https://saveo-backend.herokuapp.com/getMedicineid',{
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            setuniqueId(res.data)
         }
         getData();
     },[])
     const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(queryId);
        try {
            const res = await axios.post('https://saveo-backend.herokuapp.com/getMedicineDetails',{queryId},{
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            console.log(res)
            
        } catch (error) {
            console.log(error)
        }
     }
   return<>
   <div  className="container mt-5">
   <form onSubmit={handleSubmit}>
       <label className="font-weight-bold">check data by ID</label>
       <div className="input-group">
            <select className="form-control" value={queryId} onChange={((e)=>setqueryId(e.target.value))}>
                <option>Choose...</option>
                {
                   (uniqueId.length>0) ? uniqueId.map((obj,index)=>{
                        return <option key={index} value={obj.c_unique_code}>{obj.c_unique_code}</option>;
                   }):null
                }
                
            </select>
            <button className="btn btn-outline-secondary" type="submit">Check</button>
        </div>
   </form>
   </div>
   </>
}

export default GetMedicineDetails;
