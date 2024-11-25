import React from 'react'
import Wrapper from '../wrapper/Wrapper';
import './FeatureSection.scss'
import Img1 from '../../assets/feature-1.png'
import Img2 from '../../assets/feature-2.png'
import Img3 from '../../assets/feature-3.png'
const FeatureSection = () => {
  return (
    <section className='feature'>
    <Wrapper>
    <div className="feature__text">
        <h2>Improve Your LifeStyle</h2>
        <p>Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. 
        Dolores unde cumque doloribus ea maxime id
        odit pariatur dicta minus hic tenetur velit delectus exercitationem sunt facere perspiciatis,
         consectetur illum maiores?</p>
    </div>
    <div className="feature__container">
    <div className="feature__card">
    <img src={Img1} alt="" />
    <h3>Better Sleep</h3>
    <span>All Night Long</span>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur provident doloremque fuga dignissimos perspiciatis modi aperiam iusto dolores, consequuntur quam. Sed facilis rem accusantium! Voluptate magnam ratione iure! Reprehenderit 
    pariatur perspiciatis debitis asperiores voluptates dolore!</p>
    </div>
    
    <div className="feature__card">
    <img src={Img2} alt="" />
    <h3>Better Sleep</h3>
    <span>All Night Long</span>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur provident doloremque fuga dignissimos perspiciatis modi aperiam iusto dolores, consequuntur quam. Sed facilis rem accusantium! Voluptate magnam ratione iure! Reprehenderit 
    pariatur perspiciatis debitis asperiores voluptates dolore!</p>
    </div>
    
    <div className="feature__card">
    <img src={Img3} alt="" />
    <h3>Better Sleep</h3>
    <span>All Night Long</span>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur provident doloremque fuga dignissimos perspiciatis modi aperiam iusto dolores, consequuntur quam. Sed facilis rem accusantium! Voluptate magnam ratione iure! Reprehenderit 
    pariatur perspiciatis debitis asperiores voluptates dolore!</p>
    </div>
    
    
    </div>
    
    </Wrapper>
      
    </section>
  )
}

export default FeatureSection
