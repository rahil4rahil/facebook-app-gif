<template>
  <div>
    <b-modal ref="genericModal" hide-footer centered >
      <template #modal-title class="text-center">{{title}}
      </template>
      <template #modal-header-close>
        <i class="fas fa-times"></i>
      </template>
      <div style="overflow-x: hidden">
        <transition name="slide">
          <component :is="componentName"></component>
        </transition>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "GenericDialog",
  components: {
    CreatePostDialogContent: () => import('@/components/posts/CreatePostDialogContent.vue'),
    GIFComponent: () => import('@/components/posts/GIFComponent.vue'),

  },
  data() {
    return {
      componentName:"",
      title: "Generic Dialog"
    }
  },
  mounted() {
    this.$globalEventBus.$on("openGenericDialog", this.openGenericDialog)
    this.$globalEventBus.$on("closeGenericDialog", this.closeGenericDialog)
    this.$globalEventBus.$on("switchComponent", this.switchComponent)
  },  
  methods: {
    openGenericDialog(data) {
      console.log("Dialog Opened: ", data)
      this.title = data.title
      this.componentName = data.componentName
      this.$refs.genericModal.show('genericModal')
    },
    closeGenericDialog() {
      console.log("Dialog Closed: ")
      this.$refs.genericModal.hide('bv-modal-example')
    },
    switchComponent(data) {
      console.log(`Dialog Switch Component from ${this.componentName} --> ${data.componentName}`)
      this.title = data.title
      this.componentName = data.componentName
    }
  },
  
}
</script>

<style >
button.close {
  border: none;
  border-radius: 50%;
  color: rgb(28, 30, 33);
  height: 30px;
  font-size: 15px;
  padding: 6px 10px;
  background: rgba(228, 230, 235);
  opacity: .7;
}

button.close i {
  color: rgb(28, 30, 33);
  font-size: 18px;

}

button.close:hover {
  opacity: 1;
}

.modal, .modal-backdrop {
  background: rgba(255,255,255, .5);
}

.modal-content {
  border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.5) 0px 0px 0px 1px inset;

}
.modal-header {
  padding: 10px 15px;
}
.modal-title {
  margin: 0 auto;
  font-weight: 700;
  font-size: 20px;
}

.slide-leave-active,
.slide-enter-active {
  transition: .3s;
}

.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>