let colors = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 
'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick','crimson']


$('#addBall-btn').on('click',function(){
    let color = colors[Math.floor(Math.random()*15)];   
    let addBall = $("<div class='ball'></div>");
    addBall.css('backgroundColor',`${color}`);
    $('#basket').append(addBall);

    addBall.on('click',function(){
        addBall.removeClass('ball');
        addBall.css('backgroundColor','red')
        addBall.toggleClass('heart');
    });
})
