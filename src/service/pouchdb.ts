import { Data } from '../interface/data';
import PouchDB from 'pouchdb';

export const db = new PouchDB('dian');

export const getData = async ( db: PouchDB.Database ) => {
  const data = await db.allDocs({ include_docs: true });
  return data.rows.map((row) => row.doc);
};

export const addData = async ( db: PouchDB.Database, data: Data ) => {
  const response = await db.post(data);
  return response;
};

export const syncData = async ( db: PouchDB.Database ) => {
  const remoteDB = new PouchDB('http://admin:1234@24.199.96.241:5984/dian');
  await db.sync(remoteDB, {
    live: true,
    retry: true,
  }).on('change', function (info) {
    console.log('sync complete');
  }).on('error', function (err) {
    console.log('sync error');
  });
};