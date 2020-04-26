<template>
	<div class="C_content">
		<div style="color:#01f2ff;font-size: 20px;padding-top:17px;padding-left:16px;">总评分</div>
		<div class="f_right" ref="f_right"></div>
	</div>
</template>
<script>
import echarts from "echarts";
export default {
	data() {
		return {};
	},
	mounted() {
		this.initEcharts();
	},
	methods: {
		initEcharts() {
			let myEcharts = echarts.init(this.$refs.f_right);
			myEcharts.setOption({
				tooltip: {
					trigger: "item",
					formatter: "{b}: {c} ({d}%)"
				},
				series: [
					{
						name: "访问来源",
						type: "pie",
						selectedMode: "single",
						radius: [0, "30%"],
						label: {
							position: "inner",
							textStyle: {
								//设置内圆字体样式
								color: "#fff"
							}
						},
						color: ["#000"], //内圆颜色设置
						data: [{ value: 100, name: "总评分" }]
					},
					{
						type: "pie",
						radius: ["30%", "65%"], // 大小
						center: ["50%", "50%"], //位置
						label: {
							//外部圆富文本
							formatter: '{d}%',
							// position: 'inner'
						},
						labelLine: {
							show: true, //是否显示视觉引导线
							lineStyle: {
								color: "#979797"
							}
						},
						color: ["pink", "blue", "green", "orange"],
						data: [
							{ value: 18, name: "60分以上" },
							{ value: 14, name: "70分以上" },
							{ value: 32, name: "80分以上" },
							{ value: 36, name: "90分以上" }
						]
					}
				]
			});
		}
	}
};
</script>
<style lang="scss" scoped>
.f_right {
	width: 100%;
	height: 100%;
	min-height: 450px;
	margin-top: -80px;
	padding-top: 10px;
	padding-left: 10px;
}
</style>
