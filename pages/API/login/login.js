var app = getApp()
Page({
	onLoad: function () {
		var that = this;
		tt.checkSession({
			success: function () {
				that.setData({
					hasLogin: true
				});
			},
			fail: function () {
				that.setData({
					hasLogin: false
				});
			}
		})
	},
	data: {
		hasLogin: false,
		code: tt.getStorageSync('login.code')
	},
	login: function () {
		var that = this
		tt.login({
			success: function (res) {
				if (res.code) {
					that.setData({
						hasLogin: true,
						code: res.code
					});
					tt.setStorageSync('login.code', res.code);
					tt.getUserInfo({
						withCredentials: true,
						success: function (res) {
							tt.showToast({
								title: 'success'
							});
							console.info('get user info data is ', res);
						},
						fail() {
							tt.showModal({
								title: '调用 getUserInfo 失败，检查是否需要 login'
							})
						}
					});




				} else {
					tt.showModal({
						title: '本地接口调用成功，但登录失败了'
					});
				}
			},
			fail: function () {
				tt.showModal({
					title: '调用登录接口失败'
				});
			}
		})
	},

})
