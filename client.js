$.ajaxSetup({
    data: {},
    dataType: 'json',
    xhrFields: {
        withCredentials: true
    },
    crossDomain: true
});

const API = "http://127.0.0.1:9090/";

class CRUD 
{
    get_all() {
        $.get(API + this.action)
            .then(r => console.error(r.results))
            .catch(r => {
                if (r.status === 403) {
                    // el django tiene que soportar enviarnos de vuelta a la app.
                    document.location.href = API + "api-auth/login/?next=" + encodeURI(document.location.href);
                }
            });
    }
}

class Entidad extends CRUD {
    constructor() {
        super();
        this.action = 'entidad';
        this.fields = {
            abrev: 'Titulo',
            xxx: 'Lol',
        }
    }
}

class Table {
    constructor(crud) {
        this.crud = crud;
    }
    get_header() {
        return Object.keys( this.crud.fields ).map(m => {
            return {'name': this.crud.fields[m] };
        });
    }
    get_rows() {
    }
    render() {
        let html = Mustache.render($('#table-tpl').html(), {
            header: this.get_header(),
        });

        $('.container').empty().html( html );
    }
}

let x = new Entidad;
let t = new Table(x);
t.render();
t.render();
