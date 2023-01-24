<Viewer>
    <QueryBox/>
</Viewer>
<script lang="ts">
	import { OpenAPI } from "../client";
	import QueryBox from "../components/QueryBox.svelte";
    import Viewer from "../components/Viewer.svelte"
    OpenAPI.BASE = 'http://localhost:8000';
</script>