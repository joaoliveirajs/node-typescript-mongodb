/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import { User } from '../schemas/User';

class UserController {
    async show(req: Request, res: Response): Promise<Response> {
        const user = await User.findById(req.params.id);
        return res.json(user);
    }
    async index(req: Request, res: Response): Promise<Response> {
        const users = await User.find();
        return res.json(users);
    }
    async store(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;

        const user = await User.create({
            name,
            email,
            password,
        });
        return res.json(user);
    }
    async destroy(req: Request, res: Response): Promise<Response> {
        const user = await User.findById(req.params.id);
        await user.remove();

        return res.json({ deleted: true });
    }
    async update(req: Request, res: Response): Promise<Response> {
        const { id, name, email, password } = req.body;

        const user = await User.findByIdAndUpdate(id, {
            name,
            email,
            password,
        });
        return res.json(user);
    }
}

export default new UserController();
