import React, { useEffect, useRef, useState } from 'react';
import HtView from '../../components/HtView';
import axios from 'axios';
import { useAsync } from 'react-async';
import { apiGet } from '../../lib/api';

function DashboardMap(props: any) {
  const htView = useRef<any>();
  const render = () => {
    const scene = htView.current.getScene();
    if (scene === props.scene) {
      if (props.pushdata) {
        updateDM(props.pushdata);
      }
    } else {
      htView.current.setScene(props.scene);
      const graphView = htView.current.getGraphView();
      props.getGraphView(graphView);
      graphView.isHooked = undefined;
      htView.current.clearDM();
      graphView.deserialize(props.scene, (json: any) => {
        const dataModel = htView.current.getDataModel();
        const panel = dataModel.getDataByTag('dataPanel1');
        if (panel) {
          panel.a('data', [10, 20, 30, 40, 50, 60, 70, 80, 90]);
          graphView.invalidateShape3dCachedImage(panel);
          console.log(panel);
        }
      });
    }
  };
  const updateDM = (data: any) => {
    //htView component api 사용
    //pullData 가 채워 졌을시 call updateDM()
    htView.current.updateDM(data);
  };

  useEffect(() => {
    render();
  });


  return (
    <>
      <HtView ref={htView} type="3d" autoInvalidate style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100%', height: '100%' }} />
    </>
  );
}

export default DashboardMap;
