<template>
  <div class="home">
    <div class="container">
      <h1>Content Teleporting Database</h1>
      <snippets />
    </div>
  </div>
</template>

<script>
import snippets from "./components/snippets";

export default {
  name: "App",

  components: {
    snippets
  },

  data: () => ({
    title: "Content Teleporting"
  })
};
</script>
