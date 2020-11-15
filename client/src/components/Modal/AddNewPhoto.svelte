<script>
	import { tick } from "svelte";
	import Button from "../Button.svelte";
	import { isModalShow, modalContent, photos } from "../../stores";
	import { post } from "../../helper/api";
	import { macy } from "../../helper/masonry";
	function handleClose() {
		isModalShow.set(false);
		modalContent.set(null);
	}

	let url = "",
		label = "",
		error = "";

	async function addPhoto() {
		const formData = {
			label: label.trim(),
			url: url.trim(),
		};
		try {
			if (formData.label && formData.url) {
				let { data } = await post("photos", formData);
				$photos = [data, ...$photos];
				url = label = "";
				handleClose();
				await tick();
				macy.recalculate(true, true);
			} else {
				error = "Please fill out all required fields";
			}
		} catch (e) {
			console.log(e);
		}
	}
</script>

<style lang="scss" src="./style.scss">
</style>

<div class="modal-content">
	<h1 class="modal-content-title">Add a new photo</h1>
	<form on:submit|preventDefault>
		<p class="text-red-600 mb-4">{error}</p>
		<label>
			<p>Label <span class="text-red-600" title="Required">*</span></p>
			<input
				type="text"
				bind:value={label}
				placeholder="Suspendisse elit massa" />
		</label>
		<label>
			<p>Photo URL <span class="text-red-600" title="Required">*</span></p>
			<input
				type="text"
				bind:value={url}
				placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..." />
		</label>
		<div class="modal-content-footer">
			<button
				type="reset"
				class="btn-reset"
				on:click={handleClose}>Cancel</button>
			<Button on:click={addPhoto}>Submit</Button>
		</div>
	</form>
</div>
