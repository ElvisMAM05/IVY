import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/Carousell.css"
import  Carousel1  from "../../Home/Images/Carousel1.png"; 


function CarouselC() {
  return (
    <Carousel>
    <Carousel.Item >
      <img className='Carousel1' src={Carousel1} alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='Carousel1' src={Carousel1} alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='Carousel1' src={Carousel1} alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselC;