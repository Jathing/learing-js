答案

1.js导读部分

- js由bom，dom，ECMAscript
- 行内式(内嵌式)，页内式(内联式)，外部式
- ECMAscript指的是JavaScript的一个标准,是由Ecma国际通过ECMA-262标准化的脚本程序设计语言,这种语言在万维网上应用广泛,它往往被称为JavaScript或JScript
- 浏览器对象模型
- 文档对象模型
- 从上往下，从左往右，先同步后异步

2.js的输入和输出
- window.confirm  window.prompt
- window.alert、console.log、console.warn、console.error、document.write
- 代码会优先执行，阻塞html代码的加载
- 三种，普通输出console.log 警告输出console.warn 错误输出console.error

3.js中的变量
 - *指没有固定的值,可以改变的数.*

 - 1、变量名区分大小写，允许包含数字、字母、下划线“_”和美元符号“$”，但第一个字符不能为数字；2、变量名中不能出现汉字、空格、连字符“-”、点“.”等特殊字符；3、变量名不能是关键字、保留字；4、避免使用没有意义的命名等。

 - 匈牙利命名法:把变量名按：属性+类型+对象描述的顺序组合起来，以使程序员作变量时对变量的类型和其它属性有直观的了解。

   骆驼式命名法:标识符由一个或多个单词连接在一起，第一个单词的首字母小写，后面的单词首字母大写，其它字母全部小写。

   帕斯卡命名法:该命名法和骆驼式命名法类似，只是骆驼式命名法是第一个单词首字母小写，而帕斯卡命名法第一个单词首字母也大写。

- ```
  var i = prompt();
  ```

- ```
      var name = prompt('请输入名字');
      document.write(name)
  ```

  

4.js中的数据类型
- 可以判定基础数据类型，比如number,string,boolean,undefined
- 基础数据类型 string number boolean undefined null 复杂数据类型array object function date math
- infinity -infinity
- 1.7976931348623157e+308    2^1023*(1+(1-2^-52))
- not a Number 数字类型  出现NaN的情况1.数字和NaN运算2.数字*字符串   isNaN判定
- 用引号包裹
- 转义字符是在字符串中代表其他意思的字符，不会原封不动的加载出来 比如\n代表换行等
- 使用字符串自带的属性length
- +
- 'abc'+a+'def'
```js
var name='张三'
var age =19
var edu='北京大学'
var edu2='光华管理学院'
document.write('我的名字是'+name+'我是'+edu+'学校'+edu2+'学院的')
```
- a=false 表示a是布尔类型数据 a='false'表示a是字符串类型数据

- 1、undefined （未定义，找不到值时出现）

  2、null （代表空值）

  3、false （布尔值的false，字符串“false”布尔值为true）

  4、0 -0 +0 （数字0，字符串“0”布尔值为true）

  5、NaN (无法计算结果时出现，表示“非数值” not a number)

  6、""  || '' （空字符串，中间有空格时也是true）

- （1）undefined——表示变量声明过但并未赋过值。

  它是所有未赋值变量默认值。

  例如：var a; //a自动被赋值为undefined

  （2）null——表示一个变量将来可能指向一个对象。

  一般用于主动释放指向对象的引用。

- 1.toString()    2. + 与字符串连接

- 1.Number     2.parseInt()

5.js中的运算符

- 加法运算符的特点

    // 1)任何非数值类型的数据在参与加法运算之前，都会隐式类型转换成数值类型后在参与运算

    // 2)任何数据和NaN运算后，结果都是NaN

    // 3)任何数据和字符串相加后,+就变成了字符串拼接符，而不再是加法运算符

  减法运算符的特点

    // 1)任何非数值类型的数据参与运算的时候都会隐式转换成数值类型之后在参与运算

    // 2)任何数据和NaN发生运算后 都会变成NaN

    // 3)任何数据和字符串相减的时候 都会先把字符串变成数值类型后在运算

- a+=1;等价于 a=a+1; a-=3 等价于 a=a-3；

- 表达式是由数字 算术符 数字 分别组成的一个式子

   自由变量和约束变量等以能求得数值的有意义的排列方法所得到的组合

- ++在前和在后的区别  在于其表达式值的不同 也就是整体的值的区别

   ++在后的话 整体的值是旧值 先用后加

   ++在前的话 整体的值是新值 先加后用

- 对于关系运算符来说 表达式整体的值 要么是true 要么是false

- 对于逻辑运算符表达式来说 他会将我们两侧的两个操作数转成布尔类型后在进行判断

  其表达式整体的值 是能决定其整体的那个操作数的值,当根据前一个式子以及能判断出整体结果，就不用再看后面了，这就叫做逻辑中断。

- 对于逻辑与来说  同真则真  有假则假

  对于逻辑或来说  同假则假  有真则真

- 三目运算符 三目指的是 有三个操作数 表达式?结果A:结果B

  如果 表达式的结果为true 那么整体的值就是:前面的 结果A

  如果表达式的结果为false 那么整体的值就是:后面的 结果B

- ```
   let D=parseInt(i % 10); //个位 
   let A = parseInt((i % 10000) / 1000); //千位
   let B = parseInt((i % 1000) / 100); //百位
   let C = parseInt((i % 100) / 10); //十位
   
  //规律 就是 先 %  在 / 
  // 比如 万 位 
   
  parseInt((i % 100000) / 10000); //万位
  ```

- ```
     function getDuration(second) {
      var days = Math.floor(second / 86400);
      var hours = Math.floor((second % 86400) / 3600);
      var minutes = Math.floor(((second % 86400) % 3600) / 60);
      var seconds = Math.floor(((second % 86400) % 3600) % 60);
      var duration = days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
      return duration;
  }
  ```

  

6.js中的流程控制

- 程序运行时，个别的指令（或是陈述、子程序）运行或求值的顺序

- ```
   let score = prompt()
      if (score < 60) { console.log('e'); }
      else if (score < 70) { console.log('d'); }
      else if (score < 80) { console.log('c'); }
      else if (score < 90) { console.log('b'); }
      else { console.log('a'); }
  ```

- ```
  var score = prompt('请输入成绩');
      if(score >= 60){
          alert('合格')
      }
      else{
          alert('不合格')
      }
  ```

- ```
      var score = +prompt('请输入1-7以内的数字');
      switch(score){
          case 1 :alert('星期一');break;
          case 2 :alert('星期二');break;
          case 3 :alert('星期三');break;
          case 4 :alert('星期四');break;
          case 5 :alert('星期五');break;
          case 6 :alert('星期六');break;
          case 7 :alert('星期天');break;
          default:alert('输入值无效')
      }
  ```

- default就是如果没有符合的case就执行它,default并不是必须的.*break*:终止循环

- ```
      let num = 0
      while (num <= 100) {
          if (num % 2 != 0) {
              console.log(num);
          }
          num++;
      }
  ```

- ```
      let num = 0
      while (num <= 100) {
          if (num % 2 == 0) {
              console.log(num);
          }
          num++;
      }
  ```

- ```
      var sum = 0;
      var i = 0;
     while(i <= 100){
          sum += i;
          i++;
      }
      console.log(sum);
  ```

  

- ```
      let i = 1
      let sum = 0
      while (i <= 100) {
          if (i % 7 == 0) {
              sum++
          }
          i++
      }
      console.log(sum);
  ```

- ```
      let i = 1
      let sum = 0
      while (i <= 100) {
          if (i % 7 == 0) {
              sum += i;
          }
          i++
      }
      console.log(sum);
  ```

- dowhile会先执行一次代码再进行判断，因此它至少执行一次，while会先进行判断。

- ```
   let sum = 0;
      for (var i = 20; i <= 50; i++) {
          sum += i;
      }
      console.log(sum);
  
  ```

- ```
   let sum = 0;
      for (var i = 20; i <= 50; i++) {
      	if( i % 3 == 0){
      	        sum += i;
      	}
      }
      console.log(sum);
  ```

- ```
   let time = 0;
      for (let i = 1; i <= 5; i++) {
          if (i == 3) {
              time += 8
          } else { time += 6; }
      }
      console.log(time);
  ```

- ```
   for (let i = 1; i <= 5; i++) {
          for (let j = 1; j <= 5; j++) {
              document.write('*');
          }
          document.write('</br>');
      }
  ```

- ```
  continue：跳出此次循环并继续下一次循环
  ```

- ```
      var month = +prompt('请输入月份');
      var plane = +prompt('请输入舱位');
      var price;
      if(month <= 10 && month >= 4){
          if(plane == '头等舱'){
              price = 4000*.9;
          }
          else{
              price = 4000*.75;
          }
      }
      else{
          if(plane == '头等舱'){
              price = 4000*.6;
          }
          else{
              price = 4000*.3;
          }
      }
      alert(`机票价格为${price}`)
  ```

- ```
  			for (var i =1001; i <10000; i+=2) {
  			var a = i % 10;
  			var b = parseInt(i / 10) % 10;
  			var c = parseInt(i / 100) % 10;
  			var d = parseInt(i / 1000) % 10;
  			if (a + c == b + d) {
  				console.log(i);
  			}
  			if (i % 10 + parseInt(i / 100) % 10 == parseInt(i / 10) % 10 + parseInt(i / 1000) % 10) {
  				console.log(i);
  			}
  			}
  ```

- ```
      for(var i = 1;i<10;i++){
          for(var j=1;j<=i;j++){
              document.write(`${j} * ${i} = ${j*i} &nbsp;`)
          }
          document.write('<br>')
      }
  ```

- ```
      var num = prompt('请输入一个大于3的数');
      var a = 1 , b = 1;
      var sum = b;
          console.log(a);
          console.log(b);
          for(var i = 3 ;i <= num ;i++){
              sum = a + b;
              a = b;
              b = sum;
              console.log(sum)
          }  
  ```

- ```
      var money = 100;
      var chu = 0;
      // 设买i只公鸡
      for(var i = 0 ;i < 20 ;i++){
          // 设买j只母鸡
          for(var j = 0;j<33 ;j++){
              // 买小鸡的个数为：
              chu = 100-i-j;
              if(i*5 + j*3 +(chu/3) == 100 && i + j + chu ==100){
                  console.log(`买了${i}只公鸡，${j}只母鸡，${chu}只小鸡`)
              }
          }
      }
       
  ```

- ```
      var sum = 0;
      for(var i = 2; i <= 100; i++){
          var flag = true;
          for(var j = 2; j < i;j++){
              if(i%j == 0){
                  flag = false;
              }
          }
          if(flag){
              sum += i;
          }
      }
      console.log(sum);
  ```

- ```
  -------------------------------------------------------------------------------
  ```
        //水仙花数指一个3位数，他的每个位上的数字的3次幂之和等于他本身
        //(列如：1^3+5^3+3^3 =153) 请打印所有100到1000以内的水仙花数
        for (var i = 100; i < 1000; i++) {
            //判断百位
            var bai = parseInt(i / 100)
             //获取十位的数字
            var shi = parseInt((i - bai * 100) / 10);
            //获取个位数字

            var ge = i % 10;
            if (bai * bai * bai + shi * shi * shi + ge * ge * ge == i) {
                console.log(i)
            }
        }


- ```
      var money = 20;
      var count = 0;
      for(; money >= 3 ;count++){
          money -= 3;
          money += 1; 
      }
      console.log(count);
  ```

- ```
      var hong,bai,hei;
      for(hong = 0; hong < 28;hong++){
          for(bai = 0 ;bai < 26;bai++){
              hei = 28-hong;
              if(hong+bai == 32 && hong+hei == 28 && bai+hei == 26){
                  console.log(`红球有${hong}个，白球有${bai}个，黑球有${hei}个`);
              }
          }
      }
  ```

- ```
  var xiao = 0,you = 1,cheng = 0;
      for(var i = 1 ; i <= 8;i++){
          cheng +=xiao;
          xiao = you;
          you = cheng ;
      }
      console.log(`8个月后成兔有${cheng}只，小兔有${xiao}只，幼兔有${you}只`);
  
  ```

- ```
      for (var i = 100; i <= 999; i++) {
          var a, b, c;
          a = parseInt(i / 100);
          b = parseInt(i / 10 % 10);
          c = parseInt(i % 10);
          if (a == c) {
              console.log(i);
          }
      }
  ```

- ```
    let res = 0;
              for (let i = 100; i <= 999; i++) {
              res = Math.pow(parseInt(i / 100), 3) + Math.pow(parseInt(i / 10 % 10), 3) + Math.pow(parseInt(i % 10 % 10), 3);
              if (i == res) {
                      console.log(i);
                  }
              }
  ```

- ```
   var year = prompt('请输入年');
      var mouth = prompt('请输入月');
      var day = Number(prompt('请输入日'));
      var days = 0;
      for (var i = 1; i < mouth; i++) {
          //判断月份
          if (i === 1 || i === 3 || i === 5 || i === 7 || i === 8 || i === 10 || i === 12) {
              days += 31;
          } else if (i === 4 || i === 6 || i === 9 || i === 11) {
                     days+=30;
          }else {
              //判断平年闰年
              if (year%4===0&&year%100!==0 ||year%400===0){
                      days+=29;
                  }else {
                      days+=28;
              }
          }
      }
  
  ```

- ```
  let j = 1
      for (let i = 1; i <= 1000; i++) {
        if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
          document.write(i + '\n')
          j++
        }
        if (j % 7 == 0) {
          document.write('</br>')
          j = 1
        }
      }
  ```

  

7.js中的数组

- ```
   var score = [98,98,99,96,92]
  ```

- ```
      var score = [98,98,99,96,92]
      var max = score[0];
      for(var i = 0;i < score.length;i++){
          if(score[i] > max){
              max = score[i];
          }
      }
      console.log(max);
  ```

- ```
      var score = [98,98,99,96,92]
      var min = score[0];
      for(var i = 0;i < score.length;i++){
          if(score[i] < min){
              min = score[i];
          }
      }
      console.log(min);
  ```

- ```
      var score = [98,98,99,96,92]
      score.pop();
  ```

- ```
      var score = [98,98,99,96,92]
      score.shift();
  ```

- ```
      var score = [98,98,99,96,92]
      score.shift();
      score.pop()
      var sum = 0;
      for(var i = 0;i < score.length;i++){
          sum += i;
      }
      var average = sum/score.length;
      console.log(average);
  ```

- arr.length

- ```
      var score = [98,98,99,96,92]
      score.push(96);
  ```

- ```
      var score = [98,98,99,96,92]
      score.unshift(91);
  ```

- ```
      var str = ['hello', 'js'] ;
      str = str.join();
  ```

- ```
      var str = 'abcde';
      str = str.split('');
  ```

- ```
      var sum = 0.;
      var score = [];
     while(1){
      var key = prompt('请输入成绩');
      var i = 0 ;
      if(key =='end'){
         break;
      }
      else{
          score.push(+key);
          sum += +key;
      }
     }
  ```

- ```
      var score =[86, 95, 96, 59, 88];
      var sum = 0;
      for(var i = 0;i < score.length;i++){
          sum += i;
      }
      var average = sum/score.length;
      
  ```

- ```
   arr = [86, 95, 96, 59, 88]
      let score = +prompt()
      let m
      let bool = arr.reduce((pre_element, cur_element) => {
          if (score == cur_element)
              m = true
          return m
      }, score)
      if (bool) {
          alert('已存在')
      } else {
          arr.push(score)
          alert('已添加')
      }
      console.log(arr);
  
  ```

- ```
      var arr =[1, 2, 3, 4, 5, 6, 4, 5, 6, 7];
      var ou = [];
      for(var i = 0;i < arr.length;i++){
          if( i % 2 == 0){
              ou.push(i);
          }
      }
      console.log(ou);
  ```

- ```
  求最小乘积(例:45=335)因为为不可分割的质数
  ```

- ```
   var sc = [97,95,96,90,94,96,94,97,99,92] ;
      var third;
      var mid =[];
      for(var i = 0;i < sc.length;i++){
          for(var j = i+1;j < sc.length;j++){
              if(sc[i] > sc[j]){
                  third = sc[j];
                  sc[j] = sc[i];
                  sc[i] = third;
              }
          }
      }
      sc.pop();
      sc.shift();
      var sum = 0;
      for(var k = 0;k < sc.length;k++){
          sum += sc[k];
      }
  ```

- ```
      function quchong(arr){
          var newarr = [];
          for(var i = 0;i < arr.length;i++){
              if(newarr.indexOf(arr[i]) == -1){
                  newarr.push(arr[i]);
              }
          }
          return newarr;
      }
      var arr = [98, 98, 99, 96, 92, 93, 94, 99, 96];
      console.log(quchong(arr));
  ```

- ```
      var arr =[98, 98, 99, 96, 92, 93, 94, 99, 96];
      arr.sort();
      console.log(arr);
  ```

- ```
   let nums = [2, 7, 11, 15, 7, 3, 6];
      let target = 9;
      nums.forEach((cur1, index1) => {
        nums.forEach((cur2, index2) => {
          if (target == cur1 + cur2 && index1 < index2) {
            console.log(index1, index2);
          }
        })
      })
      let nums = [2, 7, 11, 15, 7, 3, 6];
      let target = 9;
      nums.forEach(function (cur1, index1) {
        nums.forEach(function (cur2, index2) {
          if (target == cur1 + cur2 && index1 < index2) {
            console.log(index1, index2);
          }
        })
      })
  ```

8.js中的函数

- ```
      function hanshu(){
          console.log('我是一个函数');
      }
      hanshu();
  ```

- ```
      function add(a,b){
          var sum = a + b;
          return sum
      }
  ```

- 具名函数，故名思意就是有名字的函数；匿名函 数就是没有名字的函数

- ```
      function add(n){
          var sum = 0;
          for(var i = 0;i < n;i++){
              sum += i;
          }
          return sum
      }
  ```

- ```
   var arr = [2,3,4,5,6,7];
      function scale(){
          var newarr = [];
          for(var i = 0;i < arr.length; i++){
              newarr.push(arr[i]*1.3);
          }
          return newarr
      }
  ```

- ```
   function quchong(arr){
          var newarr = [];
          for(var i = 0;i < arr.length;i++){
              if(newarr.indexOf(arr[i]) == -1){
                  newarr.push(arr[i]);
              }
          }
          return newarr;
      }
  ```

- ```
      function big(a,b){
          var arr = [];
          a.forEach((item) => {
              var flag = true;
              b.forEach((bitem) =>{
                  if(item < bitem){
                      flag = false;
                  }
              })
          if(flag){
              arr.push(item)
          }
      })
      return arr;
  }
  ```

- ```
  function slice(a,b){
        var newstr =  a.slice(0,b);
        return newstr
      }
  ```

- ```
      function cutout(string, b, c) {
        // console.log(arguments.length);
        if (arguments.length == 3) {
          return string.split('').splice(b, c)

        } else {
          return string.split('').splice(0, b)
        }
      }
  ```

- ```
  function zhuanhuan(roman){
          var sum = 0;
          var arr = [];
                  var obj = { 
                  'I': 1,
                  'V': 5,
                  'X':10,
                  'L':50,
                  'C':100,
                  'D':500,
                  'M':1000,
              }
          var a = 0;
          var sum = 0
          for(var i = 0;i < roman.length;i++){
              if(obj[roman[i]] < obj[roman[i+1]]){
                 sum -= (obj[roman[i]]);
              }
              else{
                  sum += (obj[roman[i]]);
              }
          }
          return sum
      }
  ```

- ```
   var isPalindrome = function(arr) {
          var flag= true;
          arr = String(arr);
          if(arr < 0){
              flag = false;
          }
          else{
          for(var i = 0;i < arr.length/2;i++){
              if(arr[i] == arr[arr.length-1-i]){
              flag = true;
          }
          else{
              flag = false;
              break;
          }
          }
      }
      return flag;
  };
  ```

  

9.js中的对象

- ```js
   var stu={name:'张三',
  
      age:18,
  
     id:'001'}
  ```

- ```
   var key_arr = [];
      for(var key in stu){
          key_arr.push(key);
      }
  ```

- ```
   var item_arr = [];
      for(var key in stu){
          item_arr.push(stu[key])
      }
  ```

- ```
      function age(){
          var age_arr = [];
          for(var i = 0;i < stu.length;i++){
              if(stu[i].age > 20){
                  age_arr.push(stu[i].name)
              }
          }
          return age_arr;
      }
  ```

- ```
   function id(){
          var id3 = {};
          for(var i = 0;i < stu.length;i++){
              if(stu[i].id == '003'){
                  id3 = stu[i];
              }
          }
          return id3;
      }
  ```

  ```
  // - 上述情况下，写一个函数，返回值是年龄最大和年龄最小的学生的信息组成的数组
      var newarr = [];
      newarr[0] = stu[0];
      newarr[1] = stu[0];
      function twoage(){
          for(var i = 0;i < stu.length;i++){
              if(stu[i].age > newarr[0].age){
                  newarr[0] = stu[i];
              }
              if(stu[i].age < newarr[1].age){
                  newarr[1] = stu[i];
              }
          }
          return newarr
      }
  ```

  