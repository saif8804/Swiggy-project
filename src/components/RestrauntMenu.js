import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../Utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

   const {resId} = useParams();

   const resInfo = useRestrauntMenu(resId);

   const [showIndex , setShowIndex] = useState(null)

  if (resInfo == null) return <Shimmer />;
  
  const { cuisines, name, costForTwo } = resInfo?.cards[2]?.card?.card?.info;

  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  // console.log(itemCards)

const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )
  // console.log(categories);
  return  (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines} - Rs{costForTwo / 100} For Two</p>
       {
        categories.map((category, index)=> 
         // controlled Components
        <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}
           showItems={index == showIndex ? true : false}
           setShowIndex={()=>setShowIndex(index)}
        />
      )
       }
    </div>
  );
}
export default RestaurantMenu;