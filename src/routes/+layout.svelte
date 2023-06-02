<script>
	import './styles.css';
	import Header from '$lib/components/Header.svelte'

	export let data;
</script>

{#if data.shouldRenderHeader}
<Header/>
{/if}

<slot/>
