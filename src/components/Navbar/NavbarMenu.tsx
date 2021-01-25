import React, { useEffect, useRef } from 'react';
import { ROUTES } from '../../constant/routes'

import Icon from '../Common/Icon'

function NavbarMenu(props:any) {
    const onClick = () => {
        //console.log(typeof props.htValue, props.htValue);
    }

    const routes = ROUTES.map((route) => {
        return (
            <button key={route.name} onClick={onClick}>
                <Icon name={route.icon} hover={'#55b1ff'} />
            </button>
        )
    })
    return <div>
            <button onClick={()=>props.handleScene('scenes/ioe/securebiz/server_room 42_10.11.json')}>서버실</button>
		<button onClick={()=>props.handleScene('scenes/workshop_1127/새만금.json')}>새만금</button>
            {routes}
           </div>
}
export default NavbarMenu
