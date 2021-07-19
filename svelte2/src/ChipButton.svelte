<script>
  let count = 0;
</script>

<button on:click on:click={() => count++}>
  <slot/> ({count})
</button>
