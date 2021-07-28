import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import { Button,Col,Row,Container,Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Media} from 'reactstrap';
import {Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {Link, Redirect} from 'react-router-dom';








function Nav (props) {
   



    return ( 
   
<Row style={{display:'flex',justifyContent:'center', alignItems:'center'}}>       
    <Col sm="12" md="6" lg="6" style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
        <img src='../images/EDIA.png'  height='120px' />
    </Col>

{props.token?
    <Col sm="12" md="6" lg="6" style={{ display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'flex-end'}}>
        <Avatar size={64} icon={<UserOutlined />} />
        <p style={{fontSize:20,fontWeight:'bold'}}>Welcome {props.firstName}</p> 
        <p onClick={()=> props.reinitialise()} >Deconnexion</p>
    </Col>

:
    <Col sm="12" md="6" lg="6" style={{ display:'flex', justifyContent:'flex-end', alignItems:'self-end'}}>
        <Link to='/signup'><Button  outline color="primary" size='lg' style={{margin:'20px'}}>Se connecter</Button></Link>
        <Link to='/signin'><Button color="primary" size='lg'style={{margin:'20px'}}>S'inscrire</Button></Link>
    </Col>
}
</Row>

    )}

function mapStateToProps(state){
    return { token: state.user.token, firstName: state.user.firstName }
    }

function mapDispatchToProps(dispatch){
    return {
        reinitialise: function() {
        dispatch({type: 'disconnect', })},   
    }
    }


export default connect(
    mapStateToProps,
    mapDispatchToProps,
    
    )(Nav)    
