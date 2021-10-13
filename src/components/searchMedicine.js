 import {useState} from 'react';
 import axios from 'axios';
const SearchMedicine = ()=>{
    const [search, setsearch] = useState('');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(search)
        
        try {
            const res = await axios.post('https://saveo-backend.herokuapp.com/searchMedicine',{search},{
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            res.data.forEach(element => {
                console.log(element.c_name)
            });
            
            
        } catch (error) {
            console.log(error)
        }
    }
    return <>
    <div  className="container mt-5">
    <form onSubmit={handleSubmit}>
        <label className="font-weight-bold">Search</label>
        <div className="input-group">            
            
                <input type="text" onChange={e => setsearch(e.target.value)} value={search} className="form-control" placeholder="type medicine name" />
                <button type="submit" className="input-group-text" id="btnGroupAddon">&#128269;</button>
            
        </div>
    </form>
    </div>
    </>
}

export default SearchMedicine;
