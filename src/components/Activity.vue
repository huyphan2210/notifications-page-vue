<script lang="ts" setup>
import { PropType } from 'vue';
import { Sender } from '../interfaces/Sender'

const props = defineProps({
    sender: { type: Object as PropType<Sender>, required: true }
})
</script>

<template>
    <div class="activity">
        <div class="sender">
            <img loading="lazy" :src="sender.avatarURL" :alt="sender.senderName">
            <div class="senderAction">
                <p>
                    <span>{{ sender.senderName }}</span> {{ sender.action }} <span>{{ sender.objectName }}</span>
                    <span class="unread" v-if="sender.isRead"></span>
                </p>
                <p>{{ sender.time }}</p>
            </div>
        </div>
        <div v-if="sender.message" class="message">{{ sender.message }}</div>
        <img loading="lazy" v-if="sender.objectImgURL" class="objectImg" :src="sender.objectImgURL" alt="Your Object">
    </div>
</template>

<style scoped>
.activity {
    width: calc(100% -2rem);
    padding: 1rem;
}
    .sender {
        display: flex;
    }
</style>
