var xp = 1;
var level = 1;
var gold = 0;
var vida = 10;
var nome = "PlayerName";
var nascimento = "";

function init(){
    Xp.Display();
    nome = window.location.href.split('?nome=')[1];
    nome = nome.split('&')[0];   
    
    nascimento = window.location.href.split('&nascimento=')[1];
    nascimento = nascimento.split('&')[0];
    nascimento = nascimento.split('-')[0];
    if(2019 - nascimento < 12){
        window.location.href = "index.html?menorIdade";
    }
    
    document.getElementById("nome").innerText = nome;
    setInterval(() => {
        Gold.add(1);
    }, 1000);
    setInterval(() => {
        Xp.Add(1);
    }, 10000);
}

var Gold = {
    add : function (quant){
        gold += quant;
        document.getElementById("gold").innerText = gold + "g";
    },
    remove : function (quant){
        gold -= quant;
        document.getElementById("gold").innerText = gold + "g";
    }
}

var Vida ={
    add : function(n){
        vida += n;
        Vida.display();
    },
    rem : function (n){
        vida -= n;
        Vida.display();
        if(vida <= 0)
            dead();
    },
    display : function (){
        var lvComp = document.getElementById("vida");
        lvComp.innerText = "";
        for(var i = 1; i < 10; i++){
            if(vida > i)
                lvComp.innerText += "█";
            else
                lvComp.innerText += "▒";
        }
    }
}

function dead(){
    alert("Você morreu!");
    window.location.href = "./index.html";
}


var Xp = {
    Add : function (quant){
        xp += quant;
        if(xp >= 11){
            level++;
            xp -= 10;
            Atributos.addPoints(1);
        }
        Xp.Display();
    },
    Remove : function (quant){
        xp -= quant;
        if(xp < 0){
            level--;
            xp += 11;
        }
        Xp.Display();
    },
    Display : function (){
        var lvComp = document.getElementById("lv");
        var xpComp = document.getElementById("xp");
        xpComp.innerText = "";
        lvComp.innerText = level;
        for(var i = 1; i < 10; i++){
            if(xp > i)
                xpComp.innerText += "█";
            else
                xpComp.innerText += "▒";
        }
    }
}

var Tab = {
    open : function (t){
        if(t == 0){
            f("#tab1").style.display = "block";
            f("#tab2").style.display = "none";
            f("#btn_tab1").className = "active";
            f("#btn_tab2").className = "";
        }else if(t == 1){
            f("#tab1").style.display = "none";
            f("#tab2").style.display = "block";
            f("#btn_tab1").className = "";
            f("#btn_tab2").className = "active";
        }
    }
}

var Inventory = {
    slots : slots = [],
    itens : itens = [
        "c|=><br>Espada Fajuta"
    ],
    add : function (id){
        if(Inventory.slots.length < 9){
            Inventory.slots.push(Inventory.itens[id]);
            Inventory.show();
        }
    },
    show : function (){
        for(var i = 0; i < Inventory.slots.length; i++){
            f("#slot" + i).innerHTML = Inventory.slots[i];
        }
    }
}