$(document).ready(function() {

  $("form#calculator").submit(function(event) {
    var total = 0;
    var userCountTo = $("input#input1").val();
    var userCountBy = $("input#input2").val();
    // var array = [];
    console.log(userCountTo);
    console.log(userCountBy);
    for (var index = 0; index <= parseInt(userCountTo); index += parseInt(userCountBy)) {

    total += [", " + index];

    }

    alert(total);
    event.preventDefault();

  });
});
