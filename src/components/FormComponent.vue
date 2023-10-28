<template>
    <form>
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          v-model="localUser.name"
          :disabled="disabled"
        />
      </div>
  
      <div class="form-group">
        <label for="surname">Surname:</label>
        <input
          type="text"
          id="surname"
          v-model="localUser.surname"
          :disabled="disabled"
        />
      </div>
  
      <div class="form-group">
        <label for="code">Code:</label>
        <input
          type="text"
          id="code"
          v-model="localUser.code"
          :disabled="disabled"
        />
      </div>
    </form>
  </template>
  
  <script>
  export default {
    props: {
      user: Object, 
      disabled: Boolean, 
    },
    data() {
      return {
        localUser: { ...this.user },
      };
    },
  };
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 15px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  </style>
  