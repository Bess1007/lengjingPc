
$(function () {
    fn_load();
    function fn_load() {
        var elementInit = {
            ".b1_01": {top: -50,opacity:0},
            ".b1_02": {left: -300, opacity: 0},
            ".b1_03": {right: -300, opacity: 0},
            ".b2_01": {left: -110, opacity: 0},
            ".b2_02": {right: -110, opacity: 0},
            ".b2_03": {right: -110, opacity: 0},
            ".b2_04": {right:-110, opacity:0},
            ".b3_01": {left: -110, opacity: 0},
            ".b3_02": {right: -110, opacity: 0},
            ".b4_01": {left: -110, opacity: 0},
            ".b4_02": {right: -300, opacity: 0},
            ".b5_01": {left: -110, opacity: 0},
            ".b5_02": {right: -110, opacity: 0}
        };
        var $wrapBox = $("#wrapBox");
        for (var i in elementInit) {
            var $i = $wrapBox.find(i);
            for (var j in elementInit[i]) {
                $i.css(j, elementInit[i][j]);
            }
        }
        boxGoIn_1();
        setTimeout(function getcurrentIndex() {
            $("#loutinav").find('li').each(function(i,o){
                if($(o).hasClass("on")){
                    if(i == 0){
                        boxGoIn_1();
                    }else if(i == 1){
                        boxGoIn_2();
                    }else if(i == 2){
                        boxGoIn_3();
                    }else if(i == 3){
                        boxGoIn_4();
                    }else if(i == 4){
                        boxGoIn_5();
                    }
                };
            });
      },100);

    }

    window.onscroll = function () {
        function getPageNum() {
            var p_num = 0;
            $("#loutinav").find('li').each(function (i, o) {
                if ($(o).hasClass("on")) {
                    p_num = i
                }
            });
            return p_num
        }
        var currentPagenum = getPageNum();
        if(currentPagenum == 0){
            boxGoOut_2();
            boxGoIn_1();
        }else if(currentPagenum == 1){
            boxGoOut_1();
            boxGoOut_3();
            boxGoIn_2();
        }else if(currentPagenum == 2){
            boxGoOut_2();
            boxGoOut_4();
            boxGoIn_3();
        }else if(currentPagenum == 3){
            boxGoOut_3();
            boxGoOut_5();
            boxGoIn_4();
        }else if(currentPagenum == 4){
            boxGoOut_4();
            boxGoIn_5();
        }

    };
    function boxGoOut_1() {
        $(".b1_01").stop().animate({top: -50, opacity: 0}, 1200);
        $(".b1_02").stop().animate({left: -300, opacity: 0}, 1200);
        $(".b1_03").stop().animate({right: -300, opacity: 0}, 1200);
    }
    function boxGoOut_2() {
        $(".b2_01").stop().animate({left: -110, opacity: 0}, 1200);
        $(".b2_02").stop().animate({right: -110, opacity: 0}, 1200);
        $(".b2_03").stop().animate({right: -110, opacity: 0}, 1200);
        $(".b2_04").stop().animate({right: -110, opacity: 0}, 1200);
    }
    function boxGoOut_3() {
        $(".b3_01").stop().animate({left: -110, opacity: 0}, 1200);
        $(".b3_02").stop().animate({right: -110, opacity: 0}, 1200);
    }
    function boxGoOut_4() {
        $(".b4_01").stop().animate({left: -110, opacity: 0}, 1200);
        $(".b4_02").stop().animate({right: -300, opacity: 0}, 1200);
    }
    function boxGoOut_5() {
        $(".b5_01").stop().animate({left: -110, opacity: 0}, 1200);
        $(".b5_02").stop().animate({right: -110, opacity: 0}, 1200);
    }
    function boxGoIn_1() {
        $(".b1_01").stop().animate({top: 224, opacity: 1}, 1200);
        $(".b1_02").stop().animate({left: 0, opacity: 1}, 1200);
        $(".b1_03").stop().animate({right: 0, opacity: 1}, 1200);
    }
    function boxGoIn_2() {
        $(".b2_01").stop().animate({left: 146, opacity: 1}, 1200);
        $(".b2_02").stop().animate({right: 248, opacity: 1}, 1200);
        $(".b2_03").stop().animate({right: 40, opacity: 1}, 1200);
        $(".b2_04").stop().animate({right: 274, opacity: 1}, 1200);
    }
    function boxGoIn_3() {
        $(".b3_01").stop().animate({left: 136, opacity: 1}, 1200);
        $(".b3_02").stop().animate({right: 146, opacity: 1}, 1200);
    }
    function boxGoIn_4() {
        $(".b4_01").stop().animate({left: 116, opacity: 1}, 1200);
        $(".b4_02").stop().animate({right: -36, opacity: 1}, 1200);
    }
    function boxGoIn_5() {
        $(".b5_01").stop().animate({left: 116, opacity: 1}, 1200);
        $(".b5_02").stop().animate({right: 145, opacity: 1}, 1200);
    }

})
