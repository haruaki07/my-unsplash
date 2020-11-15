<script>
	import {
		isModalShow,
		modalContent,
		selectedPhoto,
		filteredPhotos,
	} from "./stores";
	import { DeletePhoto } from "./components/Modal";
	import Card from "./components/Card.svelte";
	// import { send, receive } from "./helper/transition";
	// import { flip } from "svelte/animate";
	import { masonry } from "./helper/masonry";

	function showModalDelete(id) {
		selectedPhoto.set(id);
		modalContent.set(DeletePhoto);
		isModalShow.set(true);
	}
</script>

<style lang="scss">
	// .gr {
	// 	grid-auto-rows: 1px;
	// 	@apply grid gap-5 grid-cols-2;
	// 	@screen md {
	// 		@apply grid-cols-3;
	// 	}
	// 	&-item {
	// 		grid-row-end: span var(--row-span, 20);
	// 	}
	// }
	// .gr {
	// 	column-count: 2;
	// 	column-gap: 0;
	// 	margin: -0.4rem;
	// 	@screen md {
	// 		margin: -1rem;
	// 	}
	// 	&-item {
	// 		padding: 0.4rem;
	// 		break-inside: avoid;
	// 		@screen md {
	// 			padding: 1rem;
	// 		}
	// 	}
	// 	@screen md {
	// 		column-count: 3;
	// 	}
	// }
</style>

{#if $filteredPhotos.length}
	<div class="gr" use:masonry>
		{#each $filteredPhotos as photo (photo.id)}
			<div class="gr-item">
				<Card {...photo} on:delete={() => showModalDelete(photo)} />
			</div>
		{/each}
	</div>
{:else}
	<center>No results.</center>
{/if}
