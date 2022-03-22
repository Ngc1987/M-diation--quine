import { useEffect, useState } from 'react';

interface WindowSize {
	height: number;
	width: number;
}

// Listening the size of the window on resize
const useWindowSize = ():WindowSize => {

	// state for the window size, differents animations displayed for desktop or mobile device
	const [dimensions, setDimensions] = useState<WindowSize>({ 
		height: window.innerHeight,
		width: window.innerWidth
	})
	// Listen resize event, and set the state with the actual values
	useEffect(() => {
		function handleResize() {
			setDimensions({height: window.innerHeight, width: window.innerWidth})
		}
		window.addEventListener('resize', handleResize)
	
		return () => window.removeEventListener('resize', handleResize)
		
	})
	
	return dimensions;
}

export default useWindowSize;