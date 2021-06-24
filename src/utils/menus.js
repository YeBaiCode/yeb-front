
import {getRequest} from './api'

export const initMenu = (router,store)=>{
    if(store.state.routes.length>0){
        return;
    }
    getRequest("/system/cfg/menu").then(data=>{
        if(data){
            // 数据存在 格式化数据
            let fmtRoutes =formatRoutes(data);
            // 添加到路由
            router.addRouters(fmtRoutes)
            store.commit('initRoutes',fmtRoutes)
        }
    })
}

export const formatRoutes = (routes)=>{
    let fmtRoutes = []
    routes.forEach(router=>{
        let {
            path,
            component,
            name,
            iconCls,
            children
        } = router;
        // 递归
        if(children && children instanceof Array){
            children = formatRoutes(children)
        }

        let fmtRouter = {
            path : path,
            name : name,
            iconCls:iconCls,
            children:children,
            component(resolve){
                require(['../views/'+component+'.vue'],resolve);
            }
        }

        fmtRoutes.push(fmtRouter)
    })
    return fmtRoutes
}
