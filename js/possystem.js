/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var BUTTON_ID_ARRAY = ["dashboard-div", "newcustomer-div", "newitem-div", "neworder-div", "vieworder-div",
    "allcustomer-div", "allitem-div", "remcustomer-div", "editcustomer-div", "removeitem-div", "edititem-div"];
var LINK_ARRAY = ["dash", "nc", "ec", "rc", "ac", "ni", "ei", "ri", "ai", "no", "o", "r"];
$(document).ready(function () {
    $("#newcustomer-div").hide();
    $("#newitem-div").hide();
    $("#neworder-div").hide();
    $("#vieworder-div").hide();
    $("#dashboard-div").show();
    $("allcustomer-div").hide();
    $("allitem-div").hide();
    $("editcustomer-div").hide();
    $("remcustomer-div").hide();
    $("removeitem-div").hide();
    $("edititem-div").hide();
});
function loadDiv(div) {
    for (var i = 0; i < BUTTON_ID_ARRAY.length; i++) {
        if (div === BUTTON_ID_ARRAY[i]) {
            $("#" + BUTTON_ID_ARRAY[i]).show();
        } else {
            $("#" + BUTTON_ID_ARRAY[i]).hide();
        }
    }
//    var pare = $(this).attr("id");
//    alert(pare);
}

function addActiveClass(li) {
    for (var i = 0; i < LINK_ARRAY.length; i++) {
        $("#" + LINK_ARRAY[i]).removeClass("active");
    }
    $("#" + li).addClass("active");
//    var id = $(this).attr('id');
//    alert($(this).attr('id'));
//    for (var i = 0; i < LINK_ARRAY.length; i++) {
//        var id = $(this).attr('id');
//        if (id === LINK_ARRAY[i]) {
//            console.log(LINK_ARRAY[i]);
//            $("#" + LINK_ARRAY[i]).addClass("active");
//        } else {
//            console.log(LINK_ARRAY[i] + "------");
//            $("#" + LINK_ARRAY[i]).removeClass("active");
//        }
//    }
}

//
//$("#firstName, #lastName, #city").keydown(function (eventData) {
//    if ((eventData.which >= 96 && eventData.which <= 105) ||
//            (eventData.which >= 48 && eventData.which <= 57)) {
//        eventData.preventDefault();
//    }
//});
//$("#nic").keydown(function (eventData) {
//
//    var re = new RegExp("[0-9]{9}[vV]");
//    var nic = $("#nic").val().toString().trim();
//    if (nic.length === 10) {
//        if (re.test(nic)) {
//            eventData.preventDefault();
//        }else{
//            $("#nic").val("");
//        }
//    }
////    var accept = [8, 46, 33, 34, 35, 36, 37, 38, 39, 40];
////    for (var index in accept) {
////        if (accept[index] === eventData.which) {
////            return;
////        }
////    }
////    if (!((eventData.which >= 96 && eventData.which <= 105) ||
////            (eventData.which >= 48 && eventData.which <= 57))) {
////        eventData.preventDefault();
////}
//});

function newCust() {
    var fName = $("#firstName").val();
    var lName = $("#lastName").val();
    var city = $("#city").val();
    var email = $("#email").val();
    var nic = $("#nic").val();
    var tel = $("#mobile").val();
    var address = $("#address").val();

    if ((fName.length === 0) || (lName.length === 0) || (city.length === 0) || (email.length === 0) || (nic.length === 0) || (tel.length === 0) || (address.length === 0)) {
        alert("Fill all Fields");
    } else {
        var nameReg = /^[A-Za-z]+$/;
        var nicReg = /^[0-9]{9}[vV]/;
        var telReg = /^0[1-9]{9}/;
        var addressReg = /^[0-9a-zA-Z]/;
        var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        if (!fName.match(nameReg)) {
            $("#firstName").val('');
            $("#firstName").addClass("error");
        } else {
            $("#firstName").removeClass("error");
        }

        if (!lName.match(nameReg)) {
            $("#lastName").val('');
            $("#lastName").addClass("error");
        } else {
            $("#lastName").removeClass("error");
        }

        if (!city.match(nameReg)) {
            $("#city").val('');
            $("#city").addClass("error");
        } else {
            $("#city").removeClass("error");
        }

        if (!email.match(emailReg)) {
            $("#email").val('');
            $("#email").addClass("error");
        } else {
            $("#email").removeClass("error");
        }

        if (!tel.match(telReg)) {
            $("#mobile").val('');
            $("#mobile").addClass("error");
        } else {
            $("#mobile").removeClass("error");
        }

        if (!nic.match(nicReg)) {
            $("#nic").val('');
            $("#nic").addClass("error");
        } else {
            $("#nic").removeClass("error");
        }

        if (!address.match(addressReg)) {
            $("#address").val('');
            $("#address").addClass("error");
        } else {
            $("#address").removeClass("error");
        }

    }

}



function remCust() {
    var fName = $("#firstNamed").val();

    if (fName.length === 0) {
        alert("Please Select Customer First");
    }

}



function newItem() {
    var code = $("#code").val();
    var name = $("#name").val();
    var qty = $("#qty").val();
    var price = $("#price").val();


    if ((code.length === 0) || (name.length === 0) || (qty.length === 0) || (price.length === 0)) {
        alert("Fill all Fields");
    } else {
        var nameReg = /^[A-Za-z]+$/;
        var codeReg = /^[A-Za-z0-9]+$/;
        var qtyReg = /^[1-9]{2}/;
        var priceReg = /^\d+(?:[.,]\d+)*$/gm;

        if (!code.match(codeReg)) {
            $("#code").val('');
            $("#code").addClass("error");
        } else {
            $("#code").removeClass("error");
        }

        if (!name.match(nameReg)) {
            $("#name").val('');
            $("#name").addClass("error");
        } else {
            $("#name").removeClass("error");
        }

        if (!qty.match(qtyReg)) {
            $("#qty").val('');
            $("#qty").addClass("error");
        } else {
            $("#qty").removeClass("error");
        }

        if (!price.match(priceReg)) {
            $("#price").val('');
            $("#price").addClass("error");
        } else {
            $("#price").removeClass("error");
        }

    }
}


function remItem() {
    var code = $("#coded").val();
    alert(code);

    if (code.length === 0) {
        alert("Please Select an Item");
    }
}


