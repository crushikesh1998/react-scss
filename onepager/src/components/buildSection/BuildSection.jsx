import './BuildSection.scss'
import Wrapper from '../wrapper/Wrapper';
import Bg from '../../assets/bg-build.svg';
import Phone from '../../assets/build-phone.png';
import Img1 from '../../assets/build-1.png'
import Img2 from '../../assets/build-2.png'
import Img3 from '../../assets/build-3.png'
import Img4 from '../../assets/build-4.png'
import BgPrice from '../../assets/bg-price-1.svg'
const BuildSection = () => {
  return (
    <section className='build'>
      <Wrapper className='build__container'>
        <div className="build_left">
          <h2>start building <br /> Today!</h2>

          <div className="build__feature">
            <img src={Img1} alt="" />
            <div>
              <h3>Meditation Music</h3>
              <p>Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Impedit incidunt libero nemo,
                eum totam dolore sed autem error
                placeat laborum! Nam quaerat est quas hic.</p>
            </div>
          </div>
          

          <div className="build__feature">
            <img src={Img2} alt="" />
            <div>
              <h3>Meditation Music</h3>
              <p>Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Impedit incidunt libero nemo,
                eum totam dolore sed autem error
                placeat laborum! Nam quaerat est quas hic.</p>
            </div>
          </div>


          <div className="build__feature">
            <img src={Img3} alt="" />
            <div>
              <h3>Meditation Music</h3>
              <p>Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Impedit incidunt libero nemo,
                eum totam dolore sed autem error
                placeat laborum! Nam quaerat est quas hic.</p>
            </div>
          </div>


          <div className="build__feature">
            <img src={Img4} alt="" />
            <div>
              <h3>Meditation Music</h3>
              <p>Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Impedit incidunt libero nemo,
                eum totam dolore sed autem error
                placeat laborum! Nam quaerat est quas hic.</p>
            </div>
          </div>

        </div>

        <div className="build__right">
          <img src={Phone} alt=""  className='img-1'/>
          <img src={Bg} alt="" />
        </div>
        
      </Wrapper>
  
      <img src={BgPrice} alt="" className='bg-price' />
    </section>
  )
}

export default BuildSection
