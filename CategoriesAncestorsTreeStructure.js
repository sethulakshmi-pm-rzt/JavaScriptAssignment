const categories = [
  { id: 'E-commerce', parent: null },
  { id: 'Electronics', parent: 'E-commerce' },
  { id: 'Mobiles', parent: 'Electronics' },
  { id: 'Laptops', parent: 'Electronics' },
  { id: 'Camera', parent: 'Electronics' },
  { id: 'Lifestyle', parent: 'E-commerce' },
  { id: 'Clothing', parent: 'Lifestyle' },
  { id: 'Footware', parent: 'Lifestyle' },
  { id: 'Grooming', parent: 'Lifestyle' },
  { id: 'Jewellery', parent: 'Lifestyle' },
]

const recurssion = (data, rootVal) => {
  const convert = data.reduce((result, line) => {
      if(line.parent === null) {
      rootVal = line.parent;
      result[line.id] = {};
    }
    if(line.parent in result) {
      rootVal = line.parent
      result[line.parent][line.id] = {};
    }
    
    //return rootVal === null ? result : recurssion(data, rootVal)
    return result
  }, {});
  return convert
}

console.log("Resulttt : ", recurssion(categories))