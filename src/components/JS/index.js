import Vue from 'vue'
import msgbox from './Messagebox'

// 自定义的msgbox组件
export let Msgbox = (function() {
  let defaultData = {
    title:"",
    content:"",
    cancel:"",
    confirm:"",
    handleCancel:null,
    handleConfirm:null,
  };
  let Mycomponent = Vue.extend(msgbox);
  return function(props) {
    for (let attr in props){
      defaultData[attr] = props[attr]
    }
    let vm = new Mycomponent({
      el:document.createElement('div'),
      data:{
        title:defaultData.title,
        content:defaultData.content,
        cancel:defaultData.cancel,
        confirm:defaultData.confirm,
      },
      methods:{
        handleCancel(){ //这里的handleCancel就是msgbox.vue中<span @touchstart="handleCancel">取消</span>的handleCancel
          // defaultData.handleCancel.call(this)中的this指向的是当前Vue实例vm
          defaultData.handleCancel && defaultData.handleCancel.call(this);
          // defaultData.handleCancel()其实就是props.handleCancel(),这个props.handleCancel()函数中的this指向的是props
          // defaultData.handleCancel();
          document.body.removeChild(vm.$el);
        },
        handleConfirm(){
          defaultData.handleConfirm && defaultData.handleConfirm.call(this);
          document.body.removeChild(vm.$el);
        }
      }
    });
    document.body.appendChild(vm.$el);
  };
})();