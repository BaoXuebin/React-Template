export const CommonActionTypes = {
    INIT_MATCH_PATH: 'INIT_MATCH_PATH',
    INIT_SLIDER_STATUS: 'INIT_SLIDER_STATUS',
    TOGGLE_SLIDER_STATUS: 'TOGGLE_SLIDER_STATUS',
    LOGIN: 'LOGIN'
};

// 初始化请求的路由信息
export const initMatchPath = location => ({
    type: CommonActionTypes.INIT_MATCH_PATH,
    location
});

// 初始化侧栏状态
export const initSliderStatus = collapsed => ({
    type: CommonActionTypes.INIT_SLIDER_STATUS,
    collapsed
});

// 收起/展开 侧栏
export const toggleSliderStatus = () => ({
    type: CommonActionTypes.TOGGLE_SLIDER_STATUS
});

// 登录
export const initUser = user => ({
    type: CommonActionTypes.LOGIN,
    user
});