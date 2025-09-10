<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { onMount } from 'svelte';

	let connectionStatus = 'Checking connection...';

	onMount(async () => {
		try {
			// Simple test query to check if Supabase is connected
			const { data, error } = await supabase.from('test').select('*').limit(1);
			
			if (error) {
				connectionStatus = `Error connecting to Supabase: ${error.message}`;
				console.error('Supabase connection error:', error);
			} else {
				connectionStatus = 'Successfully connected to Supabase!';
				console.log('Supabase connection successful:', data);
			}
		} catch (err) {
			const errorMessage = err instanceof Error ? err.message : 'Unknown error';
			connectionStatus = `Exception: ${errorMessage}`;
			console.error('Exception:', err);
		}
	});
</script>

<h1>Supabase Connection Test</h1>
<p>{connectionStatus}</p>