import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card/Card'

type defaultType = { 
  htValue?: {
    umi: Function;
    mi: Function;
    isHooked: boolean
  };
  scene?: string;
  data?: [{
    id: number;
    post_id: number;
    name: string;
    email: string;
    body: string;
  }];
}
const hexToRgb = ( hexType:string ) => { 
  let hex = hexType.trim().replace( "#", "" ); 
  let rgb = ( 3 === hex.length ) ? 
  hex.match( /[a-f\d]/gi ) : hex.match( /[a-f\d]{2}/gi );
  if(rgb){
    rgb.forEach(function (str, x, arr:any[]){
        if ( str.length === 1 ) str = str + str; 
        arr[ x ] = parseInt( str, 16 ); 
    }); 
    return "rgba(" + rgb.join(", ") + ", 0.9 )"; 
  }
} 

const eventHandler = (event:any)=>{
  if (event.kind === 'clickData') {
    console.log(event);
  }
};

function DashboardEx({data, htValue, scene}:defaultType) {
  const dummy = [1,2,3];
  console.log(typeof data, data);
  if (data) {
	    if (htValue && !htValue.isHooked) {
		    htValue.umi(eventHandler);
		    htValue.mi(eventHandler);
		    htValue.isHooked = true;
	    }
    return <ClusterBlock>{dummy.map((item: any, idx:number) => <Card data={data[idx]} />)}</ClusterBlock>;
  }


  return null;
}

const ClusterBlock = styled.div`
    position: absolute;
    top: 80px;
    bottom: 0;
    left: 0;
    width: 320px;
    height: auto;
    background-color: ${(props) => hexToRgb(props.theme.clusterBg)};
    color: ${(props)=> hexToRgb(props.theme.fontColor)};
    z-index: 2;
    padding: 34px 20px 30px 20px;
    font-size: 17px;
    border-radius: 20px;
    z-index: 3;
    margin: 10px;
    transition: all 0.3s ease-in-out;
    overflow-y: auto;
    box-sizing: border-box;

    &:hover {
      transform: perspective(500px) rotateY(4deg);
    }
`;

export default DashboardEx;
