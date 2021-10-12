<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class = "weatherData">
    <p>Your latitude is {{ weatherData.coord.lat }}</p>
    <p>Your longitude is {{ weatherData.coord.lon }}</p>
    <p>The current weather condition is {{ weatherData.weather[0].main }}</p>
    <p>Specifically, it is {{ weatherData.weather[0].description }}</p>
    <p>Current temperature is {{ weatherData.main.temp }} degrees Fahrenheit</p>
    <p>It feels like {{ weatherData.main.feels_like }} degrees Fahrenheit</p>
    <p>Pressure is {{ weatherData.main.pressure }} hPa</p>
    <p>Humidity is {{ weatherData.main.humidity }}%</p>
    <p v-if="weatherData.main.sea_level" >Pressure at sea level is {{ weatherData.main.sea_level }} hPa</p>
    <p v-if="weatherData.main.ground_level">Pressure at ground level is {{ this.weatherData.main.grnd_level }} hPa</p>
    <p>Wind speed is {{ this.weatherData.wind.speed }} mph</p>
    <p>It is coming from {{ this.weatherData.wind.deg }} degrees</p>
    <p v-if="weatherData.wind.gust">It is gusting at {{ this.weatherData.wind.gust }} mph</p>
    <p>Cloud cover is {{ this.weatherData.clouds.all }}%</p>
    <p>This data was gathered {{ this.weatherData.dt }} seconds since January 1, 1970 00:00:00.</p>
    <p>This country's code is {{ this.weatherData.sys.country }}</p>
    <p>Sunrise was {{ this.weatherData.sys.sunrise }} seconds after January 1, 1970 00:00:00</p>
    <p>Sunset will be {{ this.weatherData.sys.sunset }} seconds after January 1, 1970 00:00:00</p>
    <p>Adjust UTC {{ this.weatherData.timezone }} seconds for your timezone</p>
    <p>You are in {{ this.weatherData.name }}</p>
    </div>
    <canvas ref="testcan" width="400" height="400"></canvas>
  </div>
</template>

<script>
import { data } from "./data";

export default {
  name: "HelloWorld",
  data() {
    return {
      canvas: null,
      ctx: null,
      weatherData: null,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    async loadWeather() {
      this.weatherData = await data.getWeather();
      return this.weatherData;
    },
    draw: function () {
      let canvas = this.$data.canvas;
      let ctx = this.$data.ctx;
      let px = Math.floor(canvas.width / 20);
      ctx.fillStyle = "#00afaf";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = px + "px wingdings";
      ctx.fillText("Hello Vue Canvas!", canvas.width / 2, canvas.height / 8);
    },
  },
  async mounted() {
    await this.loadWeather();
    this.$data.canvas = this.$refs["testcan"];
    this.$data.ctx = this.$refs["testcan"].getContext("2d");
    this.draw();
    //Not used: weather.id, weather.icon, base, sys.type, sys.id, sys.message, id, cod, rain.1h, rain.3h, snow.1h, snow.3h, main.sea_level, main.ground_level
  },
  updated() {
    this.draw();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weatherData {
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  margin-left: 25%;
  justify-content: center;


}
p {
  border: 2px solid orange;
  margin: 5px;
  padding: 10px;
  width: 100px;
  height: 130px;
}
canvas {
  border: 1px solid black;
  width:400px;
  height: 400px;
}
</style>
