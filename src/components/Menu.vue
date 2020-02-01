<template>
    <div id="headerMenu" class >
        <ul class="flex">
            <li>
                <cld-image publicId="flippin-icon" secure="true">
                    <cld-transformation width="150" height="150" radius="20" />
git stat
                </cld-image>
            </li>
            <li class="mr-6">
                <a class="text-blue-500 hover:text-blue-800" href="#">Active</a>
            </li>
            <li class="mr-6">
                <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
            </li>
            <li class="mr-6">
                <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
            </li>
            <li class="mr-6">
                <a class="text-blue-500 hover:text-blue-800d" href="#">Disabled</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>


