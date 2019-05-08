var xp = 1;
var level = 1;
var gold = 0;
var nome = "PlayerName";
var atribPoints = 0;

function init(){
    Xp.Display();
    document.getElementById("nome").innerText = nome;
    document.getElementById("atribsPoints").innerText = atribPoints;
    setInterval(() => {
        //Gold.add(1);
    }, 1000);
    setInterval(() => {
        //Xp.Add(1);
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

var Atributos = {
    ata : ata = 0,
    def : def = 0,
    vel : vel = 0,
    sor : sor = 0,
    int : int = 0,
    addPoints : function(quant){
        atribPoints += quant;
        document.getElementById("atribsPoints").innerText = atribPoints;
        document.getElementById("ata").innerHTML = Atributos.ata + "<small>+</small>";
        document.getElementById("def").innerHTML = Atributos.def + "<small>+</small>";
        document.getElementById("vel").innerHTML = Atributos.vel + "<small>+</small>";
        document.getElementById("sor").innerHTML = Atributos.sor + "<small>+</small>";
        document.getElementById("int").innerHTML = Atributos.int + "<small>+</small>";
    },
    addAtribs : function (id){
        if(atribPoints > 0){
            if(id == 0)
                Atributos.ata++;
            else if(id == 1)
                Atributos.def++;
            else if(id == 2)
                Atributos.vel++;
            else if(id == 3)
                Atributos.sor++;
            else if(id == 4)
                Atributos.int++;
        
            atribPoints--;
            document.getElementById("atribsPoints").innerText = atribPoints;
            if(atribPoints == 0){
                document.getElementById("ata").innerHTML = Atributos.ata;
                document.getElementById("def").innerHTML = Atributos.def;
                document.getElementById("vel").innerHTML = Atributos.vel;
                document.getElementById("sor").innerHTML = Atributos.sor;
                document.getElementById("int").innerHTML = Atributos.int;
            }else{
                document.getElementById("ata").innerHTML = Atributos.ata + "<small>+</small>";
                document.getElementById("def").innerHTML = Atributos.def + "<small>+</small>";
                document.getElementById("vel").innerHTML = Atributos.vel + "<small>+</small>";
                document.getElementById("sor").innerHTML = Atributos.sor + "<small>+</small>";
                document.getElementById("int").innerHTML = Atributos.int + "<small>+</small>";
            }
        }
    }
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

