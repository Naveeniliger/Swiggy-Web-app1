// import resList from "./utility/resList";

const Swiggy_cards = ({rest}) => {
  const { name, avgRating, sla, cuisines, cloudinaryImageId ,areaName} = rest;
  
  return (

    <div className='Swiggy-card'>
      
        <div className='Card-img'>
          <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="" />
        </div>
        <div className='Card-info'>
          <h3>{name}</h3>
          <h4>Rating : {avgRating}</h4>
          <p>{sla.slaString}</p>
          <p>{cuisines.join(", ")}</p>
          <p>Place : {areaName}</p>
        </div>
      
    </div>
  )
}

export const PromotedCards = (Swiggy_cards) =>{
    return  () =>{
        return(
            <div className="promotedlabel">
                <label className="label-pr">Promoted</label>
                <Swiggy_cards/>
            </div>
        )
    }
}

export default Swiggy_cards;

