import UploadFile from './components/uploadFile';
import SearchMedicine from './components/searchMedicine';
import GetMedicineDetails from './components/getMedicineDetails';
import PlaceOrder from './components/placeOrder';
function App(){
    return <>
    <div className="container">
    <div className="font-weight-bold mt-5"><span >Note: please check console for outputs for every task</span></div>
    <UploadFile/>
    <hr className="bg-dark mt-5" />
    <SearchMedicine/>
    <hr className="bg-dark mt-5" />
    <GetMedicineDetails/>
    <hr className="bg-dark mt-5" />
    <PlaceOrder/>
    </div>
    </>;
}
export default App;
