import {request} from "./request";

export function getGoodDetail(id) {
  return request({
    url: '/detail',
    params: {
      iid:id
    }
  })
}

export class Good {
  constructor(itemInfo,columns,service){
    this.title=itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice=itemInfo.price;
    this.oldPrice=itemInfo.oldPrice;
    this.discount=itemInfo.discountDesc;
    this.columns=columns;
    this.service=service;
    this.realPrice=itemInfo.lowNowPrice
  }
}
