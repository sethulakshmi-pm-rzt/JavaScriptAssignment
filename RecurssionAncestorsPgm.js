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

const createObject = function(data, parentId) {

	var obj = {};
	var childrenObj = [];
	
	if(parentId == undefined) {
		childrenObj = data.filter((item) => item.parent == null);
	}
	else {
		childrenObj = data.filter((item) => item.parent == parentId);
	}
	
	if(childrenObj.length == 0) {
		return obj;
	}
	else {	
		for(var i=0;i<childrenObj.length;i++)	{
			var key = childrenObj[i].id;
			obj[key] = createObject(data, childrenObj[i].id);
		}
	}
	
	return obj;
}

console.log("Resulttt : ", createObject(categories))