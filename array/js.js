let question_arr = ['1) Що з переліку НЕ належить до форм фінансової звітності?','2) Що НЕ належить до принципів фінансового аналізу?', '3) За методом дослідження фінансовий аналіз буває…',
    '4) Один з принципів складання фінансової звітності – це…', '5) Які існують методи складання звіту про рух грошових коштів?', '6) НЕ належить до методів нарахування амортизації…',
'7) Коефіцієнт реальної вартості майна має бути…', '8) Фінансові ресурси підприємства складаються з…', '9) Сума амортизації об’єкта з початку його корисного використання – це…', '10) Формула фондоозброєності – це приклад …']
let a1_arr = ['Звіт про фінансові результати', 'Науковість', 'Трендовий', 'Принцип підбору даних', 'Зовнішній, внутрішній', 'Виробничий', 'Більше 0,5', 'Власного капіталу і зобов’язань', 'Ліквідаційна вартість', 'Адативної формули']
let a2_arr = ['Звіт про рух грошових коштів', 'Оперативність', 'Мультиплікативний', 'Принцип об’єктивності', 'Кратний, адативний', 'Прямолінійний', 'Менше 0,5', 'Резервного і основного капіталу','Зношування', 'Мультиплікативної формули']
let a3_arr = ['Звіт про зобов\'язання та оборотні активи', 'Cистемність', 'Адативний', 'Принцип характерності', 'Вертикальний, горизонтальний', 'Стохастичний', 'Дорівнювати 0,5', 'Активів і пасивів', 'Загальна амортизація', 'Комбінованої формули']
let a4_arr = ['Звіт про сукупні доходи', 'Фундаментальність', 'Тематичний', 'Принцип фондоозброєності', 'Прямий, непрямий', 'Кумулятивний', 'Від -0,5 до 0,5', 'Активів, пасивів і основного капіталу', 'Збиткова вартість', 'Кратної формули']
let answer_arr = ['Звіт про зобов\'язання та оборотні активи', 'Фундаментальність', 'Трендовий', 'Принцип підбору даних', 'Прямий, непрямий', 'Стохастичний', 'Більше 0,5', 'Власного капіталу і зобов’язань', 'Зношування', 'Кратної формули']


let n_right_answer_arr=[3,4,1,1,4,3,1,1,2,4 ];
let n_answer = 9;
let right_answers = 0;


question.innerHTML = question_arr[n_question.value];
a1.innerHTML = a1_arr[n_question.value];
a2.innerHTML = a2_arr[n_question.value];
a3.innerHTML = a3_arr[n_question.value];
a4.innerHTML = a4_arr[n_question.value];
answer.innerHTML = answer_arr[n_question.value];

n_right_answer = n_right_answer_arr[n_question.value];
console.log(n_question.value)
btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);
function f_out (){
    console.log(y1.checked);
    console.log(y2.checked);
    console.log(y3.checked);
    if (y1.checked){ n_a = 1;}
    if (y2.checked){ n_a = 2;}
    if (y3.checked){ n_a = 3;}
    if (y4.checked){ n_a = 4;}
    console.log(n_a);
    if (n_a == n_right_answer){
        right_answers += 1;
        answer.classList.add("hidden");
        right_div.classList.remove("hidden");
        wrong_div.classList.add("hidden");
        console.log("n_question.value = "+n_question.value);
        console.log("n_answer = "+n_answer);
        console.log("right_answ = "+right_answers);
        if (n_question.value == n_answer){
            btn.classList.add("hidden");
            btn2.classList.add("hidden");
            let el1 = document.createElement("p");
            el1.innerHTML = "<b> Кількість правильних відповідей:  " +right_answers+"</b>";
            right_div.appendChild(el1);
            resa.classList.remove("hidden");
        }
    }else{
        right_answers-=1;
        right_div.classList.add("hidden");
        wrong_div.classList.remove("hidden");
    }





}
function f_out1 (){
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
}
function f_out2 (){
    right_div.classList.add("hidden");
    k = Number(n_question.value);
    k+=1;
    n_question.value = k;
    console.log(n_question);
    question.innerHTML=question_arr[n_question.value];
    a1.innerHTML = a1_arr[n_question.value];
    a2.innerHTML = a2_arr[n_question.value];
    a3.innerHTML = a3_arr[n_question.value];
    a4.innerHTML = a4_arr[n_question.value];
    answer.innerHTML = answer_arr[n_question.value];
    n_right_answer = n_right_answer_arr[n_question.value];
}

