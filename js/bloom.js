$(document).ready(function() {

//code for parsing the chips.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $('chip').each(function(index, object) {

        var attr = $(object).attr('id');
        var classe = $(object).attr('class');

        if (typeof classe === typeof undefined || classe === false) {

          $(object).attr('class','');
          console.log($(object).attr('class'));
        }

        if (typeof attr !== typeof undefined && attr !== false) {

            start = '<div id="'+attr+'" class="bloom-chip '+$(object).attr('class').replace(/\\bloom-chip/, "")+'">';
          }
        else {

            start = '<div class="bloom-chip '+$(object).attr('class').replace(/\\bloom-chip/, "")+'">';
        }

        var attr = $(object).attr('persistent');

        if (typeof attr !== typeof undefined && attr !== false) {

          $(object).replaceWith(start+' <img class="pic" src="' + $(object).attr('img') + '"> <p>' + $(object).text() + '</p></div>')
        } else {
          $(object).replaceWith(start+' <img class="pic" src="' + $(object).attr('img') + '"> <p>' + $(object).text() + '</p> <button class="close">x</button> </div>')
        }


    })
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//code for parsing the snacks
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////














////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

});
