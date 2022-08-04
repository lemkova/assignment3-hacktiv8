import React, { Component } from 'react'

const styles = {
  experiencePos: 'text-3xl',
  experienceLoc: 'text-2xl text-gray-300 font-bold',
  experienceContainer: 'my-10'
}

export default class Experience extends Component {
  render() {
    return (
      <div className='w-[100%]'>
        <div>
          <h1 className='text-5xl'>Experience</h1>
        </div>
        <div className="mt-10">
          <div className={styles.experienceContainer}>
            <div className='flex justify-between'>
              <h1 className={styles.experiencePos}>Software Developer Intern</h1>
              <h1 className={styles.experiencePos}>January 2020 - March 2020</h1>
            </div>
            <div className="mt-2">
              <h1 className={styles.experienceLoc}>Universitas Brawijaya - Unit Pelayanan IT</h1>
            </div>
            <div className="mt-4">
              <h1>Contributing in the making of Traffic Vehicle Counter using Image Processing</h1>
            </div>
          </div>
          <div className={styles.experienceContainer}>
            <div className='flex justify-between'>
              <h1 className={styles.experiencePos}>Machine Learning Intern</h1>
              <h1 className={styles.experiencePos}>Feb 2021 - July 2021</h1>
            </div>
            <div className="mt-2">
              <h1 className={styles.experienceLoc}>Bangkit Academy</h1>
            </div>
            <div className="mt-4">
              <h1>Contributing in the making of Garbage Classifier using Tensorflow</h1>
            </div>
          </div>
          <div className={styles.experienceContainer}>
            <div className='flex justify-between'>
              <h1 className={styles.experiencePos}>Quantitative Trader Intern</h1>
              <h1 className={styles.experiencePos}>January 2022 - March 2022</h1>
            </div>
            <div className="mt-2">
              <h1 className={styles.experienceLoc}>Sinar Jaya Ventura</h1>
            </div>
            <div className="mt-4">
              <h1>High-Frequency Trader at Sinar Jaya Venture Capital</h1>
            </div>
          </div>                      
        </div>

      </div>
    )
  }
}
