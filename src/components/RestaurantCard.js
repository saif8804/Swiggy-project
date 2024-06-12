import { useContext } from "react";
import {CDN_URL} from "../Utils/constant"
import UserContext from "../Utils/UserContext";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {
            name,
            cuisines,
            avgRating,
            cloudinaryImageId,
            costForTwo,
        } = resData?.info;

const { deliveryTime } = resData?.info?.sla;

const {loggedInUser} = useContext(UserContext);

      return(
          <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300 ' >
              <img 
                className='rounded-lg'
                src={CDN_URL + cloudinaryImageId}
                 />
                <h2 className="font-bold py-4 text-lg">{name}</h2>
                <h3>{cuisines.join(" ,")}</h3>
                <h3>{avgRating} stars</h3>
                <h3>Rs{costForTwo}</h3>
                <h3>{deliveryTime} mins</h3>
                <h3> User : {loggedInUser}</h3>
          </div>
      )
  }
  
  // Higher Order Function 
 export const withPromotedLabel = (RestaurantCard) =>{
    return(props) => {
        return (
            <div>
               <label>Promoted</label>
               <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard ; 