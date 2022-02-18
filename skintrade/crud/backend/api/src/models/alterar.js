const db = require('../database/connection');


async function alteraName(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Name = ? WHERE Id = ?';
    const values = [ data.name, data.id];
    await conn.query(sql, values);

}

async function alteraNamespace(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Namespace = ? WHERE Id = ?';
    const values = [ data.namespace, data.id];
    await conn.query(sql, values);

}



async function alteraType(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Type = ? WHERE Id = ?';
    const values = [ data.type, data.id];
    await conn.query(sql, values);

}


async function alteraDescription(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Description = ? WHERE Id = ?';
    const values = [ data.description, data.id];
    await conn.query(sql, values);

}




async function alteraQaPageId(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET QaPageId = ? WHERE Id = ?';
    const values = [ data.qapageid, data.id];
    await conn.query(sql, values);

}



async function alteraSolution(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Solution = ? WHERE Id = ?';
    const values = [ data.solution, data.id];
    await conn.query(sql, values);

}



async function alteraPlatform(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Platform = ? WHERE Id = ?';
    const values = [ data.platform, data.id];
    await conn.query(sql, values);

}



async function alteraNameAndNamespace(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Name = ?, Namespace = ? WHERE Id = ?';
    const values = [ data.name, data.namespace, data.id];
    await conn.query(sql, values);

}




async function alteraNamespaceAndType(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Namespace = ?, Type = ? WHERE Id = ?';
    const values = [ data.namespace, data.type, data.id];
    await conn.query(sql, values);

}





async function alterTypeAndDescription(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Type = ?, Description = ? WHERE Id = ?';
    const values = [ data.type, data.description, data.id];
    await conn.query(sql, values);

}




async function alteraQaPageIdAndSolution(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET QaPageId = ?, Solution = ? WHERE Id = ?';
    const values = [ data.qapageid, data.solution, data.id];
    await conn.query(sql, values);

}





async function alteraSolutionAndPlatform(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Solution = ?, Platform = ? WHERE Id = ?';
    const values = [ data.solution, data.platform, data.id];
    await conn.query(sql, values);

}



async function alteraNameAndDescription(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Name = ?, Description = ? WHERE Id = ?';
    const values = [ data.name, data.description, data.id];
    await conn.query(sql, values);

}



async function alteraNameAndType(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Name = ?, Type = ? WHERE Id = ?';
    const values = [ data.name, data.type, data.id];
    await conn.query(sql, values);

}


async function alteraNameAndQapageid(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Name = ?, QaPageId = ? WHERE Id = ?';
    const values = [ data.name, data.qapageid, data.id];
    await conn.query(sql, values);

}


async function alteraNamespaceAndSolution(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Namespace = ?, Solution = ? WHERE Id = ?';
    const values = [ data.namespace, data.solution, data.id];
    await conn.query(sql, values);

}


async function alteraNameAndSolution(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Name = ?, Solution = ? WHERE Id = ?';
    const values = [ data.name, data.solution, data.id];
    await conn.query(sql, values);

}


async function alteraNameAndPlatform(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Name = ?, Platform = ? WHERE Id = ?';
    const values = [ data.name, data.platform, data.id];
    await conn.query(sql, values);

}


async function alteraNamespaceAndDescription(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Namespace = ?, Description = ? WHERE Id = ?';
    const values = [ data.namespace, data.description, data.id];
    await conn.query(sql, values);

}

async function  alteraNamespaceAndQaPageId(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Namespace = ?, QaPageId = ? WHERE Id = ?';
    const values = [ data.namespace, data.qapageid, data.id];
    await conn.query(sql, values);

}


async function alteraNamespaceAndSolution(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Namespace = ?, Solution = ? WHERE Id = ?';
    const values = [ data.namespace, data.solution, data.id];
    await conn.query(sql, values);

}

async function alteraNamespaceAndPlatform(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Namespace = ?, Platform = ? WHERE Id = ?';
    const values = [ data.namespace, data.platform, data.id];
    await conn.query(sql, values);

}



async function alterTypeAndQapageId(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Type = ?, QaPageId = ? WHERE Id = ?';
    const values = [ data.type, data.qapageid, data.id];
    await conn.query(sql, values);

}


async function alterTypeAndSolution(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Type = ?, Solution = ? WHERE Id = ?';
    const values = [ data.type, data.solution, id];
    await conn.query(sql, values);  

}




async function alterTypeAndPlatform(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Type = ?, Platform = ? WHERE Id = ?';
    const values = [ data.type, data.platform, data.id];
    await conn.query(sql, values);

}




async function alteraDescriptionAndSolution(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Description = ?, Solution = ? WHERE Id = ?';
    const values = [ data.description, data.solution, data.id];
    await conn.query(sql, values);

}




async function  alterDescriptionAndPlatform(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Description = ?, Platform = ? WHERE Id = ?';
    const values = [ data.description, data.platform, data.id];
    await conn.query(sql, values);

}




async function alteraQaPageIdAndPlatform(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET QaPageId = ?, Platform = ? WHERE Id = ?';
    const values = [ data.qapageid, data.platform, data.id];
    await conn.query(sql, values);

}

///combinações 1 para alterar os dados

async function alterTypeAndSolution(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Type = ?, Solution = ? WHERE Id = ?';
    const values = [ data.type, data.solution, data.id];
    await conn.query(sql, values);

}




async function alterTypeAndSolution(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Type = ?, Solution = ? WHERE Id = ?';
    const values = [ data.type, data.solution, data.id];
    await conn.query(sql, values);

}




async function alterTypeAndSolution(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Type = ?, Solution = ? WHERE Id = ?';
    const values = [ data.type, data.solution, data.id];
    await conn.query(sql, values);

}




async function alterTypeAndSolution(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Type = ?, Solution = ? WHERE Id = ?';
    const values = [ data.type, data.solution, data.id];
    await conn.query(sql, values);

}




async function alterTypeAndSolution(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Type = ?, Solution = ? WHERE Id = ?';
    const values = [ data.type, data.solution, data.id];
    await conn.query(sql, values);

}



async function alterTypeAndSolution(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Type = ?, Solution = ? WHERE Id = ?';
    const values = [ data.type, data.solution, data.id];
    await conn.query(sql, values);

}



//Combinações 2 para alterar os dados


async function alteraNameAndNamespaceAndType(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Name = ?, Namespace = ?, Type = ? WHERE Id = ?';
    const values = [ data.name, data.namespace, data.type, data.id];
    await conn.query(sql, values);

}



async function alteraDescAndQaPageIdAndSolution(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Description = ?, QaPageId = ?, Solution = ?, Platform = ? WHERE Id = ?';
    const values = [ data.description, data.qapageid, data.solution, data.platform, data.id];
    await conn.query(sql, values);

}



async function alteraNameAndTypeAndDescription(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Name = ?, Type = ?, description = ? WHERE Id = ?';
    const values = [ data.name, data.type, data.description, data.id];
    await conn.query(sql, values);

}



async function alteraNameAndNamespaceAndTypeAndDescription(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Name = ?, Namespace = ?, Type = ?, Description = ? WHERE Id = ?';
    const values = [ data.name, data.namespace, data.type, data.description, data.id];
    await conn.query(sql, values);

}



async function alterNameAndQapageidAndSolutionAndPlatform(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Name = ?, QaPageId = ?, Solution = ?, Platform = ? WHERE Id = ?';
    const values = [ data.name, data.qapageid, data.solution, data.platform, data.id];
    await conn.query(sql, values);

}



async function alteraNamespaceAndTypeAndDescription(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Namespace = ?, Type = ?, Description = ? WHERE Id = ?';
    const values = [ data.namespace, data.type, data.description, data.id];
    await conn.query(sql, values);

}



async function alteraNamespaceAndQapageidAndSolutionAndPlatform(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Namespace = ?, QaPageId = ?, Solution = ?, Platform = ? WHERE Id = ?';
    const values = [ data.namespace, data.qapageid, data.solution, data.platform, data.id];
    await conn.query(sql, values);

}






async function alteraNamespaceAndTypeAndQapageidAndSolutionAndPlatform(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Namespace = ?, Type = ?, QaPageId = ?, Solution = ?, Platform = ? WHERE Id = ?';
    const values = [ data.namespace, data.type, data.qapageid, data.solution, data.platform, data.id];
    await conn.query(sql, values);

}




async function alteraNamespaceAndTypeAndDescAndQapageidAndSolutionAndPlatform(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Namespace = ?, Type = ?, Description = ?, QaPageId = ?, Solution = ?, Platform = ? WHERE Id = ?';
    const values = [ data.namespace, data.type, data.description, data.qapageid, data.solution, data.platform, data.id];
    await conn.query(sql, values);

}




async function alteraTypeAndQapageidAndSolutionAndPlatform(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Type = ?, QaPageId = ?, Solution = ?, Platform = ? WHERE Id = ?';
    const values = [ data.type, data.qapageid, data.solution, data.platform, data.id];
    await conn.query(sql, values);

}




async function alteraTodosOsDados(data) {

    const conn = await db.connect();
    const sql = 'UPDATE systems SET Name = ?, Namespace = ?, Type = ?, Description = ?, QaPageId = ?, Solution = ?, Platform = ? WHERE Id = ?';
    const values = [ data.name, data.namespace, data.type, data.description, data.qapageid, data.solution, data.platform, data.id];
    await conn.query(sql, values);

}





module.exports = {
    
    alteraName,
    alteraNamespace,
    alteraType,
    alteraDescription,
    alteraQaPageId,
    alteraSolution,
    alteraPlatform,
    alteraNameAndNamespace,
    alteraNamespaceAndType,
    alterTypeAndDescription,
    alteraQaPageIdAndSolution,
    alteraSolutionAndPlatform,
    alteraNameAndDescription,
    alteraNameAndType,
    alteraNameAndQapageid,
    alteraNamespaceAndSolution,
    alteraNameAndSolution,
    alteraNameAndPlatform,
    alteraNamespaceAndQaPageId,
    alteraNamespaceAndDescription,
    alteraNamespaceAndPlatform,
    alterTypeAndQapageId,
    alterTypeAndSolution,
    alterTypeAndPlatform,
    alteraDescriptionAndSolution,
    alterDescriptionAndPlatform,
    alteraQaPageIdAndPlatform,
    alteraNameAndNamespaceAndType,
    alteraDescAndQaPageIdAndSolution,
    alteraNameAndTypeAndDescription,
    alteraNameAndNamespaceAndTypeAndDescription,
    alterNameAndQapageidAndSolutionAndPlatform,
    alteraNamespaceAndTypeAndDescription,
    alteraNamespaceAndQapageidAndSolutionAndPlatform,
    alteraNamespaceAndTypeAndQapageidAndSolutionAndPlatform,
    alteraNamespaceAndTypeAndDescAndQapageidAndSolutionAndPlatform,
    alteraTodosOsDados,
    alteraTypeAndQapageidAndSolutionAndPlatform
}