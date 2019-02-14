<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td class="robot-title">
            {{robot.head.title}}
          </td>
          <td class="cost">
            {{robot.cost}}
          </td>
        </tr>
      </tbody>
    </table>

    <h4 class="sales" v-if="sales.length != 0">Sales items in the cart</h4>
    <h4 class="sales" v-else>no sales items in the cart</h4>
    <table v-show="sales.length != 0">
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in sales" :key="index">
          <td class="robot-title">
            {{robot.head.title}}
          </td>
          <td class="cost">
            {{robot.cost}}
          </td>
        </tr>
      </tbody>
    </table>
 </div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    sales() {
      return this.$store.getters.salesItems;
    },
  },
};
</script>

<style scoped>
  td, th {
    padding: 5px;
  }
  .robot-title {
    text-align: left;
    padding-right: 200px;
  }
  .cost {
    text-align: right;
  }
  .sales {
    color: red;
    margin-top: 80px;
  }
</style>
