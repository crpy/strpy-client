import React from 'react';
import datasource from './datasource';

export default class Entidad extends datasource {
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
