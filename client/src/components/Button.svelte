<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let color = 'green';

	function handleClick(event) {
		dispatch('click', event);
	}
</script>

<style lang="scss">
	.btn {
		font-size: 14px;
		border-radius: 24px;
		padding: 10px 20px;
		white-space: nowrap;
		box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
		@apply text-white font-bold outline-none transition-shadow duration-150;
		@screen md {
			padding: 18px 26px;
		}
		&-green {
			background: #3DB46D;
			&:focus {
				@apply shadow-outline-green;
			}
		}
		&-red {
			background: #EB5757;
			&:focus {
				@apply shadow-outline-red;
			}
		}
	}
</style>

<button class="btn btn-{color}" on:click="{handleClick}">
	<slot></slot>
</button>