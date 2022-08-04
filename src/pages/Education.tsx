import React, { Component } from 'react'

const styles = {
  eduPos: 'text-3xl',
  eduLoc: 'text-2xl text-gray-300 font-bold',
  eduContainer: 'my-10'
}


export default class Education extends Component {
  render() {
    return (
      <div className="w-[100%]">
        <div>
          <h1 className="text-5xl">Education</h1>
        </div>
        <div className="mt-10">
          <div className={styles.eduContainer}>
            <div className='flex justify-between'>
              <h1 className={styles.eduPos}>Universitas Brawijaya</h1>
              <h1 className={styles.eduPos}>August 2017 - October 2021</h1>
            </div>
            <div className="mt-2">
              <h1 className={styles.eduLoc}>Electrical Engineering - Bachelor Degree</h1>
            </div>
            <div className="mt-4">
              <h1>GPA: 3.52</h1>
            </div>
            
          </div>
          <div className={styles.eduContainer}>
            <div className='flex justify-between'>
              <h1 className={styles.eduPos}>Hacktiv8 Training Center</h1>
              <h1 className={styles.eduPos}>June 2022 - August 2022</h1>
            </div>
            <div className="mt-2">
              <h1 className={styles.eduLoc}>React and React Native Course</h1>
            </div>
            <div className="mt-4">
              <h1>Learning React JS Fundamentals</h1>
            </div>
            
          </div>                        
        </div>
      </div>
    )
  }
}
