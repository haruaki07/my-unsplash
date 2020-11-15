<script>
	import { isModalShow } from "../stores";
	import { scale, fade } from "svelte/transition";

	function closeModal() {
		isModalShow.set(false)
	}
</script>

{#if $isModalShow}
	<div class="modal">
		<div class="modal-overlay" transition:fade="{{ duration: 200 }}" on:click="{closeModal}"></div>
		<div class="modal-dialog" transition:scale="{{ start: .95, duration: 200 }}">
			<slot></slot>
		</div>
	</div>
{/if}

<style lang="scss">
	.modal {
		@apply fixed inset-0 flex items-center justify-center p-4 z-50;
		&-overlay {
			@apply absolute inset-0 bg-black bg-opacity-25;
		}
		&-dialog {
			border-radius: 12px;
			@apply bg-white w-full overflow-hidden shadow-xl relative z-10;
			@screen sm {
				@apply max-w-lg;
			}
		}
	}
</style>