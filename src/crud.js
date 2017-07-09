import Settings from './settings'

export default class CRUD {
    get_all() {
        console.error(Settings);
        $.get(Settings.API + this.action)
            .then(r => console.error(r.results))
            .catch(r => {
                if (r.status === 403) {
                    // el django tiene que soportar enviarnos de vuelta a la app.
                    document.location.href = API + "api-auth/login/?next=" + encodeURI(document.location.href);
                }
            });
    }
}
