import User from '../models/User';

class UserController{
    async index(req, res){
        const user = await User.findAll();

        return res.json(user)
    }

    async get(req, res){
        const user = await User.findOne({
            where: {id: req.params.id}
        })
        return res.json(user);
    }

    async del(req, res){
        // const user = await User.destroy({
        //     where: {id: req.params.id}
        // })

        const { id } = req.params;
        const user = await User.findByPk(id);
        if(!user){
            return res.status(400).json({error: 'Usuário não existe.'})
        }

        if(user.id != id){
            return res.status(401).json({ error: 'Requisição não autorizada.'})
        }

        await user.destroy();


        return res.send();
    }
    
    async store(req, res){
        const userExists = await User.findOne({
            where: { email: req.body.email }
        });
        
        if(userExists){
            return res.status(400).json({ error: 'Usuário já existe.' });
        }

        const { id, name, lastname, email, access_level } = await User.create(req.body);
        return res.json({
            id,
            name,
            lastname,
            email,
            access_level
        });
    }

    async update(req, res){
        const { email, oldPassword, password } = req.body;
        const user = await User.findByPk(req.userId);
        if(email !== user.email){
            const userExists = await User.findOne({
                where: {email: email},
            });

            if(userExists){
                return res.status(400).json({ error: 'Usuário já existe.' });
            }
        }


        // if(oldPassword && !(await user.checkPassword(oldPassword))){
        //     return res.status(401).json({ error: 'Senha incorreta.'})
        // }

        const {id, name, lastname, access_level} = await user.update(req.body);

        return res.json({ 
            id,
            name,
            lastname,
            email,
            password,
            access_level
         });
    }
}

export default new UserController();