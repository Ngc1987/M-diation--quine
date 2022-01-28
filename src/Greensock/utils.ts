import { gsap } from 'gsap';


// Function to hide the elements when exit the component
	export const hideGsap = (elem, start, end, markers) => {
		gsap.fromTo(elem, 
			{opacity: 1},
			{scrollTrigger: {
				trigger: elem,
				start,
				end,
				markers,
				toggleActions: "play none none reverse",
				scrub: true,
				fastScrollEnd: 2000,
				// preventOverlaps: true
				// onUpdate: (e) => checkDisabled(e),
			},
				opacity: 0}
		)
	}

	export const makeAppear = (element, trigger, start: string, end: string, markers: boolean, checkDisabled?: (self: any) => void) => {
		gsap.fromTo(element, 
			{opacity: 0},
				{scrollTrigger: {
					trigger,
					start,
					end,
					markers,
					toggleActions: "play none none reverse",
					scrub: 1,
					fastScrollEnd: 2000,
					preventOverlaps: true
				},
					opacity: 1,}
		)
	}
	export const makeMove = (element, trigger, y: number, start: string, end: string, markers: boolean) => {
		gsap.to(element, {
				y,
				scrollTrigger: {
					trigger,
					start,
					end,
					markers,
					toggleActions: "play none none reverse",
					scrub: 1,
					fastScrollEnd: 2000,
					preventOverlaps: true
				}
			})
	}