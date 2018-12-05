import  firebase  from '../../configFirebase.js'
import router from '../../router'

export default (url, comment, author) => {

    let d = new Date();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    console.log(firebase.db)

    firebase.db.collection('dogs').add(
        {
            url,
            comment,
            info: `Posted by ${author != '' ? author : 'Unknow'} on ${days[d.getDay()]}`,
            created_at: new Date().getTime()
        }
    ).then(
        router.go(-1)
    )
}