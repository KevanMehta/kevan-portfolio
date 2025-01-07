"use client";

import { useSwiper } from 'swiper/react';
import { useEffect, useState } from 'react';
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        const handleSlideChange = () => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        };

        swiper.on('slideChange', handleSlideChange);

        // Initial state
        handleSlideChange();

        // Cleanup
        return () => {
            swiper.off('slideChange', handleSlideChange);
        };
    }, [swiper]);

    return (
        <div className={containerStyles}>
            {/* Left Arrow - Only show if not the first slide */}
            {!isBeginning && (
                <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                    <PiCaretLeftBold className={iconStyles} />
                </button>
            )}

            {/* Right Arrow - Always show, except on the last slide */}
            {!isEnd && (
                <button 
                    className={`${btnStyles} ${isBeginning ? 'absolute right-4 top-1/2 -translate-y-1/2 flex z-20' : ''}`} 
                    onClick={() => swiper.slideNext()}
                >
                    <PiCaretRightBold className={iconStyles} />
                </button>
            )}
        </div>
    );
};

export default WorkSliderBtns;
