import React, {useState, useEffect } from 'react';
import {connect} from 'react-redux';
import SearchAids from './searchaids';
import CountAids from './countaids';
import SpinSearch from './spinsearch';

import 'antd/dist/antd.css';
import {Typography, Card, Col, Row } from 'antd'; 

function Domains (props) {

    const [iSelected, setISelected] = useState(-1)
    const [domains, setDomains] = useState([]);
    const [numberOfAids, setNumberOfAids] = useState(0);
    const [isSpinning,setIsSpinning] = useState(false);   

    useEffect(() => {
         
        const FindDomains= async () => {
            const data = await fetch("/domains", {
                method: 'GET',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},    
            })
            const body = await data.json()
            if (body.result) {
                const tb = filterDomains(body.domains);
                setDomains(tb);
            }
        }
        setNumberOfAids(props.numberOfAids);
        FindDomains();
      },[])   
    

    const { Text, Link } = Typography;

// Appel de la recherche :
const runSearch = async (i) => {
        
  setIsSpinning(true); // Affichage Spin de recherche
  setISelected(i); // pour gérer le marquage du projet sélectionné :

  let parameters = [...props.searchOptions]
  parameters[props.indexOptions].valeur = domains[i].domainId;
  const aids = await SearchAids(parameters);

// Mise à jour du Store :
    props.updateSearchOptions(props.indexOptions,domains[i].domainId);
    props.updateAids(aids);        
    const n = aids.length;
    props.updateNumberOfAids(n);
    setNumberOfAids(n);
    setIsSpinning(false);
  }


// On limite les projects qui sont présents sur les aides sélectionnées :
const filterDomains = (tb) => {

  let domains = [];
  for (let i=0;i<tb.length;i++) {
      let domainFound = false;
      for (let j=0;j<props.aids.length && (!domainFound);j++) {        
        if (tb[i].domainId == props.aids[j].aidActivitySector) {
           domainFound = true;
           domains.push(tb[i])
         }
      }
  } 
  return domains;
}


// Gestion du marquage projet :
let colorTextSelected = "#ffffff"
let colorBgSelected = "#285fda"
let colorText = '#191718'
let colorBg =  '#ffffff'

const dataItem = domains.map ((d,i)=>( 
      {i: i, name: d.domainName, colorText : colorText, colorBg: colorBg} 
      ));

if (iSelected>=0) {
  dataItem[iSelected].colorText = colorTextSelected
  dataItem[iSelected].colorBg=colorBgSelected   
}

  return (

      <div className="site-card-wrapper">
          <CountAids numberOfAids={numberOfAids}/>     
          <SpinSearch isSpinning={isSpinning}/>
            
          <Row gutter={16}>

          {dataItem.map((item,i) => (
                      
                          <Col span={8} key={i}>
                          <Card bordered={false} 
                            onClick={() => runSearch(i)}
                            className="mouseHoverChange"
                            style={{ 
                              marginRight: '15px',
                              marginLeft: '15px',
                              marginTop: '15px',
                              marginBottom: '15px',
                              textAlign: 'center',
                              fontFamily: 'Inter',
                              borderRadius: '10px',
                              fontSize: '18px',
                              border:'1px solid #E0E5E9',
                              color: item.colorText,
                              backgroundColor: item.colorBg, 
                              }}>
                                {item.name}
                          </Card>
                          </Col>

                    ))}
            </Row>  
          
        </div>   

    )



}



function mapStateToProps(state) {
  return { searchOptions: state.searchOptions, indexOptions: state.indexOptions, numberOfAids: state.numberOfAids, aids: state.aids  }
 }

function mapDispatchToProps(dispatch){
  return {
    updateSearchOptions: function(i,val) {
      dispatch({type: 'updateSearchOptions', index: i, valeur: val})},
      
    updateIndexOptions: function(i) {
      dispatch({type: 'updateIndexOptions', indexOptions: i})},
      
    updateNumberOfAids: function(n) {
      dispatch({type: 'updateNumberOfAids', numberOfAids: n})},
      
    updateAids: function(aids) {
      dispatch({type: 'updateAids', aids: aids})}

    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Domains)
