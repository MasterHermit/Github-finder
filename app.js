const searchUser=document.getElementById("searchUser");
const github=new Github;
const ui=new UI;
searchUser.addEventListener("keyup",e=>{
    const userText=e.target.value;
    if(userText!==""){
        github.getUser(userText)
        .then(data=>{
            if(data.profile.message==="Not Found"){
                //show alert
                ui.showAlert("Not Found","alert alert-danger");

            }else{
                ui.claerAlert();
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);

            }
        })
        .catch(err=>{console.log(err)});
    }else{
        //clear profile
        ui.clearProfile();
    }
});