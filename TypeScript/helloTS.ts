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