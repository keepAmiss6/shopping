import {request} from "./request";

export default function getGoodDetail(id) {
  return request({
    url: '/detail',
    params: {
      iid:id
    }
  })
}
