/**
 * Created by Administrator on 2017/7/19.
 */

//manage-btn

function writeInformation(index) {
    if(index!=0){
        var trTemp = $('#fin-table tr:eq(' + index + ')');
        $(".manage-alert-title").after("<tr class='manage-alert-in delete-tr'><td>"+trTemp.children('td').eq(1).html()+"</td><td>"+trTemp.children('td').eq(2).html()+"</td>><td>"+trTemp.children('td').eq(3).html()+"</td><td> <select> <option value='1'>增加</option> <option value='-1'>减少</option> </select> </td> <td> <select> <option value='1'>预留</option> <option value='2'>自留</option> </select> </td> <td><input type='text' name='moneychange' placeholder='人民币（元）'/></td></tr>")

    }
}
$(function () {
    $(".manage-btn").click(function () {
        $(".delete-tr").remove();
        var index = $(this).parent().parent().index();
        writeInformation(index);
        $(".manage-alert").show(200);
    });
    $("#manageAll").click(function(){
        $(".delete-tr").remove();
        $("input[type='checkbox']").each(function(){
            if($(this).is(':checked')){
                var index = $(this).parent().parent().index();
                writeInformation(index);
            }
        });
        $(".manage-alert").show(200);
    });
});

//checkAll
$(function () {
    $("#checkall").click(function(){
        if($(this).is(':checked')){
            $("input[name='checkname']").prop('checked', true).parent().parent().addClass("on");
        }else{
            $("input[name='checkname']").prop('checked', false).parent().parent().removeClass("on");
        }
    });
    $("input[name='checkname']").click(function () {
        if($(this).is(':checked')){
            $(this).parent().parent().addClass("on");
        }
        else {
            $(this).parent().parent().removeClass("on");
        }
    });
});

//out
$(function () {
    $(".manage-out").click(function () {
       $(".manage-alert").hide(200);
    });
});