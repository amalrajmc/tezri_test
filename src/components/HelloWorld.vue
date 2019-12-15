<template>
  <div class="columns is-centered is-8 is-vcentered">
  <div class="column is-8" style="margin-top:10em;">
      <div class="columns is-centered is-vcentered ">
    <div class="column is-2">
        <h1 class="has-text-right is-size-4" style="text-shadow: 2px 2px 8px rgba(32,33,36,0.28);">25</h1>
    </div>
    <div class="column is-8">

      <div style="position:relative;">
      <input type="range" min="25" max="120" value="rangevalue" v-model="rangevalue" class="slider" id="myRange"
      style="position:absolute;left:0;right:0;opacity:1;z-index:2;top:0;opacity:0;">
      <div style="position:relative;left:0;right:0;top:0;height:10px;background:black;">
    <div ref="left" style="width:100%;background:#1967d2;height:10px;position:absolute;left:0;box-shadow: 0 1px 10px 0 rgba(32,33,36,0.28);" v-bind:style="{ width: rangevaluecalc + '%' }"></div>
   <div ref="center" style="text-align:center;vertical-align:middle;z-index:1;width:50px;height:50px;box-shadow: 0 1px 10px 0 rgba(32,33,36,0.28);background:#f2f3f5;border:solid thick #1967d2;border-radius:.5em;position:absolute; transform:translate(-50%,-20px);" v-bind:style="{ left: rangevaluecalc + '%' }">
     <h1 class="has-text-centered is-size-4" style="text-shadow: 2px 2px 8px rgba(32,33,36,0.28);">{{rangevalue}}</h1></div>
      </div>
    </div>
    </div>
    <div class="column is-2">
      <h1 class="has-text-left is-size-4" style="text-shadow: 2px 2px 8px rgba(32,33,36,0.28);">120</h1>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      rangevalue: 50
    }
  },
  props: {
    msg: String
  },
  computed: {
    rangevaluecalc: function () {
      return ((this.rangevalue - 25) * 100) / (95)
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 1px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 30px;
  height: 30px;
  background: red;
  cursor: pointer;
  position:relative;
}
</style>
