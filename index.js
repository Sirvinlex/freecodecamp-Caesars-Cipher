function rot13(str) {
  let myArr = [];
  let myArr2 = [];
  let myStr = str.toUpperCase();
  let myStrArr = myStr.split('');
  let myRegex = /[A-Z]/
  let myResult = myStrArr.map((item, i) =>{
    if (myRegex.test(item) === true) return item.codePointAt(0)
    if (myRegex.test(item) === false) return item
  })
  myResult.map((item, i) =>{
    if ((typeof item === 'number') && (item + 13 > 90)){
      myArr.push(item - 13)
    }
    else if ((typeof item === 'number') && (item - 13 < 65)){
      myArr.push(item + 13)
    }
    else{ myArr.push(item)}
  })
myArr.map((item) =>{
  if (typeof item === 'number'){
      myArr2.push(String.fromCharCode(item))
    }else{ myArr2.push(item)}
})
  console.log(myArr2.join(''))

  return myArr2.join('');
}


rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")