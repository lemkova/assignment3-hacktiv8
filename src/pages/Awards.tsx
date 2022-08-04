import React, { Component } from 'react'
import Award from '../components/Award'

export default class Awards extends Component {
  render() {
    return (
      <div className='w-[100%]'>
        <div>
          <h1 className='text-5xl'>Awards & Certifications</h1>
        </div>
        <div className='mt-10 w-[30%]'>
          <Award name='React and React Native Course - Hacktiv8'/>
          <Award name='Machine Learning - Bangkit Academy 2021'/>
          <Award name='Best 50 Projects - Bangkit Academy 2021'/>
        </div>
      </div>
    )
  }
}
