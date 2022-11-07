
<template>
    <div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
        <div class="w-full flex flex-col items-center space-y-4 sm:items-end">

            <div class="max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5"
                v-for="(notif, index) in notifications" :key="index">
                <div class="w-0 flex-1 p-4">
                    <div class="flex items-start">
                        <div class="flex-shrink-0 pt-0.5">
                            <img class="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt="">
                        </div>
                        <div class="ml-3 w-0 flex-1">
                            <p class="text-sm font-medium text-gray-900">{{ notif.title }}</p>
                            <p class="mt-1 text-sm text-gray-500">{{ notif.message }}</p>
                        </div>
                    </div>
                </div>
                <div class="flex border-l border-gray-200">
                    <button @click="readNotif(notif.id, this.userID)"
                        class="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">Mark as read</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client';
export default {
    data() {
        return {
            userID: 1,
            title: '',
            message: '',
            notifications: [],
            socket: io('localhost:3001')
        };
    },
    methods: {
        readNotif: (notif_id, user_id) => {
            console.log('notif id :', notif_id);
            console.log('user id :', user_id);
        }
    },
    mounted() {
        // get notifications
        this.socket.emit('LOAD_NOTIFICATIONS', this.userID);

        // watch notifications
        this.socket.on(`NOTIFICATIONS-${this.userID}`, (data) => {
            this.notifications = data;
            console.log("new message");
        });
    }
};
</script>

<style>

</style>