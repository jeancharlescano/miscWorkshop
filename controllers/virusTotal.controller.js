import nvt from 'node-virustotal';

export const getDomainVirus = async (req, res) => {
    const { domain } = req.body

    const defaultTimedInstance = nvt.makeAPI();
    const theSameObject = await defaultTimedInstance.domainLookup(`${domain}`, function(err, res){
    if (err) {
        console.log('Well, crap.');
        console.log(err);
        return;
    }
    console.log(JSON.stringify(res));
    return JSON.stringify(res)
});
return theSameObject
}


