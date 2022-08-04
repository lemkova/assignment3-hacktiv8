import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default class About extends Component {
  render() {
    return (
      <div className="flex flex-col">
        <div>
          <h1 className="text-5xl">Muhammad Okki</h1>
        </div>
        <div className="mt-[40px]">
          <p>
            Hello my name is Muhammad Okki, im a front-end developer.
          </p>
        </div>
        <div className="mt-4 text-3xl">
          <a href="https://github.com/lemkova" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
          <a href="https://www.linkedin.com/in/muhammad-okki-graceda-mulyono-ab8a46206/" target="_blank" className='ml-4'><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
    )
  }
}
