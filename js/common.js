//$.ajax({
//    type: "post",
//    url: baseUrl + "api/customer/member/getRedPacks",
//    //beforeSend: function (xhr) {
//    //    xhr.setRequestHeader('Authorization', getCookie('token'));
//    //}, //设置header
//    data: { },
//    success: success,
//    error: function (data) {
//        console.log('请求失败，请刷新重试');
//    },
//    dataType: 'text',
//    async: true
//});
//$.ajax = {
//    Get: function () { }
//}

$.common = {
    Menu: function (tab) {
        $.get('/View/_footView.html', {}, function (data, textStatus) {
            document.getElementById("tool_menu").innerHTML = data.split("|")[1];
            if (tab == 1) {
                $('#toolHome').css({ 'background-color': '#02b9b3' });
            } else if (tab == 2) {
                $('#toolCommunity').css({ 'background-color': '#02b9b3' });
            } else if (tab == 3) {
                $('#toolShoppingCar').css({ 'background-color': '#02b9b3' });
            } else if (tab == 4) {
                $('#toolMember').css({ 'background-color': '#02b9b3' });
            }
        });
    },
    Banner:function(){
        //加载
        var html = '<li bigpic="http://aimg8.dlszywz.com/ev_user_module_content_tmp/2016_08_22/tmp1471851813_1249719_s.jpg" change="false"><a title="2" href="#"></a></li>' +
            '<li bigpic= "http://aimg8.dlszywz.com/ev_user_module_content_tmp/2016_08_22/tmp1471851778_1249719_s.jpg" change= "false" > <a title="1" href="#"></a></li>' +
        '<li bigpic= "http://aimg8.dlszywz.com/ev_user_module_content_tmp/2016_08_22/tmp1471851778_1249719_s.jpg" change= "false" > <a title="1" href="#"></a></li>';
        document.getElementById("banner").innerHTML = html;

        var bStyle = "1", span = "", bn = $("#banner_nav"), banner = $("#full_banner");
        banner.height(banner.parent().height());
        switch (bStyle) {
            case "1":
                bn.attr("class", "banner-nav-1");
                banner.find("li").each(function () {
                    span += "<span></span>";
                });
                break;
            case "2":
                bn.attr("class", "banner-nav-2");
                banner.find("li").each(function (e) {
                    span += '<span>' + (e + 1) + '</span>';
                });
                break;
            case "3":
                bn.attr("class", "banner-nav-3");
                banner.find("li").each(function () {
                    span += '<span><img src="' + $(this).attr("smallpic") + '" /></span>';
                });
                break;
        }
        bn.append(span);
        var changeBannerBg = function (num) {
            bn.find("span").removeClass("cur").eq(num).addClass("cur");
            var li = banner.find("li").eq(num);
            if (li.attr("change") == "false") {
                var bg = li.attr("bigpic"), img = $("<img src=" + bg + " />");
                img.load(function () {
                    li.css({ "background-image": "url(" + bg + ")", "background-size": "100% 100%" });
                    li.attr("change", true);
                    li.find("a").css("background-image", "none");
                })
            }
        }
        changeBannerBg(0);
        new $.Swipe(banner[0], {
            startSlide: 0,
            direction: "LMove",
            speed: 400,
            auto: Number(3) * 1000,
            callback: function () {
                changeBannerBg(this.index);
            }
        });
        aGlobalBannerHeight.banner = parseInt($("#full_banner ul li:eq(0)").height()),
        setBannerHeight();
    },
    Goods: function () {
        //var url = '';
        //var data = {};
        //var success = function (d) {
        //    alert(1);
        //}
        //var goodslist = $.post(url,data,success);

        var list = [1, 2, 3, 4, 5, 6]
        var html = '';
        $.each(list, function (i, n) {
            html += '<li style="width:33%">' +
                '<div class="inner" >' +
                '<a href="shop029/wap_pro/3136147.html">' +
                '<span class="pic" style="">' +
                '<img src="http://aimg8.dlszywz.com/wap_module_pic_con/800_1500/822/1642686_4653690.jpg?t=611" />' +
                '</span>' +
                '</a>' +
                '<div class="pic_text">' +
                '<a href="shop029/wap_pro/3136147.html">' +
                '<p class="text_list_bk"></p>' +
                '<em class="textfont text_list_bk">阿克苏河 发财树荷花竹组合盆栽盆景花卉绿植</em>' +
                '</a>' +
                '<div class="proPrice"><em class="newPrice">￥38元</em><em class="oldPrice">￥55元</em></div>' +
                '</div>' +
                '</div>' +
                '</li>'
        });
        document.getElementById("goods1").innerHTML = html;
        document.getElementById("goods2").innerHTML = html;
        document.getElementById("goods3").innerHTML = html;
        document.getElementById("goods4").innerHTML = html;
    },
    CartGoods: function () {
        var list = [1, 2, 3, 4, 5, 6]
        var html = '';
        $.each(list, function (i, n) {
            html += '<li class="my_allorder" data-value="10086" data-num="1" style="height:7rem;">' +
                '<input type= "checkbox" class="checkbox" />' +
                '<img src="http://aimg8.dlszywz.com/wap_module_pic_con/800_1500/822/1642686_4653690.jpg?t=611" class="cart_img" />' +
                '<div class="cart_details">' +
                '<div class="shop_name">商品名称</div>' +
                '<div class="cart_size">100ml</div>' +
                '<div class="shop_money">' +
                '<em class="newPrice">￥38</em><em class="oldPrice">￥55元</em>' +
                '<div class="quantity">' +
                '<div class="less">-</div>' +
                '<div class="shop_num">1</div>' +
                '<div class="add">+</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</li>';
        });
        $('#cart_goods').html(html);
        $('#cart_title').html('购物车(' + list.length + ')');
    }
};

$(window).resize(function () {
    setTimeout(function () {
        setBannerHeight();
    }, 500);
})

//消息框
function MessageBox(text) {
    $('#mboxtext').html(text);
    $('#messageBox').show().delay(1000).fadeOut();
}

function setBannerHeight() {
    var
        oBanner = $("#full_banner"),
        iPicMaxWidth = 640,
        iWindowWidth = $(window).width();

    if (iWindowWidth > iPicMaxWidth) {
        var iRealityHeight = aGlobalBannerHeight.banner * 2;
    } else if (iWindowWidth > 0) {
        iBfbWidth = (iWindowWidth / iPicMaxWidth).toFixed(2);
        var iRealityHeight = parseInt(aGlobalBannerHeight.banner * iBfbWidth) * 2;
    }
    oBanner.parent().height(iRealityHeight);
    oBanner.height(iRealityHeight);
    oBanner.find('li').height(iRealityHeight);
}

$(function () {
    var document_h = $(window).height();
    $("#wrapper").css({ "min-height": document_h + 'px' });
})

//判断是否为微信
function is_weixn() {
//    var ua = navigator.userAgent.toLowerCase();
//    if (ua.match(/MicroMessenger/i) == "micromessenger") {
//        $('#wxAndAppShowHtml').show();
//        return false;
//    } else {
//        $('#wxAndAppShowHtml').hide();
//        return true;
//    }
//}
//function GetQueryString(name) {
//    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
//    var r = window.location.search.substr(1).match(reg);
//    if (r != null) {
//        return unescape(r[2]);
//    }
//    return '';
//}
//var is_weixn = is_weixn();
//if (is_weixn) {
//    writeCookie('openid', '', 168);
//    var shareModule = $('#shareModule li');
//    if (shareModule.length > 0) {
//        shareModule.find('.weixin').parent().remove();
//    }
//} else {
//    var openid = GetQueryString('openid');
//    if (!readCookie('openid')) {
//        writeCookie('openid', openid);
//    }
}

//购物车
function Cart() {
    $('#allcheck').click(function () {
        if ($('#allcheck').is(':checked')) {
            $("input:checkbox").prop("checked", "checked");
            var amount=0;
            $.each($('.newPrice'), function (i, n) {
                amount += parseInt(n.innerText.substring(1, n.innerText.length));
            });
            $('#cart_total').html( amount);
        } else {
            $('input[type=checkbox]').attr("checked", false);
            $('#cart_total').html('0');
        }
    });
    $('.add').click(function () {
        var num = $(this).parent().find('.shop_num');
        num[0].innerHTML = parseInt(num[0].innerHTML) + 1;
        $(this).parents('li').attr('data-num', num[0].innerHTML);
        if ($(this).parents('li').find('input[type="checkbox"]').is(':checked')) {
            var amount = $(this).parents('.shop_money').find('.newPrice').html();
            amount = amount.substring(1, amount.length);
            $('#cart_total').html(parseInt($('#cart_total').html()) + parseInt(amount));
        }
    });
    $('.less').click(function () {
        var num = $(this).parent().find('.shop_num');
        if (num.html() == "1") {
            MessageBox("亲，不能再少了哦！");
        } else {
            num[0].innerHTML = parseInt(num[0].innerHTML) - 1;
            $(this).parents('li').attr('data-num', num[0].innerHTML);
            if ($(this).parents('li').find('input[type="checkbox"]').is(':checked')) {
                var amount = $(this).parents('.shop_money').find('.newPrice').html();
                amount = amount.substring(1, amount.length);
                $('#cart_total').html(parseInt($('#cart_total').html()) - parseInt(amount));
            }
        }
    });
    $('#delete').click(function () {
        if ($(this).html() == "编辑") {
            $(this)[0].innerHTML = "完成";
            $('#settlement')[0].innerHTML = "删除";
            $('#settlement').css({ 'background-color': '#f72d18' })
        } else {
            $(this)[0].innerHTML = "编辑";
            $('#settlement')[0].innerHTML = "结算";
            $('#settlement').css({ 'background-color': '#6ec7c5' })
        }
    });
}
function messageBoxClose(time) {
    setTimeout(function () { $(".messageBox").css("display", "none"); },1000);
}