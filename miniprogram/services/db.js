const db = wx.cloud.database()

export default class DatabaseService {

    /**
     * 数据库查询
     * @param { String } collection 集合名
     * @param { Object } params 查询条件
     * @param { Object } filter 返回数据中字段滤除 示例：{ id: false } 表示返回的数据中不包含id字段
     * @return { Array } 符合条件的集合数据
     * 
     **/
    static async query (collection, params={}, filter={}) {
        // 查询当前用户collection集合中的数据
        let res = await db.collection(collection).where(params).field(filter).get()
        return res.data;
    }

    /**
     * 数据插入
     * @param { String } collection 集合名
     * @param { Object } data 插入的数据
     * @return { Object } 插入结果
     * 
     **/
    static async add (collection, data={}) {
        let res = await db.collection(collection).add({ data })
        return res;
    }

    /**
     * 数据删除
     * @param { String } collection 集合名
     * @param { String } id 要删除的文档id
     * @return { Object } 删除结果
     * 
     **/
    static async remove (collection, id) {
        let res = await db.collection(collection).doc(id).remove();
        return res.stats;
    }

    /**
     * 数据更新
     * @param { String } collection 集合名
     * @param { String } id 要更新的文档id
     * @param { Object } data 更新的数据
     * @return { Object } 更新结果
     * 
     **/
    // 数据库更新（仅可以更新单个数据，批量更新需要通过server端）
    static async update (collection, id="", data={}) {
        // 查询当前用户collection集合中的数据
        let res = await db.collection(collection).doc(id).update({ data })
        return res.stats;
    }
}