let currentCity = JSON.parse(localStorage.getItem('currentCity')) || {id:"",nm:""};
const state = {
  nm: currentCity.nm || "北京",
  id:currentCity.id || 1
}

const mutations = {
  CITY_INFO(state,data){
    state.nm = data.nm
    state.id = data.id
  }
}

const actions = {

}

export default {
  namespaced:true,
  state,
  mutations,
  actions
}