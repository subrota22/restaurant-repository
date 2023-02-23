import Carousel from 'react-bootstrap/Carousel';

function CarouselPhotos() {
  return (
    <>
    <div className="container carouselContainer" data-aos="fade-up" data-aos-delay="500">
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImage"
          src="https://i.ibb.co/QYrkcRn/right-Side-Image.jpg"
          alt="Classic Burger"
        />
        <Carousel.Caption>
          <h3 className='text-info bg-dark py-2 px-3 rounded'>Classic Burger</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImage"
          src="https://i.ibb.co/pwfMHMM/coklet-Milk-Image.jpg"
          alt="Choclate Milkshake"
        />

        <Carousel.Caption>
          <h3  className='text-info bg-dark py-2 px-3 rounded'>Choclate Milkshake</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImage"
          src="https://i.ibb.co/rv5h0Dg/homeb.jpg"
          alt="Classic Fries"
        />

        <Carousel.Caption>
          <h3  className='text-info bg-dark py-2 px-3 rounded'>Classic Fries</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImage"
          src="https://i.ibb.co/jZnR2RQ/pancakes.jpg"
          alt="Pancakes"
        />

        <Carousel.Caption>
          <h3  className='text-info bg-dark py-2 px-3 rounded'>Pancakes</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImage"
          src="https://i.ibb.co/hdBnXjf/iceCream.jpg"
          alt="Ice Cream"
        />

        <Carousel.Caption>
          <h3  className='text-info bg-dark py-2 px-3 rounded'>Ice Cream</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImage"
          src="https://i.ibb.co/xGQrRN6/chiken-Burgur.jpg"
          alt="Chicken Burger"
        />

        <Carousel.Caption>
          <h3  className='text-info bg-dark py-2 px-3 rounded'>Chicken Burger</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImage"
          src="https://i.ibb.co/5Ty0nSL/egg-toas.jpg"
          alt="Egg toast"
        />

        <Carousel.Caption>
          <h3  className='text-info bg-dark py-2 px-3 rounded'>Egg toast</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImage"
          src="https://i.ibb.co/3rKcMw3/regular-soda.jpg"
          alt="Regular Soda"
        />

        <Carousel.Caption>
          <h3  className='text-info bg-dark py-2 px-3 rounded'>Regular Soda</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}

export default CarouselPhotos;