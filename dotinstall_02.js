'use strict';

{
	document.querySelector('ul').addEventListener('click', e =>{
		if(e.target.nodeName === 'LI'){
			e.target.classList.toggle('done');
		}
	})
	
	//　e =>　このイコール大なりは、アロー関数だろう！
	
//　if 条件分岐
//	const score = 50;
//	
//	if(score > 80){
//		console.log('Great!');
//	}else if(score > 40){
//		console.log('OK');
//	}else{
//		console.log('....');
//	}
	
//論理演算子
//	const score =60;
//	const name = 'Yusa';
//	
//	if( score > 60 || name === 'Yusa'){  //===を忘れないように
//		console.log('OK!!!');
//	}
	
	
//条件演算子	　　条件 ? trueの処理 : falseの処理
//	const score = 40;
//	
//	score <= 80 ? console.log('OK...') : console.log('Great');


//　for文　ループ処理　繰り返し
//　for(let i=1; i<=10; i++){
//		if(i % 3 === 0){
//			continue;
//		}
//		console.log(i)
//	}

	
//　while文　ループ処理　繰り返し
//	let hp = 70;
//	
//	do{
//		console.log(`Last -- ${hp}`);
//		hp -= 15;
//	}while(hp > 0);
	


//関数宣言
	//function sum(a,b,c){
//		return a+b+c;
//	}
//	
//	const total = sum(1,2,3) + sum(3,4,5);
//	console.log(total);

	
//関数式
//	const sum = function(a,b,c){
//		return a+b+c;
//	};  //関数式はセミコロン！変数に代入するような式の時にセミコロンが必要！
//	const total = sum(2,2,2) + sum(8,8,3);
//	
//	console.log(total);
	
//アロー関数　イコール大なり
//	const sum =(a,b,c) => {
//		return a+b+c;
//	}

//アロー関数　イコール大なり　return するだけの場合は短く書くことができる
	
//　const sum =(a,b,c) => a+b+c;
//	
//	const total = sum(2,4,5) + sum(6,7,8);
//	console.log(total);
	
//アロー関数　引数が一つだけなら()も省略できる	
// const double = function(a) {
//   return a * 2;
// };
//const double = a => a * 2;
	
//	const sum = a => a * 2 ;
//	console.log(sum(3));
	
	
// switch 条件分岐
	
//	const signal = 'Green';
//	
//	switch(signal){
//		case 'red':
//			console.log('Stop');
//			break;
//		case 'yellow':
//			console.log('Caution');
//			break;
//		case 'blue':
//		case 'Green':
//			console.log('Go');
//			break;
//		default:
//			console.log('Wrong');
//			break;
//	}

// 比較演算子
//	const price = 1000;
//	console.log(price > 50);
	
//詳解JavaScript オブジェクト編 https://dotinstall.com/lessons/basic_javascript_objects_v2
	
//	const scores = [80, 90, 50, 60];
	
//	scores.forEach((score, index) => {
//		console.log(`${score} - ${index}`);
//	});
	
//配列の各要素に何らかの処理をして別の配列updatePricesを作りたい場合は map() が便利
	//const updatePrices = scores.map((score) => {
//		return score += 10;
//	});
//	console.log(updatePrices);
	
//配列の要素をチェックして、条件にあうものだけを抽出して別の配列として取得することができる filter()
	//const numbers = [1,4,7,8,10];
//	
//	const evenNumbers = numbers.filter(number => {
//		if(number % 2 === 0){
//			return true;
//		}else{
//			return false;
//		}
//	});
//	console.log(evenNumbers);
	
// 値と名前のペアでデータを管理することができるオブジェクトの作り方
//	const otherProps ={ 
//		r:4,
//		s:'red',
//	}
//	const point ={
//		x:100,
//		y:200,
//		...otherProps,　//レスト構文
//	};
//	point.z = 300;
//	delete point.z;
//	console.log(point);
	
//　オブジェクトにはforeach使えないので、Object.keys()という手順を踏む　　配列とオブジェクトの組み合わせ
	
	//const point = {
//		x:100,
//		y:200,
//	};
//	const keys = Object.keys(point);
//	keys.forEach(key => { //配列にはforeach使える
//		console.log(`Key…${key}　：Value…${point[key]}`);
//	});
	
//	const points = [
//		{x:30, y:50},
//		{x:50, y:70},
//		{x:60, y:80},
//	];
//	console.log(points[0].x);

//文字列操作
//	const str = 'Hello';
//	console.log(str.substring(1, 5)); // ello
	
//	const d = [2019, 11, 14];
//	console.log(d.join('/'));
	
//数値操作
  // console.log(Math.floor(avg)); // 7
  // console.log(Math.ceil(avg)); // 8
  // console.log(Math.round(avg)); // 7
  // console.log(avg.toFixed(3)); // 7.333
	
//　random操作
  // console.log(Math.random());

  // 0, 1, 2
  // Math.floor(Math.random() * 3)
  // 0, ..., n
  // Math.floor(Math.random() * (n + 1))
  // min, ..., max
  // Math.floor(Math.random() * (max + 1 - min)) + min
	
//★random操作これだけ覚える！
  //console.log(Math.floor(Math.random() * 6) + 1);
	
//現在時刻取得
	//const d = new Date();
//	console.log(`${d.getFullYear()}年　${d.getMonth() + 1} 月 ${d.getDate()} 日`);
	//const d = new Date();
//	console.log(`${d.getFullYear()}年 ${d.getMonth() + 1}月 ${d.getDate()}日`);
	
//alert() confirm()
	//alert('Hello');
	
	//const answer = confirm('削除しますか？');
//	if(answer){
//		console.log('削除しました');
//	}else{
//		console.log('キャンセルしました');
//	}
//setInterval()  clearInterval()
//	let i = 0;
//	
//	function showTime(){
//		console.log(new Date());
//		i++;
//		if(i > 2){
//			clearInterval(intervalId);
//		}
//	}
//	const intervalId = setInterval(showTime, 1000);
	
//setTimeout() clearTimeout() これは1回だけ実行　しかしfunctionの中に入れると繰り返しできる
//システムに負荷をかけずにくり返し処理を実行したい場合は setTimeout() もよく使われる
	
//	function showTime(){
//		console.log(new Date());
//	}
//	setTimeout(showTime,1000);
	
//	let i = 0;
//	function showTime(){
//		console.log(new Date());
//		const intervarId = setTimeout(showTime,1000);
//		i++;
//		if(i > 2){
//			clearTimeout(intervarId);
//		}
//	}
//	showTime();
	
//例外処理
//	const name = 'Nato'; // 5を入れると例外処理になる
//	
//	try{
//		console.log(name.toUpperCase());
//	}catch(e){
//		console.log('Finish');
//	}

	
	
	



}


