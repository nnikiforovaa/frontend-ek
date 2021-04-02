btn.addEventListener("click", f_out);

  function f_out (){
      bmi = Number(weight.value) / (Number(height.value)*Number(height.value));
      result.innerHTML ="ИМТ = "+bmi;
    
  }
