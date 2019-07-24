import { axios } from '@/utils/request'
export function createnew (parameter) {
    return axios({
        url: '/createnew',
        method: 'post',
        data: parameter
    })
}