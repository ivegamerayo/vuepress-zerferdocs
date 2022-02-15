<template>
  <div class="row">
    <div v-for="(tarjeta, index) of tarjetas" :key="index" class="col">
      <a :href="tarjeta.link">
        <div class="card" style="width: 18rem">
          <img
            :src='tarjeta.image'
            class="card-img-top"
            :alt="tarjeta.title"
          />
          <div class="card-body">
            <h5 class="card-title">{{tarjeta.name}}</h5>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tarjetas: [
        {
          image: "https://image.slidesharecdn.com/9580airplanerescue-151019072417-lva1-app6891/95/avin-de-rescate-1-638.jpg?cb=1445239507",
          title: "Avioneta",
          link: "https://cutt.ly/sRS7hs0",
        },
        {
          image: "https://image.slidesharecdn.com/9580goalkeeper-151019072051-lva1-app6891/95/portero-de-ftbol-22-638.jpg?cb=1445239315",
          title: "Portero fútbol",
          link: "https://cutt.ly/mUKgj52",
        },
        {
          image: "https://demo.vdocuments.mx/img/378x509/reader024/reader/2021010414/553d08404a7959da598b4730/r-1.jpg",
          title: "Mono percusionista",
          link: "https://cutt.ly/pUKh8qk",
        },
        
        
      ],
    };
  },
};
</script>
