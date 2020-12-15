const domain = "http://music.mowangtao.com";

function post(url, data, vuem, success) {
    $.ajax({
        type: "POST",
        url: domain + url,
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json",
        timeout: 20000,
        xhrFields: {
            withCredentials: true //允许跨域带Cookie
        },
        success: function (res) {
            vuem.fullscreenLoading = false;
            if (res.code == 1) {
                vuem.$notify.error({
                    title: '来自服务器的提示',
                    message: data.msg
                });
            }
            success ? success(res) : function () { };
        },
        error(e) {
            vuem.$notify.error({
                title: '网络异常',
                message: "请求出现一个错误...请联系网站管理者"
            });
            console.log(e);
             //操作异常 释放锁
             if (vuem.loading !== null) {
                vuem.loading.close();
                vuem.loading = null;
            }
            vuem.fullscreenLoading = false;
        }
    });
}