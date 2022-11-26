// var a = +prompt ("Son kiriting juft yoki toqligini aniqlab beramiz")
// if (a%2==1) {
//     alert ("Siz toq son kiritdingiz "+a)
// }else if (a%2==0){
//     alert("Siz juft son kiritdingiz")
// }else {
//     alert ("Siz sondan boshqa narsa kiritdingiz")
// }

var a = +prompt ("Yoshingizni kiriting")
if (a >= 0 && a <= 18){
alert ("Yoshsiz. O'qishingiz kerak")
}else if (a >= 18 && a <= 50) {
alert ("Ishlashingiz kerak")
}else if (a >= 50 && a <= 59) {
    alert ("Yaqinda pensiyaga chiqasiz")
}else if (a >= 59 && a <= 150) {
    alert ("Pensionerga o'xshaysiz agar hali tirik bo'lsangiz")
}else (a < 151)
alert ("Nimadir noto'g'ri ketdi")
