import {useState, useEffect} from "react";


interface UseCarouselProps {
    totalImages: number,
    interval?: number
}

export const useCarousel = ({
    totalImages,
    interval = 5000
}: UseCarouselProps) => {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect (() => {
        const timer = setInterval(()=>{
            setCurrentImage((prev) => ((prev + 1 )% totalImages))
        }, interval); // setInterval is a js function which takes a callback function and executes it at regular interval, returns the timer id which is used to stop the timer

        // you generally stop the timer using clearInterval as a cleanup function (executed when dependency change or component unmount)

        return () => {clearInterval (timer)}
    }, [totalImages, currentImage])

    return currentImage;
}