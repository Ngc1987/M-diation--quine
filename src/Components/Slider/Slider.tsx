import React, {Suspense, useEffect, useRef, useState} from 'react';
import "./Slider.scss";
import { dataSlider } from './dataSlider';
import BtnSlider from './BtnSlider';
import Loader from '../Loader/Loader';
import { gsap } from 'gsap';
// import Title from '../../Components/Title/Title';

const Title = React.lazy(() => import("../../Components/Title/Title"));

interface slider {
  index: number;
  inProgress:  boolean;
}

const Slider: React.FC = () => {

	const [slideAnim, setSlideAnim] = useState<slider>({
		index: 1,
		inProgress: false
	})


	const sliderRef = useRef() as React.MutableRefObject<HTMLDivElement>;

	const nextSlide = ():void => {

		if(slideAnim.index !== dataSlider.length && !slideAnim.inProgress) {

			setSlideAnim({index: slideAnim.index + 1,inProgress: true})

			setTimeout(() => {
				setSlideAnim({index: slideAnim.index + 1, inProgress: false})
			}, 400)
		}
		else if(slideAnim.index === dataSlider.length && !slideAnim.inProgress) {

				setSlideAnim({index: 1,inProgress: true})

				setTimeout(() => {
				setSlideAnim({index: 1, inProgress: false})
			}, 400)
		}
	}
	const prevSlide = ():void => {

		if(slideAnim.index !== 1 && !slideAnim.inProgress) {

			setSlideAnim({index: slideAnim.index - 1, inProgress: true})

			setTimeout(() => {
				setSlideAnim({index: slideAnim.index - 1, inProgress: false})
			}, 400)
		}
		else if(slideAnim.index === 1 && !slideAnim.inProgress) {

				setSlideAnim({index: dataSlider.length, inProgress: true})

				setTimeout(() => {
				setSlideAnim({index: dataSlider.length, inProgress: false})
			}, 400)
		}
	}

	useEffect(() => {
		gsap.from(sliderRef.current, {
			y: 15,
			opacity: 0,
			duration: 0.7,
			// delay: 0.3
		})
	}, [])

	return (
		<Suspense fallback={<Loader/>}>

			<div ref={sliderRef} className="gallery">
				<Title title="Galerie" className='gallery__title' />
				<div className='gallery__slider'>
					{dataSlider.map((obj, index) => {
						return (
							<div
							key={index}
							className={slideAnim.index === index + 1 ?
								"slide active-anim" : "slide"}
										>
									
									<img src={process.env.PUBLIC_URL + `/assets/sliderImgs/img${index+1}.jpg`} alt="" />
								</div>
						)
					})}

					<BtnSlider moveSlide={nextSlide} direction={"next"} />
					<BtnSlider moveSlide={prevSlide} direction={"prev"} />
				</div>
			</div>
		</Suspense>
	)
};

export default Slider;
