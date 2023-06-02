<script>
	import api from '$lib/services/api.js'
	import { onMount } from 'svelte'
	
	let content;
	
	onMount(async () => {
		const response = await api.get('/api/completion');
		content = response.data;
	})
	
	</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>{content}</h1>