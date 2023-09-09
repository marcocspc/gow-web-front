<script setup>
    import { ref } from 'vue'
    import { useGeneralStore } from '../stores/generalStore.js'

    const generalStore = useGeneralStore();
    const apps = ref(generalStore.apps)
</script> 

<template>
<h1>Available Apps</h1>
<div class="tbl-container bdr"> <!-- <== overflow: hidden applied to parent -->
    <table class="table">
        <thead class="bg-red">
            <tr>
                <th scope="col"><b>Application Name</b></th>
                <th scope="col"><b>Application Status</b></th>
                <th scope="col"><b>Command</b></th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="app in apps">
                <td>{{ app.name }}</td>
                <td>{{ app.state }}</td>
                <td>
                    <button type="button" class="btn btn-outline-primary" v-if="app.state == 'running'">Reset</button>
                    <button type="button" class="btn btn-outline-danger" v-if="app.state == 'running'">Stop</button>
                    <button type="button" class="btn btn-outline-success" v-if="app.state == 'stopped'">Run</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>
