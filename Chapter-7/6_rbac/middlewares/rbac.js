const { Role, Module, RoleAccess } = require('../models');

module.exports = (moduleName, readAccess = false, writeAccess = false) => {
    return async (req, res, next) => {
        const { role } = req.user;
        if (!role) return res.status(401).json({ status: false, message: 'you\'re not authorized!', data: null });

        // get role data
        const roleDB = await Role.findOne({ where: { name: role } });
        if (!roleDB) return res.status(401).json({ status: false, message: 'you\'re not authorized!', data: null });

        // get role module
        const module = await Module.findOne({ where: { name: moduleName } });
        if (!module) return res.status(401).json({ status: false, message: 'you\'re not authorized!', data: null });

        // get role access data
        const roleAccess = await RoleAccess.findOne({ where: { role_id: roleDB.id, module_id: module.id } });
        if (!roleAccess) return res.status(401).json({ status: false, message: 'you\'re not authorized!', data: null });

        console.log('rbac read :', readAccess);
        console.log('user read :', roleAccess.read);
        
        console.log('rbac write :', writeAccess);
        console.log('user write :', roleAccess.write);

        if (readAccess && !roleAccess.read) {
            return res.status(401).json({ status: false, message: 'you\'re not authorized!', data: null });
        }

        if (writeAccess && !roleAccess.write) {
            return res.status(401).json({ status: false, message: 'you\'re not authorized!', data: null });
        }

        next();
    };

};