function hello(){
    document.write("welcome shahzad")
}

 

function totalPercentage(){
    
   const obtainMark=document.querySelector("#obtainMarks")

    
    const totalMark=document.querySelector("#totalMarks")
    const obtain=obtainMark.value
    const total=totalMark.value
    console.log(totalMark)
    const obtNumber=Number(obtain)
    const totalNumber=Number(total)

    const percentage=obtNumber/totalNumber*100

  const currentPercentage=document.querySelector(".result")
currentPercentage.innerText=percentage

    
    
   
}
  



