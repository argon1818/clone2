
function btnclick(){
    var sidebar = document.querySelector("#accordian");
   // var closeBtn = document.querySelector("menubar");
   // let searchBtn = document.querySelector(".bx-search");
    sidebar.classList.toggle("open");
    
  
}

$('#numberr').on('keyup', function(e){
    var val = $(this).val();
    var newval = '';
    val = val.replace(/\s/g, '');

    // iterate to letter-spacing after every 4 digits
    for(var i = 0; i <val.length; i++) {
      if(i%4 == 0 && i > 0) newval = newval.concat(' ');
      newval = newval.concat(val[i]);
    }

    // format in same input field
    $(this).val(newval);
   });

