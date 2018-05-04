window.Model = function (options) {
    let resourceName = options.resourceName;
    return{
        init: function () {
            let APP_ID = 'Yjq0f8ywnjQxEVknFWRfTmGf-gzGzoHsz';
            let APP_KEY = 'cmvXP5F2XstS4t9AnH5oNqHQ';
            AV.init({appId: APP_ID, appKey: APP_KEY});
        },
        fetch: function () {
            let query = new AV.Query(resourceName);
            var now = new Date();
            query.lessThanOrEqualTo('createdAt', now);//查询今天之前创建的 Todo
            query.limit(10);// 最多返回 10 条结果
            query.descending('createdAt');
            return query.find();    //Promise对象
        },
        save: function (object) {
            let X = AV.Object.extend(resourceName);
            let x = new X();
            return x.save(object);      //Promise对象
        }
    }
};
