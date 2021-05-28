import React from 'react';
import ReactDOM from 'react-dom';

let body={
  
 bodyMargin: "0 auto",
}
let stylea={
  backgroundColor:"#505050",
  paadingBottom:"100px",
  
}
const style={
  width:"100%",
  height:"100%",
  position:"realative",
  margin: "0px",
  //background: "rgba(76, 175, 80, 0.9)",
  
}
let style2={
  width: "150px",
  position:"absolute",
  marginLeft: "30px",
  marginTop:"10px"
  
 }
 let style3={
   position:"absolute",
   marginTop:"20px",
   marginLeft:"660px",
   //backgroundColor:"black",
   background: "rgba(0, 0, 0, 0.5)",
   
   color:"white",
   fontWeight:"bold",
   padding:"10px",
   paddingRight: "14px",
   paddingLeft: "14px",
   //textAlign: "center",
  //verticalAlign: "middle",
  justifyContent:"center",
   border:"1px solid white",
   borderRadius:"2px",
  // backgroundColor: "transparent",
   fontFamily:"sans"
 }
 let style4={
   position: "absolute",
   marginTop:"20px",
   marginLeft:"800px",
   backgroundColor:"red",
   color:"white",
   padding:"10px",
   paddingRight:"28px",
   paddingLeft:"28px",
   textAlign:"center",
   verticalAlign:"middle",
   borderRadius:"4px",
   fontWeight:"bold",
   border:"none",

 }
let style5={
  position:"absolute",
  marginTop:"150px",
  marginLeft:"17%",
  color:"white",
  fontWeight:'bold',
  fontSize:"24px",
  textShadow:"5px 0px black"
}
  
  let style6={
    paddingLeft:"8px",
    paddingRight:"160px",
    paddingTop:"18px",
    paddingBottom:"14px",
    border: "none",
    borderRadius: "2px",
    
  }
  let style7={
    paddingLeft :"36px",
    paddingRight:"36px",
    paddingTop:"12.5px",
    paddingBottom:"12.5px",
    backgroundColor: "red",
    color:"white",
    fontWeight:"bold",
    fontSize:"20px",
    border:"none",
    borderRadius: "2px",
  }
  let style8={
    width:"430px",
    height:"280px",
    marginLeft:"510px",
 position:"absolute",
  
 
  }
  let style9={
    backgroundColor:"Black",
    border:"4px solid #505050",
    color:'white',
    
    
  }
let style10={
  position:"realative",
  marginTop:"100px",
  marginLeft:"40px",
  fontSize:'24px',
  paddingBottom:"50px",
  
}
let style11={
  backgroundColor: "Black",
    border: "6px solid #505050",
    color: 'white',
    paddingBottom:"50px",
    position:"realative",
}
let style12={
  marginLeft:"500px",
  marginTop:"50px",
  fontSize:"24px",
}
let style13={
  height:"210px",
  width:"190px",
  position:"absolute",
  marginLeft:"100px",
  marginTop:"65px",
 
}

let style14={
    backgroundColor: "Black",
      border: "2px solid #505050",
      color: 'white',
      paddingBottom: "50px",
      position: "realative",
}
let style16={
    position:"realative",
  marginTop:"100px",
  marginLeft:"40px",
  fontSize:'24px',
  paddingBottom:"50px",
  
}
let style15={
      width:"430px",
    height:"280px",
    marginLeft:"510px",
 position:"absolute",
 marginTop:"40px",
  
 
}
let style18 = {
  width: "430px",
  height: "280px",
  marginLeft: "510px",
  position: "absolute",


}
let style17 = {
  backgroundColor: "Black",
  border: "4px solid #505050",
  color: 'white',


}
let style19 = {
  position: "realative",
  marginTop: "100px",
  marginLeft: "40px",
  fontSize: '24px',
  paddingBottom: "50px",

}

function App() { 

  return(
 <div style={body}>
 
  <div style={stylea}>
  
   <img style={style2} src="./Images/Logo.jpeg"/>
  
<select style={style3} id="Language" name="Language" size="2">
 <option value="" selected disabled hidden>🌐 English</option>
  <option value="">English</option>
  <option value="">Hindi</option>
   </select>
   <button style={style4}>Sign In</button>
     <div style={style5}>
        <h1>
        Unlimited movies, TV<br/>shows and more.</h1>
         <p>Watch anywhere. Cancel anytime.</p>
         <p style={{fontSize:"18px"}}>Ready to watch? Enter your email to create or restart your membership.</p>
         

         <input style={style6} placeholder="Email address"/>
        
         <button style={style7}
         >Get Started  ></button>
     </div>
    
    <img style={style} src="./Images/A.jpg"/>
    
   
 
  </div>
  <div style={style9}>
     <img style={style8}src="./Images/tv.png"/>
   <div style={style10}>
   
   <h1
   >Enjoy on your TV. </h1>
   
  <p>Watch on smart TVs, PlayStation,<br/> Xbox, Chromecast,Apple Tvs
  Blu-<br/>ray players and more.
</p>

  </div>
  
  <div style={style11}>
  <img style={style13}src="./Images/Abc.jpg"/>
  <div style={style12}>
  <h1>Download your<br/>shows to watch <br/>offline.</h1>
  <p>Save your favourites easily and <br/>
  always have something to watch.</p>
    
  </div>

  </div>

 <div style={style14}>
  <img style={style15}src="./Images/device-pile-in.png"/>
  <div style={style16}>
  <h1>Watch everywhere.</h1>
  <p> Stream unlimited movies and TV<br/> shows on your phone, tablet, laptop, <br/>and TV.</p>
    
  </div>

  </div>




 <div style={style17}>
  <img style={style18}src="./Images/Kids.png"/>
  <div style={style19}>
  <h1>Create profiles for<br/> children.</h1>
  <p>Send children on adventures with<br/> their favourite characters in a space<br/> made just for them—free with your <br/>membership.</p>
    
  </div>

  </div>





  </div>
 
   </div>
    
    );
};
ReactDOM.render(
  <App/>,
  document.getElementById('react-app')
);
