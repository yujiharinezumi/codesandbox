// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

//constで定義したオブジェクトのプロパティは変更が可能
//objectを定義するとはほぼconstを使用
// const val4 = {
//   name: "yuji",
//   age: 28
// };

// // console.log(val4);
// val4.name = "YUJI";
// val4.address = "Japan";
// console.log(val4);

//constで定義した配列のプロパティは変更が可能
// const val5 = ["dog", "cat"];

// val5[0] = "bird";
// val5.push("fish");
// console.log(val5);

// const name = "Yuji";
// const age = 28;

// //従来の文字連結
// const message1 = "私の名前は" + name + "です。　年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた場合
// const message2 = `私お名前は${name}です。　年齢は${age}です。`;
// console.log(message2);

//従来の関数
// function func1(str) {
//   return str;
// }

// //変数位に入れる場合
// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です"));

// //アロー関数
// //引数が一つの場合引数の括弧を省略できる
// //処理が1行の場合波括弧とreturnを省略できる

// const func2 = (str) => str;

// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

// //分割代入
// const myProfile = {
//   name: "yuji",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message2);

// const myProfile = ["yuji", 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name,age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です`;

//デフォルト値 undefiedになる
// const sayHello = (name) => console.log(`こんにちは${name}さん`);

// sayHello("yuji");

//スプレッド構文
//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);

// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;

// console.log(num2);
// console.log(arr3);

// //配列のコピー結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// //元の配列の変更影響を受けない
// console.log(arr4);
// // const arr7 = [...arr4, ...arr5];
// // console.log(arr7);

// const arr8 = arr4;
// //配列をそのままコピーする
// arr8[0] = 100;
// //そして中身を変えた場合
// console.log(arr8);
// //参照先のデータまで変更されてしまう
// console.log(arr4);
