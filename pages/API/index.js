Page({
    data: {
        list: [{
                id: 'api',
                name: '开放接口',
                open: false,
                pages: [{
                        zh: '头条登录',
                        url: 'login/login'
                    }, {
                        zh: '获取用户信息',
                        url: 'get-user-info/get-user-info'
                    }, {
                        zh: '分享到微头条',
                        url: 'share/share'
                    }, {
                        zh: '选择收货地址',
                        url: 'choose-adress/choose-adress'
                    }
                ]
            },
            {
                id: 'network',
                name: '网络',
                open: false,
                pages: [{
                    zh: '发起一个请求',
                    url: 'request/request'
                // }, {
                //     zh: 'WebSocket',
                //     url: 'web-socket/web-socket'
                }, {
                    zh: '上传文件',
                    url: 'upload-file/upload-file'
                }, {
                    zh: '下载/保存文件',
                    url: 'download-file/download-file'
                }]
            }, {
                id: 'media',
                name: '媒体',
                open: false,
                pages: [{
                    zh: '图片',
                    url: 'image/image'
                }, {
                    zh: '浏览网络图片',
                    url: 'previewImage/previewImage'
                // }, {
                //     zh: '录音',
                //     url: 'voice/voice'
                }, {
                    zh: '视频',
                    url: 'video/video'
                }, {
                    zh: '音频',
                    url: 'inneraudio/inneraudio'
                }]
            }, {
                id: 'page',
                name: '界面',
                open: false,
                pages: [{
                        zh: '设置界面标题',
                        url: 'set-navigation-bar-title/set-navigation-bar-title'
                    }, {
                        zh: '页面跳转',
                        url: 'navigator/navigator'
                    }, {
                        zh: '下拉刷新',
                        url: 'pull-down-refresh/pull-down-refresh'
                    }, {
                        zh: '创建动画',
                        url: 'animation/animation'
                    }, {
                        zh: '显示操作菜单ActionSheet',
                        url: 'action-sheet/action-sheet'
                    }, {
                        zh: '显示模态弹窗Modal',
                        url: 'modal/modal'
                    }, {
                        zh: '显示消息提示框Toast',
                        url: 'toast/toast'
                    }
                ]
            },
            {
                id: 'device',
                name: '设备',
                open: false,
                pages: [{
                        zh: '获取手机网络状态',
                        url: 'get-network-type/get-network-type'
                    }, {
                        zh: '获取手机系统信息',
                        url: 'get-system-info/get-system-info'
                    }, {
                        zh: '监听加速度计数据',
                        url: 'accelerometer/accelerometer'
                    }, {
                        zh: '打电话',
                        url: 'make-phone-call/make-phone-call'
                    // }, {
                    //     zh: '扫码',
                    //     url: 'scan-code/scan-code'
                    }, {
                        zh: '剪贴板',
                        url: 'get-clipboard-data/get-clipboard-data'
                    }, {
                        zh: '振动',
                        url: 'vibrate/vibrate'
                    }
                ]
            },
            {
                id: 'location',
                name: '位置',
                open: false,
                pages: [{
                        zh: '获取当前位置',
                        url: 'get-location/get-location'
                    }, {
                        zh: '使用原生地图查看位置',
                        url: 'open-location/open-location'
                    }
                ]
            }, {
                id: 'storage',
                name: '数据缓存',
                pages: [{
                    zh: '数据缓存',
                    url: 'storage/storage'
                }]
            }
        ]
    },
    toggleSwitch(e) {
        let {
            id
        } = e.currentTarget;
        let {
            list
        } = this.data;
        list.forEach((item) => {
            item.open = item.id === id ? !item.open : false;
        });
        this.setData({
            list
        });
    }
});