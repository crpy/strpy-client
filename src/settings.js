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
    API: 'http://192.168.1.108:9090/',
}
