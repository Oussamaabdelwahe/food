function storage(categorie,name,img,price,phone){
	return {
		categorie:categorie,
		img:img,
		price:price,
		name:name,
        phone:phone
	}
}
var array=[]
	


array.push(storage('ice-cream','ice-cream2','image/ice-cream2.jpeg','15 dt'))
array.push(storage('ice-cream','ice-cream3','image/ice-cream3.jpg','16 dt'))
array.push(storage('chocolate','chocolate1','image/chocolate1.jpeg','12 dt'))
array.push(storage('chocolate','chocolate2','image/chocolate2.jpg','20 dt'))
array.push(storage('cake','cake1','image/cake1.jpg','35 dt'))
array.push(storage('cake','cake2','image/cake2.jpg','40 dt'))
array.push(storage('cake','cake3','image/cake3.jpg','60 dt'))
array.push(storage('cake','cake4','image/cake4.jpg','65 dt'))
array.push(storage('cake','cake5','image/cake5.jpg','63 dt'))
array.push(storage('juice','juice1','image/juice1.jpg','9 dt'))
array.push(storage('juice','juice2','image/juice2.jpeg','8 dt'))
array.push(storage('juice','juice3','image/juice3.jpg','7 dt'))
array.push(storage('sandwich','sandwich1','image/sandwich1.jpg','25 dt'	))
array.push(storage('sandwich','sandwich2','image/sandwich2.jpg','26 dt'))
array.push(storage('sandwich','sandwich3','image/sandwich3.jpg','19 dt'))
array.push(storage('sandwich','sandwich4','image/sandwich4.jpg','18 dt'))
$('#contact').click(function(){
    alert('50259607 call us for more information')
})





var each = function (coll,func){
    if (Array.isArray(coll)){
        for (var i =0;i<coll.length;i++){
        func(coll[i],i)
    }
    }
    else {
        for (var key in coll){
            func(coll[key],key)
        }
    }
}
var filter = function(array,predicate){
var acc = [];
each(array,function(e,i){
    if (predicate(e,i)){
        acc.push(e)
    }
})
return acc;
}
 function displayElement (arr){
    each(arr, function(e,i){
        var div=$(`<a class="image ice-cream"><img src="${e.img}"> </a><div>${e.price}</div>`)
        
          div.appendTo($('.image-container') )
          })
 } 
 displayElement(array)



function chocolate(arr){
    return filter(arr,function(e,i){
        return e.categorie === "chocolate"
    })
}
$("#chocolate").click(function(){
    console.log('hi')
    $(".image-container").empty()
    displayElement(chocolate(array))

})
function icecream(arr){
    return filter(arr,function(e,i){
        return e.categorie === "ice-cream"
    })
}
$("#ice-cream").click(function(){
    $(".image-container").empty()
    displayElement(icecream(array))
})
function cake(arr){
    return filter(arr,function(e,i){
        return e.categorie === "cake"
    })
}
$("#cake").click(function(){
    $(".image-container").empty()
    displayElement(cake(array))
})

function juice(arr){
    return filter(arr,function(e,i){
        return e.categorie === "juice"
    })
}
$("#juice").click(function(){
    $(".image-container").empty()
    displayElement(juice(array))
})
function sandwich(arr){
    return filter(arr,function(e,i){
        return e.categorie === "sandwich"

    })
}
$("#sandwich").click(function(){
    $(".image-container").empty()
    displayElement(sandwich(array))
})


