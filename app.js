var randomColor=[];
var randomElement=[];
var colors=[];
var level=6;
var randomSquare;
changeHardness();
start(level);
restart();


function changeHardness(){
    $('#easy-btn').on('click', function(){
        level=3;
        start(level);
    });
    $('#hard-btn').on('click', function(){
        level=6;
        start(level);
    });
}
function start(level){
    colors=[];
    $('#message').text('');
    $('#start-button').text('NEW COLORS');
    $('.squares').removeClass('squareFadeOut');
    if(level===3){
        $('#hard-level').hide();
        $('#easy-btn').addClass('buttonsActive');
        $('#hard-btn').removeClass('buttonsActive');
    }
    if(level===6){
        $('#hard-level').show();
        $('#hard-btn').addClass('buttonsActive');
        $('#easy-btn').removeClass('buttonsActive');
    }
    $('.squares').css('visibility', 'visible');
    $('#main-title').css('backgroundColor', '#272727');
    colorSelectionSquares(level);
    colorSquares();
    randomSquareHandler(level);
    check();
}
function restart(){
    $('#start-button').on('click', function(){
        start(level);
    });
}

function randomColorHandler(){
    for(let j=0; j<3; j++){
        var random=Math.floor(Math.random() * 256);
        randomColor.push(random);
    }
    return randomColor;
}

function colorSelectionSquares(n){
    for(let i=0; i<n; i++){
        randomColor=[];
        randomColorHandler();
        colors.push([randomColor]);
    }
    return colors;
}

function colorSquares(){
    var squareElements=$('.squares').toArray();
    for(let i=0; i<colors.length;i++){
        var rgbFull=colors[i].toString();
        $(squareElements[i]).css('background', 'rgb('+rgbFull+')');
    }
}
function randomSquareHandler(n){
    randomSquare=Math.floor(Math.random()*n);
    randomElement=colors[randomSquare];
    var spacedRgb=randomElement[0];
    text=spacedRgb.join(', ');
    $('#rgb-color').css('fontSize', '2.2rem');
    $('#rgb-color').text('RGB('+text+')');
    return text;
 }

function check(){
    $('.squares').on('click', function(){
        var rgbtext=$(this).css("backgroundColor");
        var newText='rgb('+text+')';
        if(rgbtext===newText){   
            $('#main-title').css('backgroundColor', newText);
            $('.squares').css('backgroundColor', newText);
            $('#start-button').text('PLAY AGAIN');
            $('#message').text('Correct!');
        }else{
            $(this).addClass('squareFadeOut');   
            $('#message').text('Incorrect!');
        }
    });
}
