// import React, { useRef, useEffect, RefAttributes } from "react";

// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Scrollbar from "smooth-scrollbar";

// import gsap from "gsap";

// export interface Props  {
// 	// innerRef:  React.MutableRefObject<null>;
// 	children?: React.ReactNode
// }

// const ScrollRFC:React.FC<Props> = ({ children }) => {

// 	const scrollRef: React.MutableRefObject<null> = useRef(null);
// 	const scrollTool:HTMLDivElement = scrollRef.current
// 	gsap.registerPlugin(ScrollTrigger);



// 	useEffect(() => {

// 		console.log(scrollRef)

// 		let bodyScrollBar = Scrollbar.init(scrollTool, {
// 			damping: 0.1,
// 			delegateTo: document
// 		});

// 		bodyScrollBar.setPosition(0, 0);
// 		bodyScrollBar.track.xAxis.element.remove();

// 		ScrollTrigger.scrollerProxy(scrollRef.current, {
// 			scrollTop(value) {
// 				if (arguments.length) {
// 					bodyScrollBar.scrollTop = value;
// 				}
// 				return bodyScrollBar.scrollTop;
// 			}
// 		});

// 		bodyScrollBar.addListener(ScrollTrigger.update);
// 	});

// 	return (
// 		<div className="content-scroll" style={{ height: "100vh" }} ref={scrollRef}>
// 			{children}
// 		</div>
// 	);
// };

// export default ScrollRFC;
