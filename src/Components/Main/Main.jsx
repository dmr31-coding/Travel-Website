import React from 'react'
import './main.scss'

import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'World Largest',
    location: 'Nepal',
    grade: 'NATURAL PLACE',
    fees: '$6000',
    description: 'The place of natural beauty, geography, altitude. This place is known for best travel adventures.',
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'World Largest',
    location: 'Nepal',
    grade: 'NATURAL PLACE',
    fees: '$6000',
    description: 'The place of natural beauty, geography, altitude. This place is known for best travel adventures.',
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'World Largest',
    location: 'Nepal',
    grade: 'NATURAL PLACE',
    fees: '$6000',
    description: 'The place of natural beauty, geography, altitude. This place is known for best travel adventures.',
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'World Largest',
    location: 'Nepal',
    grade: 'NATURAL PLACE',
    fees: '$6000',
    description: 'The place of natural beauty, geography, altitude. This place is known for best travel adventures.',
  },
]

const Main = () => {
  return (
    <section className='main container section '>
      <div className="secTitle">
        <h3 className="title">
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return(
              <div key={id} className='singleDestination'>

              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className='destTitle'>{destTitle}</h4>
                <span className='continent flex'>
                <HiOutlineLocationMarker className='icon' />
                <span className='name'>{location}</span>
                </span>

                <div className="fees ">

                  <div className="grade">
                    <span>{grade} <small>+1</small></span>
                  </div>

                  <div className="price">
                    <h5>{fees}</h5>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className='icon' />
                  </button>
                </div>
              </div>

            </div>
            )
            
          })
        }
      </div>
    </section>
  )
}

export default Main