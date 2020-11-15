<script>
	import Tailwindcss from "./styles/Tailwindcss.svelte";
	import Navbar from "./Navbar.svelte";
	import Grid from "./Grid.svelte";
	import Footer from "./Footer.svelte";
	import Modal from "./components/Modal.svelte";
	import Loading from "./components/Loading.svelte";
	import { modalContent, photos } from "./stores";
	import { get } from "./helper/api";

	async function getPhotos() {
		try {
			const { data } = await get("photos");
			$photos = [...data];
			return data;
		} catch (e) {
			console.log(e);
		}
	}
</script>

<style lang="scss">
	main {
		width: 100%;
		@apply mx-auto px-4;
		@screen md {
			width: 80%;
			@apply px-0;
		}
	}
</style>

<main>
	<Navbar />
	{#await getPhotos()}
		<Loading />
	{:then}
		<Grid />
	{/await}
	<Modal>
		<svelte:component this={$modalContent} />
	</Modal>
	<Footer />
</main>
