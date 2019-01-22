var Toast = {}
Toast = function (Vue, options) {
    let defaultOptions = {
        duration: 2000,
        location: 'center'
    }
    for (let attr in options) {
        defaultOptions[attr] = options[attr]
    }
    // 全局的方法和属性等
    Vue.prototype.$toast = (options) => {
        // 阻止同时生成多个toast
        if (document.getElementsByClassName('my-toast').length) {
            return
        }
        // 修改用户传入的option
        if (options.location) {
            defaultOptions.location = options.location
        }
        // 模版生成器
        let TargetPandle = Vue.extend({
            template: `<div class="my-toast ${options.location === 'top' ? 'top' : (options.location === 'center' ? 'center' : (options.location === 'bottom' ? 'bottom' : 'center'))}">${options.msg}</div>`
        })
        // 生成一个实例并挂载到body元素上
        let pandle = new TargetPandle().$mount().$el
        document.body.appendChild(pandle)
        // 一段时间后移除
        setTimeout(() => {
            document.body.removeChild(pandle)
        }, options.duration)
    }
}
module.exports = Toast
