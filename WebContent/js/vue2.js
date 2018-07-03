//Vue.js 模板语法 
new Vue({
	el: '#app',
	data: {
		message: '使用 v-html 指令用于输出 html 代码 '
	}
})
new Vue({
	el: '#app2',
	data: {
		model: true
	}
});

new Vue({
	el: '#app3',
	data: {
		ok: true,
		message: 'RUNOOB',
		id: 33
	}
})
new Vue({
	el: '#app4',
	data: {
		message: '请输入用户名！'
	}
})
new Vue({
	el: '#app5',
	data: {
		message: '反转字符串'
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('')
		}
	}
})

new Vue({
	el: '#app6',
	data: {
		message: 'runoob'
	},
	filters: {
		filter: function(value,value1,value2) {
			if(!value) return ''
			value = value.toString()
			value1= value1.toString()
			value2= value2.toString()
			return '第1个参数首字母大写：'+value.charAt(0).toUpperCase() + value.slice(1)+
			'，第二参数：'+value1+'，第三参数：'+value2
		}
	}
})

new Vue({
  el: '#example',
  data: {
    sites: [
      { name: 'Runoob' },
      { name: 'Google' },
      { name: 'Taobao' }
    ]
  }
})

new Vue({
  el: '#example1',
  data: {
    message: 'Runoob',
	message2: '菜鸟教程\r\nhttp://www.runoob.com'
  }
})

var vm = new Vue({
el: '#databinding',
    data: {
        show:true,
        styleobj :{
            fontSize:'30px',
            color:'red'
        }
    },
    methods : {
    }
});