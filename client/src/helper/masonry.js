import Macy from "macy";
import { debounce } from "./index";
import { filteredPhotos, photos } from "../stores";
// /**
//  *
//  * @param {HTMLElement} node
//  */
// export function masonry(node) {
// 	const rowSize = parseInt(
// 		getComputedStyle(node).getPropertyValue("grid-auto-rows"),
// 		10
// 	);
// 	const rowGap = parseInt(
// 		getComputedStyle(node).getPropertyValue("grid-gap"),
// 		10
// 	);
// 	let gridItems = [];

// 	filteredPhotos.subscribe((photos) => {
// 		const newGridItems = [];
// 		node.querySelectorAll(".gr-item").forEach((item) => {
// 			newGridItems.push({ item });
// 		});
// 		gridItems = [...newGridItems];
// 		positionGridItems();
// 	});

// 	function positionGridItems() {
// 		console.log(gridItems);
// 		gridItems.forEach(({ item }) => {
// 			const content = item.querySelector(".card");
// 			const rowSpan = Math.ceil(
// 				(content.offsetHeight + rowGap) / (rowSize + rowGap)
// 			);
// 			item.style.setProperty("--row-span", rowSpan);
// 		});
// 	}

// 	window.addEventListener("load", debounce(positionGridItems, 200));
// 	window.addEventListener("resize", debounce(positionGridItems, 100));
// }
export let macy;
/**
 *
 * @param {HTMLElement} node
 */
export function masonry(node) {
	macy = Macy({
		container: node,
		waitForImages: false,
		margin: 24,
		columns: 3,
		breakAt: {
			560: 2,
		},
	});
	macy.runOnImageLoad(function () {
		// console.log('I only get called when all images are loaded');
		macy.recalculate(true, true);
	}, true);

	filteredPhotos.subscribe(
		debounce(() => {
			macy.recalculate(true, true);
		}, 1000)
	);
}
