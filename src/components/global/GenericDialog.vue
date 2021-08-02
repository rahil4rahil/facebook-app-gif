<template>
  <div>
    <b-modal ref="genericModal" hide-footer centered >
      <template #modal-title class="text-center">
        <span v-if="componentData.displayBackButton">
          <button class="close" @click="loadPreviousComponent">
            <i class="fas fa-arrow-left"></i>     
          </button>
        </span>
        <span class="mx-auto">
          {{componentData.title}}
        </span>
      </template>
      <template #modal-header-close>
        <i class="fas fa-times"></i>
      </template>
      <div class="custom-modal-body" style="overflow-y: auto">
        <transition name="slide">
          <keep-alive>
            <component :is="componentData.componentName"></component>
          </keep-alive>
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
      componentStack: [],
      componentData: {
        componentName:"",
        title: "Generic Dialog",
        displayBackButton: false
      }
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
      this.componentData.title = data.title
      this.componentData.componentName = data.componentName
      this.$refs.genericModal.show('genericModal')
    },
    closeGenericDialog() {
      console.log("Dialog Closed: ")
      this.$refs.genericModal.hide('bv-modal-example')
    },
    switchComponent(data) {
      console.log(`Dialog Switch Component from ${ this.componentData.componentName } --> ${ data.componentName }`)
      this.componentStack.push(Object.assign({}, this.componentData))
      this.componentData.title = data.title
      this.componentData.componentName = data.componentName
      this.componentData.displayBackButton = data.displayBackButton
    },
    loadPreviousComponent() {
      this.componentData = this.componentStack.pop()
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

.modal-title {
    display: flex;
    width: 100%;
}

.modal-content {
  border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.5) 0px 0px 0px 1px inset;
}
.modal-header {
  padding: 10px 15px;
}
.modal-componentData.title {
  margin: 0 auto;
  font-weight: 700;
  font-size: 20px;
  width: 100%;
  display: flex;
}

.slide-leave-active,
.slide-enter-active {
  transition: .3s;
}

.slide-leave-to {
  transform: translate(-100%, 0);
}

.modal-body {
  padding: 0;
}


</style>