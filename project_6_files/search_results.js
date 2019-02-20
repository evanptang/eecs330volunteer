var results = {};
results["habitat"] = ['outdoors','groups','family'];
results["shelter"] = ['animals','groups'];
results["cps"] = ['education','family','accessible'];
var interests = [];
var morefilters = [];


function updateInterests(clickedItem) {
    
    if (interests.includes(clickedItem)) {
                 interests.splice(interests.indexOf(clickedItem),1);
        }
        else {
                interests.push(clickedItem);
}
console.log(interests);

}

function updateMoreFilters(clickedItem){
    if (morefilters.includes(clickedItem)) {
            morefilters.splice(morefilters.indexOf(clickedItem),1);
        }
        else {
            morefilters.push(clickedItem);
}
console.log(morefilters);

}


function updateFilter() {
for(var key in results) {
  var value = results[key];
  console.log(value);
  var e = document.getElementById(key);
  console.log(e);
  var interest_match = interests.some(r=> value.includes(r));
  var morefilters_match = morefilters.every(r=> value.includes(r))
    if (interest_match && morefilters_match) {
          e.style.display = 'block';
          console.log("element displayed");
       } else {
          e.style.display = 'none';
          console.log("element hidden");
       }
    }

  }

