// 기초 형태
// $(selector).action()

// 요소 지정
// $("p"), $("#id") ,$(".classname"), $("*"), $("div : p") 이런식으로 지정

//행동 지정
// mouse : click, dbclick, mouseenter, mouseleave
// keyboard : keypress, keydown, keyup 
// document : load, scroll
// form, input : focus, blur, submit 


$(document).ready(function() {

    console.log("test")

    $("#showBtn").click(function(){
        console.log("show")
        $('p').show();
    });

    $("#hideBtn").click(function(){
        console.log("hide")
        $('p').hide();
    });

    $("#toggleBtn").click(function(){
        console.log("toggle")
        $('p').toggle();
    });

    $("#menuBtn").click(function(){

        $('#panel').slideToggle();
    })

    $('#submit').click(function(){

        let username = $('#userInput').val();
        $('#result').append(" " + username); //"" 뒤에 username 추가
        //$('#result').prepend(" " + username); "" 앞에 username 추가


    })


    // let el = $('<p></p>').text("this is a paragraph!!!")
    // $('#menuBtn').append(el);

    // $().after    $().before   $().remove()

    $('#applyClass').click(function(){


        $('#result').addClass("center"); //result 요소에 center라는 이름의 클래스 추가
        $('#result').css("color","red")
        $('#result').css("background-color","aqua")

    })
})