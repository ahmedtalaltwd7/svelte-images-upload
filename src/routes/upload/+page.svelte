


<script>
 import { enhance } from '$app/forms'
    export let form
    export let data
  


</script>
<!-- svelte-ignore missing-declaration -->
<form 
    action="?/add"
    method="post"
    enctype="multipart/form-data" 
    use:enhance
>
<input
      multiple
      type="file"
      name="file"
      id="file"
      accept="image/*" class="file-input file-input-bordered file-input-error w-full max-w-xs"
    />

  
    <button>bbbb</button>
</form>