<template>
  <div>
    <div id="box"></div>
  </div>
</template>

<script>
export default {
  name: "CssPage",
  // setup () {
  //     return {}
  // }
};
</script>

<style scoped>
#box {
  background-color: darkkhaki;
  width: 200px;
  height: 100px;
  border-radius: 20px 2px 50px;
}
#box:hover {
  animation-name: spin;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
}
@keyframes spin {
  from {
    transform: translate(0px, 0px) rotate(0deg);
  }

  to {
    transform: translate(200px, 200px) rotate(3600deg);
  }
}
</style>
