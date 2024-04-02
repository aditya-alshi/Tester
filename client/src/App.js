import Filter from "./ggwApp/filter/Filter"
import Listing from "./ggwApp/listing/Listing"

export default function App(){
    return(
        <div className="app--wrapper">
            <Filter />
            <Listing />
        </div>
    )
}