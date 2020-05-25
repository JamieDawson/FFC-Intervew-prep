function Queue() {
    var collection = [];
    this.print = function() {
      console.log(collection);
    };
    // Only change code below this line
  this.enqueue = function(val){
    collection.push(val);
  }
  
  this.isEmpty = function(){
    if (collection.lenght >= 1)
      return false;
  }
  
  this.front = function(){
    return collection[0];
  }
  
  this.size = function(){
    return collection.length;
  }
  
  this.dequeue = function(){
   return collection.shift();
  }
    // Only change code above this line
  }
  