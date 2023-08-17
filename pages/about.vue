<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aperiam minima unde nemo harum quam maxime optio quos corrupti. Eum sapiente facere nemo, laborum ullam non cum fuga quas eveniet harum molestiae minus atque vel ratione illo quia, iure commodi dicta porro excepturi quam. Facere, commodi corrupti ipsam neque totam reprehenderit laboriosam laborum veniam est quo, repellat saepe impedit labore?</p>
    <!-- <p>api response:</p> -->
  
    <!-- <div class="container">
      <pre id="jsonOutput">{{ JSON.stringify(data,null,2) }}</pre>
    </div> -->
  </div>
</template>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }

  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    }
    pre {
      white-space: pre-wrap;
    }
</style>

<script setup>
  // const { data } = await useFetch('/api/ninja?name=mario')
  // const { data } = await useFetch('/api/ninja?name=mario', {
  //   method: 'post',
  //   body: {age: 30}
  // })

  // const { data } = await useFetch('/api/ninja')

  // const { data } =await useFetch('/api/notion/pages');

</script>