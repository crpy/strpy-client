import React from 'react';
import CRUD from './crud';

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
