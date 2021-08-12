// var pre = "var変数";
// console.log(pre);

// // var変数は上書き可能
// pre = "var変数の変更";
// console.log(pre);

// // var変数の再宣言
// var pre = "var変数の再宣言";
// console.log(pre);

// let pre1 = "let変数";
// console.log(pre1);

// // letは上書き可能
// pre1 = "let変数の上書き";
// console.log(pre1);

// // // letは再宣言不可
// // let pre1 = "let変数を再宣言";
// // console.log(pre1);

// const pre2 = "const変数";
// console.log(pre2);

// // // constは上書き不可
// // pre2 = "const変数の上書き";
// // console.log(pre2);

// // // constは再宣言不可
// // const pre2 = "const変数の再宣言";
// // console.log(pre2);

// // constで定義したオブジェクトは変更可能
// const pre3 = {
//   name: "shunKUMA",
//   age: 32,
// };
// pre3.name = "俊熊";
// pre3.address = "niigata";
// console.log(pre3);

// // constで定義した配列は変更可能
// const pre4 = ["dog", "cat"];
// pre4[0] = "bear";
// pre4.push("dog");
// console.log(pre4);

// // テンプレート文字列
// const name = "shunKUMA";
// const age = 32;

// // テンプレート文字列を使用
// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

// // 従来の関数
// function func(str) {
//   return str;
// }
// console.log(func("funcです"));

// // アロー関数
// const func1 = (str) => {
//   return str;
// };
// console.log(func1("func1です"));

// const func2 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func2(21, 50));

// // 分割代入
// const profile = {
//   name: "shunKUMA",
//   age: 32,
// };

// const message1 = `名前は${profile.name}です。年齢は${profile.age}歳です。`;
// console.log(message1);

// const { name, age } = profile;

// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const profile = ["shunKUMA", 32];

// const message3 = `名前は${profile[0]}です。年齢は${profile[1]}歳です。`;
// console.log(message3);

// const [name, age] = profile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// // デフォルト値、引数
// const hello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);

// hello();

// // スプレッド構文
// // 配列の展開
// const int = [1, 2];
// console.log(int);
// console.log(...int);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(int[0], int[1]);
// sumFunc(...int);

// // まとめる
// const int1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const [num1, num2, ...int2] = int1;
// console.log(num1);
// console.log(num2);
// console.log(int2);

// // 配列のコピー、統合
// const int3 = [10, 20];
// const int4 = [20, 30];

// const int5 = [...int3];
// console.log(int5);

// const int6 = [...int3, ...int4];
// console.log(int6);

// mapやfilterを使った配列処理;
// const nameArr = ["山田", "皆川", "shunKUMA"];

// const nameArr1 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr1);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}さんです`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "shunKUMA") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// 三項演算子;
// const pra = 1 < 0 ? "trueです" : "falseです";
// console.log(pra);

// const num = "1500";
// // console.log(num.toLocaleString());

// const format =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(format);

// const check = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！" : "許容範囲内です";
// };
// console.log(check(60, 20));

// // 論理演算子
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrue");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrue");
// }
