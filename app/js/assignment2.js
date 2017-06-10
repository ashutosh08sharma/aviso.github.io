/**
 * Created by Ashutosh on 6/9/2017.
 * Logic of assignment 2
 */

$(document).ready(function () {
    appendDropDown();
});

// function to append dropdown dynamically
function appendDropDown() {
    $('#columnFilter, #span_v').remove();
    var headers = $('th').not('.hide');
    var lastHeader = $(headers[headers.length - 1]);
    var lastHeaderClass = $(lastHeader).attr("class");
    $(lastHeader).append('<span id="span_v" style="float: right;">v</span>')
    $(lastHeader).append(
        '<div id="columnFilter">' +
        '<select id="columnOptions" multiple="multiple">' +
        '<option value="name">Name</option>' +
        '<option value="plan">Plan</option>' +
        '<option value="forecast">Forecast</option>' +
        '<option value="bestCase">Best Case</option>' +
        '<option value="commit">Commit</option>' +
        '<option value="monthPlan">Monthly Plan</option>' +
        '<option value="comments">Comments</option>' +
        '</select>' +
        '<br/>' +
        '<input type="button" class="btn" id ="submitBtn" value="Submit">' +
        '</div>');

    $("#columnOptions").multiselect();
    $('#columnFilter').hide();

    $('#span_v').click(function(){
        $('#columnFilter').show();
    });

    $('#submitBtn').click(function () {
        console.log("button clicked");
        var count =0;
        $('input:checkbox').each(function () {
            count ++;
            var chkboxClass = $(this).val();
            if(this.checked){
                if(count<5) {
                    $('.' + chkboxClass).removeClass('hide');
                } else{
                    $('#submitBtn').hide();
                }
            }else{
                $('.' + chkboxClass).addClass('hide');
            }
        });
        appendDropDown();
    });
}
