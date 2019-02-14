<template>
  <!--
    Right: &#9658;
    Left: &#9668;
    Up: &#9650;
    Down: &#9660;
  -->
  <!-- <div class="top part">
    <div class="robot-name">
      {{ robot.head.title }}
      <span class="sales" v-show="robot.head.onSale">Sales!</span>
    </div>
  </div> -->
  <div class="content">
    <div class="preview" v-if="robot.showPreview">
    <CollapsableSection title="Preview">
      <div class="preview-content">
        <div class="top-row">
          <img :src="robot.head.src"/>
        </div>
        <div class="middle-row">
          <img :src="robot.leftArm.src" class="rotate-left"/>
          <img :src="robot.torso.src"/>
          <img :src="robot.rightArm.src" class="rotate-right"/>
        </div>
        <div class="bottom-row">
          <img :src="robot.base.src"/>
        </div>
      </div>
      <button class="add-to-cart" @click="addToCart()">Add to cart</button>
    </CollapsableSection>
    </div>
    <div class="top-row">
      <PartSelector name="head" part="heads" position="top" @update="partUpdated" />
    </div>
    <div class="middle-row">
      <PartSelector name="leftArm" part="arms" position="left" @update="partUpdated" />
      <PartSelector name="torso" part="torsos" position="center" @update="partUpdated" />
      <PartSelector name="rightArm" part="arms" position="right" @update="partUpdated" />
    </div>
    <div class="bottom-row">
      <PartSelector name="base" part="bases" position="bottom" @update="partUpdated" />
    </div>
    <div class="cart">
        <h1>Cart:</h1>
        <table>
          <thead>
            <tr>
              <th>Robot</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(bot, key) in cart" :key="key">
              <td>{{ bot.head.title }}</td>
              <td class="cart-cost">{{ bot.cost }}</td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import PartSelector from '@/build/PartSelector.vue';
import CollapsableSection from '@/shared/CollapsableSection.vue';

export default {
  name: 'RobotBuilder',
  components: { PartSelector, CollapsableSection },
  data() {
    return {
      saved: true,
      cart: [],
      robot: {
        showPreview: false,
        head: null,
        leftArm: null,
        rightArm: null,
        base: null,
        torso: null,
      },
    };
  },
  methods: {
    addToCart() {
      const { robot } = this;
      const cost = robot.head.cost
        + robot.leftArm.cost
        + robot.rightArm.cost
        + robot.base.cost
        + robot.torso.cost;
      this.cart.push(Object.assign({}, robot, { cost }));
      this.saved = true;
    },
    partUpdated(name, part) {
      this.robot[name] = part;
      this.saved = false;
    },
  },
  mounted() {
    this.robot.showPreview = true;
    this.saved = true;
  },
  beforeRouteLeave (to, from, next) {
    if (this.saved) {
      next(true);
    } else {
      const res = confirm('Unsaved work, want to leave?');
      next(res);
    }
  }
};
</script>

<style lang="scss" scoped>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
  img {
    width:165px;
  }
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
  img {
    transform: scaleX(-1) rotate(90deg);
  }
}
.right {
  border-left: none;
  img {
    transform: rotate(90deg);
  }
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
.robot-name {
  position: absolute;
  text-align: center;
  font-size: 20px;
  top: -30px;
  width: 200%;
  left: -50%;
}
.sales {
  color: red;
  font-weight: bold;
}
.content {
  position: relative;
}
.add-to-cart {
  right: 20px;
  width: 100%;
  padding: 3px;
  font-size: 16px;
}
td, th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}
.cart-cost {
  text-align: right;
}
</style>
