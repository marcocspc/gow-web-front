<script setup>
    import { ref } from 'vue'
    import { onMounted } from 'vue'
    import { useGeneralStore } from '../stores/generalStore.js'
    import AvailableApps from '../components/AvailableApps.vue'
    import StackStatus from '../components/StackStatus.vue'

    const AVAILABLE_APPS = 0
    const STACK_STATUS = 1

    const generalStore = useGeneralStore();
    const view = AVAILABLE_APPS

</script> 

<template>
<div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto px-0">
            <div id="sidebar" class="collapse collapse-horizontal border-end">
                <div id="sidebar-nav" class="list-group border-0 rounded-0 text-sm-start min-vh-100">
                    <a href="#" v-on:click="view=AVAILABLE_APPS" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><span>Available Apps</span> </a>
                    <a href="#" v-on:click="view=STACK_STATUS" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><span>Stack Status</span> </a>
                    <a href="#" v-on:click="generalStore.logout()" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><span>Logout</span> </a>
                </div>
            </div>
        </div>
        <main class="col ps-md-2 pt-2">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none"><i class="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
            <div class="row">
                <div class="col-12">
                    <!-- Content area... -->
                    <AvailableApps v-if="view==AVAILABLE_APPS" />
                    <StackStatus v-if="view==STACK_STATUS" />
                </div>
            </div>
        </main>
    </div>
</div>
</template>


<style>
#app {
    width: 100%;
}

body {
    padding-top: 0px;
    place-items: baseline;
}

.tbl-container {
  width: 400px;
  margin-top: 10px;
  margin-left: 10px;
}

.bg-red {
  background-color: red;
  color: white;
}

.bdr {
  border-radius: 6px;
  overflow: hidden;
}

</style>

