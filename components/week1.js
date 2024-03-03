import React from "react" ;
const MyComponentsWithoutJSX=()=>{

}
const MyComponentsWithJSX=()=>{
}
const MyProfile=()=>{
}
function week1(){
    return(
    <div ClassName="week1" >
        <h1>displaying my components without JSx</h1>
        <MyComponentsWithoutJSX/>
        <hr/>
        <h1>displaying my components with JSx</h1>
        <MyComponentsWithJSX/>
        <hr/>
        <h1>displaying my profile</h1>
        <MyProfile/>
    </div>
    );
}
export default week1;