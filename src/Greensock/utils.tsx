import { gsap } from 'gsap';

// if disabled is true, don't allow the ScrollTrigger's animation to render at any progress other than 0 or 1.
	export function checkDisabled(self: any):void {
		let tween = self.getTween();
  		tween && Math.abs(self.getVelocity()) > 2500 && tween.progress(1);
	}

// Function to hide the elements when exit the component
	export const hideGsap = (elem, start, end, markers) => {
		gsap.fromTo(elem, 
			{opacity: 1},
			{scrollTrigger: {
				trigger: elem,
				start,
				end,
				markers,
				// toggleActions: "play complete reverse complete",
				scrub: true,
				onUpdate: (e) => checkDisabled(e),},
				opacity: 0}
		)
	}

	export const makeAppear = (element, trigger, start: string, end: string, markers: boolean) => {
		gsap.fromTo(element, 
			{opacity: 0},
				{scrollTrigger: {
					trigger,
					start,
					end,
					markers,
					toggleActions: "play complete reverse complete",
					scrub: 1,
					// onUpdate: (e) => checkDisabled(e),
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
					toggleActions: "play complete reverse complete",
					scrub: 1,
					onUpdate: (e) => checkDisabled(e),
				}
			})
	}