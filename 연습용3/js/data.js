let newId=document.getElementById("newId")
let newPw=document.getElementById("newPw")
let newCh=document.getElementById("newCh")
const task=[]
const taskP=[]

newCh.addEventListener('click',newPeople)

function newPeople(){
    console.log('버튼연결됨')
    let newValue=newId.value
    newList={
        UserId:newValue,
        newPa:newPw.value}
    
        task.push(newList.UserId)
        taskP.push(newList.newPa)

  
        alert(newList.UserId+'님 회원가입에 성공하셨습니다.')
        alert('로그인 해주세요!')
        }
     
            //회원가입




let login=document.getElementById("login")
let password=document.getElementById("password")
let logButton=document.getElementById("log_go")

let logBox =document.getElementById("log")



logButton.addEventListener('click', move)



function move(){
 let passValue=password.value
    taskList={
        userInfo:login.value,
        pass:passValue,}

        console.log(task)
        console.log(taskP)
         //task.push(taskList.userInfo)
        // taskP.push(passValue)   
  


  if(taskList.userInfo==task){
     if(taskList.pass==taskP){
       alert('로그인에 성공하셨습니다.')
   alert(taskList.userInfo+'님 반갑습니다.')}
 }
     else
    
     {
         alert('로그인에 실패하셨습니다.')
         alert('회원가입 후 이용해주세요.')
     }

}
//로그인            

