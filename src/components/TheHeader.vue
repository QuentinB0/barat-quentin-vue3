<script setup>

</script>

<template>
    <!-- Header -->
    <section id="header">

        <!-- Logo -->
        <h1><router-link to="/" class="nav-link">Home</router-link></h1>

        <!-- Nav -->
        <nav id="nav">
            <ul>
                <li class="current"><router-link to="/" class="nav-link">Home</router-link></li>
                <li><router-link to="/list" class="nav-link">Liste amiibo</router-link></li>
            </ul>
        </nav>
    </section>
</template>
