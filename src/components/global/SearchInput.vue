<template>
  <input
    v-model="inputVal"
    type="text"
    :placeholder="placeholer"
    class="custom-input my-auto"
    :class="fullWidth ? 'w-100' : ''"
    @input="changeHandler"
  />
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    placeholer: {
      default: "Search",
      type: String,
    },
    type: {
      default: "text",
      type: String,
    },
    fullWidth: {
      default: false,
      type: Boolean
    },
    changeHandler: {
      default: function () { console.log("Fetch") },
      type: Function
    }
  },
  data: () => {
    return {
      inputVal: undefined,
    };
  },
};
</script>
 
 <style>
.custom-input {
  border: none;
  outline: none;
  border-radius: 60px;
  background: rgb(240, 242, 245);
  padding: 8px 15px;
  font-size: 14px; 
  width: 70%;
}
</style>