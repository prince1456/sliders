import { useState } from "react";

const useSlider = (images) => {
    const [index, setIndex] = useState(0)

    const getNextImage = () => {
        if (index === images.length - 1) {
            return images[0]?.urls.thumb
        } else {
            return images[index + 1]?.urls.thumb
        }
    }
    const getPrevImage = () => {
        if (index === 0) {
            return images[images.length - 1]?.urls.thumb
        } else {
            return images[index - 1]?.urls.thumb
        }
    }
    const nextSlide = () => {
        setIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1)
    }
    const prevSlide = () => {
        setIndex((prevIndex) => prevIndex === 0 ? images.length -1 : prevIndex - 1)
    }
    return {
        index, getNextImage, getPrevImage, nextSlide, prevSlide
    }
}

export default useSlider