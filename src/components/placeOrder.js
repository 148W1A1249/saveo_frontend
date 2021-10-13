import {useState,useEffect} from 'react';
import axios from 'axios';
const PlaceOrder = ()=>{
    const [ProductInfo, setProductInfo] = useState([]);
     const [queryId, setqueryId] = useState("");
     const [medicineName, setmedicineName] = useState("");
     const [Quantity, setQuantity] = useState("");
     useEffect(()=>{
        async function getData(){
            const res = await axios.get('http://localhost:8000/getMedicineid',{
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            setProductInfo(res.data)
         }
         getData();
     },[])

     const handleSubmit = async (e)=>{
         e.preventDefault();
         console.log(queryId)
         console.log(medicineName)
         console.log(Quantity)

         try {
            const res = await axios.post('http://localhost:8000/placeorder',{queryId,medicineName,Quantity},{
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            console.log(res.data.msg)
            
        } catch (error) {
            console.log(error)
        }
     }
    
   return<>
    <div  className="container mt-5">
        <form onSubmit={handleSubmit}>
            <label className="font-weight-bold">check order Availability</label>
            <select className="form-control" value={queryId} onChange={((e)=>setqueryId(e.target.value))}>
                <option>Choose ID</option>
                {
                (ProductInfo.length>0) ? ProductInfo.map((obj,index)=>{
                        return <option key={index} value={obj.c_unique_code}>{obj.c_unique_code}</option>;
                }):null
                }
            </select>
            <select className="form-control mt-2" value={medicineName} onChange={((e)=>setmedicineName(e.target.value))}>
                <option>Select Medicine Name</option>
                {
                (ProductInfo.length>0) ? ProductInfo.map((obj,index)=>{
                        return <option key={index} value={obj.c_name}>{obj.c_name}</option>;
                }):null
                }                
            </select>      
        
            <input type="Number" onChange={e => setQuantity(e.target.value)} value={Quantity} className="form-control mt-2" placeholder="Type Medicine Quantity" />
                            
            <button className="btn btn-outline-secondary mt-3" type="submit">Check</button><br/>


        </form>
   </div>
   </>
}

export default PlaceOrder;