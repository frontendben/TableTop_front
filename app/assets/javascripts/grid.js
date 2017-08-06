//= require jquery
//= require jquery_ujs
//= require_tree


/* drag elements */
$(function () {
            /* drag pallets */
            $("#brush1").draggable();
            $("#brush2").draggable();
    
    
            /* drag tiles */
            $(".square").draggable({
                snap: ".squaredotted",
                snapMode: "inner",
                helper:"clone",
                zIndex:3,
                appendTo: "body",
                revert: "invalid",
            
        });
    
            $(".square2").draggable({
                snap: ".squaredotted",
                snapMode: "inner",
                helper:"clone",
                zIndex: 4,
                appendTo: "body",
                

        });
            $(".roof").draggable({
                snap: ".squaredotted",
                snapMode: "inner",
                helper:"clone",
                zIndex: 5,
                appendTo: "body",


        });
    
            $(".roof1").draggable({
                snap: ".squaredotted",
                snapMode: "inner",
                helper:"clone",
                zIndex: 5,
                appendTo: "body",


        });
    
            $(".wall").draggable({
                snap: ".squaredotted",
                snapMode: "inner",
                helper:"clone",
                zIndex: 5,
                appendTo: "body",


        });
    
            $(".table").draggable({
                snap: ".squaredotted",
                snapMode: "inner",
                helper:"clone",
                zIndex: 5,
                appendTo: "body",


        });
    
            $(".tree").draggable({
                snap: ".squaredotted",
                snapMode: "inner",
                helper:"clone",
                zIndex: 5,
                appendTo: "body",


        });
    
            $(".door").draggable({
                snap: ".squaredotted",
                snapMode: "inner",
                helper:"clone",
                zIndex: 5,
                appendTo: "body",


        });
    
            $(".wind").draggable({
                snap: ".squaredotted",
                snapMode: "inner",
                helper:"clone",
                zIndex: 5,
                appendTo: "body",


        });
    
            $(".well").draggable({
                snap: ".squaredotted",
                snapMode: "inner",
                helper:"clone",
                zIndex: 5,
                appendTo: "body",


        });
    
            $(".water").draggable({
                snap: ".squaredotted",
                snapMode: "inner",
                helper:"clone",
                zIndex: 4,
                appendTo: "body",


        });
/* trash can to delete tiles */
            $('#trash').droppable({
                drop: function(event, ui) {
                ui.draggable.remove();
        }
        });
    
/* clone tiles when dropped into square */
    $('.squaredotted').droppable({
        accept: ".square, .square2, .roof, .roof1, .wall, .table, .tree, .door, .wind, .well, .water",
        drop: function(event, ui) {
            var droppable = $(this);
            var draggable = ui.draggable;
            
/* Move draggable into droppable*/
            var drag = $('.squaredotted').has(ui.draggable).length? droppable : draggable.clone().draggable({
                revert: "invalid",            
                snap: ".squaredotted",
                snapMode: "inner",
                }).css({
                position: 'absolute',
          
                
         });

                drag.appendTo(droppable);
  }


});

});

/*resize functions for pallets*/
$( function() {
    $( "#brush1" ).resizable();
  } );

$( function() {
    $( "#brush2" ).resizable();
  } );

/*show and hide functions for pallets*/

function showb1() {
    var x = document.getElementById('brush1');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function showb2() {
    var x = document.getElementById('brush2');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

/*Function to save the map*/
$(function() { 
    $("#Save").click(function() { 
        $('.squaredotted').css("border-color", 'black');

        html2canvas($("#gameboard"), {
            onrendered: function(canvas) {
                theCanvas = canvas;
                var img = canvas.toDataURL("image/png")
                window.open(img);
            }
        });
    });
}); 
