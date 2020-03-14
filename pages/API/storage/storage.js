
Page({
	data: {
		key: '',
		value: ''
	},
	keyChange(e) {
		this.setData({
			key: e.detail.value
		});
	},
	valueChange(e) {
		this.setData({
			value: e.detail.value
		});
	},
	setStorage() {
		let {key, value} = this.data;
		if (key === '') {
			return tt.showModal({
				title: '提示',
				content: 'key 不能为空'
			});
		}
		tt.setStorageSync(key, value);
		return tt.showModal({
			title: '提示',
			content: '数据保存成功'
		});
	},
	getStorage() {
		let {key} = this.data;
		if (key === '') {
			return tt.showModal({
				title: '提示',
				content: 'key 不能为空'
			});
		}
		let value = tt.getStorageSync(key);
		let content = `数据读取成功, value 为 ${value}`;
		if (!value) {
			content = `找不到与${key}对应的数据`;
		}
		this.setData({
			value
		})
		return tt.showModal({
			title: '提示',
			content
		});
	},
	clearStorage() {
		try {
			tt.clearStorageSync();
			this.setData({
				key: '',
				value: ''
			})
			return tt.showModal({
				title: '提示',
				content: '数据清空成功'
			});
		} catch (error) {
		}
	}
})
