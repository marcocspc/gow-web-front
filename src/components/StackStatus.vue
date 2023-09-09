<script setup>
    import { ref } from 'vue'
    import { useGeneralStore } from '../stores/generalStore.js'

    const generalStore = useGeneralStore();
    const stack = ref(generalStore.stack)
</script> 

<template>
<h1>Stack Status</h1>
<div class="tbl-container bdr"> <!-- <== overflow: hidden applied to parent -->
    <table class="table">
        <thead class="bg-red">
            <tr>
                <th scope="col"><b>Stack App Name</b></th>
                <th scope="col"><b>Stack App Status</b></th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="app in stack">
                <td>{{ app.name }}</td>
                <td>{{ app.state }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>
