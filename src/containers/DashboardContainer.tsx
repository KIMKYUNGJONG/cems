import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { useAsync } from 'react-async'
import { apiGet } from '../lib/api'
import Dashboard from '../pages/Dashboard/Dashboard'
import HtView from '../components/HtView';

const fetchClusterData = async () => {
    const res = await apiGet({
        url: 'https://gorest.co.in/public-api/comments',
    })
    return res.data
}
const URL = 'ws://localhost:5000'

function DashboardContainer(props:any) {
    const htView = useRef<any>();
    const clusterData = useAsync({
        deferFn: fetchClusterData,
        initialValue: [],
    })

    const [ui_data, setUi_data] = useState<any[]>([])

    // Initialize Websocket
    //const wsClient = new WebSocket(URL, ['Token', "token_body_here"])

    const [ws, setWs] = useState<WebSocket>()

    const __bootstrap_async__ = () => {
        setWs(new WebSocket(URL, ['Token', 'token_body_here']))
    }

    useEffect(() => {

    	setTimeout(() => {

		if (!ws) {
		    __bootstrap_async__()
		} else {
		    ws.onopen = () => {
			console.log('opened')
		    }
		    ws.onmessage = (event) => {
			//setUi_data((old) => [...old, event.data])
			setUi_data((old) => [event.data, ...old].splice(0,9));
			//htView component api 사용
			//data pushed 시 call updateDM()
			//문제 있음
			//htView.current.updateDM(([{"tag": "dataPanel1", "data":[ui_data]}]););
		    }
		    ws.onerror = (err) => {
			console.log(err)
		    }
		    ws.onclose = () => {
			console.log('closed')
		    }
		}

		return () => {
		    ws?.close()
		}
	}, 0);
    }, [ws])

    useEffect(() => {
        clusterData.run()
    },[])
    return <Dashboard data={clusterData.data} pushdata={[{"tag": "dataPanel1", "data":ui_data}]} htValue={props.htValue} handleGraphView={props.handleGraphView} scene={props.scene} />
}

export default DashboardContainer
