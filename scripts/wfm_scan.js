var acolyte = acolyte || {};

acolyte.wfm_scan = (function(){


    return {
        loginCall: function(dataHandler, params) {
            return new Promise(function(resolve, reject) {
                $.ajax({
                    type: "POST",
                    url: "https://api.writeforme.org/api/v1/login",
                    data: JSON.stringify(params),
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    success: function(data, textStatus, request) {
                        dataHandler(data, resolve);
                    },
                    error: function(request, status, error) {
                        alert("WFM Response Error:\n" + request.responseText);
                        reject();
                    }
                })
            });
        },
        getSolutions: function(dataHandler, params) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    type: "POST",
                    url: "https://api.writeforme.org/api/v1/getSolutions",
                    contentType: "application/json",
                    data: JSON.stringify(params),
                    success: function (data) {
                        dataHandler(data, resolve);
                    },
                    error: function (request, status, error) {
                        alert("WFM Response Error:\n" + request.responseText);
                        reject();
                    }
                });

            });

        }
    }
})();
