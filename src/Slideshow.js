import Slide from './Slide'
import useSlider from './hooks/useSlider'
const Slideshow = ({ images }) => {
    const { index, getNextImage, getPrevImage, nextSlide, prevSlide } = useSlider(images)
    return (
        <div style={{ position: "relative" }}>
            <div className="slideshow">
                <div className="slideshow__slides-box"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {images.map((image) => {
                        return (
                            <Slide key={image.id} image={image} active={index === images.indexOf(image) ? 'slideshow__slide--active' : ''} />
                        )
                    })}
                </div>

            </div>
            <div className='arrow left' onClick={prevSlide}>
                <img alt="prev thumb" src={getPrevImage()} />
            </div>
            <div className='arrow right' onClick={nextSlide}>
                <img alt="next thumb" src={getNextImage()} />
            </div>
        </div>
    )
}

export default Slideshow

