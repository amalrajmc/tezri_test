<template>
  <div>
  <div class="columns is-centered " >
    <div class="column is-3 " style="padding-top:5em;">

          <div class="">
            <div class="columns">
              <div class="column">
          <p class="control" style="text-align:center;">
          Columns
          </p>
        </div>
        <div class="column">
          <p class="control is-expanded">
          <input class="input is-small" type="number" v-model="column" placeholder="Enter no of columns">
          </p>
          </div>
          </div>
          </div>

          <div class="">
            <div class="columns">
              <div class="column">
          <p class="control" style="text-align:center;">
          Rows
          </p>
        </div>
          <div class="column">
          <p class="control is-expanded">
          <input class="input is-small" type="number" v-model="row" placeholder="Enter no of rows">
          </p>
          </div>
          </div>
          </div>

          <div class="columns">
          <div class="column">
          <p class="control" style="text-align:center;">
          Color
          </p>
        </div>
        <div class="column">
          <p class="control is-expanded">
          <input class="input is-small" type="text" v-model="color" placeholder="Enter color of dots">
          </p>
          </div>
          </div>

          <div class="columns">
          <div class="column">
          <p class="control" style="text-align:center;">
          Box width
          </p>
        </div>
        <div class="column">
          <p class="control is-expanded">
          <input type="range" min="25" max="100" value="rangevalue" v-model="rangevalue" class="slider" >
          </p>
          </div>
          </div>

          <div class="columns">
          <div class="column">
          <p class="control" style="text-align:center;">
          Dot width
          </p>
        </div>
        <div class="column">
          <p class="control is-expanded">
            <input type="range" min="25" max="100" value="rangevalue2" v-model="rangevalue2" class="slider" >
  </p>
          </div>
          </div>
</div>

    <div class="column is-9 has-text-centered">
      <div class="tabs is-centered is-boxed is-medium">
  <ul>
    <li  v-bind:class="{ 'is-active': tabsel == '1' }" @click="tabsel = '1'">
      <a>
        <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
        <span >Grid</span>
      </a>
    </li>
    <li v-bind:class="{ 'is-active': tabsel == '2' }" @click="tabsel = '2'">
      <a >
        <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
        <span  >Checker</span>
      </a>
    </li>
    <li v-bind:class="{ 'is-active': tabsel == '3' }" @click="tabsel = '3'">
      <a>
        <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
        <span @click="tabsel=1">Odd</span>
      </a>
    </li>
  </ul>
</div>

<div class=" tabcontent " style="position:relative;height:auto;">
        <div  v-show="tabsel == '1'">

    <div class="grid-container"  :style="{width:width,gridTemplateColumns:gtc,gridTemplateRows:gtc2}"  >
    <div v-for="i in cell" :key="i" >
    <div class="xxx" :style="{width:swidth,paddingTop:spadding,background:color}"></div>
  </div>
  </div>
  </div>
        <div  v-show="tabsel == '2'">

    <div class="grid-container"  :style="{width:width,gridTemplateColumns:gtc,gridTemplateRows:gtc2}"  >
    <div v-for="i in cell" :key="i">
      <div class="xxx"  :style="{width:swidth,paddingTop:spadding,background:color}" :class="{ 'dotwhite': i%2==0 }">
    </div>
    </div>
  </div>
  </div>
        <div  v-show="tabsel == '3'">

          <div class="grid-containerx has-text-centered"  :style="{width:width,gridTemplateColumns:gtc,gridTemplateRows:gtc2}"  >
        <center>  <img src="@/assets/download.png"></center>
                  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      width: '30%',
      tabsel: 1,
      swidth: '100%',
      spadding: '100%',
      rangevalue: 0,
      rangevalue2: 100,
      column: 7,
      row: 8,
      cell: 56,
      gtc: 'repeat(7,auto)',
      gtc2: 'repeat(8,auto)',
      color: 'black'
    }
  },
  watch: {
    rangevalue: function () {
      this.width = this.rangevalue + '%'
    },
    rangevalue2: function () {
      this.swidth = this.rangevalue2 + '%'
      this.spadding = this.rangevalue2 + '%'
      this.gtc2 = `repeat(${this.row},auto)`
    },
    column: function () {
      this.gtc = `repeat(${this.column},auto)`
      this.gtc2 = `repeat(${this.row},auto)`
      this.cell = this.row * this.column
    },
    row: function () {
      this.gtc = `repeat(${this.column},auto)`
      this.gtc2 = `repeat(${this.row},auto)`
      this.cell = this.row * this.column
    }
  },
  computed: {
  },
  methods: {
    abc () {
      alert(9)
    }
  }
}
</script>
<style>
.dotwhite{background: white!important;}
.dotwhite{background: white!important;}
.tabs.is-boxed li.is-active a {
    background-color: #f2f3f5!important;}

.grid-container {
  margin:auto;
  display: grid;
  grid-template-columns: repeat(7,auto);
  grid-template-rows: repeat(8,auto);
  grid-gap: 10px;
  background-color: #ff4808;
  padding:10px;
  box-shadow: 0 1px 10px 0 rgba(32,33,36,0.28);
  border-radius: 1em;
    }
.grid-containerx {
  margin:auto;
  display: grid;
  grid-template-columns: repeat(7,auto);
  grid-template-rows: repeat(8,auto);
  grid-gap: 10px;
  background-color: white;
  padding:10px;
  box-shadow: 0 1px 10px 0 rgba(32,33,36,0.28);
  border-radius: 1em;
    }
.odd {

  background-color: blue!important;

    }

.xxx {
  background-color: black;
  text-align: center;
  width:100%;
  padding-top: 100%;
  border-radius: 50%;
  margin:auto;
}
.grid-container3 > div {
  background-color: black;
  text-align: center;
  width:100%;
  padding-top: 100%;
  border-radius: 50%;
  margin:auto;
}
</style>
