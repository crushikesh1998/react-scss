import './HabitSection.scss'
import Wrapper from '../wrapper/Wrapper'
import PhoneImg from '../../assets/habit-phone.png';
import Bg from '../../assets/habit-bg.svg'
const HabitSection = () => {
  return (
    <section className='habits'>
    <Wrapper className='habits__container'>
    <div className="habits__img-container">
    <img src={PhoneImg} alt="" className="img-1" />
    <img src={Bg} alt="" />
    </div>
    
    <div className="habits__text">
    <h2>fight your bad habits!</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta perspiciatis corporis accusantium consectetur deleniti eum possimus dolores veniam qui et cupiditate quae hic soluta nemo ratione, aperiam totam laboriosam in, praesentium reprehenderit voluptatibus repudiandae.</p>    
    </div>
    
    </Wrapper>
      
    </section>
  )
}

export default HabitSection
