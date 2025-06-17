import { motion } from 'framer-motion';

const images = [
    {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Fulmer_Falls_Closeup_3000px.jpg/1280px-Fulmer_Falls_Closeup_3000px.jpg',
        caption:'Waterfall'
    },
    {
        src: 'https://st4.depositphotos.com/37452470/38594/i/450/depositphotos_385940408-stock-photo-blue-cloudy-sky-little-creek.jpg',
        caption:'Nature'
    },
    {
        src: 'https://cdn.pixabay.com/photo/2022/04/15/07/58/sunset-7133867_1280.jpg',
        caption:'Sea'
    },
]

export const ImageGallery = () => {
    return (
    <section>
    {
        images.map((image, index) => (
            <div
                key={index}
                className='relative m-[1rem] overflow-hidden rounded-lg shadow-lg w-[25rem]'
            >
                <img src={image.src} alt={image.caption} className='w-full h-auto' />
                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0
                hover:opacity-100 transition-opacity duration-300 cursor-pointer'
                >
                    <p className='text-lg'>{ image.caption }</p>

                </div>
            </div>
        ))
            }
    </section>
    )
};
