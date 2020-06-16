// importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

// iniciar o objeto que irá fazer operações no de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// utilizar o objeto de banco de dados, para nossas operações
// db.serialize(() => {

//     //Com comandos SQL eu vou:

//     // 1 criar uma tabela 
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)
//     //inserir dados na tabela
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `
//     const values = [
//         "https://ichef.bbci.co.uk/news/410/cpsprodpb/84BF/production/_108338933_gettyimages-843249732.jpg",
//         "Papersider",
//         "Guilherme Gambaia, Jardim América",
//         "Número 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Papéis e Papelão"
//     ]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

    // db.run(query, values, afterInsertData)

    //consultar os dados na tabela

    // db.all(`SELECT * FROM places`, function (err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seus registros")
    //     console.log(rows)
    // })

    //  Deletar dados na tabela

    // db.run(`DELETE FROM places WHERE id  = ?`, [7], function (err) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso!")
    // })


// })
