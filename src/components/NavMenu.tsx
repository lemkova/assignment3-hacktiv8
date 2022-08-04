import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const styles = {
    navMenu : 'flex items-center p-2 text-base font-bold text-[#cb8b76] hover:text-white',
}

export default class NavMenu extends Component<{to: string, title: string},{}> {
  render() {
    return (
        <div className={styles.navMenu}>
            <h1><Link to={this.props.to}>{this.props.title}</Link></h1>
        </div>
    )
  }
}
