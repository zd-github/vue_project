//ajax 取数据
//引入axios模块（ajax封装模块）
import axios from 'axios';

//基本配置（自定义配置一个axios的新实例）
var $http=axios.create({
    baseURL:'https://cnodejs.org/api/v1',
    timeout:1000,
    headers:{'X-Custom-Header': 'foobar'}
});

//获取栏目列表数据
function getItemsData(options){
    //设置参数  object.assign()合并/复制对象
    var newOptions=Object.assign({
        page:1,
        limit:10,
    },options);

    return $http({
        //请求地址
        url:'/topics',
        method:'get',
        params:newOptions
    });

}


//获取文章详细信息
function getArticle(id){
    return $http.get('/topic/'+id);
}


export {getItemsData,getArticle}