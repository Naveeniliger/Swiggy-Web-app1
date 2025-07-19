import { useState, useEffect } from "react"
import Shimmer2 from "./Shimmer2"
import RestCard from "./RestCard"
import { useParams } from "react-router-dom";

const RestMenu = () => {

    const [ResInfo, setResInfo] = useState([])
    const [menuitems, setmenuitems] = useState([])
    const [CategoriesList , setCategoriesList] =useState([])
    const { resID } = useParams();


    useEffect(() => {
        {
            FetchMenu();
        }
    }, [])

    const FetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.975596&lng=77.53538809999999&restaurantId=" + resID)
        const json = await data.json();


        setResInfo(json.data?.cards[2]?.card?.card?.info)
        // setmenuitems(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards)
        setCategoriesList(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
        // console.log(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

        //     const CategoriesList = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] ==
        // "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(CategoriesList)
    }

    const { name, avgRating, costForTwo, cuisines, sla, areaName, aggregatedDiscountInfo } = ResInfo
    



    if (ResInfo == 0)
        return <Shimmer2 />
    return (

        <div className="RestMenu">

            <div className="Rest--name">
                <h1 className="text">{name}</h1>
            </div>
            <div className="box">
                <div className="box-text">
                    <h3>Rating : {avgRating}☆  &nbsp;   &nbsp;  At ₹{costForTwo / 100}</h3>
                    <h5 className="colortext">{cuisines?.join(', ')}</h5>
                    <p>{areaName}</p >
                    <br />
                    <h4>{sla?.slaString}</h4>
                    <hr />
                    <h4 className="colortext">{aggregatedDiscountInfo?.header}</h4>
                </div>

            </div>
            {/* <br />
            <br />
            <h2></h2> */}



            {/* {menuitems.map((item) => <RestCard key={item.card?.info?.id} ResCardprop={item} />)} */}
            {CategoriesList.map((category) =>( <RestCard key={category.card.card.title} ResCardprop={category.card.card} />))}


        </div>
    )
}



export default RestMenu



