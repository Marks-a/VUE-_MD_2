<template>
  
  <div class="app">
    
    <HeaderComponent :loggedIn="loggedIn" @user-logged-in="userLoggedIn" @user-logged-out="userLoggedOut" :user="submittedUser" />
    <div class="content">
      <NavigationComponent :activeTab="activeTab" @tab-selected="tabSelected" :loggedIn="loggedIn" />
      
      <div class="main-content">
        <div v-if="loggedIn">
          <div class="content-container">
          <HomeComponent v-if="activeTab === 'home'" />
          <AboutMeComponent v-if="activeTab === 'about'" :user="submittedUser" />
        </div>
        </div>
        <LoginForm v-if="showLogin" @login-success="onLoginSuccess" />
        
      </div>
    </div>
  </div>
</template>


<script>
import HeaderComponent from './components/HeaderComponent.vue';
import NavigationComponent from './components/NavigationComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import AboutMeComponent from './components/AboutMeComponent.vue';
import LoginForm from './components/LoginForm.vue'; 

export default {
  components: {
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    AboutMeComponent,
    LoginForm,
  },
  data() {
    return {
      activeTab: 'home',
      loggedIn: false,
      showLogin: false,
      user: {
        name: 'Your Name',
        surname: 'Your Surname',
        code: 'Your ViA code',
      },
      submittedUser: null,
    };
  },
  methods: {
    tabSelected(tab) {
      this.activeTab = tab;
    },
    userLoggedIn() {
      this.showLogin = true;
    },
    userLoggedOut() {
      this.loggedIn = false;
      this.showLogin = false;
      this.submittedUser = null;
    },
    onLoginSuccess(submittedUser) {
      this.loggedIn = true;
      this.showLogin = false;
      this.submittedUser = submittedUser;
    },
  },
};
</script>



<style scoped>
.app {
  background-color: rgb(8, 2, 15);
  flex-direction: column;
  align-items: center;
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
 
}
.not-logged-in-background {
  background-image: url('../src/assets/Image.png');
  background-size: cover;
  
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.content-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px; 
  
    
  }

.main-content {
  margin-top: 100px;
  margin-left: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
}
</style>