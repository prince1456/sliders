import { useState } from 'react'

const Slideshow = ({ images }) => {
    const [index, setIndex] = useState(0)
    return (
        <div>
            <div className="slideshow">
                {/* note need to add track right or left */}
                <div className="slideshow__slides-box"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {images.map((image) => {
                        return (
                            <div key={image.id} 
                                className={`slideshow__slide ${index === images.indexOf(image) ? 'slideshow__slide--active' : ''}`}
                                >
                                <img src={image.urls.regular} alt={image.alt_description} />
                            </div>
                        )
                    })}
                </div>

            </div>
            <button className="slideshow__button" onClick={() => setIndex(1)}>1</button>
        </div>
    )
}

export default Slideshow