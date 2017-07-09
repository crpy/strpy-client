import Settings from './settings'

export default class CRUD {
    renderer(render) {
        this.render = render;
        let header = [];
        Object.keys(this.fields).map(m => {
            header.push(this.fields[m]);
        });
        render.setState({header, fields: Object.keys(this.fields)});
        this.get_all();
    }
    get_all() {
        this.render.setState({ loading: true });
        $.get(Settings.API + this.action + '/')
            .then(r => this.render.setState({loading: false, row:r.results}))
            .catch(r => {
                if (r.status === 403) {
                    // el django tiene que soportar enviarnos de vuelta a la app.
                    document.location.href = API + "api-auth/login/?next=" + encodeURI(document.location.href);
                }
            });
    }
}
