const db = require("../database/config");
const { where } = require("../database/config");

module.exports = {
    add,
    get,
    getBy,
    getById,
    getAllClasses,
    getAllClassesByInstructorId,
    getClassById,
    addClass,
    getSessionById,
    addSession,
    getAllSessionsByClientId,
    removeClassById,
    updateClassById,
    removeSessionById,
    updateSessionById,
};

function get() {
    return db("users")
        .join("roles", "users.role", "roles.id")
        .select("users.id", "users.username", "roles.name as role")
        .orderBy("users.id");
}

function getBy(filter) {
    return db("users")
    .join("roles", "users.role", "roles.id")
    .where(filter)
    .select("users.id",
        "users.username",
        "users.first_name",
        "roles.name as role", 
        "roles.id as roleId",
        "users.password")
    .orderBy("users.id");
}

function getById(id) {
    return db("users")
    .where({ id })
    .first()
    .select("users.id", 
        "users.role",
        "users.first_name",
        "users.last_name", 
        "users.email", 
        "users.username");
}

async function add(user) {
    try {
        const [id] = await db("users").insert(user, "id");
        return getById(id);
    } catch (error) {
        throw error;
    }
}




// client can `````````
function getAllClasses() {
    return db("classes")
}

function getSessionById(id) {
    return db('sessions')
    .select('sessions.id as session_id',
        'sessions.users_id', 
        'sessions.classes_id', 
        'classes.name', 
        'classes.instruclassestor_id', 
        'classes.type',
        'classes.start_time',
        'classes.duration',
        'classes.intensity', 
        'classes.location', 
        'c.max_class')
    .join('classes ', 'sessions.classes_id', 'classes.id')
    .where('sessions.id', id)
    .first()
}

function addSession(newSession) {
    return db('sessions')
        .insert(newSession, 'id')
        .then(([id]) => {
            return getSessionById(id);
        })
}


function getAllSessionsByClientId(id) { 
    return db('sessions')
    .select('sessions.id as sessionID',
        'sessions.users_id', 
        'sessions.classes_id',
        'classes.name',  
        'classes.instructor_id', 
        'classes.type',
        'classes.start_time', 
        'classes.duration',
        'classes.intensity', 
        'classes.location', 
        'classes.max_class')
    .join('classes', 'sessions.classes_id', 'classes.id')
    .where('sessions.users_id', id)

    
}

function updateSessionById(id, updatedSession) {
    return db('sessions')
        .where('id', id)
        .update(updatedSession)
}

function removeSessionById(id) {
    return db('sessions')
    .where('id', id)
    .del();
}



// instructor can `````````
function getAllClassesByInstructorId(id) { 
    return db('classes')
        .where('classes.instructor_id', id)
        .orderBy('id', 'asc')
}

function getClassById(id) {
    return db('classes')
        .where({id})
        .first();
}

function addClass(newClass) {
    return db('classes')
        .insert(newClass, "id")
        .then(([id]) => {
            return getClassById(id)
        })
}

function updateClassById(id, updatedClass) {
    return db('classes')
        .where('id', id)
        .update(updatedClass)
}


function removeClassById(id) {
    return db('classes')
    .where('id', id)
    .del();
}