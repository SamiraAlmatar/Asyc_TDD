const promiesTest = require('./asyc');

test('test simple promise', ()=>{
    promiesTest().then(result =>{
        expect(result).toEqual('Hi');
    }).catch(er =>{
        console.log(er)
    });   
});

test('test simple promise', ()=>{
    return expect(promiesTest()).resolves.toEqual('Hi');
});

test('test simple promise ES6', async()=>{
    const result = await promiesTest();
    expect(result).toEqual('Hi');
});
