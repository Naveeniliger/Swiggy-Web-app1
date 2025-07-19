import Swiggy_cards, { PromotedCards } from "./Swiggy_cards";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Swiggy_Body = () => {

  const [resArray, setresArray] = useState([])
  const [SearchText, SetSearchText] = useState("")
  const [Filteredrest, setFilteredrest] = useState([])
  // const Promotedcards = PromotedCards(Swiggy_cards)


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.975596&lng=77.53538809999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const json = await data.json()



    setresArray(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setFilteredrest(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

  }




  return resArray.length == 0 ? (<Shimmer />

  ) : (
    <div className='Swiggy-body'>
      <div className='Swiggy-main'>
       
        <div className="search">
          <input type="text" className="Searchbar" placeholder="Search Food Here"
          value={SearchText}
          onChange={(e) => {
            SetSearchText(e.target.value)
          }} />
        <button className="Search-btn" onClick={() => {
          // console.log(SearchText)
          const Filteredrest = resArray.filter((res) => res.info.name.toLowerCase().includes(SearchText.toLowerCase()))
          setFilteredrest(Filteredrest)
        }}
        >Search</button>
        </div>
         <button className="btn"
          onClick={() => {
            const filterList = resArray.filter((res) => res.info.avgRating > 4.2);
            setFilteredrest(filterList);

          }}

        >Top Rated Items</button>


        <div className='Swiggy-cardContainer'>


          {/* {Filteredrest.map((item) => (
            <Swiggy_cards key={item.info.id} rest={item} />
          ))} */}
          {Filteredrest.map((item) => (
            <Link key={item.info.id} to={"/restaurants/"+item?.info?.id}><Swiggy_cards  rest={item.info} /></Link>
            
            ) )}

        </div>
      </div>
    </div>
  )
}

export default Swiggy_Body; 