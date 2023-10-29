<template>
    <nav class="navbar">
        <div class="container">
            <div class="logo">
                <h3>Logo...</h3>
            </div>
            <div>
                <router-link class="link" to="/">Home</router-link>
                <router-link class="link" to="/register">Register</router-link>
            </div>
        </div>

    </nav>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.navbar {
    width: 100vw;
    height: 80px;
    background: rgba(244, 211, 222, .8);
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    gap: 20px;
    margin: 0 10px 0 10px;
}

.link {
    margin-left: 20px;
}
</style>