<script>
	import Button from "../Button.svelte";
	import {
		isModalShow,
		modalContent,
		selectedPhoto,
		photos,
	} from "../../stores";
	import { del } from "../../helper/api";

	function handleClose() {
		isModalShow.set(false);
		modalContent.set(null);
	}

	async function remove(idPhoto) {
		try {
			await del(`photos/${idPhoto}`);
			handleClose();
			$photos = [...$photos.filter(({ id }) => id !== idPhoto)];
		} catch (e) {
			console.log(e);
		}
	}
</script>

<style lang="scss" src="./style.scss">
</style>

<div class="modal-content">
	<h1 class="modal-content-title">Are you sure?</h1>
	<form on:submit|preventDefault>
		<label for="selected"> "{$selectedPhoto.label}" will be deleted </label>
		<div class="modal-content-footer">
			<button class="btn-reset" on:click={handleClose}>Cancel</button>
			<Button on:click={() => remove($selectedPhoto.id)} color="red">
				Delete
			</Button>
		</div>
	</form>
</div>
