import supertest from "supertest"
import chai from "chai"
import config from '../config'
import jsonschema from '../test_data/jsonschema/postusers.json'
import {expect} from 'chai'
import {it} from "mocha"
chai.use(require('chai-json-schema'))

const request = supertest(config.baseurl);
const TOKEN = "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";

describe('/user/repos', () => {
    it('Post create Repository in Github', async() => {
        const response = await request.post(config.postUser)

        .set('User-agent', 'hello')
        .set('Authorization', `Bearer ${TOKEN}`)
        .send ({
    
                "name": "API PROJECT3",
                
        })
        .expect(201)
        .expect((res) => {
            console.log(res);
        //expect(res.body).to.be.jsonSchema(jsonschema.valid_schema)
        })
        
    });

});