//2
var booka=require("./book.js")();
var bookb=require("./book.js")();
booka.rate(20);
bookb.rate(30);
console.log(booka.getpoints(),bookb.getpoints());