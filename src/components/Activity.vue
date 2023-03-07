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
                    <span>{{ sender.senderName }}</span> 
                    {{ sender.action }} 
                    <span :style="sender.objectColor ? `color: ${sender.objectColor};` : ''">{{ sender.objectName }}</span>
                    <span class="unread" v-if="!sender.isRead"></span>
                </p>
                <p>{{ sender.time }}</p>
                <div v-if="sender.message" class="message">{{ sender.message }}</div>
            </div>
        </div>
        <img loading="lazy" v-if="sender.objectImgURL" class="objectImg" src="../assets/images/image-chess.webp" alt="Your Object">
    </div>
</template>

<style scoped>
.activity {
    width: calc(100% -2rem);
    padding: 1rem;
    display: flex;
    justify-content: space-between;
}
    .sender {
        display: flex;

    }
        .sender img {
            width: 3rem;
            height: 3rem;
            margin-right: 1rem;
        }
        .sender .senderAction p {
            margin-block-start: 0;
            margin-block-end: 0.5rem;
            color: hsl(219, 14%, 63%);
            font-weight: 500;
        }
            .sender .senderAction p:last-child {
                margin-block-end: 0;
            }
            .sender .senderAction p span:first-child {
                font-weight: 800;
                color: hsl(224, 21%, 14%);
            }

            .sender .senderAction p span:nth-child(2) {
                font-weight: 800;
                color: hsl(219, 14%, 63%);
            }
                .sender .senderAction p span:first-child:hover, .sender .senderAction p span:nth-child(2):hover {
                    cursor: pointer;
                    color: hsl(219, 85%, 26%);
                }
            .sender .senderAction p span:nth-child(3) {
                display: inline-block;
                background-color: hsl(1, 90%, 64%);
                transform: translate(50%, -25%);
                width: 0.5rem;
                aspect-ratio: 1;
                border-radius: 50%;
            }
        .sender .senderAction .message {
            padding: 1rem;
            color: hsl(219, 14%, 63%);
            font-weight: 500;
            background-color: white;
            border-style: solid;
            border-radius: 0.5rem;
            border-color: hsl(219, 14%, 63%);
            border-width: thin;
        }
            .sender .senderAction .message:hover {
                background-color: hsl(205, 33%, 90%);
                color: hsl(219, 12%, 42%);
            }
    .objectImg {
        width: 3rem;
        height: 3rem;
    }
</style>
