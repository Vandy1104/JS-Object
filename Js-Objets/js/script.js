console.log('Objects');

// Objects are data type that can store different types of data
// Objects can contain functions called methods.
// Objects have properties and values.
// Called key-value pair
// Objects are declared with curley braces
//Object property value is separated by comma
//Object property and its value is separated by colon
// An array of objects are separated by comma

//var dog = {name: 'John', age:7, height:40};

document.getElementById('dog1').addEventListener('click', function dog1(){
//Another way of declaring object
var dog1 = {
  name:'John',
  age: 7,
  height: 40,
  photo: 'images/john.jpeg'
};

//Access prooperty values
$('#result1').show();
$('#result2').hide();

document.getElementById('result1').innerHTML += ' <br><br><br> The name of the dog is ' +  dog1.name;
document.getElementById('result1').innerHTML += '<br><img class= "img-thumbnail" src="' + dog1.photo + '" alt= "dog1">';
document.getElementById('result1').innerHTML += ' <br> The Age of the dog is ' +  dog1.age + ' years';
document.getElementById('result1').innerHTML += ' <br> The Height of the dog is ' +  dog1.height + 'cm';
});

// Dog 2 begins

document.getElementById('dog2').addEventListener('click', function(){

var dog2 = {
  name:'Sam',
  age: 10,
  height: 45,
  breed: 'labrador',
  male: 'true',
  photo: 'images/sam.jpeg'
};

//Access prooperty values
$('#result2').show();
$('#result1').hide();
document.getElementById('result2').innerHTML += ' <br><br><br> The name of the dog is ' +  dog2.name;
document.getElementById('result2').innerHTML += '<br><img class= "img-thumbnail" src="' + dog2.photo + '" alt= "dog2">';
document.getElementById('result2').innerHTML += ' <br> The Age of the dog is ' +  dog2.age + ' years';
document.getElementById('result2').innerHTML += ' <br> The Height of the dog is ' +  dog2.height + 'cm';
document.getElementById('result2').innerHTML += ' <br> The Height of the dog is ' +  dog2.breed;

if (dog2.male === 'true') {
document.getElementById('result2').innerHTML += ' <br> The Gender of the dog is male';
} else {
  document.getElementById('result2').innerHTML += ' <br> The Gender of the dog is Female';

}
});

document.getElementById('change').addEventListener('click', function(){
  var changedName = document.getElementById('dogName').value;
  console.log(changedName);
  //var dogObject = dog1();
  //console.log(dogObject);
});
