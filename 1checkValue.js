/**
 * 1.校验是否是邮箱
 */
const isEmail = (s) => {
	return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
		s
	)
}

/**
 * 2、检测是否是电话号码
 */
const isPhone = (s) => {
	return /^([0-9]{3,4}-)?[0,9]{7,8}$/.test(s)
}
/**
 * 3、检测是否是手机号码
 */
const isMobild = (s) => {
	// 以1开头，后面的是10位数字
	return /^1[0-9]{10}$/.test(s)
}

/**
 * 4 检测是否是url地址
 */
export const isURL = (s) => {
	return /^http[s]?:\/\/.*/.test(s)
}
/**
 * 5 是否是字符串
 */
export const isString = (s) => {
	return Object.prototype.toString.call(s).slice(8, -1) === 'String'
}
/**
 * 6、检测是否时数字
 */
export const isNumber = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
}
/**
 * 7、是否时boolean
 */
export const isBoolean = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
}

/**
 * 8、检测是否时函数
 */
export const isFunction = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}

/**
 * 9、是否为null
 */
export const isNull = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}
/**
 * 10 是否时undefined
 */
export const isUndefined = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}
/**
 * 11 是否时对象
 */
export const isObj = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}
/**
 * 12 是否是数组
 */
export const isArray = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}
/**
 * 13 是否是时间对象
 */
export const isDate = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}
/**
 * 14 是否是正则
 */
export const isRegExp = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
}

/**
 * 15 是否是错误对象
 */
export const isError = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
}
/**
 * 16 是否是Symbol 函数
 */
export const isSymbol = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
}
/**
 * 17 是否是Promise对象
 */
export const isPromise = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
}
/**
 * 18、是否是Set对象
 */
export const isSet = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
}
/**
 * 19、是否是微信浏览器
 */
// navigator 对象是客户端标识浏览器的标准，只要浏览器启用了JavaScript，该对象就一定存在。
// navigator.userAgent :返回浏览器的用户代理字符串
export const ua = navigator.userAgent.toLowerCase()

export const isWeiXin = () => {
	return ua.match(/microMessenger/i) == 'micromessenger'
}

/**
 * 20 检测是否是移动端
 */
export const isDeviceMobile = () => {
	return /android|webos|iphone|ipod|balckberry/i.test(ua)
}

/**
 * 21 是否是QQ浏览器
 */
export const isQQBrowser = () => {
	return !!ua.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i)
}
/**
 * 22 判断是否是爬虫
 */
export const isSpider = () => {
	return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(
		ua
	)
}

/**
 * 23 是否是ios
 */
export const isIos = () => {
	var u = navigator.userAgent
	if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
		//安卓手机
		return false
	} else if (u.indexOf('iPhone') > -1) {
		//苹果手机
		return true
	} else if (u.indexOf('iPad') > -1) {
		//iPad
		return false
	} else if (u.indexOf('Windows Phone') > -1) {
		//winphone手机
		return false
	} else {
		return false
	}
}

/**
 * 24 判断是否是PC端
 */
export const isPC = () => {
	var userAgentInfo = navigator.userAgent
	var Agents = [
		'Android',
		'iPhone',
		'SymbianOS',
		'Windows Phone',
		'iPad',
		'iPod'
	]
	var flag = true
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false
			break
		}
	}
	return flag
}

/**
 * 25 判断el是否包含了某个class
 */
export const hasClass = (el, className) => {
	// \s匹配任何空白字符，包括空格、制表符、换页符
	let reg = new RegExp(`(^|\\s)` + className + `(\\s|$)`)
	return reg.test(el.className)
}
/**
 * 26 判断是添加了某个class,判断是否添加了指定的类，如果没有添加的话就添加，已经添加的话就返回
 */
export const addClass = (el, className) => {
	if (hasClass(el, className)) {
		return
	}
	let newClass = el.className.split(' ')
	newClass.push(className)
	el.className = newClass.join(' ')
}
/**
 * 27 el去除某个class
 */
export const removeClass = (el, className) => {
	//如果el中不存在这个类，就直接返回
	if (!hasClass(el, className)) {
		return
	}
	// 创建一个正则表达式，匹配复合名称的类名
	let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
	// 将复合的类从el的类中去掉
	el.className = el.className.replace(reg, '')
}
/**
 * 
 * @param {Dom} el 
 * @param {Boolean} partiallyVisible 是否是全屏可见，为false的时候就是元素必须全部在可视区域内部，为true就是只需要在可视区域内看见改元素就可以了，不在乎它是否全部在可视区域内
 */
const elementIsVisibleInviewport = (el, partiallyVisible = false){
	// Element.getBoundingClientRect方法返回元素的大小以及其相对于视口的位置
	// 由于兼容性的问题，尽量使用top,right,bottom,left
	const { top, left, right, bottom } = el.getBoundingClientRect();
	// innerHeight,innerWidth 返回以像素为单位的窗口的内部高度和宽度
	const { innerHeight, innerWidth } = window
	return partiallyVisible ?
		// 如果元素的上边框距离窗口的高度大于0，并且小于可视区的高度，或者元素的底部距离窗口的底部大于0，并且小于窗口的高度，后面的宽度判断也是一样的
	((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
	((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
	: top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}
// 实例
elementIsVisibleInviewport(el) // 判断元素在视口中是否可见
elementIsVisibleInviewport(el,true) // 判断元素在视口中是否全部可见

// 28、判断当前的类型是什么
export const checkStr = (str, type) => {
	switch (type) {
			case 'phone':   //手机号码
					return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
			case 'tel':     //座机
					return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
			case 'card':    //身份证
					return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
			case 'pwd':     //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
					return /^[a-zA-Z]\w{5,17}$/.test(str)
			case 'postal':  //邮政编码
					return /[1-9]\d{5}(?!\d)/.test(str);
			case 'QQ':      //QQ号
					return /^[1-9][0-9]{4,9}$/.test(str);
			case 'email':   //邮箱
					return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
			case 'money':   //金额(小数点2位)
					return /^\d*(?:\.\d{0,2})?$/.test(str);
			case 'URL':     //网址
					return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
			case 'IP':      //IP
					return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
			case 'date':    //日期时间
					return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
			case 'number':  //数字
					return /^[0-9]$/.test(str);
			case 'english': //英文
					return /^[a-zA-Z]+$/.test(str);
			case 'chinese': //中文
					return /^[\\u4E00-\\u9FA5]+$/.test(str);
			case 'lower':   //小写
					return /^[a-z]+$/.test(str);
			case 'upper':   //大写
					return /^[A-Z]+$/.test(str);
			case 'HTML':    //HTML标记
					return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
			default:
					return true;
	}
}

// 29、严格的身份证校验
export const isCardID = (sId) => {
	if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
			console.log('你输入的身份证长度或格式错误')
			return false
	}
	//身份证城市
	var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
	if (!aCity[parseInt(sId.substr(0, 2))]) {
			console.log('你的身份证地区非法')
			return false
	}

	// 出生日期验证
	var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"),
			d = new Date(sBirthday)
	if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
			console.log('身份证上的出生日期非法')
			return false
	}

	// 身份证号码校验
	var sum = 0,
			weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
			codes = "10X98765432"
	for (var i = 0; i < sId.length - 1; i++) {
			sum += sId[i] * weights[i];
	}
	var last = codes[sum % 11]; //计算出来的最后一位身份证号码
	if (sId[sId.length - 1] != last) {
			console.log('你输入的身份证号非法')
			return false
	}

	return true
}

// 30、判断一个元素是否在数组中
export const contains = (arr, val) => {
	return arr.indexOf(val) != -1 ? true : false;
}

// 31、判断两个对象是否键值相同
export const isObjectEqual = (a, b) => {
	var aProps = Object.getOwnPropertyNames(a);
	var bProps = Object.getOwnPropertyNames(b);

	if (aProps.length !== bProps.length) {
			return false;
	}

	for (var i = 0; i < aProps.length; i++) {
			var propName = aProps[i];

			if (a[propName] !== b[propName]) {
					return false;
			}
	}
	return true;
}
