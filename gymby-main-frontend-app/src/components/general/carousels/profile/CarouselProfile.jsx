import React, {useEffect, useState, Children, cloneElement} from 'react';
import s from './CarouselProfile.module.scss'
import arrow from '../../../../assets/images/general/slider/rightArrows.svg'
import noPhotos from '../../../../assets/images/general/slider/noPhotos.svg'


const CarouselProfile = ({children = [], itemWidth = 350}) => {

    const [items, setItems] = useState([]);
    const [offset, setOffset] = useState(0);
    const MARGIN_RIGHT_BETWEEN_PHOTOS = 30;
    const ARROW_SIZE = 47;
    const ARROWS_MARGIN = 10;
    const finalCarouselWidth = itemWidth * 2 + MARGIN_RIGHT_BETWEEN_PHOTOS * 2 + ARROW_SIZE * 2 + ARROWS_MARGIN * 2;
    const photoSwipeValue = itemWidth + MARGIN_RIGHT_BETWEEN_PHOTOS;
    const photoSwipeValueForOnePhoto = photoSwipeValue / 2 + ARROWS_MARGIN + ARROW_SIZE;

    useEffect(() => {
        setItems(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${itemWidth}px`,
                        maxWidth: `${itemWidth}px`,
                        marginRight: `${MARGIN_RIGHT_BETWEEN_PHOTOS}px`
                    }
                })
            })
        )
    }, [])

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + photoSwipeValue;
            return Math.min(newOffset, 0);
        })
    }
    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - photoSwipeValue;
            const maxOffset = -(photoSwipeValue * (items.length - 2))
            return Math.max(newOffset, maxOffset)

        })
    }

    return (
        <div>
            {items.length <= 0 ?
                <div className={s.noPhoto}><img src={noPhotos} alt="noPhotos"/></div>
                :
                items.length === 1 ?
                    <div className={s.carouselProfile} style={{width: `${finalCarouselWidth}px`}}>
                        <div className={s.carouselProfile__window}>
                            <div className={s.carouselProfile__allItems}
                                 style={{transform: `translateX(${photoSwipeValueForOnePhoto}px)`}}
                            >
                                {items}
                            </div>
                        </div>
                    </div>
                    :

                    <div className={s.carouselProfile} style={{width: `${finalCarouselWidth}px`}}>
                        <div onClick={handleLeftArrowClick}
                             className={`${s.carouselProfile__arrow} ${s.carouselProfile__arrow_left}`}
                             style={{marginRight: `${ARROWS_MARGIN}px`}}
                        >
                            <img src={arrow} alt="leftArrow"/>
                        </div>
                        <div className={s.carouselProfile__window}>
                            <div className={s.carouselProfile__allItems}
                                 style={{transform: `translateX(${offset}px)`}}
                            >
                                {items}
                            </div>
                        </div>
                        <div onClick={handleRightArrowClick}
                             className={`${s.carouselProfile__arrow} ${s.carouselProfile__arrow_right}`}
                             style={{marginLeft: `${ARROWS_MARGIN}px`}}
                        >
                            <img src={arrow} alt="rightArrow"/>
                        </div>
                    </div>
            }
        </div>
    );
};

export default CarouselProfile;