const svgCaptcha = require('svg-captcha');
exports.getCode = async (req,res,next)=>{
    try{
        let svg = svgCaptcha.create({
            height:30,
            size:4,
            color:'blue',
            background:'#ccc',
            noise:2
        });
        console.log(svg)
        // res.setHeader('Content-Type', 'image/svg+xml');
        // res.type('svg')
        res.send(svg);
        console.log(svg.text)
    }catch(err){
        next(err)
    }
}