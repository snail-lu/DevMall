const db = wx.cloud.database()

export default class DatabaseService {

    // 数据库查询
    static async query (collection, params={}, filter={}) {
        // 查询当前用户collection集合中的数据
        let res = await db.collection(collection).where(params).field(filter).get()
        return res.data;
    }

    // 数据库插入
    static async add (collection, data={}) {
        // 查询当前用户collection集合中的数据
        let res = await db.collection(collection).add({ data })
        return res.data;
    }

    // 数据库更新（仅可以更新单个数据，批量更新需要通过server端）
    static async update (collection, id="", params={}) {
        // 查询当前用户collection集合中的数据
        let res = await db.collection(collection).doc(id).update({data: params})
        return res.data;
    }
}