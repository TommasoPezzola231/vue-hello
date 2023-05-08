const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      img: ``
    }
  }
}).mount('#app')