<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
	name: 'app',
	created () {
		this.$store.dispatch('init');
	},
}
</script>
