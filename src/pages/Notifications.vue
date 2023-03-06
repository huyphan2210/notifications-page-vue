<script lang="ts" setup>
import { ref } from 'vue';
import { senders } from '../data/senders'
import Activity from '../components/Activity.vue';
const unread = ref(3);
</script>

<template>
    <div class="notifications">
        <div class="header">
            <hgroup>
                <h1>Notifications <span>{{ unread }}</span></h1>
                <span>Mark all as read</span>
            </hgroup>
        </div>
        <div class="activities">
            <Activity class="activity" :sender="sender" v-for="sender in senders"></Activity>
        </div>
    </div>
</template>

<style scoped>
.notifications {
    background-color: white;
    padding: 1rem;
}
    hgroup {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

.activity {
    margin-block-end: 1rem;
    background-color: hsl(205, 33%, 90%);
}

</style>
