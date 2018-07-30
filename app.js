web3.eth.defaultAccount = web3.eth.accounts[0];
var emp = web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "ques",
				"type": "string"
			},
			{
				"name": "opt1",
				"type": "string"
			},
			{
				"name": "opt2",
				"type": "string"
			},
			{
				"name": "opt3",
				"type": "string"
			},
			{
				"name": "opt4",
				"type": "string"
			},
			{
				"name": "ans",
				"type": "uint256"
			}
		],
		"name": "add",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "name",
				"type": "string"
			}
		],
		"name": "enter_detail",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "aaa",
				"type": "uint256[]"
			},
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "get_array",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "admin",
		"outputs": [
			{
				"name": "sno",
				"type": "uint256"
			},
			{
				"name": "ques",
				"type": "string"
			},
			{
				"name": "opt1",
				"type": "string"
			},
			{
				"name": "opt2",
				"type": "string"
			},
			{
				"name": "opt3",
				"type": "string"
			},
			{
				"name": "opt4",
				"type": "string"
			},
			{
				"name": "ans",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "answers",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "arr1",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "arr2",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "array_length",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get_answe",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get_data",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "get_data1",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "i",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "showques",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userdetail",
		"outputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "in_time",
				"type": "uint256"
			},
			{
				"name": "mark",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);
var Contract_address = emp.at('0x20884c70186baa9c625246b4d6b869f7a311984b');
if(!web3.isConnected()) {


console.log("Ok");

} else {
console.log("no");
}
web3.version.getNetwork((err, netId) => {
	switch (netId) {
	  case "1":
		console.log('This is mainnet')
		break
	  case "2":
		console.log('This is the deprecated Morden test network.')
		break
	  case "3":
		console.log('This is the ropsten test network.')
		break
	  case "4":
		console.log('This is the Rinkeby test network.')
		break
	  case "42":
		console.log('This is the Kovan test network.')
		break
	  default:
		console.log('This is an unknown network.')
	}
})




function userRegisteration(){
document.getElementById('userld').style.display = 'block';
	// var element = document.getElementById("br");
	// element.classList.add("blur");;

	var aa=document.getElementById("u_name").value;
	var bb=document.getElementById("u_id").value;
	document.getElementById("u_name").disabled = true;
	document.getElementById("u_id").disabled=true;
	document.getElementById("st").disabled=true;
	document.getElementById("Registerid").disabled=true;
	document.getElementById("reg").disabled=true;

	Contract_address.enter_detail(aa,bb,function(error,result){
			if(!error){
				// alert("success");
				hash(result);
			}
			else{
				console.error(error);

				 document.getElementById('userld').style.display = 'none';
				 document.getElementById("u_name").disabled = false;
				 document.getElementById("u_id").disabled=false;
				 document.getElementById("u_name").value = "";
				 document.getElementById("u_id").value="";
				 document.getElementById("st").disabled=false;
				 document.getElementById("Registerid").disabled=false;
				
				 document.getElementById("reg").disabled=false; // var element = document.getElementById("br");
				// element.classList.add("blur");
			}
		});
		
		
	}


var aaa=0;
function add_question(){
	
	document.getElementById('ld').style.display = 'block';
	var element = document.getElementById("br");
	element.classList.add("blur");
	//$("#fm").hide();
	// document.getElementById('bl').style.display = 'block';

	var b=document.getElementById("inputlg").value;
	var c=document.getElementById("inputsm").value;
	var d=document.getElementById("input2").value;
	var e=document.getElementById("input3").value;
	var f=document.getElementById("input4").value;
	var g=document.getElementById("input5").value;

document.getElementById("inputlg").disabled = true; 
document.getElementById("inputsm").disabled = true; 
document.getElementById("input2").disabled = true; 
document.getElementById("input3").disabled = true; 
document.getElementById("input4").disabled = true; 
document.getElementById("input5").disabled = true; 
document.getElementById("setbtn").disabled = true; 

return Contract_address.add(b,c,d,e,f,g,function(error,result){

if(!error){
	console.log(result);
	 hash(result);
}
else{
	console.log(error);
	// decrementValue();
	document.getElementById('ld').style.display = 'none';
	var element = document.getElementById("br");
	element.classList.remove("blur");

	document.getElementById("inputlg").disabled = false; 
	document.getElementById("inputsm").disabled = false; 
	document.getElementById("input2").disabled = false; 
	document.getElementById("input3").disabled = false; 
	document.getElementById("input4").disabled = false; 
	document.getElementById("input5").disabled = false; 
	document.getElementById("setbtn").disabled = false;
	document.getElementById("setqst").disabled = false;
	
	$("#inputlg").val('');
	$("#inputsm").val('');
	$("#input2").val('');
	$("#input3").val('');
	$("#input4").val('');
	$("#input5").val('');
	//$("#fm").show();
	// document.getElementById('bl').style.display = 'none';
}
});
}

// 

function hash(result){

	// incrementValue();	//it will be place some where *****************************88
	console.log("invoke in hash function")
    
    console.log(result);
   var setint =  setInterval(check,100);

    function check(){
    
      this.web3.eth.getTransactionReceipt(result,function(err,result){
        if(result !== null)
        if(result.status== 0x1 || result.status=="success")
        {
			
		  document.getElementById('ld').style.display = 'none';
		  var element = document.getElementById("br");
	element.classList.remove("blur");
	document.getElementById('userld').style.display = 'none';
	document.getElementById('finishtestbtn').style.display = 'none';
	document.getElementById("u_name").disabled = false;
	document.getElementById("u_id").disabled=false;
		  document.getElementById("inputlg").disabled = false; 
		  document.getElementById("inputsm").disabled = false; 
		  document.getElementById("input2").disabled = false; 
		  document.getElementById("input3").disabled = false; 
		  document.getElementById("input4").disabled = false; 
		  document.getElementById("input5").disabled = false; 
		  document.getElementById("setbtn").disabled = false;
		  document.getElementById("setqst").disabled = false;
		  document.getElementById("st").disabled=false;
		  document.getElementById("Registerid").disabled=false;
		  document.getElementById("reg").disabled=true;

		  $("#inputlg").val('');
		  $("#inputsm").val('');
		  $("#input2").val('');
		  $("#input3").val('');
		  $("#input4").val('');
		  $("#input5").val('');
		  $("#u_name").val('');
		  $("#u_id").val('');
		  $("#userregpage").hide();
		  $("#qstfromdb").hide();
		  
        
		  clearInterval(setint);

          
        }
        else{
			 
		  document.getElementById('ld').style.display = 'none';
		  var element = document.getElementById("br");
	element.classList.remove("blur");
	document.getElementById('userld').style.display = 'none';
	document.getElementById("u_name").disabled = false;
	document.getElementById("u_id").disabled=false;
		  document.getElementById("inputlg").disabled = false; 
		  document.getElementById("inputsm").disabled = false; 
		  document.getElementById("input2").disabled = false; 
		  document.getElementById("input3").disabled = false; 
		  document.getElementById("input4").disabled = false; 
		  document.getElementById("input5").disabled = false; 
		  document.getElementById("setbtn").disabled = false;
		  document.getElementById("setqst").disabled = false;
		  document.getElementById("st").disabled=false;
		  document.getElementById("Registerid").disabled=false;
		  document.getElementById("reg").disabled=false;
		  document.getElementById('finishtestbtn').style.display = 'none';

		  $("#inputlg").val('');
		  $("#inputsm").val('');
		  $("#input2").val('');
		  $("#input3").val('');
		  $("#input4").val('');
		  $("#input5").val('');
		  $("#u_name").val('');
		  $("#u_id").val('');
		  $("#userregpage").show();
		  $("#qstfromdb").show();

		   clearInterval(setint);

		 
          
        }
      })
    }
  }


// 

var aa=1;

	function startquiz(){
  
		Contract_address.admin(aaa,function(error,result){
		 aaa++;
		 aa++;
		  console.log(aaa)
		  
	  if(!error){
		  if(result)
		   document.getElementById("que").value= aa-1+". "+result[1];
			document.getElementById("id1").value=result[2];
		   document.getElementById("id2").value=result[3];
		   document.getElementById("id3").value=result[4];
		   document.getElementById("id4").value=result[5];
			
		  }
		 else{
			alert("not a correct Id");
			}
			
	  });
	  }




//other function 

$(document).ready(function(){
    $(".btn2").click(function(){
        $("#ustable").show();
        $("#ram").hide();
    });
    $(".btn1").click(function(){
        $("#ram").show();
        $("#ustable").hide();
    });
	
	
	$("#setqst").click(function(){
		$("#listofinvester").hide();
	});
    $("#reg").click(function(){
        $("#register").show();
        $("#startquiz").hide();
    });

    $("#st").click(function(){
        $("#startquiz").show();
        $("#register").hide();
        
	});
	 
	 $("#userdet").click(function(){
		$("#listofinvester").show();
	 });

	 $("#usermenu").click(function(){
		$("#showpanel").hide();
		$("#login").hide();
		$("#ustable").hide();
		$("#listofinvester").hide();
		$("#ram").hide();
		$("#pwd").val("");
	 });

	$("#logoutbtn").click(function(){
		$("#showpanel").hide();
		$("#login").show();
		$("#ustable").hide();
		$("#listofinvester").hide();
		$("#ram").hide();
	});

	$("#homemenu").click(function(){
	$("#showpanel").hide();
	$("#login").show();
	});

	$("#cancelshowoption").click(function(){

		// $("#uid").val('');
		$("#pwd").val('');
	});
   
});
function validatesetquetion()
{
	// var num=document.getElementById("number").value;
	var q1=document.getElementById("inputlg").value;
	var q2=document.getElementById("inputsm").value;
	var q3=document.getElementById("input2").value;
	var q4=document.getElementById("input3").value;
	var q5=document.getElementById("input4").value;
	var q6=document.getElementById("input5").value;

	if(q1 =="" ||q1==" ")
	{
		document.getElementById("inputlg").value ="";
		alert("please provide question")		;
		return;
	}
	if(q2 =="" ||q2==" ")
	{
		document.getElementById("inputsm").value ="";
		alert("please provide option 1")		;
		return;
	}
	if(q3 =="" ||q3==" ")
	{
		document.getElementById("input2").value ="";
		alert("please provide option 2")		;
		return;
	}
	if(q4 =="" ||q4==" ")
	{
		document.getElementById("input3").value ="";
		alert("please provide option 3")		;
		return;
	}
	if(q5 =="" ||q5==" ")
	{
		document.getElementById("input4").value ="";
		alert("please provide option 4")		;
		return;
	}
	if(q6 =="" ||q6==" ")
	{
		document.getElementById("input5").value ="";
		alert("please set the key")		;
		return;
	}
	if( q1!=""||q1!=" " &&  q2!=""||q2!=" " &&  q3!=""||q3!=" " &&  q4!=""||q4!=" " &&  q5!=""||q5!=" " )
	{
		//incrementValue();
		add_question();
	}
	

}
function lgin()
{
	var b = document.getElementById('pwd').value;
	if(b !="" && b!=" "&& b=="123")
	{
		$("#showpanel").show();
		$("#login").hide();
		document.getElementById('pwd').value= "";
	}
	else
	{
		document.getElementById('pwd').value= "";	
	}

}


//keypress event
function ValidateAlpha(evt)
{
	var keyCode = (evt.which) ? evt.which : evt.keyCode
	if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32)
	 
	return false;
		return true;
}



function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function isNumber(evt) {
	

	if(evt["key"]<=4 && evt["key"] >=1)
	{
		console.log(evt)
		document.getElementById("input5").value= (evt["key"]).toString();
		
	}
	else{
		document.getElementById("input5").value="invalid";
	}
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		
        return false;
    }
	return true;
}

function countd(){
var sec = 1800;
var time = setInterval(myTimer, 1000);

function myTimer() {

    document.getElementById('timer').innerHTML = (sec.toString()/60).toFixed(2) + "Min left";
     document.getElementById("st").disabled = true; 
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!! :(");
    }
}
}

// desing
$(document).ready(function() {
	$("#st").hide();      


});

$(document).ready(function() {

	 document.getElementById("Registerid").disabled = true;
});

function funct() {

var a = document.getElementById("u_name").value;

var b = document.getElementById("u_id").value;

  $(document).ready(function() {

if(a!=""&&b!="")

	document.getElementById("Registerid").disabled = false;

});
}

function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "";
    
    if(h < 12){
      
        session = "AM";
    }
    
    if(h >= 12){

         session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();




             function fun()
{
                   var x=document.forms["butt"]["u_name"].value;

                      if(x=="")
{
                     
                  alert("Plz check the field User_id");
                  $("#st").hide();

}
     
 var y=document.forms["butt"]["u_id"].value;
                      if(y=="")
{

                  alert("Plz check the field User_Name");
			$("#st").hide();

}
                        
                    $(document).ready(function() {
   
               
                             
                          if(x!="" && y!="" )

                         $("#st").show();
                             
});
                                 

}




$(document).ready(function() {
	$("#st").hide();      


});

function usertable() {

	$("#tabledata").html('');
	$("#tabledata").append('<table class="table table-striped"><thead><tr><th>USER ID</th><th>USER Name</th><th>MARK</th><th>TIME STAMP</tr></thead><tbody id="Ptable10"></tbody></table>');
	


	Contract_address.array_length(function(error,result){
		console.log(result.c[0]);
	
		for(i=0;i<result.c[0];i++)
		{ 
		Contract_address.get_data1(i,function(error,result){
			Contract_address.userdetail(result,function(error,result){
					// alert(result)
				var myDate = new Date( (result[2].toNumber()) *1000);
				var a=(myDate.toLocaleString());
				
	
			
			$("#Ptable10").append('<tr><td>'+ result[0] +'</td><td>'+ result[1]+'</td><td>'+ result[3] +'</td><td>'+ a.split(',')+'</td></tr>')
		});
		});
		}
		
		});

	
  
 

 }
 
function checkresult(){

Contract_address.check_result(function(error,result){
		if(!error){
			alert(result);
		}
		else{
			console.error(error);
		}
	});
	
	
}
function clrdata(){
	console.log(b);
	b.length=0;
	console.log(b);
}


function Unix_timestamp(t)
{
var dt = new Date(t*1000);
var hr = dt.getHours();
var m = "0" + dt.getMinutes();
var s = "0" + dt.getSeconds();
return console.log(hr+ ':' + m.substr(-2) + ':' + s.substr(-2)); 
 
}
function toggleButton(ref,bttnID){
	document.getElementById(bttnID).disabled= ((ref.value !== ref.defaultValue) ? false : true);
  }
  