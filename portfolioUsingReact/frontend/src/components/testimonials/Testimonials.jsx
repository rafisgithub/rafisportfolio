import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snoow',
    review:'Mr.Rafi is a best service provider forever.On behalf he deserved 5 stars.',
  },
  {
    avatar: AVTR2,
    name: 'Shattra wale',
    review:'Mr.Rafi is a best service provider forever.On behalf he deserved 5 stars.',
  },
  {
    avatar: AVTR3,
    name: 'kaewne despite',
    review:'Mr.Rafi is a best service provider forever.On behalf he deserved 5 stars.',
  },
  {
    avatar: AVTR4,
    name: 'Robart breown',
    review:'Mr.Rafi is a best service provider forever.On behalf he deserved 5 stars.',
  },
]
const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonial__container">
        {
          data.map(({avatar, name, review},index)=>{
            return (
                  
        <article key={index} className='testimonial'>
        <div className="client__avatar">
          <img src={avatar} alt="" />
        </div>
        <h5 className='client__name'>{name}</h5>
          <small className='client__review'>
            {review}
          </small>
      </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Testimonial