var qs = new Array();
var am = 0;
var amp = 0;
var qa = 1;
var qb = 2;
var keyi = 0;
var rs = 0;

function print(){
	var txt = "";
	var tmp = "";
	qs = en[$('book').value];
	$('score').innerHTML = "";
	am = 0;
	amp = 0;
	keyi = 0;
	$('amount').innerHTML = $('amount').innerHTML = "答對題數：" + am + "，答錯題數：" + amp + "，總題數：" + qs.length;
	if(rs==0){
		for(i=0;i<=qs.length-1;i++){
			rnd = Math.floor(Math.random()*(qs.length-1));
			tmp = qs[i];
			qs[i] = qs[rnd];
			qs[rnd] = tmp;
		}
	}
	txt = "<table>";
	for(i=0;i<=qs.length-1;i++){
		rand(i);
		txt += "<tr id=\"qs_" + i + "\">";
		txt += "<td>" + (i+1) + "</td>";
		txt += "<td>" + qs[i][qa] + "</td>";
		txt += "<td><a href=\"javascript:answer(" + i + ",1);\">(A) " + qs[i][5] + "</a></td>";
		txt += "<td><a href=\"javascript:answer(" + i + ",2);\">(B) " + qs[i][6] + "</a></td>";
		txt += "<td><a href=\"javascript:answer(" + i + ",3);\">(C) " + qs[i][7] + "</a></td>";
		txt += "<td><a href=\"javascript:answer(" + i + ",4);\">(D) " + qs[i][8] + "</a></td>";
		txt += "</tr>";
	}
	txt += "</table>";
	$('print').innerHTML = txt;
}

function rand(i){
	for(j=5;j<=8;j++){
		x = Math.floor(Math.random()*(en.length));
		y = Math.floor(Math.random()*(en[x].length));
		qs[i][j]=en[x][y][qb];
	}
	z = Math.floor(Math.random()*4+5);
	qs[i][z] = qs[i][qb];
	qs[i][9] = z-4;
}

function answer(a,b){
	if((am+amp)<qs.length){
		//$('qs_' + (a+1)).style.background = "#ffeeee";
		$('qs_' + a).style.display = "none";
		if(qs[a][b+4]==qs[a][qb]){
			$('amount').innerHTML = "答對題數：" + (++am) + "，答錯題數：" + amp + "，總題數：" + qs.length;
			qs[a][10] = 0;
		}
		else{
			$('amount').innerHTML = "答對題數：" + am + "，答錯題數：" + (++amp) + "，總題數：" + qs.length;
			qs[a][10] = 1;
		}
	}
	if((am+amp)==qs.length){
		keyi=0;
		//alert('妳已全部作答完了！');
		txt = "<table>";
		for(i=0;i<=qs.length-1;i++){
			txt += "<tr id=\"qs_" + i + "\">";
			txt += "<td>" + (i+1) + "</td>";
			txt += "<td>" + qs[i][qa] + "</td>";
			txt += "<td id=\"qs_" + i + "_1\">(A) " + qs[i][5] + "</td>";
			txt += "<td id=\"qs_" + i + "_2\">(B) " + qs[i][6] + "</td>";
			txt += "<td id=\"qs_" + i + "_3\">(C) " + qs[i][7] + "</td>";
			txt += "<td id=\"qs_" + i + "_4\">(D) " + qs[i][8] + "</td>";
			txt += "</tr id=\"qs_" + i + "\">";
		}
		txt += "</table>";
		$('print').innerHTML = txt;
		for(i=0;i<=qs.length-1;i++){
			txt += "</tr>";
			if(qs[i][10]==0){
				$('qs_' + i).style.background = "#ffffff";
			}
			else{
				$('qs_' + i).style.background = "#ffeeee";
			}
			for(j=1;j<=4;j++){
				if(j==qs[i][9]){
					$('qs_' + i + "_" + j).style.color = "#ff0000";
				}
			}
		}
		$('score').innerHTML = "　分數：<span style=\"color:red;\">" + ((am/qs.length)*100).toFixed(0) + "</span>"
	}
}

function  mode(){
	if(qa==1){
		qa=2;
		qb=1;
	}
	else{
		qa=1;
		qb=2;
	}
	print();
}

function keyin(k){
	//alert(k);
	if(k==97){answer(keyi,1);keyi++;}
	if(k==98){answer(keyi,2);keyi++;}
	if(k==99){answer(keyi,3);keyi++;}
	if(k==100){answer(keyi,4);keyi++;}
	if(k==83){answer(keyi,qs[keyi][9]);keyi++;}
}