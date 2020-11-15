import { writable, derived } from "svelte/store";

export const photos = writable([]);

export const selectedPhoto = writable(null);

export const isLoading = writable(true);

export const isModalShow = writable(false);

export const modalContent = writable(null);

export const searchTerm = writable("");

export const filteredPhotos = derived(
	[photos, searchTerm],
	([$photos, $searchTerm]) => filterBySearchTerm($photos, $searchTerm)
);

function filterBySearchTerm(photos, searchTerm) {
	if (!searchTerm) return photos;

	return photos.filter((photo) => {
		const name = photo.label.toLowerCase().replace("-", " ");

		return name.includes(searchTerm.toLowerCase());
	});
}
