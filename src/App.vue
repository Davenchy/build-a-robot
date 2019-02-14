<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link :to="{name: 'Home'}" class="nav-link" exact>
              <img src="./assets/build-a-bot-logo.png" alt="logo" class="logo">
              Build a bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Builder'}" class="nav-link" exact>
              Builder
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Browse'}" class="nav-link" exact>
              Browse Parts
            </router-link>
          </li>
          <li class="nav-item cart">
            <router-link :to="{name: 'Cart'}" class="nav-link" exact>
              Cart
            </router-link>
            <div class="cart-items">{{ cart }}</div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"/>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    cart() {
      return this.$store.state.cart.length;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  margin:10px auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 30px;
  background-color: #aaa;
  width: 10em;
  min-height: 300px;
}
</style>


<style>
* { box-sizing: border-box; }
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 100%;
  overflow: hidden;
}
main {
  padding: 30px;
  background-color: white;
  width: 100%;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 100%;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.nav-item.cart {
  position: relative;
  margin-left: auto;
  padding-right: 30px;
  border: none;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: white;
}
.cart-items {
  position: absolute;
  top: 0;
  right: 5px;
  font-size: 10px;
  padding: 5px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}
</style>
