<template>
	<div class="ui-head">
		<a href="/#/chat" class="iconfont">&#xe645;</a>
		<h2>
			<slot></slot>
		</h2>
	</div>
</template>

<script>
export default {
	name: 'header',
}
</script>

<style lang="scss">
@import "../../../static/scss/_variable.scss";

.ui-head {
    position: relative;
    height: 50px;
    background: #002eff;
    @include display(flex);

    .iconfont {
    	z-index: 1;
    	position: relative;
        color: #fff;
        font-size: 30px;
        align-self: center;
        margin-left: 5px;
    }

    h2 {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        color: #fff;
        font-weight: bold;
        font-size: 20px;
        @include center;
    }
}
</style>