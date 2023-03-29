export default defineEventHandler(async(event) => {
    //get, post, put, delete
    //params값, body안 데이터 추출
    const method = getMethod(event);
    let rows;
    let q='';

    if(method == 'POST'){
        let body = await readBody(event);
        let {name,email,date} = body;
        q=`insert into test (name,email,date) values("${name}","${email}","${date}")`
        [rows] = await event.context.db.execute(q);
    }else{
        [rows] = await event.context.db.execute('select * from test');
    }

    return rows;
  })