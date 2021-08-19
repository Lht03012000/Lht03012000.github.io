// console.log('Hello Hữu Tài');

// var x1 =10;
// var x2 =20;
// var x3 =30;
// console.log(x1 + x2==x3);
// hết bài 1

// var x=1, y=2, z = 'hello ';
// console.log(x/y*5);

// chaythu = function(){
//     y=y+1;
    
//     console.log('Giá trị của b: '+ y%3);
// } Hết bài 2

// var diem = 0;
// function chaythu(){
//     diem = diem +1;
//     if (diem <= 5 && diem >= 0) {
//         console.log(diem + ' điểm' +': Trung bình yếu');
//     } else if(diem > 5 && diem <=8){
//         console.log(diem + ' điểm' +': Kha');
//     } else{
//         console.log(diem + ' điểm' +': Giỏi')
//     }
// }

// vòng lặp
// var sv =['Tai','Phin','Vinh','Bình','Thắng','Diễm','Trinh','Linh']
// for (var i = 0; i < sv.length; i++) {
//     console.log(sv[i]);
// }

// function tinhtbc(x,y){
//     var z = (x + y)/2;
//     return z;
//     z = z + 5;
// }
// console.log(tinhtbc(5,10));

// function chao(){
//     var ten = "Tài";
//     var thongbao = function(){
//         console.log("Đi cà phê không "+ ten);
//     }
//     ten = "Lê Hữu "+ ten;
//     return thongbao;
// }
// var h = chao();
// h();

// const
// function thongtin(a,b,c,d){
//     this.ten = a;
//     this.tuoi = b;
//     this.gioitinh = c;
//     this.diachi = d;
// }
// var nguoi1 = new thongtin("Tai", 21, "nam", "QuyNhon");
// var nguoi2 = new thongtin("Linh",21, "Nữ","QuyNhon");
// console.log(nguoi1);
// console.log(nguoi2);

// var x = document.getElementsByTagName('h1')
// console.log(x);
// var y = document.getElementsByTagName('h2')
// console.log(y)
// var z = document.getElementsByTagName('p')
// console.log(z[0].innerHTML)
// z[0].innerHTML = "Le Huu Tai"
// document.getE

var x = document.getElementsByClassName('card-body')
console.log(x[0].innerHTML = "Alo");
// for (var index = 0; index < x.length; index++) {
//     x[index].innerHTML = " Alo ";
// }