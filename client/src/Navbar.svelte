<script>
	import { searchTerm, isModalShow, modalContent } from "./stores";
	import Button from "./components/Button.svelte";
	import { AddNewPhoto } from "./components/Modal";

	let query = "";

	const handleSubmit = () => {
		searchTerm.set(query);
	};

	function showModalAdd() {
		modalContent.set(AddNewPhoto);
		isModalShow.set(true);
	}
</script>

<style lang="scss">
	.navbar {
		@apply flex items-center flex-col py-8 mb-0;
		@screen md {
			@apply flex-row mb-8;
		}
		&-form {
			@apply w-full flex pt-8;
			@screen md {
				@apply pt-0;
			}
		}
		&-search {
			width: 100%;
			color: #bdbdbd;
			@apply relative ml-0 mr-3;
			@screen md {
				width: 300px;
				@apply ml-5 mr-0;
			}
			&-icon {
				user-select: none;
				top: 10px;
				left: 16px;
				@apply absolute;
				@screen md {
					top: 16px;
				}
			}
			&-input {
				height: auto;
				padding: 10px 20px 10px 50px;
				font-size: 14px;
				line-height: 19px;
				border-radius: 24px;
				border: 1px solid #bdbdbd;
				@apply font-medium outline-none transition-shadow duration-150 w-full;
				&:focus {
					@apply shadow-outline border-blue-500;
				}
				@screen md {
					height: 55px;
					padding: 18px 16px 18px 50px;
				}
			}
		}
		&-button {
			@apply ml-auto;
		}
	}
</style>

<div class="navbar">
	<a href="."> <img src="/my_unsplash_logo.svg" alt="My Unsplash Logo" /> </a>
	<div class="navbar-form">
		<form class="navbar-search" on:submit|preventDefault={handleSubmit}>
			<i class="navbar-search-icon material-icons">search</i>
			<input
				class="navbar-search-input"
				type="text"
				bind:value={query}
				placeholder="Search by name" />
		</form>
		<div class="navbar-button">
			<Button on:click={showModalAdd}>Add a photo</Button>
		</div>
	</div>
</div>
