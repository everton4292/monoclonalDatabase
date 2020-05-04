const Monoclonal = require('../models/Monoclonal');
const BaseResponse = require('../helpers/BaseResponse')

import { FatalErrorResponse } from '../helpers/FatalErrorResponse.js'

module.exports = {
    async create(req, res) {
        const { monoclonalId } = req.body;
        
        try {
            if (await Monoclonal.findOne({ monoclonalId })) {
              return res.json(new BaseResponse('SES-0003','Cliente já cadastrado', null))
            }
          
            const monoclonal = await Monoclonal.create(req.body)
          
            if (monoclonal) {
              return res.json(new BaseResponse('SES-0005','Cliente criado com sucesso', null))
            } else {
              return res.json(new BaseResponse('SES-0006','Problemas encontrados ao criar cliente', null))
            }
          } catch (err) {
            console.log(err)
            return res.send(new BaseResponse('Erro desconhecido - Favor entrar em contato com o administrador do sistema', err))
          }
          
        }
    }




        

        

    