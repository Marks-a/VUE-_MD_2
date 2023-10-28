<template>
  <div v-if="loggedIn" class="navigation-body">
  <div class="navigation-body">
    <div class="navigation">
      <button
        v-if="loggedIn"
        :class="{ active: activeTab === 'home' }"
        @click="selectTab('home')"
        class="navigation-button"
      >
        HOME
      </button>
      <!-- <router-link to="/home" class="nav-link" active-class="active-link">Hom2e</router-link>
      <router-link to="/about-me" class="nav-link" active-class="active-link">About 2Me</router-link> -->
      <button
        v-if="loggedIn"
        :class="{ active: activeTab === 'about' }"
        @click="selectTab('about')"
        class="navigation-button"
      >
        ABOUT ME
      </button>
    </div>
  </div>
  </div>
  </template>
  
  <script>
  export default {
    props: ['activeTab', 'loggedIn'],
    methods: {
      selectTab(tab) {
        if (this.loggedIn) {
          this.$emit('tab-selected', tab);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    
  }
  .navigation-button {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWx..."); /* Replace with your base64 SVG data */
    background-size: cover; /* Adjust as needed */
    background-repeat: no-repeat;
    width: 310px;
    height: 42px;
    color: white; /* Text color */
    text-align: center;
    line-height: 42px; /* Vertical alignment for text */
    cursor: pointer;
    border: none;
    width: 310px;
height: 42px;
flex-shrink: 0;
}
.navigation-button.active {
  background-color: purple;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}
  
  button {
    v-if: loggedIn;
    background: none;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 16px;
  }
  
  button.active {
    font-weight: bold;
  }
  .navigation-body {
    border-right: 1px solid #544F69;
    width: 350px;
height: 982px;
flex-shrink: 0;
background: #22202B;
  }
  </style>
  