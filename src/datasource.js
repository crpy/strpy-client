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

    get_url() {
        return Settings.API + this.action + '/';
    }

    save(id, data) {
        $.post(this.get_url(), data)
    }

    get_all() {
        this.render.setState({ loading: true });
        $.get(this.get_url())
            .then(r => this.render.setState({loading: false, row:r.results}))
            .catch(r => {
                if (r.status === 403) {
                    // el django tiene que soportar enviarnos de vuelta a la app.
                    document.location.href = Settings.API + "api-auth/login/?next=" + encodeURI(document.location.href);
                }
            });
    }
}
