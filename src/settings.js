$.ajaxSetup({
    data: {},
    dataType: 'json',
    xhrFields: {
        withCredentials: true
    },
    crossDomain: true
});

export default {
    API: 'http://127.0.0.1:9090/',
}
