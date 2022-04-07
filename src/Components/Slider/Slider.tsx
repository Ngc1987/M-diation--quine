import React, {useState} from 'react';
import "./Slider.scss";

import { dataSlider } from './dataSlider';
import BtnSlider from './BtnSlider';
import Title from "../Title/Title";


interface slider {
  index: number;
  inProgress:  boolean;
}
interface Props {
  	className: string;
	ariaHidden: boolean;
}

const Slider:React.FC<Props> = ({className, ariaHidden}) => {

	// State to know the index of the picture to display
	const [slideAnim, setSlideAnim] = useState<slider>({
		index: 1,
		inProgress: false
	})

	// Functions when the user click on the left or right buttons
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


	console.log(ariaHidden)
	return (
		
			<div className={`gallery ${className}`} aria-hidden={ariaHidden}>

				<Title title="Galerie" className='gallery__title' ariaHidden={ariaHidden}/>

				<div className='gallery__slider'>

					{dataSlider.map((obj, index) => {
						return (
							<div key={index}
								className={slideAnim.index === index + 1 ?
											"slide active-anim" 
											: 
											"slide"
								}>

								<img src={process.env.PUBLIC_URL + `/assets/sliderImgs/img${index+1}.webp`} alt={`${obj}`} />
							</div>
						)
					})}

					<BtnSlider moveSlide={prevSlide} direction={"prev"} tabIndex={ariaHidden ? -1 : 0} />
					<BtnSlider moveSlide={nextSlide} direction={"next"} tabIndex={ariaHidden ? -1 : 0} />
				</div>
			</div>
	)
};

export default Slider;
