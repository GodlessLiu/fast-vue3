import { get, post } from '/@/utils/axios/index'


// 枚举所有的api地址，方便管理
enum URL {
    getSaying = "https://api.quotable.io/random",
    login = '/user/login',
    logout = '/user/logout',
    profile = '/user/profile',
}


export interface sayingState {
    author: string,
    authorSlug: string,
    content: string,
    dateAdded: string,
    dateModified: string,
    length: number
}

// 请求包装的格式
const getUserProfile = async () => get({ url: URL.profile });
const getSaying = async () => get<{ data: sayingState }>({ url: URL.getSaying })
// const login = async (data: loginForm)=> post<UserLogin>({url:URL.login,data})
export { getUserProfile, getSaying };