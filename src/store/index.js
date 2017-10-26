import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        // 公共
        comm: {
            loading: false,
            login: {
                memberId: '',
                userData: ''
            },
            apiUrl: 'http://118.89.50.53:9091/photosharing/',
            imgUrl: 'http://118.89.50.53:9091/filebase',
            indexConf: {
                isFooter: true, // 是否显示底部
                isSearch: true, // 是否显示搜索
                isBack: false,  // 是否显示返回
                isShare: false, // 是否显示分享
                title: '' // 标题
            }
        }
    },
    mutations: {
		/*
		 * loading的显示
		 * */
        isLoading: (state, status) => {
            state.comm.loading = status
        },
		/*
		 * 修改header的信息
		 *
		 * */
        changeIndexConf: (state, data) => {
            Object.assign(state.comm.indexConf, data)
        },
        isLogin: (state,data) => {
            localStorage.setItem('memberId',data.memberId)
            localStorage.setItem('userMsg',JSON.stringify(data))
            state.comm.login.memberId = localStorage.getItem('memberId')
            state.comm.login.userData = JSON.parse(localStorage.getItem('userMsg'))
        },
        logout: (state,data) => {
            localStorage.removeItem('memberId')
            localStorage.removeItem('userMsg')
            state.comm.login.memberId = ''
            state.comm.login.userData = ''
        }
    },
    actions: {

    },
    getter: {

    }
})
export default store