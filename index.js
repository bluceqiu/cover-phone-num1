/*
 * @Author: xiaolong.qiu
 * @Date: 2020-05-14 17:28:01
 */
module.exports = function(phone, rule){
    var reg = rule || /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;

    if( !(reg.test(phone)) ){
        return new Error("请输入合法的电话号码！")
    }

    var arr = [...phone]
    arr.splice(3, 4, "****")
    return arr.join("")
}