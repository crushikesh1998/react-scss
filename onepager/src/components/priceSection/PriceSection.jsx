import React from 'react'
import Wrapper from '../wrapper/Wrapper'
import './PriceSection.scss'
import { AiOutlineCheck } from 'react-icons/ai'
import Button from '../button/Button'
const PriceSection = () => {
  const data = [
    {
      id: 1,
      name: 'Plane Name',
      price: 'free',
      valid: 'Forever',
      des: 'Lortemem ipsum dolor sit amet consectetur adipisicing elit. Animi, tempore.',
      listItem: 'This is custom list Item'
    },
    {
      id: 2,
      name: 'Plane Name',
      price: 'free',
      valid: 'Forever',
      des: 'Lortemem ipsum dolor sit amet consectetur adipisicing elit. Animi, tempore.',
      listItem: 'This is custom list Item'
    },
    {
      id: 3,
      name: 'Plane Name',
      price: 'free',
      valid: 'Forever',
      des: 'Lortemem ipsum dolor sit amet consectetur adipisicing elit. Animi, tempore.',
      listItem: 'This is custom list Item'
    }
  ];
  return (
    <section className='price'>
      <Wrapper>
        <div className="price__text">
          <h2>Choose Your Plan </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est neque, consequuntur earum soluta veritatis cumque? Delectus quaerat eius maiores laboriosam?
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor,
            sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="price__container">
          {
            data.map((card) => (
              <article className='price__card'>
                <h3>{card.name}</h3>
                <div className="price__card-price">
                  <h3>{card.price}</h3>
                  <div className="price__card-valid">
                    {card.valid}
                  </div>
                </div>
                <p>{card.des}</p>

                <div className="price__card-listContainer">
                  <div
                    className="price__card-list">
                    <AiOutlineCheck />
                    <p>
                      {card.listItem}
                    </p>
                  </div>
                  <div
                    className="price__card-list">
                    <AiOutlineCheck />
                    <p>
                      {card.listItem}
                    </p>
                  </div>
                  <div
                    className="price__card-list">
                    <AiOutlineCheck />
                    <p>
                      {card.listItem}
                    </p>
                  </div>
                  <div
                    className="price__card-list">
                    <AiOutlineCheck />
                    <p>
                      {card.listItem}
                    </p>
                  </div>
                </div>
                <Button
                  className='price__btn'
                >
                   select plan
                </Button>
              </article>
            ))
          }

        </div>
      </Wrapper>
    </section>
  )
}

export default PriceSection
