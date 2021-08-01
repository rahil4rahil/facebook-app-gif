<template>
  <button class="custom-input-button my-auto text-start" @click="clickHandle">{{ placeholder }}</button>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    placeholder: {
      default: "Search",
      type: String,
    },
    clickHandle: {
      default: () => console.log("SearchInputButton Clicked!"),
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
.custom-input-button {
  border: none;
  outline: none;
  border-radius: 60px;
  background: rgb(240, 242, 245, .5);
  padding: 8px 20px;
  font-size: 14px; 
  width: 95%;
  color: rgb(101, 103, 107);
  margin-right: 15px;
  margin-left: 15px;
}

.custom-input-button:hover{
  background: rgb(240, 242, 245, 1);
}
</style>