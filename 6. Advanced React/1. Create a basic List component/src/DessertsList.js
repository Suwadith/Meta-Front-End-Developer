function DessertsList(props) {

  let itemList = props.data; 

  itemList = itemList.filter(data => data.calories<500);
  
  itemList = itemList.sort((a, b) => a.calories - b.calories);

  itemList = itemList.map(dessert => {
    const item = `${dessert.name} - ${dessert.calories} cal`;
    return <li>{item}</li>
  })

  return (
    <div>
      <ul>
        {itemList}
      </ul> 
    </div>
  );
}

export default DessertsList; 




// const DessertsList = (props) => {
//   const lowCaloriesDesserts = props.data
//     .filter((dessert) => {
//       return dessert.calories < 500;
//     })
//     .sort((a, b) => { 
//       return a.calories - b.calories; 
//     })
//     .map((dessert) => { 
//       return ( 
//         <li>
//           {dessert.name} - {dessert.calories} cal 
//         </li> 
//       ); 
//     }); 
//   return <ul>{lowCaloriesDesserts}</ul>; 
 
//  }
//  export default DessertsList; 
