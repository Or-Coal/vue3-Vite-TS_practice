// 声明变量类型
let b: string
b = 'hello'
// b=123

// 如果变量的声明和赋值同时进行,TS可以自动对变量进行类型检测
let c = false
// c = 'aaa'

// 函数形参进行类型声明 函数返回值进行类型声明
function sum(a: number, b: number) :number{
    return a + b;
}
// sum(123,'456',789)
let result = sum(123,456)

// 对变量的复杂设置
// 字面量类型
let d :'hello' | 'nihao'
d = "hello"
// d = "aaa"
let e :  string
// let e : boolean | string
// e = false 
e = 'aaa'

// any 任意类型 如果是any类型，它可以赋值给任意变量（不仅影响自己，也影响它人，不建议使用）
let f : any
// unknown 表示未知类型 只霍霍自己 是一个类型安全的any
// unknown 类型的变量 不能直接赋值给其他变量
let g :unknown
g = 'jinjin'
// e = g 会报错
// 1.但是如果加一个判断
if(typeof g === 'string'){
    // 不会报错
    e = g
}
// 类型断言 也不会报错
e = g as string
/*
语法:
变量 as 类型
<类型>变量
*/

// void用来表示空，以函数为例，就表示没有返回值的函数
function fn1() :void{
    // 这个函数其实还是有空这个返回值的
}
// never 表示永远不会返回结果 报错用的 函数停止了就没有返回值了
function fn2 ():never{
throw new Error('报错了!')
}

// object 表示一个js对象
let a:object
// 都是一个对象 对其限制作用不大
a={}
a=function(){}
// 我们最想要限制的是里面的属性
// {}用来指定对象中可以包含哪些属性
// 语法:{属性名:属性值}
let h:{name:string};
h = {name:'孙悟空'}
// 在属性名后边加上?,表示属性是可选的
let j:{name:string,age?:number};
j = {name:'孙悟空',age:18}
// [propName:string]字符串类型的属性名
let i:{name:string,[propName:string]:any}
// 定义只能传两个参数 返回值为number一个函数的类型声明
let k :(a:number,b:number)=>number
k = function(n1,n2):number{
    return n1+n2
}

//数组类型的声明
//1.类型[] 2.Array<类型>
// 数组 字符串类型数组
let l:string[]
l = ['a','b','c']
// 表示数值类型数组
let m:Array<number>

// 元组，元组就是固定长度的数组 语法[类型，类型，类型]
let n:[string,string]

// enum 枚举 
// 定义枚举类
enum Gender{
    Male = 0,
    Female = 1
}
let o:{name:string,gender:Gender}
o = {
    name:'孙悟空',
    gender:Gender.Female
}
 
// &表示同时
// 这样写本身就是错误的
let p:string&number
let q:{name:string} & {age:number}

// 类型的别名
type myType = 1|2|3|4|5;
let r : myType