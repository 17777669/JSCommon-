// 1、检测密码的强度
export const checkPwd = (str) => {
	var Lv = 0
	if (str.length < 6) {
		return Lv
	}
	if (/[0-9]/.test(str)) {
		Lv++
	}
	if (/[a-z]/.test(str)) {
		Lv++
	}
	if (/[A-Z]/.test(str)) {
		Lv++
	}
	if (/[\.|-|_]/.test(str)) {
		Lv++
	}
	return Lv
}

// 2、字符装换：type:1 首字母大写 type:2 首字母小写 type:3 大小写装换 4：全部大写 5：全部小写
export const changeCase = (str, type) => {
	type = type || 4
	switch (type) {
		case 1:
			return str.replace(/\b\w+\b/g, function (word) {
				return (
					word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
				)
			})
		case 2:
			return str.replace(/\b\w+\b/g, function (word) {
				return (
					word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
				)
			})
		case 3:
			return str
				.split('')
				.map(function (word) {
					if (/[a-z]/.test(word)) {
						return word.toUpperCase()
					} else {
						return word.toLowerCase()
					}
				})
				.join('')
		case 4:
			return str.toUpperCase()
		case 5:
			return str.toLowerCase()
		default:
			return str
	}
}

// 3、去除空格type: 1-所有空格 2-前后空格 3-前空格 4-后空格
export const trim = (str, type) => {
	type = type || 1
	switch (type) {
		case 1:
			return str.replace(/\s+/g, '')
		case 2:
			return str.replace(/(^\s*)|(\s*$)/g, '')
		case 3:
			return str.replace(/(^\s*)/g, '')
		case 4:
			return str.replace(/(\s*$)/g, '')
		default:
			return str
	}
}
