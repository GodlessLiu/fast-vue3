import { get, post } from '/@/utils/axios/index'


// 枚举所有的api地址，方便管理
enum URL {
    login = '/user/login',
    logout = '/user/logout',
    profile = '/user/profile',
}


// 请求包装的格式
const getUserProfile = async () => get({ url: URL.profile });
// const login = async (data: loginForm)=> post<UserLogin>({url:URL.login,data})
export { getUserProfile };