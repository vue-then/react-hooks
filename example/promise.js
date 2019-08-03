readFile(filename,(err, content)=>{
    parseXML(content, (err, xml) => {

    })
})

readFile(filename).then(content => parseXML(content).then(xml => { }, error => { }))
readFile(filename).then(content => parseXML(content).then(xml => {}).catch(error=>{}))


open().then(handle).then(close, close)
open().then(handle).finally(close)

Promise.resolve(1);
new Promise(resolve => resolve(1))

Promise.reject(error);
new Promise((resolve, reject) => reject(error))

Promise.all('abc')
Promise.race('abc')

async function readXML(filename) {
    const content = await readFile(filename);
    const xml = await parseXML(content);
    return xml;
}