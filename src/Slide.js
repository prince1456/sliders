import useFetch from "./hooks/useFetch"

const Slide = ({ image, active }) => {
    const { data } = useFetch(`https://api.unsplash.com/photos/${image.id}/?client_id=735383e17276cf0667bf1d7c0755d0e19d38ff8989e939454a0ac984c7afefea`)
    return (
        <div key={image.id}
            className={`slideshow__slide ${active}`}
        >
            <img src={image.urls.regular} alt={image.alt_description} />
            <div className='slideshow__slide--stats'>
                <span>❤️ {image.likes}</span>
                <span>Downloads {data?.downloads}</span>
                <span>Views {data?.views}</span>
            </div>
        </div>
    )
}

export default Slide