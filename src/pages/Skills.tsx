import React, { Component } from 'react'

import Skill from '../components/Skill'

export default class Skills extends Component {
  render() {
    return (
      <div className="w-[100%]">
        <div>
          <h1 className='text-5xl'>Skills</h1>
        </div>
        <div className="mt-10">
          <h1 className='text-3xl'>Programming Language & Tools</h1>
        </div>
        <div className="mt-10 flex justify-between w-[30%]">
          <div>
            <Skill name="Python"/>
            <Skill name="C/C++"/>
            <Skill name="Golang"/>
            <Skill name="JavaScript"/>      
          </div>
          <div>
            <Skill name="React"/>
            <Skill name="Linux"/>
            <Skill name="Tensorflow"/>
          </div>
        </div>
      </div>
    )
  }
}
