let user = [
    {
        userid:'admin',
        userpw:'admin',
        username:'관리자'
    },
    {
        userid:'web1031',
        userpw:'1234',
        username:'쏙'
    },
    {
        userid:'test',
        userpw:'test',
        username:'테스트용'
    },
    {
        userid:'fred',
        userpw:'0110',
        username:'박제혁'
    }
]

function findUser(id, pw){
    for(let i=0; i<user.length; i++){
        if(user[i].userid === id && user[i].userpw === pw){
            return true;
        }
    }
    return false;
}

module.exports= {
    user,
    findUser
}