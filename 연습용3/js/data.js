let newId=document.getElementById("newId")
let newPw=document.getElementById("newPw")
let newCh=document.getElementById("newCh")
let task=[]
let taskP=[]
let NewName=[]
let NewPw=[]


//테스크에 관한건 넘겨 받아야 함 
//불러와야 함

let log =0;

newCh.addEventListener('click',newPeople , dataC)

function newPeople(){
    console.log('버튼연결됨')
    let newValue=newId.value
    newList={
        UserId:newValue,
        newPa:newPw.value}

        task.push(newList.UserId)
        taskP.push(newList.newPa)
        console.log(task)
        console.log(taskP)

  
        alert(newList.UserId+'님 회원가입에 성공하셨습니다.')
        alert('로그인 해주세요!')

        }
     
            //회원가입
let login=document.getElementById("login")
let password=document.getElementById("password")
let logButton=document.getElementById("log_go")
let logBox =document.getElementById("log")



logButton.addEventListener('click', move, dataC)



function move(){
 let passValue=password.value
  
    taskList={
        userInfo:login.value,
        pass:passValue,}
        NewName.push(taskList.userInfo)
        NewPw.push(taskList.pass)
                console.log(NewName)
                console.log(NewPw)
                
        // newPw NewName 까지 push 함
        for(let i=0; i<task.length; i++){
            if(task == taskList.userInfo){
                   log=+1}
              for(let j=0; j<taskP.length; j++){
                  if(taskP == taskList.pass){
                   log=+2
                  }
              }
              if(log ==2){
                  alert('로그인에 성공하셨습니다')
                  alert(taskList.userInfo +'님 반갑습니다')
              }else{
                  alert('로그인에 실패하셨습니다')
                  alert('회원가입 후 이용해주세요')
              }
          
            
   
      
           }}
      

           function dataC() {
             task=[]
             taskP=[]
           }
         
  


//      if(taskList.pass==taskP){
//        alert('로그인에 성공하셨습니다.')
//    alert(taskList.userInfo+'님 반갑습니다.')
// }
// }
//      else
    
//      {
//          alert('로그인에 실패하셨습니다.')
//          alert('회원가입 후 이용해주세요.')
//      }

// }
//로그인            

