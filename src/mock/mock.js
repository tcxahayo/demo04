import Mock from 'mockjs'
import { AudioMutedOutlined } from '@ant-design/icons'

Mock.mock(/api\/user/, 'get', {
    user:{
            username:'admin',
            password:'123'
        }
})
Mock.mock(/api\/list/,'get',{
    list:['早上','中午','晚上']
})
