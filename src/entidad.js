import React from 'react';
import CRUD from './crud';

export default class Entidad extends CRUD {
    constructor() {
        super();
        this.action = 'entidad';
        this.fields = {
            sigla: 'ID',
            nombre: 'Nombre',
            abrev: 'Titulo',
        }
    }
}
