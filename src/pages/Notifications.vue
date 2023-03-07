<script lang="ts" setup>
import { ref } from 'vue';
import { senders } from '../data/senders'
import { Sender } from '../interfaces/Sender';
import Activity from '../components/Activity.vue';

const people = ref([...senders])

const unread = ref(people.value.filter(sender => !sender.isRead).length);

const markRead = (sender: Sender) => {
    sender.isRead = true;
    unread.value = people.value.filter(sender => !sender.isRead).length;
}

const markAllRead = () => {
    people.value.forEach(person => {
        person.isRead = true;
    })
    unread.value = 0;
}

</script>

<template>
    <div class="notifications">
        <div class="header">
            <hgroup>
                <h1>Notifications <span v-if="unread > 0">{{ unread }}</span></h1>
                <span @click="markAllRead">Mark all as read</span>
            </hgroup>
        </div>
        <div class="activities">
            <Activity @click="markRead(sender)" :style="!sender.isRead ? `background-color: hsl(210, 60%, 98%);` : ''" class="activity" :sender="sender" v-for="sender in people"></Activity>
        </div>
    </div>
</template>

<style scoped>
.notifications {
    background-color: white;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
}
    hgroup {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

        hgroup h1 {
            color: hsl(224, 21%, 14%);
        }
            hgroup h1 span {
                display: inline-block;
                font-size: 1.5rem;
                padding: 0.25rem 0.5rem;
                color: white;
                background-color: hsl(219, 85%, 26%);
                border-radius: 0.5rem;
                font-style: normal;
                text-decoration: none;
            }
                hgroup h1 span:hover {
                    cursor: initial;
                }

        hgroup span {
            color: hsl(219, 14%, 63%);
            font-weight: 500;
        }
            hgroup span:nth-child(2):hover {
                cursor: pointer;
                color: hsl(219, 85%, 26%);
            }

.activity {
    margin-block-end: 1rem;
    border-radius: 0.5rem;
}
    .activity:hover {
        cursor: pointer;
        background-color: hsl(211, 68%, 94%) !important;
    }
@media screen and (max-aspect-ratio: 1) {
    .notifications {
        padding: 0 0.5rem;
    }

    hgroup h1 {
        font-size: 1.5rem;
    }
}
</style>
