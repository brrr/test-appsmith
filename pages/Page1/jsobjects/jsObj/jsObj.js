export default {
	myVar1: [],
	myVar2: {},
	refresh: () => {
		list.run()
		count.run()
		txt_content.text = ''
		return true
	},
	myFun2: async () => {
		//use async-await or promises
	}
}