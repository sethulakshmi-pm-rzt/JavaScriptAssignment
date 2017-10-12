const data = "Vinoj, Licence for webstorm, 1000, 2\nVinoj, Food and expences, 500, 1\nVinoj, Notebook, 20, 5\nNanha, Licence for UX PIN, 2000, 4\nNanha, Travel expences, 250, 1\nNanha, Food and expences, 400, 2";
let newData = data.split("\n");
//console.log("Data ", newData);

  let reduceValue = newData.reduce((acc, value) => {
    let newObj = {};
    //let ar = [];
    let newStr = value.split(",")
    //console.log("ee", newObj)
    newObj= {["Desc"]: newStr[1], ["Price"]: newStr[2], ["Quantity"]: newStr[3]}
    acc[newStr[0]] = acc[newStr[0]] || [];
    acc[newStr[0]].push(newObj)
    //console.log("gg", acc[newStr[0]])
    return acc;
  }, {})
  console.log(reduceValue)
