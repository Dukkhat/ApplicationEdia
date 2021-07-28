import React, {useState, useEffect } from 'react';
import {Input, Typography, Space, Layout, Text, Button, Col, Row, Breadcrumb, Menu, Card, Tag, Badge, Modal } from 'antd'; 
import Nav from './nav';
import { AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  StarOutlined,
  HomeOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Avatar from 'antd/lib/avatar/avatar';
import { attachTypeApi } from 'antd/lib/message';



const { Header, Content, Footer, Sider } = Layout;




function ResultPage () {

  const [ResultList, setResultList] = useState([])

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

 var ListEssai=[
    {name: 'TROP COOL', montant:'5000', financeur:'Cresus', niveauAide:'local', diff:'2', delai: '6 mois', logo:'../images/pinguin.png'},
    {name: "BESOIN d'ARGENT", montant:'2000', financeur:'Rockfeller', niveauAide:'départemental', diff:'3', delai:'3 mois', logo:'../images/pinguin.png'},
    {name: 'NEED HELP', montant:'8000', financeur:'Jeff Bezos', niveauAide:'européen', diff:'1', delai:'2 mois', logo:'../images/pinguin.png'},
      ]

      useEffect(() => {
        var resultat = async () => {
          ListEssai.sort( compare1 );
          console.log('useffect', ListEssai);
          setResultList(ListEssai) 
        }
    
        resultat()
      }, [])



//fonctions de tri
      //Tri critère 1
      function compare1( a, b ) {
        if ( a.montant < b.montant ){
          return -1;
        }
        if ( a.montant > b.montant ){
          return 1;
        }
        return 0;
      }
     
       //Tri critère 2
       function compare2( a, b ) {
        if ( a.financeur < b.financeur ){
          return -1;
        }
        if ( a.financeur > b.financeur ){
          return 1;
        }
        return 0;
      }

      //Tri critère 3
      function compare3( a, b ) {
        if ( a.niveauAide < b.niveauAide ){
          return -1;
        }
        if ( a.niveauAide > b.niveauAide ){
          return 1;
        }
        return 0;
      }

//Tri critère 4
      function compare4( a, b ) {
        if ( a.diff < b.diff ){
          return -1;
        }
        if ( a.diff > b.diff ){
          return 1;
        }
          return 0;
            }

            //Tri critère 5
function compare5( a, b ) {
  if ( a.delai < b.delai ){
    return -1;
  }
  if ( a.delai > b.delai ){
    return 1;
  }
    return 0;
      }
    

  // Tri
  var tri1 = async () => {
    ListEssai.sort( compare1 );
    console.log('ListEssai', ListEssai);
    setResultList(ListEssai) 
  }

  var tri2 = async () => {
    ListEssai.sort( compare2 );
    console.log('ListEssai', ListEssai);
    setResultList(ListEssai)
  }

  var tri3 = async () => {
    ListEssai.sort( compare3 );
    console.log('ListEssai', ListEssai);
    setResultList(ListEssai)
  }

  var tri4 = async () => {
    ListEssai.sort( compare4 );
    console.log('ListEssai', ListEssai);
    setResultList(ListEssai)
  }

  var tri5= async () => {
    ListEssai.sort( compare5 );
    console.log('ListEssai', ListEssai);
    setResultList(ListEssai)
  }
  
 
  return ( 

        
<Layout>
<Nav/>
<Col md={{ span: 8, offset: 14 }}>
        <div style={{
          backgroundColor:'#E0E5E9',
          width:'600px',
          height:'73px',
          textAlign: 'center',
          fontFamily: 'Alata',
          fontSize: '30px',
          borderRadius:'10px',
          marginLeft:'5px'
        }}>
          534 aides disponibles
        </div>
</Col>
<Breadcrumb style={{
          fontFamily: 'Alata',
          fontSize: '30px',
          
         
        }}>
    
    <Breadcrumb.Item >
    <a href="">
    <HomeOutlined /></a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
    <span style={{
                              backgroundColor:'yellow',
                              width:'50px',
                              height:'50px',
                              textAlign: 'center',
                              fontFamily: 'Alata',
                              fontSize: '30px',
                              borderRadius:'50px',
                              marginLeft:'5px'
                              
                            }}>1</span>
      <a href=""><span>Réponse 1</span></a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
    <span>2</span><a href="">Réponse 2</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
    <span>3</span><a href="">Réponse 3</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
    <span>4</span><a href="">Réponse 4</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
    <span>5</span><a href="">Réponse 5</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
    <span>6</span><a href="">Réponse 6</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
    <span>7</span><a href="">Réponse 7</a>
    </Breadcrumb.Item>
  </Breadcrumb>
<div>

</div>

  <Layout>
    <Sider style={{ backgroundColor:'#E0E5E9'}}>
      
   
        
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="vertical"
          theme="light"
          
                 
        >
<p style={{
           fontSize:'24px',
           alignContent:'center',
           marginTop:'34px',
           marginBottom: '40px',
           textAlign: 'center',
           fontFamily: 'Alata',
          }}>Trier par</p>

          <Menu.Item onClick={() => tri1()} key="1"  icon={<PieChartOutlined style={{
            marginBottom:'100px'
          }}/> }> 
                    Montant
          </Menu.Item>
          <Menu.Item onClick={() => tri2()} key="2" icon={<DesktopOutlined />}>
                 Financeur
          </Menu.Item>
          <Menu.Item onClick={() => tri3()} key="3" icon={<ContainerOutlined />}>
                 Niveau de l'aide
          </Menu.Item>
          <Menu.Item onClick={() => tri4()} key="4" icon={<ContainerOutlined />}>
                    Difficulté d'obtention
          </Menu.Item>
          <Menu.Item  onClick={() => tri5()} key="5" icon={<ContainerOutlined />}>
                  Délai d'obtention
          </Menu.Item>
          
        </Menu>
     
    
    </Sider>

    <Content >
      
    <div className="site-card-wrapper">
    <Row gutter={16}>

    {ResultList.map((aide,i) => (
                
                    <Col span={12} key={i}>
                    <Card  bordered={false} style={{ 
                        backgroundColor: '#E0E5E9',
                        margin: '15px',
                        borderRadius:'30px'                        
                        }}>
                            <Row style={{
                              display:'flex',
                              flexDirection:'row',
                              justifyContent:'space-between', 
                              marginBottom:'20px',
                              
                            }}>
                              
                            <img src={aide.logo}  height='80px' />

                            <div style={{justifyContent:'center',
                            alignItems: 'center',
                            fontFamily: 'Alata',
                            fontSize:'30px',
                            textAlign: 'center'
                            


                            }}>
                            <p>{aide.name}</p>
                            <p>{aide.montant} €</p>
                            </div>
                            
                            <p ><StarOutlined style={{
                            fontSize:'32px',
                            color:'#F3D849'}}/></p>

                            </Row>
                            <Row style={{
                            display:'flex',
                            flexDirection:'row',
                            justifyContent:'space-around',
                            textAlign: 'center',
                            fontFamily: 'Alata',
                            fontSize:'18px'}}>
                              <div>
                              <p>{aide.niveauAide}</p>
                              <p>{aide.financeur}</p>
                              </div>
                              <div>
                              <p>{aide.diff}</p>
                              <p>{aide.delai}</p>
                              </div>
                            
                            
                            </Row>
                            <Row style={{
                            display:'flex',
                            flexDirection:'row',
                            justifyContent:'center',
                                        alignContent:'center',}}>
                            <Button color="primary" size='lg' onClick={showModal}
                                        style={{backgroundColor: '#0A62D0',
                                                 borderRadius:'10px',
                                                 width:'309px',
                                                 height: "67px",
                                                color: 'white',
                                                textAlign: 'center',
                                                fontFamily: 'Alata',
                                                fontSize:'30px'
                                            
                                                }}>
                            En savoir +
                
                            </Button>
                            {/* <Modal title={aide.name} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>{aide.financeur}</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> */}

                            </Row>
                            
                            
                            
                            
                           
                    </Card>
                    </Col>

              ))}
       </Row>  
    
  </div> 



    </Content>
   
  </Layout>
  
  
 
</Layout>

);
        
       



}
export default ResultPage;
