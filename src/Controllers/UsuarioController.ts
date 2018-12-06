import { Request, Response } from "express";
import { getManager, UpdateResult, DeleteResult } from 'typeorm';
import { Usuario } from "../Entities/Usuario";
import { Empresa } from "../Entities/Empresa";

export class UsuarioController {       
    public routes(app): void {  

        app.route('/usuarios')
        .get(async (req: Request, res: Response) => {

            var usuarios = await Usuario.find();
            res.status(200).send(usuarios);

        })  
        
        app.route('/usuarios/:id')
        .get(async (req:Request, res: Response) => {
            
            var usuarios = await Usuario.findOne(req.query.id);
            res.status(200).send(usuarios);
            
        })

        app.route('/usuarios/detalhe/:id')
        .get(async (req:Request, res: Response) => {
            
            var usuarios = await Usuario.findOne(req.body.id, {relations: ["empresas"]});
            res.status(200).send(usuarios);
            
        })

        app.route('/usuarios/')
        .post(async (req:Request, res: Response) => {

            var usuario = new Usuario();
            usuario.email = req.body.email;
            usuario.nome = req.body.nome;
            usuario.telefones = JSON.stringify(req.body.telefones);
            var resp = await usuario.save();

            res.status(200).send(resp);

        });

        
        app.route('/usuarios/:id')
        .put(async (req:Request, res: Response) => {

            var usuario = await Usuario.findOne(req.query.id);
            if(!usuario) return res.status(400).send("Usuário não encontrado");

            usuario.email = req.body.email;
            usuario.nome = req.body.nome;
            usuario.telefones = JSON.stringify(req.body.telefones);
            var resp = await usuario.save();

            res.status(200).send(resp);

        });

        
        app.route('/usuarios/:id')
        .delete(async (req:Request, res: Response) => {

            var usuario = await Usuario.findOne(req.query.id);
            if(!usuario) return res.status(400).send("Usuário não encontrado");

            usuario.ativo = false;
            var resp = await usuario.save();

            res.status(200).send("Removido com sucesso");

        });

        app.route('/nada/')
        .post(async (req:Request, res: Response) => {
            console.log(req.body)
            res.status(200).send(req.body);
        });
        app.route('/nada2/')
        .post(async (req:Request, res: Response) => {
            console.log(req.body)
            res.status(200).send(req.body);
        });
    }
}