<template>
    <div id="menu" class="flex flex-row justify-center" v-bind:class="{'bg-indigo-600': !$auth.isAuthenticated, 'bg-blue-900': $auth.isAuthenticated}">
        <a href="/">
            <div id="logo" class="p-4 mr-20">
                <cld-image publicId="flippinnotes/flippin-icon_white-windows.png" secure="true">
                    <cld-transformation width="50" crop="scale"/>
                </cld-image>

            </div>
        </a>
        <div v-if="!$auth.isAuthenticated" id="salesMenu" class="pt-6 flex flex-row">
            <a class="ml-4 px-8 text-2xl font-sans text-white hover:text-yellow-400" href="/">Home</a>
            <a class="ml-4 px-8 text-2xl font-sans text-white hover:text-yellow-400" href="/contact">Features</a>
            <a class="ml-4 px-8 text-2xl font-sans text-white hover:text-yellow-400" href="/pricing">Pricing</a>
            <a class="ml-4 px-8 text-2xl font-sans text-white hover:text-yellow-400" href="/support">Support</a>

        </div>
        <div v-if="$auth.isAuthenticated" id="userMenu" class=" pt-8 flex flex-row">
            <a class="px-8 text-1xl font-sans text-blue-300 hover:text-yellow-400" href="/dashboard">
               <div class="flex flex-row">
                   <cld-image publicId="flippinnotes/icon-dashboard2.png" secure="true">
                       <cld-transformation width="24" crop="scale"/>
                   </cld-image>
                   <span class="pl-2">
                       Dashboard
                   </span>
               </div>
            </a>
            <a class="px-8 text-1xl font-sans text-white hover:text-yellow-400" href="#">
                <div class="flex flex-row">
                    <cld-image publicId="flippinnotes/white-projects.png" secure="true">
                        <cld-transformation width="24" crop="scale"/>
                    </cld-image>
                    <span class="pl-2">
                       Projects
                   </span>
                </div>
            </a>
            <a class="px-4 text-1xl font-sans text-white hover:text-yellow-400" href="#">
                <div class="flex flex-row">
                    <cld-image publicId="flippinnotes/white-Reports.png" secure="true">
                        <cld-transformation width="24" crop="scale"/>
                    </cld-image>
                    <span class="pl-2">
                       Reports
                   </span>
                </div>
            </a>
            <a class="px-8 text-1xl font-sans text-white hover:text-yellow-400" href="#">
                <div class="flex flex-row">
                    <cld-image publicId="flippinnotes/white-settings.png" secure="true">
                        <cld-transformation width="24" crop="scale"/>
                    </cld-image>
                    <span class="pl-2">
                       Settings
                   </span>
                </div>
            </a>
            <a class="px-8 text-1xl font-sans text-white hover:text-yellow-400" href="#">
                <div class="flex flex-row">
                    <cld-image publicId="flippinnotes/white-support.png" secure="true">
                        <cld-transformation width="24" crop="scale"/>
                    </cld-image>
                    <span class="pl-2">
                       Support
                   </span>
                </div>
            </a>

        </div>
        <div id="login" class="flex flex-row pt-8">
            <!-- Check that the SDK client is not currently loading before accessing is methods -->
            <div v-if="!$auth.loading" class="ml-10 px-8 text-1xl font-sans text-gray-800">
                <!-- show login when not authenticated -->
                <button class="rounded-full bg-green-400 text-white py-1 hover:text-black hover:bg-green-200"
                        v-if="!$auth.isAuthenticated" @click="login">
                    <span class="p-4">Log in</span>
                </button>
                <!-- show logout when authenticated -->
                <button class="rounded-full bg-gray-400 py-1 hover:text-white hover:bg-gray-500"
                        v-if="$auth.isAuthenticated" @click="logout">
                    <span class="px-4">Log out</span>
                </button>
            </div>
            <div v-if="!$auth.isAuthenticated">
                <button class="rounded-full bg-gray-400 py-1 hover:text-white hover:bg-gray-500">
                    <span class="p-4">Register</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        methods: {
            // Log the user in
            login() {
                this.$auth.loginWithRedirect();
            },
            // Log the user out
            logout() {
                this.$auth.logout({
                    returnTo: window.location.origin
                });
            }
        }
    }
</script>


