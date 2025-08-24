import {CDN_URL} from "../../utils/constants"

const ResCard = (props) => { 
  //console.log(props);
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId,id } =
    resData?.["info"];
   // console.log(id)
  const { deliveryTime } = resData?.["info"]?.["sla"];
  let copy = []; 
  if(cuisines.length > 2){
    
    copy.push(cuisines[0]);
    copy.push(cuisines[1] || '') 
  }
  return (
    <div className="res-card" style={{backgroundColor : "#b9b9b9ff"}}>
      <img
        className="res-logo"
        src={
          CDN_URL+cloudinaryImageId
        }
        alt={name + "img"}
      />
      <h3>{name}</h3>
      <h4>{copy.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};

export default ResCard; 