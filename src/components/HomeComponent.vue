<template>
  <div class="home" :style="homeStyle">
    <h1>Home</h1>
    <div class="music-list">
      <div class="table-header">
    <table>
      <thead>
        
        <tr>
          <h2>Sort by:</h2>
          <th class="sort-control" :class="{ 'selected': selectedSortOption === 'None' }" @click="sortData('None')">None</th>
          <th class="sort-control" :class="{ 'selected': selectedSortOption === 'name' }" @click="sortData('name')">Name</th>
          <th class="sort-control" :class="{ 'selected': selectedSortOption === 'artist' }" @click="sortData('artist')">Artist</th>
        </tr>
      </thead>
      </table>
    </div>
    <table>
      <tr>
              <tbody colspan="2">Name</tbody>
              <td colspan="2">Artist</td>
            </tr>
      <tbody>
        
        <tr v-for="(item, index) in sortedData" :key="index">
          <td>{{ item.song }}</td>
          <td>{{ item.artist }}</td>
        </tr>
   
      </tbody>
    </table>
  </div>
  </div>
</template>
<script>
import songsexample from './songsexample.json';
  export default {
  data() {
    return {
      jsonData: songsexample,
      sortType: 'None',
      selectedSortOption: 'None',
    };
  },
  computed: {
    sortedData() {
      if (this.sortType === 'None') {
        return this.jsonData;
      } else {
        return [...this.jsonData].sort((a, b) => {
          if (this.sortType === 'name') {
            return a.song.localeCompare(b.song);
          } else if (this.sortType === 'artist') {
            return a.artist.localeCompare(b.artist);
          }
        });
      }
    },
  },
  homeStyle() {
      return {
        width: '310px',
        height: '42px',
        flexShrink: 0,
        backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWx...")', 
        backgroundSize: 'cover', 
      };
    },
  methods: {
    sortData(type) {
      this.sortType = type;
      this.selectedSortOption = type;
    },
  },
};

</script>
<style scoped>
.home {
  position: absolute;
  text-align: left;
  margin-top: 10px;
  top: 90px;
  left: 400px;
}
.music-list {
  margin: 20px;
  
}

table {
  width: 100%;
  margin:40px;
  border-collapse: collapse;
  text-align: center;
  
}
.table-header{
  width: 300px;
  text-align: center;
  margin-left: 20%;
  
}
table td{
  border: 1px;
  padding: 8px;
  min-width: 200px; /* Adjust the minimum width as needed */
  text-align: left;
  
}
/* Filter */
table th {
  cursor:pointer;
  padding: 12px;
  text-align: right;
  position: relative;
  margin-right: 40px;
  
}
table th {
  row-gap: 20px;
  cursor: pointer;
  
}

table th.selected {
  color: #FB0048; 
  font-size: 14px; 
  font-weight: 900;

}

</style>
