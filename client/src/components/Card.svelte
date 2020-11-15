<script>
	import { fly, fade } from "svelte/transition";
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let hover = false;

	function handleEnter() {
		hover = true;
	}

	function handleLeave() {
		hover = false;
	}

	function handleClick(event) {
		dispatch('delete', { id, label, url });
	}

	export let id;
	export let label;
	export let url;
</script>

<div class="card" on:mouseenter="{handleEnter}" on:mouseleave="{handleLeave}">
	<img src="{url}" alt="{label}" class="card-img" />
	{#if hover}
		<div class="card-overlay" transition:fade="{{ duration: 200 }}"></div>
		<span class="card-label" transition:fly="{{ y: 50, duration: 200 }}"
			>{label}</span
		>
		<button class="card-delete" on:click="{handleClick}" transition:fly="{{ x: 50, duration: 200 }}">
			delete
		</button>
	{/if}
</div>

<style lang="scss">
		.card {	
			border-radius: 24px;
			@apply relative overflow-hidden;
			&-img {
				@apply w-full object-cover object-center;
			}
			&-label {
				bottom: 1rem;
				left: 1rem;
				font-size: 18px;
				line-height: 22px;
				@apply absolute text-white font-medium pointer-events-none truncate w-5/6;
			}
			&-overlay {
				background: rgba(0,0,0,0.2);
				@apply absolute inset-y-0 inset-x-0;
			}
			&-delete {
				padding: 4px 12px;
				top: 1rem;
				right: 1rem;
				border: 1px solid #EB5757;
				font-size: 12px;
				line-height: 15px;
				color: #EB5757;
				@apply absolute rounded-full font-semibold bg-transparent outline-none;
				&:focus {
					box-shadow: 0 0 0 3px rgba(#EB5757, .5);
				}
			}
		}
</style>