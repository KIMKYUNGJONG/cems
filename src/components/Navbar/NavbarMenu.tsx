import React from 'react'
import { ROUTES } from '../../constant/routes'

import Icon from '../Common/Icon'

function NavbarMenu() {
    const onClick = () => {
        console.log('onClick')
    }

    const routes = ROUTES.map((route) => {
        return (
            <button key={route.name} onClick={onClick}>
                <Icon name={route.icon} hover={'#55b1ff'} />
            </button>
        )
    })
    return <div>{routes}</div>
}
export default NavbarMenu
