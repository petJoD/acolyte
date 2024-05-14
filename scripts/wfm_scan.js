var acolyte = acolyte || {};

acolyte.wfm_scan = (function(){


    return {
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
