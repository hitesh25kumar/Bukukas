import SQLite from "react-native-sqlite-storage";
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "BeeCash.db";
const database_version = "1.0";
const database_displayname = "BeeCash DB";
const database_size = 200000;

export default class Database {

  initDB() {
    let db;
    return new Promise((resolve) => {
      console.log("Plugin integrity check ...");
      SQLite.echoTest()
        .then(() => {
          console.log("Integrity check passed ...");
          console.log("Opening database ...");
          SQLite.openDatabase(
            database_name,
            database_version,
            database_displayname,
            database_size
          )
            .then(DB => {
              db = DB;
              console.log("Database OPEN");
              db.executeSql('SELECT 1 FROM SUBSCRIBE_EVENTS LIMIT 1').then(() => {
                  console.log("Database is ready ... executing query ...");
              }).catch((error) =>{
                  console.log("Received error: ", error);
                  console.log("Database not yet ready ... populating data");
                  db.transaction((tx) => {
                      tx.executeSql('CREATE TABLE IF NOT EXISTS SUBSCRIBE_EVENTS (id,name)');
                  }).then(() => {
                      console.log("Table created successfully");
                  }).catch(error => {
                      console.log(error);
                  });
              });
              resolve(db);
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log("echoTest failed - plugin not functional");
        });
      });
  };

  closeDatabase(db) {
    if (db) {
      console.log("Closing DB");
      db.close()
        .then(status => {
          console.log("Database CLOSED");
        })
        .catch(error => {
          console.log('error: ', error);
          // this.errorCB(error);
        });
    } else {
      console.log("Database was not OPENED");
    }
  };

  listJoinedEvents(data) {
    const name = data.toUpperCase();
    return new Promise((resolve) => {
      const events = [];
      this.initDB().then((db) => {
        db.transaction((tx) => {
          tx.executeSql('SELECT id FROM SUBSCRIBE_EVENTS WHERE name = ?', [name]).then(([tx,results]) => {
            console.log("Query completed");
            var len = results.rows.length;
            for (let i = 0; i < len; i++) {
              let row = results.rows.item(i);
              console.log(`Task ID: ${row.id}`)
              const { id } = row;
            events.push(
                id
              );
            }
            console.log('tasks:. ', events);
            resolve(events);
          });
        }).then((result) => {
          this.closeDatabase(db);
        }).catch((err) => {
          console.log(err);
        });
      }).catch((err) => {
        console.log(err);
      });
    });  
  }

  addEvent(data) {
    console.log('prod: ', data);
    return new Promise((resolve) => {
      this.initDB().then((db) => {
        db.transaction((tx) => {
          tx.executeSql('INSERT INTO SUBSCRIBE_EVENTS VALUES (?,?)', [data.id,data.name.toUpperCase()]).then(([tx, results]) => {
            resolve(results);
            console.log('results: ', results);
          });
        }).then((result) => {
          console.log('result:2 ', result);
          this.closeDatabase(db);
        }).catch((err) => {
          console.log('err: ', err);
          console.log(err);
        });
      }).catch((err) => {
        console.log('err:2 ', err);
        console.log(err);
      });
    });  
  }

  deleteEvent(data) {
    return new Promise((resolve) => {
      this.initDB().then((db) => {
        db.transaction((tx) => {
          tx.executeSql('DELETE FROM SUBSCRIBE_EVENTS WHERE id = ? AND name  = ?', [data.id,data.name.toUpperCase()]).then(([tx, results]) => {
            console.log(results);
            resolve(results);
          });
        }).then((result) => {
          this.closeDatabase(db);
        }).catch((err) => {
          console.log(err);
        });
      }).catch((err) => {
        console.log(err);
      });
    });  
  }
}