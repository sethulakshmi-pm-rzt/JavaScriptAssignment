const categories = [
  { id: 'E-commerce', parent: null },
  { id: 'Electronics', parent: 'E-commerce' },
  { id: 'Mobiles', parent: 'Electronics' },
  //{ id: 'zzzzz', parent: 'Mobiles' },
  //{ id: 'zzzzzzzzzz', parent: 'Mobiles' },
  { id: 'Laptops', parent: 'Electronics' },
  { id: 'Camera', parent: 'Electronics' },
  { id: 'Lifestyle', parent: 'E-commerce' },
  { id: 'Clothing', parent: 'Lifestyle' },
  { id: 'Footware', parent: 'Lifestyle' },
  { id: 'Grooming', parent: 'Lifestyle' },
  { id: 'Jewellery', parent: 'Lifestyle' },
]
const createObject = ((data, parentId) => {
	//first time parentId will be undefined
  let childObj = data.filter((line) => line.parent == parentId);
  
	const result = childObj.reduce((obj, value) => {
    //passing current line id as next line's parent.
		obj[value.id] = createObject(data, value.id)
		return obj;
	}, {});
	return result;
});
console.log("Result : \n", createObject(categories));
