function add(x: number, y: number): number {
    return x + y;
  }



  
  const myAdd = function (x: number, y: number): number {
    return x + y;
  };

  //add(2,5)
  //myAdd(2,6)

 // type MyAddPlus = (x:number,y:number)=>number


  let myAddPlus: (x: number, y: number) => number = function (
    x: number,
    y: number
  ): number {
    return x + y;
  };



  //Debug

  function buildName(firstName: string="", lastName: string) {
    return firstName + " " + lastName;
  }
  
  let result1 = buildName("Bob"); // error, too few parameters
  //Expected 2 arguments, but got 1.
  
  let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
  //Expected 2 arguments, but got 3.
  
  let result3 = buildName("Bob", "Adams"); // ah, just right

  //let result4 = buildName(); 


// Void

  function myName(fName:string,lName:string):void{
      console.log(fName+" "+lName)

  }