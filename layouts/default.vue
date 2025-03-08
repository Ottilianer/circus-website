<template>
  <div class="flex-wrapper">
    <div>
      <LayoutNavbar />
      <hr />
    </div>
    <div>
      <slot></slot>
    </div>
    <div>
      <hr />
      <LayoutFooter />
    </div>
  </div>
</template>

<style scoped>
.flex-wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}
</style>
