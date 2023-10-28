<template>
    <div class="about-me">
      <h1>ABOUT ME</h1>
      <h3>Name: {{ user.name }}</h3>
      <h3>Surname: {{ user.surname }}</h3>
      <h3>Code: {{ user.code }}</h3>

      <button @click="toggleEditMode" :class="{ active: editMode }">
      {{ editMode ? 'CANCEL' : 'EDIT FORM' }}
    </button>

      <FormComponent :disabled="!editMode" :user="userData" />
<button v-if="editMode" @click="saveChanges" class="save-button">SAVE</button>
    </div>
  </template>
  
  <script>
  import FormComponent from './FormComponent.vue';
  export default {
    props: ['user'],
    data() {
    return {
      userData: { ...this.user }, 
      editMode: false, 
    };
  },
  components: {
    FormComponent,
  },
  methods: {
    toggleEditMode() {
      this.editMode = !this.editMode;
    },
    saveChanges() {
      
      user.name = localUser.name;
      user.surname = localUser.surname;
      user.code = localUser.code;
      this.editMode = false; 
    },
  }
  };
  
  </script>
  
  <style scoped>
  .about-me {
  position: absolute;
  top: 90px;
  left: 400px;
  color: white; 
}
h1 {
  font-weight: bold;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
.save-button {
  background-color: green;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
}
  </style>
  