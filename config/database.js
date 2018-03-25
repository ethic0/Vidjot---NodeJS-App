if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: "mongodb://ethic0:adityadenis45@ds223609.mlab.com:23609/vidjot-prod"}
}else {
 module.exports = {mongoURI:'mongodb://localhost/vidjot-dev'}
}