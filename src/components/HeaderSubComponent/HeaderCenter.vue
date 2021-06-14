<template>
  <div class="Header-Center d-flex align-items-center">
      <!-- seach inside div -->
    <div class="d-flex">
    <div id="search-input" class="ytd-searchbox-spt">
      <input
        id="search"
        autocapitalize="none"
        autocomplete="off"
        autocorrect="off"
        name="search_query"
        tabindex="0"
        type="text"
        spellcheck="false"
        placeholder="Search"
        aria-label="Search"
        aria-haspopup="false"
        role="combobox"
        aria-autocomplete="list"
        dir="ltr"
        class="ytd-searchbox input-search"
        style="outline: none"
      />
    </div>
    <!-- search Button Div -->
    <div v-bind:title="search" class="container search-button">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search my-1" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>

    </div>
    <!-- Voice Div -->
    <div v-bind:title="Voice" class="container voiceDiv">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-mic-fill voice-image" viewBox="0 0 16 16">
  <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>
  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
</svg>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderCenter",
  data(){
    return{
      search:'Search',
      Voice:'Search with your voice'
    }
  }
};
</script>
<style scoped>
.Header-Center{
  padding-top: 5px;
    width:724px;
    height: 56px;
}
.input-search{
    width: 575px;
    height: 42px;
}
.search-button{
    height: 42px;
    border: 2px solid grey;
    width: 74px;
    margin: 0px;
    cursor: pointer;
    padding-top: 5px;

}
.voiceDiv{
    
    margin-left: 10px;
    padding-left: 0px;
    padding-top: 7px;
    padding-right: 0px;
    width: 50px;
    height: 42px;
    cursor: pointer;
    
}

</style>
