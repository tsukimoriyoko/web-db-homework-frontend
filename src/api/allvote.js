import { axios } from '@/utils/request'
export function getallvote () {
    return axios({
        url: '/happy-vote',
        method: 'post'
      })
}