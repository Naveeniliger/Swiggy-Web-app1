import { useDispatch } from "react-redux";
import { addItem } from "../../../Utilities/CartSlice";

const ItemCards = ({ items }) => {
    // console.log(items)

    const dispatch = useDispatch()
    const handleAddItems = (item) => {
        dispatch(addItem(item))
    }
    const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";
    return (
        <div className="RestCard">

            <div >
                {items.map((item) => (
                    <div className="text-img" key={item?.card?.info?.id}>
                        <div className="Recomendtext">
                            <h3>{item?.card?.info?.name}</h3>
                            <h4>Price  : ₹
                                {item?.card?.info?.defaultPrice
                                    ? item?.card?.info?.defaultPrice / 100
                                    : item?.card?.info?.price / 100
                                }
                                /-</h4>
                            <p>{item?.card?.info?.description}</p>
                        </div>
                        <div className="Recomendimg" onClick={() => handleAddItems(item)}>

                            <img src={CDN_URL + item?.card?.info?.imageId} alt="" />
                            <div className="Addbox">
                                <h3 className="Add" >Add</h3>
                            </div>
                        </div>
                    </div>

                ))}


            </div>
        </div>
    )
}

export default ItemCards
