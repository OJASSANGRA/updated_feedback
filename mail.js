const firebaseConfig = {
  apiKey: "AIzaSyBjXJ1AB0p16A6rW-MEnuSeKfQtW9_cNdY",
  authDomain: "feedbackform-7972a.firebaseapp.com",
  databaseURL: "https://feedbackform-7972a-default-rtdb.firebaseio.com",
  projectId: "feedbackform-7972a",
  storageBucket: "feedbackform-7972a.appspot.com",
  messagingSenderId: "851265035494",
  appId: "1:851265035494:web:4d28f7f43068fb5118ef27"
};
  firebase.initializeApp(firebaseConfig);
  


  var feedbackFormDB = firebase.database().ref("feedbackFrom");

  document.getElementById("feedbackForm").addEventListener("submit",submitForm);

  function submitForm(e){

    e.preventDefault();

    var name=getElementVal("name");
    var number=getElementVal("number");
    var emailid=getElementVal("emailid");
    var seatno=getElementVal("seatno");
    var msgContent=getElementVal("msgContent");
    var topic=getElementVal("topic");
    var gotanswers=document.querySelector('input[name="1"]:checked').value;
    var understood=document.querySelector('input[name="2"]:checked').value;
    var experience=document.querySelector('input[name="3"]:checked').value;

     saveMessages(name,number,emailid,seatno,msgContent,topic,gotanswers,understood,experience);

    document.querySelector(".alert").style.display = "block";

    setTimeout(()=> {

      document.querySelector(".alert").style.display = "none";
    },3000);

     document.getElementById("feedbackForm").reset();
  }


  const saveMessages = (name,number,emailid,seatno,msgContent,topic,gotanswers,understood,experience) =>{
      
     var newFeedbackForm = feedbackFormDB.push();

     newFeedbackForm.set({
                 name : name,
                 number : number,
                 emailid : emailid,
                 seatno : seatno,
                 msgContent : msgContent,
                 topic : topic,
                 gotanswers : gotanswers,
                 understood : understood,
                 experience : experience,


     });

  };




  const getElementVal = (id) =>{

        return document.getElementById(id).value;

  };

