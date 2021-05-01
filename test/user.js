import supertest from "supertest"
import chai from 'chai';
import config from '../config'
import jsonschema from '../test_data/jsonschema/getuser.json'
import jsonschema1 from '../test_data/jsonschema/postUser.json'
import {expect} from 'chai'
import { it } from "mocha";
chai.use(require('chai-json-schema'));

const request = supertest(config.baseurl);


describe('/api/users/2', () => {
    it('GET user detail in page 2' ,async() => {
        const response = await request.get(config.getUser)
        
        .expect(200)
        .expect((res) => {
            //console.log(res)
            expect(res.body).to.be.jsonSchema(jsonschema.valid_schema)
        
        })
    });

    });

describe('/api/users', () => {
    it('Post create an user detail', async() => {
        const response = await request.post(config.postUser)

        .send ({
            
                "name": "morpheus",
                "job": "leader",
            
        })
        .expect(201)
        .expect((res) => {
            console.log(res)
            expect(res.body).to.be.jsonSchema(jsonschema1.valid_schema)
        })
        
    });

});

/*
    describe('/api/users/2', () => {
        it('Put Method to Update an user detail', async() => {
            const response = await request.put(config.putUser)
            
            let update =
                {
                    "name": "Anto",
                    "job": "zion resident"
                };
            
            expect(200)
            expect((res) => {
                expect(res.update).to.be.jsonSchema(jsonschema.valid_schema)
            });
            
        });
    });
    */