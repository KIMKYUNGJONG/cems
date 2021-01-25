import React from 'react'
import styled from 'styled-components'

const eventHandler = (event:any)=>{
	if(event.kind === "clickData"){
		console.log(event);
	}
}
function DashboardEx( props:any) {
    if (props.data) {
	    if(props.htValue && !props.htValue.isHooked){
		    props.htValue.umi(eventHandler);
		    props.htValue.mi(eventHandler);
		    props.htValue.isHooked = true;
	    }
        return <ClusterBlock>{props.data.map((item: any) => item.body)} {props.scene}</ClusterBlock>
    }


    return null
}

const ClusterBlock = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 72px;
    width: 255px;
    height: 100%;
    background-color: ${(props) => props.theme.clusterBg};
    color: white;
    z-index: 2;
    // padding: 34px 0px 30px 0px;
    padding: 34px 20px 30px 20px;

    border-top-right-radius: 20px;
    z-index: 3;
    transition: all 0.3s ease-in-out;
`

export default DashboardEx
