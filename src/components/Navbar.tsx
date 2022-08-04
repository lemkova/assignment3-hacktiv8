import React, { Component } from 'react'

import userPath from '../images/user.svg';
import Navmenu from './NavMenu'

export default class NavbarClass extends Component {
  render() {
    return (
        <aside className="w-64" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-[#bc5b3c] h-screen">
            <div className="mt-60">
                <ul className="space-y-2 flex flex-col justify-center items-center">
                    <li>
                        <img src={userPath} className="h-40 w-40" alt="portrait"/>
                    </li>
                    <li>
                        <Navmenu to="/" title="About"/>
                    </li>
                    <li>
                        <Navmenu to="/experience" title="Experience"/>
                    </li>
                    <li>
                        <Navmenu to="/education" title="Education"/>
                    </li>
                    <li>
                        <Navmenu to="/skills" title="Skills"/>
                    </li>
                    <li>
                        <Navmenu to="/interests" title="Interests"/>
                    </li>
                    <li>
                        <Navmenu to="/awards" title="Awards"/>
                    </li>                                                              
                </ul>
            </div>
            </div>
        </aside>
    )
  }
}
