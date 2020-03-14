Page({
    data: {
        list: [{
                id: 'form',
                name: '表单组件',
                open: false,
                pages: [
                    'button',
                    'checkbox',
                    'form',
                    'input',
                    'label',
                    'picker',
                    'picker-view',
                    'radio',
                    // 'slider',
                    'switch',
                    'textarea'
                ]
            }, {
                id: 'content',
                name: '基础内容',
                open: false,
                pages: [
                    'text',
                    'progress',
                    'icon'
                ]
            }, {
                id: 'view',
                name: '视图容器',
                open: false,
                pages: [
                    'view',
                    'scroll-view',
                    'swiper',
                    'webview'
                ]
            }, {
                id: 'media',
                name: '媒体组件',
                open: false,
                pages: [
                    'image',
                    'video'
                ]
            }, {
                id: 'canvas',
                name: '画布',
                pages: ['canvas']
            }
        ]
    },
    toggleSwitch(e) {
        let {id} = e.currentTarget;
        let {list} = this.data;
        list.forEach((item) => {
            item.open = item.id === id ? !item.open : false;
        });
        this.setData({
            list
        });
    }
});