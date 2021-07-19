<script>
  import Chip from './Chip.svelte';
  import ChipItem from './ChipItem.svelte';
  let value = 1;
</script>

<h3>Book an appointment <small>({value})</small></h3>

<Chip bind:value>
  <b>Morning</b>
  <ChipItem>10:00</ChipItem>
  <ChipItem>11:00</ChipItem>
  <br/>
  <b>Afternoon</b>
  <ChipItem>13:00</ChipItem>
  <ChipItem>15:00</ChipItem>
  <ChipItem>17:00</ChipItem>
</Chip>
