var vm = new Vue({
			el: '#vue_det',
			data: {
				site: "菜鸟教程",
				url: "http://www.runoob.com/vue2/vue-start.html",
				target:"_blank",
				alexa: "10000"
			},
			methods: {
				details: function() {
					return  this.site + " - 学的不仅是技术，更是梦想！";
				}
			}
		})