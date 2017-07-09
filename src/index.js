import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Entidad from './entidad';
import reforms, {Input} from 'reforms';

const ignore=['id', 'borrado'];
class Edit extends Component {
    constructor(args) {
        super(args);
        this.form = new reforms;
    }
    render() {
        return <this.form>
            <h1>Editar</h1>
            { Object.keys(this.props.data).map(m => {
                if (ignore.indexOf(m) !== -1) return;
            return <div className="form-group" key={m}>
                <label>{m}</label>
                <Input type="text" className="form-control" name={m} value={this.props.data[m]} />
            </div>
            })}
            <div>
                <button className="btn btn-success">Guardar</button>
                <button className="btn" onClick={r => this.props.comeback_to.setState({edit: null}) }>Cancelar</button>
            </div>
        </this.form>
    }
}

class Table extends Component {
    constructor(args) {
        super(args);
        this.state = {header: [], row: [], loading: true, edit: null}
    }
    componentWillMount() {
        this.props.datasource.renderer(this);
    }

    render() {
        if (this.state.loading) {
            return <div className="alert alert-success">Cargando...</div>
        }
        if (this.state.edit) {
            return <Edit data={this.state.edit} comeback_to={this} />
        }
        return <table className="table table-striped">
            <thead>
                <tr>
                    {this.state.header.map(name => {
                        return <th key={name}>{name}</th>;
                    })}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.row.map(row => {
                    return <tr key={'row:' + row.id}>
                        {this.state.fields.map(m =>{
                            return <td key={row.id+ ":" + m}>{row[m]}</td>
                        })}
                        <td>
                            <button className="btn-xs btn btn-success" onClick={r => this.setState({edit: row})}>
                                Editar
                            </button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    }
}

ReactDOM.render(
    <Table datasource={new Entidad} />,
    document.getElementById('container')
);
