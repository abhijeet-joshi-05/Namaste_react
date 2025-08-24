export const findRestaurant = async () => { 
    let allRestaurants = []; 
    let nextOffset = '' ; 
     
    do{
      let url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.00240&lng=73.79450&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" ; 

      if(nextOffset){
        url+=`&offset=${nextOffset}`;
      }

      const response = await fetch(url);
      const data =await response.json(); 

      const restCard = data.data.cards.find(card => {
        return card.card.card.gridElements?.infoWithStyle?.restaurants
      })

      if(restCard){
        const restaurant = restCard.card.card?.gridElements?.infoWithStyle?.restaurants;
        allRestaurants = [...allRestaurants, ...restaurant];
      }
     
      
      nextOffset = data.data?.pageOffset?.nextOffset || ''; 
      

    }while(nextOffset && allRestaurants.length < 25) 
    const seen = new Set(); 
    const uniqueRestaurants = allRestaurants.filter(rest => {
      if(seen.has(rest.info.id)){
        return false ;
      }
      seen.add(rest.info.id); 
      return true;
    })
      return uniqueRestaurants; 
  } 
