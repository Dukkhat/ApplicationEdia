import React, { useState, useEffect } from 'react';
import { Input, Typography, Space } from 'antd';
import { Button,Col,Row,Container,Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Media} from 'reactstrap';
import{Link,Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function SigninPage(props) {

    
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false)
    const [listErrorsUp, setListErrorsUp] = useState([]);

    var handleSubmitSignIn = async () => {
        var data = await fetch('/users/sign-in',{
          method: 'POST',
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          body: "email=" + signInEmail + "&password=" + signInPassword
        });  
        var body = await data.json();
        if(body.result){
          props.connectFunction(body.user);
          setIsLogin(true);
          console.log('body.result', body.user)
        } else {
          setListErrorsUp(body.error)
        }
      }

      var tabError = listErrorsUp.map((error, i) => {
        return(<p style={{color:"red"}}>{error}</p>)
      });


if(isLogin==false){
      
return(
<div className="Login-page" >
            
            {/* SIGN-IN */}
            <div className="Sign">
                <Input onChange={(e)=> setSignInEmail(e.target.value)} value={signInEmail} className="Login-input" placeholder="johndoe@gmail.com" />
                <Input.Password onChange={(e)=> setSignInPassword(e.target.value)} value={signInPassword}  className="Login-input" placeholder="mot de passe" />  
              <Button onClick={()=> handleSubmitSignIn()} style={{width:'80px'}} type="primary">Sign-in</Button>
            </div>
            {tabError}
        </div>
    );
}
else if (isLogin === true) {
  return (
    <Redirect to='/landingpage' />
  )
}
}

function mapDispatchToProps(dispatch){
    return{
      connectFunction: function(user){
        dispatch({type: 'login', user: user});
      }
    }
  }


export default connect(
    null,
    mapDispatchToProps
   )(SigninPage);
