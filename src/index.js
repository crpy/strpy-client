import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Entidad from './entidad';


class Table extends Component {
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

ReactDOM.mount(<Table datasource={new Entidad} />, documetn.getElementById('main'));
