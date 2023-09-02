<script setup>
    import { ref } from 'vue'
    import { useGeneralStore } from '../stores/generalStore.js'

    const generalStore = useGeneralStore();
    const apps = ref(generalStore.apps)
</script> 

<template>
<div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto px-0">
            <div id="sidebar" class="collapse collapse-horizontal show border-end">
                <div id="sidebar-nav" class="list-group border-0 rounded-0 text-sm-start min-vh-100">
                    <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><span>Available Apps</span> </a>
                    <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><span>Stack Status</span> </a>
                </div>
            </div>
        </div>
        <main class="col ps-md-2 pt-2">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none"><i class="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
            <div class="row">
                <div class="col-12">
                    <!-- Content area... -->
                    <h1>Available Apps</h1>
                    <div class="tbl-container bdr"> <!-- <== overflow: hidden applied to parent -->
                        <table class="table">
                            <thead class="bg-red">
                                <tr>
                                    <th scope="col">Application Name</th>
                                    <th scope="col">Application Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="app in apps">
                                    <td>{{ app.name }}</td>
                                    <td>{{ app.state }}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
</template>


<style>
#app {
    margin: auto;
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

