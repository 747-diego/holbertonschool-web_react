/// <reference path = "./crud.d.ts" />

import { RowID } from './interface.ts';
import { RowElement } from './interface.ts';
import * as CRUD from './crud.js';

const row: RowElement = {
	firstName: 'Guilaume',
	lastName: 'Salva'
}

const newRowID: RowID = CRUD.insertRow(row)
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
// Delete row id GS 23
