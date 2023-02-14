import ListRecipes from "./ListRecipes";

function Myrecipes(){
  
  return (
    <div className="container">
      <h1 style={{paddingBottom: "20px",paddingTop: "20px", textAlign: "center"}}>My recepies</h1>
      <ListRecipes/>
    </div>
  );
}
export default Myrecipes;